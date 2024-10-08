import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Button from "@/components/common/button";
import { handleSignOut } from "@/data/firebase";
import { getUser } from "@/store/user/selector";

export default function MyAccountPage() {
  const user = useSelector(getUser);

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
