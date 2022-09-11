import { User as FirebaseUser } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

export interface User {
  firebaseData: FirebaseUser;
  appData: DocumentData;
}
