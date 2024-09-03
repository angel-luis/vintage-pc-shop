import { useContext } from "react";
import { Navigate } from "react-router-dom";

import Button from "@/components/common/button";
import { UserContext } from "@/contexts/user";
import { handleSignOut } from "@/data/firebase";

export default function MyAccountPage() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/authentication" />;
  }

  return (
    <>
      <p className="my-4">If you see this, is because you're logged in!</p>
      <Button type="submit" style="primary" onClick={handleSignOut}>
        Sign out
      </Button>
    </>
  );
}
