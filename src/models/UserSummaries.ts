// Checkout https://firebase.google.com/docs/reference/node/firebase.firestore.FirestoreDataConverter
// https://medium.com/swlh/using-firestore-with-typescript-65bd2a602945
import { User as FirebaseUser } from "firebase/auth";

type FirebaseProps = Pick<
  FirebaseUser,
  "email" | "phoneNumber" | "photoURL" | "uid"
>;

type UserSummaries = FirebaseProps & { isAdmin: boolean; competitions?: any[] };

export default UserSummaries;
