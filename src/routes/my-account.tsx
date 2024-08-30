import { useContext } from "react";
import { Navigate } from "react-router-dom";

import Button from "@/components/button";
import { UserContext } from "@/contexts/user-context";
import { handleSignOut } from "@/data/firebase";

export default function MyAccountPage() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/authentication" />;
  }

  return (
    <>
      <p className="my-4">If you see this, is because you're logged in!</p>
      <Button
        title="Sign out"
        type="submit"
        style="primary"
        onClick={handleSignOut}
      />
    </>
  );
}
