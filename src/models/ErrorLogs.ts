import { User as FirebaseUser } from "firebase/auth";

interface ErrorLogs {
  errorMsg: string;
  event: string;
  timestamp: Date;
  code?: any;
  userUid?: FirebaseUser["uid"];
  userEmail?: FirebaseUser["email"];
}

export default ErrorLogs;
