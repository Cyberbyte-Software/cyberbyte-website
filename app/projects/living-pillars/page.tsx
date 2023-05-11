import React from "react";
import PageIllustration from "../../../components/PageIllustration";
import HeroFeatures from "../../../components/HeroFeatures";
import Cta from "../../../components/Cta";
import FeaturesZigzag from "../../../components/FeaturesZigzag";
import pillar from "../../../images/projects/pillar.jpg";
import dashboard from "../../../images/projects/scotscape/dashboard.png";
import {Metadata} from "next";

const metadata: Metadata = {
  title: "Living Pillars"
}

function LivingPillars() {
  return (
    <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Scotscape Living Pillars"
          images={[{ url: pillar, alt: "Living Pillar" }]}
          description="We have worked with Scotscape to design and manufacturer sensors to help monitor plant growth. Our sensors help keep plants watered in all conditions and informs maintenance teams of any issues reducing the need for onsite visits."
        />
        <FeaturesZigzag
          title="Transforming Urban Greening"
          description="By using technology we can not only help reduce pollution and add colour to our streets but we can monitor the success and keep London looking greener"
          features={[
            {
              title: "Complete Control",
              description:
                "Our web interface allows technicians to control and monitor sensors each sensors",
              images: [{ url: dashboard, alt: "Dashboard" }],
              items: [
                "Water Monitoring",
                "Temperature Monitoring",
                "Latest Player",
              ],
            },
          ]}
        />
        <Cta
          title="Interested in Living Pillars?"
          description="Reach out to Scotscape for more details on urban greening and why it's so important"
          buttonText="Find out more"
          buttonLink="https://www.scotscape.co.uk/services/living-pillar"
        />
      </main>
  );
}

export default LivingPillars;
