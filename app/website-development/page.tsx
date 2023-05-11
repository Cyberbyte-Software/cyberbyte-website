import React from "react";
import {Metadata} from "next";
import PageIllustration from "../../components/PageIllustration";

const metadata: Metadata = {
  title: "Website Development"
}

function WebsiteDevelopment() {
  return (
    <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*        <HeroFeatures
          title="Professional Software Consulting"
          description="Our team work closely with a number of clients to successfully deliver projects"
        />*/}
      </main>
  );
}

export default WebsiteDevelopment;
