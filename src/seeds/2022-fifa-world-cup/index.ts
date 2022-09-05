// Data more initial migration script
// TODO: decide if we want a separte file for this
// Or just put this stuff in the first migration script
import WC_2022_TEAMS_SEED_DATA from "./teams_initial";
import WC_2022_MATCH_SEEDS_GROUP_STAGE from "./matches_group_stage";

// TODO: this should use the season/tournament/competition model
const WC_2022_SEED_DATA = {
  id: "world_cup_2022",
  year: 2022,
  competition: "FIFA World Cup",
  teams: WC_2022_TEAMS_SEED_DATA,
  matches: WC_2022_MATCH_SEEDS_GROUP_STAGE,
  winners: null,
};

export default WC_2022_SEED_DATA;
