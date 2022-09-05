// name is the unique id

export interface WC2022Teams {
  name:
    | "Australia"
    | "Argentina"
    | "Belgium"
    | "Brazil"
    | "Canada"
    | "Cameroon"
    | "Costa Rica"
    | "Croatia"
    | "Denamark"
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
  elimination:
    | "4th Group Stage" // 1 point
    | "3rd Group Stage" // 2 point
    | "Round of 16" // 6 points
    | "Round of 8" // 8 ponts
    | "4th Place" // 10 points
    | "3rd Place" //  12points
    | "Runner-Ups" // 15 points
    | "Champions" // guessing correct champions - 25 points
    | null;
  //   groupStageGoalsScored: number;
  //   groupStageGoalsAgainst: number;
  //   groupStageMatchesPlayed: 0 | 1 | 2 | 3;
  //   groupStageWins: 0 | 1 | 2 | 3;
  //   groupStageLoses: 0 | 1 | 2 | 3;
  //   groupStageDraws: 0 | 1 | 2 | 3;
}

// Other points
// Group stage winner 4 points
// Group Stage Runner up 3 points
// Perfect Score prediction - 5 points
// Correct outcome prediction - 3 points
// ET prediction - 3 points, -1 (if predicted but didn't happen)

const teams: WC2022Teams[] = [
  {
    name: "Qatar",
    isHost: true,
    code: "",
    group: "A",
    flag: "", //replace with url, use storage?
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Senegal",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Netherlands",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "England",
    isHost: false,
    code: "ENG",
    group: "B",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Iran",
    isHost: false,
    code: "",
    group: "B",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "United States",
    isHost: false,
    code: "USA",
    group: "B",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Wales",
    isHost: false,
    code: "",
    group: "B",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Mexico",
    isHost: false,
    code: "",
    group: "C",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Poland",
    isHost: false,
    code: "",
    group: "C",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Argentina",
    isHost: false,
    code: "",
    group: "C",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Saudi Arabia",
    isHost: false,
    code: "",
    group: "C",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "France",
    isHost: false,
    code: "",
    group: "D",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Australia",
    isHost: false,
    code: "",
    group: "D",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
  {
    name: "Ecuador",
    isHost: false,
    code: "",
    group: "A",
    flag: "",
    elimination: null, // eventually the round of elimination
  },
];

const matches = [
  {
    match: 1,
    date: new Date("20 November 2022"),
    team1: "Qatar",
    team2: "Ecuador",
    group: "A",
    flag: "",
  },
  {
    match: 2,
    date: new Date("21 November 2022"),
    team1: "Senegal",
    team2: "Netherlands",
    group: "A",
    flag: "",
  },
  {
    match: 2,
    date: new Date("21 November 2022"),
    team1: "England",
    team2: "Iran",
    group: "B",
    flag: "",
  },
  {
    match: 2,
    date: new Date("21 November 2022"),
    team1: "Senegal",
    team2: "Netherlands",
    group: "A",
    flag: "",
  },
  {
    match: 2,
    date: new Date("21 November 2022"),
    team1: "Senegal",
    team2: "Netherlands",
    group: "A",
    flag: "",
  },
  {
    match: 2,
    date: new Date("21 November 2022"),
    team1: "Senegal",
    team2: "Netherlands",
    group: "A",
    flag: "",
  },
  {
    match: 2,
    date: new Date("21 November 2022"),
    team1: "Senegal",
    team2: "Netherlands",
    group: "A",
    flag: "",
  },
  {
    match: 2,
    date: new Date("21 November 2022"),
    team1: "Senegal",
    team2: "Netherlands",
    group: "A",
    flag: "",
  },
  {
    match: 2,
    date: new Date("21 November 2022"),
    team1: "Senegal",
    team2: "Netherlands",
    group: "A",
    flag: "",
  },
  {
    match: 2,
    date: new Date("21 November 2022"),
    team1: "Senegal",
    team2: "Netherlands",
    group: "A",
    flag: "",
  },
  {
    match: 2,
    date: new Date("21 November 2022"),
    team1: "Senegal",
    team2: "Netherlands",
    group: "A",
    flag: "",
  },
  {
    match: 2,
    date: new Date("21 November 2022"),
    team1: "Senegal",
    team2: "Netherlands",
    group: "A",
    flag: "",
  },
];

export const wc2022 = {
  id: "world_cup_2022",
  year: 2022,
  competition: "FIFA World Cup",
  teamIDs: [],
  macthes: matches,
};
