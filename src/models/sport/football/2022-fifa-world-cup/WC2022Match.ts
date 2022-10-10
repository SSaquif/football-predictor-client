import Match from "../common/Match";
import WC2022Team from "./WC2022Team";

// TODO: This interface could potentially be reusable across multiple competitions
export type WC2022Match = Match & {
  matchNumber: number;
  round:
    | "Group Stage"
    | "Round of 16"
    | "Quarter Final"
    | "Semi Final"
    | "Third Place Playoff"
    | "Final";
  team1: WC2022Team["name"] | "TBA"; // TODO: see if possible to exclude team2 with TS
  team2: WC2022Team["name"] | "TBA"; // TODO: same as above
  stadium:
    | "Al Bayt Stadium"
    | "Khalifa International Stadium"
    | "Al Thumama Stadium"
    | "Ahmad Bin Ali Stadium"
    | "Lusail Stadium"
    | "Stadium 974"
    | "Education City Stadium"
    | "Al Janoub Stadium";
};

export interface WC2022GroupMatch extends WC2022Match {
  round: "Group Stage";
  group: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
}

export interface WC2022R16Match extends WC2022Match {
  round: "Round of 16";
  // TODO: learn to type range
  matchNumber: 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56;
  // TODO: learn better way to type similar stuff (maybe Regex)
  potentialTeam1: "1A" | "1B" | "1C" | "1D" | "1E" | "1F" | "1G" | "1H";
  potentialTeam2: "2A" | "2B" | "2C" | "2D" | "2E" | "2F" | "2G" | "2H";
}

export interface WC2022QFMatch extends WC2022Match {
  round: "Quarter Final";
  matchNumber: 57 | 58 | 59 | 60;
  potentialTeam1: "W49" | "W51" | "W53" | "W55";
  potentialTeam2: "W50" | "W52" | "W54" | "W56";
}

export interface WC2022SFMatch extends WC2022Match {
  round: "Semi Final";
  matchNumber: 61 | 62;
  potentialTeam1: "W57" | "W59";
  potentialTeam2: "W58" | "W60";
}

export interface WC2022ThirdPlaceMatch extends WC2022Match {
  round: "Third Place Playoff";
  matchNumber: 63;
  potentialTeam1: "L61";
  potentialTeam2: "L62";
}

export interface WC2022FinalMatch extends WC2022Match {
  round: "Final";
  matchNumber: 64;
  potentialTeam1: "W61";
  potentialTeam2: "W62";
}
