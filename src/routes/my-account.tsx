import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "@/contexts/user-context";

export default function MyAccountPage() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/authentication" />;
  }

  return <p>If you see this, is because you're logged in!</p>;
}
