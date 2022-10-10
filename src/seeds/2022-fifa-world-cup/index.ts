// Data more initial migration script
// TODO: decide if we want a separte file for this
// Or just put this stuff in the first migration script
import {
  WC2022FinalMatch,
  WC2022GroupMatch,
  WC2022QFMatch,
  WC2022R16Match,
  WC2022SFMatch,
  WC2022ThirdPlaceMatch,
} from "../../models/sport/football/2022-fifa-world-cup/WC2022Match";
import WC2022Team from "../../models/sport/football/2022-fifa-world-cup/WC2022Team";
import WC_2022_TEAMS_SEED_DATA from "./initial_teams";
import {
  WC_2022_MATCH_SEEDS_GROUP_STAGE,
  WC_2022_MATCH_SEEDS_QF,
  WC_2022_MATCH_SEEDS_R16,
  WC_2022_MATCH_SEEDS_SF,
  WC_2022_MATCH_SEED_FINAL,
  WC_2022_MATCH_SEED_THIRD_PLACE_PLAYOFF,
} from "./matches";

interface FIFAWorldCup {
  id: string;
  year: number;
  competition: string;
  host: string;
  teams: WC2022Team[];
  groupStage: WC2022GroupMatch[];
  roundOf16: WC2022R16Match[];
  quarterFinals: WC2022QFMatch[];
  semiFinals: WC2022SFMatch[];
  thirdPlacePlayoff: WC2022ThirdPlaceMatch;
  final: WC2022FinalMatch;
  runnerUps: WC2022Team | "TBA";
  winners: WC2022Team | "TBA";
  startDate: Date;
  endDate: Date;
}

// TODO: this should use the season/tournament/competition model
// Used for initial Seeding Data
// But during seedin store Match and team once only
// Create this structure during the fetch
const WC_2022_SEED_DATA: FIFAWorldCup = {
  id: "world_cup_2022",
  year: 2022,
  competition: "FIFA World Cup",
  host: "Qatar",
  teams: WC_2022_TEAMS_SEED_DATA,
  groupStage: WC_2022_MATCH_SEEDS_GROUP_STAGE,
  roundOf16: WC_2022_MATCH_SEEDS_R16,
  quarterFinals: WC_2022_MATCH_SEEDS_QF,
  semiFinals: WC_2022_MATCH_SEEDS_SF,
  thirdPlacePlayoff: WC_2022_MATCH_SEED_THIRD_PLACE_PLAYOFF,
  final: WC_2022_MATCH_SEED_FINAL,
  runnerUps: "TBA",
  winners: "TBA",
  startDate: new Date(2022, 10, 20),
  endDate: new Date(2022, 11, 18),
};

export default WC_2022_SEED_DATA;
