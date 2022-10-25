import {Action} from "@ngrx/store";

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] up';
export const DOWNVOTE = '[Post]f down';
export const RESET = '[Post] reset';


export class EditText implements Action {
  readonly type = EDIT_TEXT;

  constructor(
    public payload = UPVOTE
  ) {
  }
}

export class Upvote implements Action {
  readonly type = UPVOTE
}

export class DownVote implements Action {
  readonly type = DOWNVOTE
}

export class Reset implements Action {
  readonly type = RESET
}

export type All = Upvote | DownVote | Reset | EditText;
