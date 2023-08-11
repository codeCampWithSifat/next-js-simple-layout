import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const AboutPage = () => {
  return <div>AboutPage</div>;
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
