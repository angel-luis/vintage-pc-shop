import { User } from "firebase/auth";

import { UserActionTypes } from "@/store/types";

export type UserAction = {
  type: UserActionTypes;
  payload: User | null;
};

export default function userReducer(
  state: User | null = null,
  action: UserAction
) {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    default:
      return state;
  }
}
