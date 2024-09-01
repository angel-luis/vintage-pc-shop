import { Link } from "react-router-dom";

import Button from "@/components/common/button";

export default function HomeCTA() {
  return (
    <section className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <img
        className="w-full"
        src="https://placehold.co/800x450"
        alt="dashboard image"
      />
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-5xl antialiased font-display font-bold">
          Discover Vintage Computing Gems
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg">
          Explore our collection of vintage computers and relive the glory days
          of computing with our selection.
        </p>
        <Link to="/shop">
          <Button title="Shop now" type="submit" style="primary" />
        </Link>
      </div>
    </section>
  );
}
