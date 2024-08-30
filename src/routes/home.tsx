import HomeCTA from "@/components/home-cta";
import HomeDeals from "@/components/home-deals";

export default function HomePage() {
  return (
    <>
      <HomeCTA />
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Computers
      </h2>
      <HomeDeals />
    </>
  );
}