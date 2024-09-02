import Button from "@/components/common/button";
import { handleSignInGoogle } from "@/data/firebase";

export default function ProviderButton({
  buttonTitle,
}: {
  buttonTitle: string;
}) {
  return (
    <>
      <div className="flex items-center my-4">
        <div className="w-full h-0.5 bg-black"></div>
        <div className="px-4 text-center">or</div>
        <div className="w-full h-0.5 bg-black"></div>
      </div>
      <div className="text-center">
        <Button style="tertiary" onClick={handleSignInGoogle} widthFull>
          <img className="mr-2" src="/icons/google-logo.svg" width={18} />
          {buttonTitle}
        </Button>
      </div>
    </>
  );
}
