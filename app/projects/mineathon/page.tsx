import React from "react";
import PageIllustration from "../../../components/PageIllustration";
import HeroFeatures from "../../../components/HeroFeatures";
import {Metadata} from "next";

const metadata: Metadata = {
  title: "Mineathon"
}

function Mineathon() {
  return (
    <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Mineathon"
          description="A successful charity event raising money for charities backed by an innovative donation platform."
        />
      </main>
  );
}

export default Mineathon;
