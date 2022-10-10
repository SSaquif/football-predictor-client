// name is the unique id
interface WC2022Team {
  name:
    | "Australia"
    | "Argentina"
    | "Belgium"
    | "Brazil"
    | "Canada"
    | "Cameroon"
    | "Costa Rica"
    | "Croatia"
    | "Denmark"
    | "Ecuador"
    | "England"
    | "France"
    | "Germany"
    | "Ghana"
    | "Iran"
    | "Japan"
    | "Mexico"
    | "Morocco"
    | "Netherlands"
    | "Poland"
    | "Portugal"
    | "Qatar"
    | "Saudi Arabia"
    | "Senegal"
    | "Serbia"
    | "South Korea"
    | "Spain"
    | "Switzerland"
    | "Tunisia"
    | "United States"
    | "Uruguay"
    | "Wales";
  isHost: Boolean;
  code: string; //make enum
  group: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
  flag: string; // get url for storage bucket
  finalStanding:
    | "4th Group Stage"
    | "3rd Group Stage"
    | "Round of 16"
    | "Quarter Final"
    | "4th Place"
    | "3rd Place"
    | "Runner-Ups"
    | "Champions"
    | "TBA"; // If still playing
  groupStageGoalsFor: number;
  groupStageGoalsAgainst: number;
  groupStageMatchesPlayed: 0 | 1 | 2 | 3;
  groupStageWins: 0 | 1 | 2 | 3;
  groupStageLoses: 0 | 1 | 2 | 3;
  groupStageDraws: 0 | 1 | 2 | 3;
  isGroupWinner?: boolean;
  isGroupRunnerUp?: boolean;
  roundOf16GoalsFor?: number;
  roundOf16GoalsAgainst?: number;
  qfGoalsFor?: number;
  qfGoalsAgainst?: number;
  sfGoalsFor?: number;
  sfGoalsAgainst?: number;
  thirdPlacePlayoffGoalsFor?: number;
  thirdPlacePlayoffGoalsAgainst?: number;
  finalGoalsFor?: number;
  finalGoalsAgainst?: number;
}

export default WC2022Team;
