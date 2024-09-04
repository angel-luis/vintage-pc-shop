import { User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { observeAuthChange } from "@/data/firebase";

export const UserContext = createContext<User | null>(null);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = observeAuthChange((user: User | null) => {
      setUser(user);
    });

    // return this instead () => unsubscribe, because is a wrapper of the real observer
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
