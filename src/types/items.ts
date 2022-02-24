export type StoryType = "top" | "new" | "ask" | "show" | "job";

export interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: "story";
  url?: string;
  text?: string;
}

export interface Comment {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: "comment";
}

export interface Job {
  by: string;
  id: number;
  score: number;
  text: string;
  time: number;
  title: string;
  type: "job";
  url: string; // empty
}

export interface Poll {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  parts: number[];
  score: number;
  text: string; // empty
  time: number;
  title: string;
  type: "poll";
}

export interface Pollopt {
  by: string;
  id: number;
  poll: number;
  score: number;
  text: string;
  time: number;
  type: "pollopt";
}
