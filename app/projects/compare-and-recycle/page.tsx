import React from "react";
import type {Metadata} from "next";
import Cta from "../../../components/Cta";
import Stats from "../../../components/Stats";
import HeroFeatures from "../../../components/HeroFeatures";
import PageIllustration from "../../../components/PageIllustration";

const metadata: Metadata = {
  title: "Bid That Home"
}
function CompareAndRecycle() {
  return (
    <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Compare and Recycle"
          description="Our team has worked on the popular comparison site Compare and Recycle"
        />
        <Stats
          title="Remarkable Performance"
          description="We worked on optimising the application and scaling the hosting to ensure people can place orders at any time of the day as quickly as possible"
          stats={[
            {
              stat: ">600k",
              description: "Daily Requests",
            },
            {
              stat: ">3000",
              description: "Commits",
            },
            {
              stat: "99.999%",
              description: "Uptime",
            },
          ]}
        />
        <Cta
          title="Need to recycle you mobile?"
          description="Just head over to their website"
          buttonText="Visit the site"
          buttonLink="https://www.compareandrecycle.co.uk/"
        />
      </main>
  );
}

export default CompareAndRecycle;
