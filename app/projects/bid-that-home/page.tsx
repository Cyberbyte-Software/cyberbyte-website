import React from "react";
import bth from "../../../images/projects/bth.png";
import PageIllustration from "../../../components/PageIllustration";
import HeroFeatures from "../../../components/HeroFeatures";
import FeaturesZigzag from "../../../components/FeaturesZigzag";
import type {Metadata} from "next";

const metadata: Metadata = {
  title: "Bid That Home"
}

function BidThatHome() {
  return (
      <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Bid That Home"
          description="This website and iOS app allowed users to place bids on properties not yet on the market."
        />
        <FeaturesZigzag
          title="Transforming property bidding"
          description="Bid That Home was a unique solution targeting property owners"
          features={[
            {
              title: "Bidding on all Addresses",
              description:
                "The application allowed users to pick any property even if it was not on the market ",
              images: [{ url: bth, alt: "Bid That Home Homepage" }],
              items: [
                "Advanced Admin Area",
                "Letter Tracking",
                "Google Maps Integration",
              ],
            },
          ]}
        />
      </main>
  );
}

export default BidThatHome;
