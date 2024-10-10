import { User } from "firebase/auth";

import { createAction } from "@/store/utils";

export const setUser = (user: User | null) =>
  createAction<User | null>("user/SET_USER", user);
