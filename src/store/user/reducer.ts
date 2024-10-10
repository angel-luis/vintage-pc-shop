import { User } from "firebase/auth";

import { UserAction } from "@/store/types";

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
