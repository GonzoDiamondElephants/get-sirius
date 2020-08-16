import React from "react";
import Header from "./landingPage/Header.js";
import Bio from "./landingPage/Bio.js";
import MainContent from "./landingPage/MainContent.js";
// import Chat from "./landingPage/Chat.js";
import { useAuth0 } from '@auth0/auth0-react';


function HomePage() {
    const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <div className="homePage">
      <Header />
      <Bio />
      <MainContent />
    </div>
  ));
}

export default HomePage;
