export type StoryType = "top" | "new" | "ask" | "show" | "job";

export interface Item {
  by: string;
  id: number;
  dead?: true;
  deleted?: true;
  time: number;
}

export interface Story extends Item {
  descendants: number;
  kids: number[];
  score: number;
  title: string;
  url?: string;
  text?: string;
  type: "story";
}

export interface Comment extends Item {
  kids: number[];
  parent: number;
  text: string;
  type: "comment";
}

export interface Job extends Item {
  score: number;
  text: string;
  title: string;
  url: string;
  type: "job";
}

export interface Poll extends Item {
  descendants: number;
  kids: number[];
  parts: number[];
  score: number;
  text: string;
  title: string;
  type: "poll";
}

export interface Pollopt extends Item {
  poll: number;
  score: number;
  text: string;
  type: "pollopt";
}
