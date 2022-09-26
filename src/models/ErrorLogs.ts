import { User as FirebaseUser } from "firebase/auth";

export type ErrorEvent =
  | "User Creation Error"
  | "Google Sign In Failure"
  | "Google Sign Out Failure";

interface ErrorLogs {
  errorMsg: string;
  event: ErrorEvent;
  timestamp: Date;
  code?: any; // any is fine
  userUid?: FirebaseUser["uid"];
  userEmail?: FirebaseUser["email"];
}

export default ErrorLogs;
