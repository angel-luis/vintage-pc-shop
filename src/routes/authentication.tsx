import SignInForm from "@/components/auth/sign-in-form";
import SignUpForm from "@/components/auth/sign-up-form";
import ProviderButton from "@/components/common/provider-button";

export default function AuthenticationPage() {
  return (
    /* divide in 50/50 columns */
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <div className="relative rounded-sm w-full bg-gray-200 text-black">
        <div className="w95-border">
          <h2 className="antialiased text-3xl font-semibold tracking-wider py-1 font-display bg-navy-600 text-white mb-4 text-center m-1">
            Create an Account
          </h2>
          <div className="px-4 lg:px-8 py-4">
            <SignUpForm />
            <ProviderButton buttonTitle="Create Account with Google" />
          </div>
        </div>
      </div>
      <div className="relative rounded-sm w-full bg-gray-200 text-black">
        <div className="w95-border">
          <h2 className="antialiased text-3xl font-semibold tracking-wider py-1 font-display bg-navy-600 text-white mb-4 text-center m-1">
            Sign In
          </h2>
          <div className="px-4 lg:px-8 py-4">
            <SignInForm />
            <ProviderButton buttonTitle="Sign In with Google" />
          </div>
        </div>
      </div>
    </div>
  );
}
