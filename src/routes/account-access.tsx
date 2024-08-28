import ProviderButton from "@/components/provider-button";
import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";

export default function AccountAccessPage() {
  return (
    /* divide in 50/50 columns */
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 px-4 lg:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Create an Account
        </h2>
        <SignUpForm />
        <ProviderButton buttonTitle="Create Account with Google" />
      </div>
      <div className="w-full md:w-1/2 px-4 lg:px-12 md:border-l mt-8 md:mt-0">
        <h2 className="text-3xl font-bold mb-8 text-center">Sign In</h2>
        <SignInForm />
        <ProviderButton buttonTitle="Sign In with Google" />
      </div>
    </div>
  );
}
