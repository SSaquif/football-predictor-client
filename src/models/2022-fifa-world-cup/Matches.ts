// TODO: This interface could potentially be reusable across multiple competitions
interface WC2022Matches {
  round:
    | "Group Stage"
    | "Round of 16"
    | "Quarter Final"
    | "Semi Final"
    | "Third Place Playoff"
    | "Final";
  matchNumber: number;
}

export default WC2022Matches;
