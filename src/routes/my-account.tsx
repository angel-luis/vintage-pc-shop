import { handleSignInGoogle } from "@/data/firebase";

export default function MyAccountPage() {
  return (
    <>
      <h1>Sign In</h1>
      <button
        className="bg-gray-100 rounded-md p-2 hover:bg-gray-300"
        onClick={handleSignInGoogle}
      >
        Sign In with Google
      </button>
    </>
  );
}
