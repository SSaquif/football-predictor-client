import { Goal, Booking, MatchEvent } from "./MatchEvents";

// TODO: This interface could potentially be reusable across multiple competitions
interface Match {
  date?: Date;
  team1: string; // home team
  team2: string;
  team1Goals: number; // TODO: look into type for positive number
  team2Goals: number;
  winner?: string; // Probably wont be needed, for exceptional cases
  potentialTeam1?: string; // useful for knockout tournaments
  potentialTeam2?: string;
  stafium?: string;
  refree?: string;
  goals?: Goal[];
  bookings?: Booking[];
  otherEvents?: MatchEvent[];
  extraInfo?: Object;
}

export default Match;
