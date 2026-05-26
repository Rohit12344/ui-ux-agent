import React from "react";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";

function LandingPageLayout({ children }) {
  return (
    <div className={`relative flex flex-col items-center`}>
      {<NavBar />}
      {children}
      {<Footer />}
    </div>
  );
}

export default LandingPageLayout;
