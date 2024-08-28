import SignUpForm from "@/components/sign-up-form";
import { handleSignInGoogle } from "@/data/firebase";

export default function MyAccountPage() {
  return (
    <>
      <h2 className="text-2xl font-bold">Create New Account</h2>
      <SignUpForm />
      <button
        className="bg-gray-100 rounded-md p-2 hover:bg-gray-300"
        onClick={handleSignInGoogle}
      >
        Sign Up with Google
      </button>
    </>
  );
}
