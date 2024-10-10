import { User } from "firebase/auth";

import { UserActionTypes } from "@/store/types";

export type UserAction = {
  type: UserActionTypes;
  payload: User | null;
};

const initialState = null;

export default function userReducer(
  state: User | null = initialState,
  action: UserAction
) {
  switch (action.type) {
    case "user/SET_USER":
      return action.payload;
    default:
      return state;
  }
}
