import HomeCTA from "@/components/home/cta";
import HomeDeals from "@/components/home/deals";

export default function HomePage() {
  return (
    <>
      <HomeCTA />
      <h2 className="text-4xl font-display mb-8 text-center">
        Featured Computers
      </h2>
      <HomeDeals />
    </>
  );
}
