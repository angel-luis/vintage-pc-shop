import SignUpForm from "@/components/sign-up-form";
import { handleSignInGoogle } from "@/data/firebase";

export default function MyAccountPage() {
  return (
    /* divide in 50/50 columns */
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 px-4 lg:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Create an Account
        </h2>
        <SignUpForm />
        <div className="flex items-center my-4">
          <div className="w-full h-0.5 bg-gray-200"></div>
          <div className="px-4 text-center">or</div>
          <div className="w-full h-0.5 bg-gray-200"></div>
        </div>
        <div className="text-center">
          <button
            className="w-full inline-flex items-center justify-center py-2.5 px-5 font-medium transition bg-white rounded-lg border border-gray-200 hover:bg-gray-200"
            onClick={handleSignInGoogle}
          >
            <img className="mr-2" src="/google-logo.svg" width={18} />
            Sign Up with Google
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 lg:px-12 md:border-l">
        <h2 className="text-3xl font-bold mb-8 text-center">Sign In</h2>
      </div>
    </div>
  );
}
