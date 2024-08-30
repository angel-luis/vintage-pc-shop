import { handleSignInGoogle } from "@/data/firebase";

export default function ProviderButton({
  buttonTitle,
}: {
  buttonTitle: string;
}) {
  return (
    <>
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
          <img className="mr-2" src="icons/google-logo.svg" width={18} />
          {buttonTitle}
        </button>
      </div>
    </>
  );
}
