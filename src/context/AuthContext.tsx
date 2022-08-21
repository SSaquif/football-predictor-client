import React, { createContext, useEffect, useState, useContext } from "react";
import {
  User as FirebaseUser,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import firebaseApp from "../firebase/firebase-config";

interface AuthContextData {
  user: FirebaseUser | null;
  setUser: React.Dispatch<React.SetStateAction<FirebaseUser | null>>;
  authLoading: boolean;
  setAuthLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext({ user: null } as AuthContextData);

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  // Get Existing User or Create New User
  const getOrCreateUser = async () => {
    const db = getFirestore(firebaseApp);
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("uid", "==", user?.uid));
      const snapshot = await getDocs(q);

      // new user
      if (snapshot.empty && user) {
        const { email, phoneNumber, photoURL, uid } = user;
        await addDoc(usersRef, { email, phoneNumber, photoURL, uid });
      }

      setUser(user);
    } catch (err: any) {
      const errorLogsRef = collection(db, "errorLogs");
      await addDoc(errorLogsRef, {
        errorMsg: err.message,
        timestamp: new Date(),
        event: "User creation error",
        userUid: user?.uid,
        userEmail: user?.email,
      });
      setUser(null);
      // TODO: Make toaster cancelable, lessen duration
      toast.error("Error creating user", { duration: 5000 });
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    // TODO: cleanup maybe with AbortController
    if (user) {
      setAuthLoading(true);
      getOrCreateUser();
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, authLoading, setAuthLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/*
 * Following components require AuthContext
 */

export function SignInButton() {
  const { setUser } = useContext(AuthContext);
  const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebaseApp), new GoogleAuthProvider())
      .then((result) => {
        const { user } = result;
        setUser(user);
      })
      .catch((err) => {
        const db = getFirestore(firebaseApp);
        const errorLogsRef = collection(db, "errorLogs");
        addDoc(errorLogsRef, {
          errorMsg: err.message,
          code: err.code,
          timestamp: new Date(),
          event: "Google sign in failure",
        });
        toast.error("Google Sign In Failure, please try again in a Moment", {
          duration: 5000,
        });
      });
  };

  return <button onClick={signInWithGoogle}>Sign In</button>;
}

export function SignOutButton() {
  const { setUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(getAuth(firebaseApp))
      .then(() => {
        console.log("signed out");
        setUser(null);
      })
      .catch((err) => {
        const db = getFirestore(firebaseApp);
        const errorLogsRef = collection(db, "errorLogs");
        addDoc(errorLogsRef, {
          errorMsg: err.message,
          code: err.code,
          timestamp: new Date(),
          event: "Google sign out failure",
        });
        toast.error("Google Sign Out Failure, please try again in a Moment", {
          duration: 5000,
        });
      });
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
}
