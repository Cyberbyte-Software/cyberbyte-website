import React from "react";
import PageIllustration from "../../../components/PageIllustration";
import HeroFeatures from "../../../components/HeroFeatures";
import Cta from "../../../components/Cta";
import {Metadata} from "next";

const metadata: Metadata = {
  title: "Working with Scotscape"
}

function Scotscape() {
  return (<main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Scotscape"
          description="We work closely with Scotscape to help innovate Urban Greening"
        />
        <Cta
          title="Learn more"
          description="Head over to their website to lean more about transforming urban greening"
          buttonText="Scotscape"
          buttonLink="https://www.scotscape.co.uk/"
        />
      </main>
  );
}

export default Scotscape;
