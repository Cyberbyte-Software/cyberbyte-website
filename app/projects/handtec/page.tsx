import React from "react";
import PageIllustration from "../../../components/PageIllustration";
import HeroFeatures from "../../../components/HeroFeatures";
import Cta from "../../../components/Cta";
import {Metadata} from "next";

const metadata: Metadata = {
  title: "Handtec"
}

function Handtec() {
  return (
    <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Handtec Recycling System"
          description="Transforming a legacy application into a fully featured platform"
        />
        <Cta
          title="Learn more about Handtec"
          description="To hear about the bespoke system we have been working on please contact us."
          buttonText="Contact us"
          buttonLink="/contact"
        />
      </main>
  );
}

export default Handtec;
