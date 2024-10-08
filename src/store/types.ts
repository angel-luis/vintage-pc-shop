import { User } from "firebase/auth";

export type RootState = {
  user: User | null;
};

export type UserActionTypes = "SET_USER";
