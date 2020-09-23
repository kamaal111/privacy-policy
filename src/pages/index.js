import React from "react";

import AppFooter from "../components/AppFooter";
import AppHead from "../components/AppHead";
import HomeMainContent from "../components/HomeMainContent";

function Home() {
  return (
    <div>
      <AppHead />
      <HomeMainContent />
      <AppFooter />
    </div>
  );
}

export default Home;
