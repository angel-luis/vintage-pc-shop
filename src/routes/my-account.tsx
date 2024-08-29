import { Navigate } from "react-router-dom";

export default function MyAccountPage() {
  // TODO: replace with a true Firebase auth handler
  const user = false;

  if (!user) {
    return <Navigate to="/authentication" />;
  }

  return <p>If you see this, is because you're logged in!</p>;
}
