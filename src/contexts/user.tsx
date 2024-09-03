import { User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { observeAuthChange } from "@/data/firebase";

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const providerValue = { user, setUser };

  useEffect(() => {
    const unsubscribe = observeAuthChange((user: User | null) => {
      setUser(user);
    });

    // return this instead () => unsubscribe, because is a wrapper of the real observer
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}
