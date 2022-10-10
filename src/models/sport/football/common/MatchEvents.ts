import WC2022Teams from "../2022-fifa-world-cup/WC2022Team";

export type MatchEvent = {
  name: string;
  team: WC2022Teams["name"]; // TODO: update with other competitions (or figure out better way)
  minute: number;
  seconds: number;
  half: "first" | "second" | "extra" | "other";
  extraInfo?: { event: string; [key: string]: any };
};

export type Booking = MatchEvent & {
  color: "yellow" | "red";
};

export type Goal = MatchEvent & {
  fromOpenPlay: boolean;
  assistedBy?: string;
};
