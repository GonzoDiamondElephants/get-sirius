import React from "react";
import HomeButton from "./homeButton.js"

function Gringotts(props) {
  return (
    <div className="bank">
        
        <div class="grinContainer">
        <HomeButton />

{/* 
        <img
          src="https://raw.githubusercontent.com/testOrg762/testPic/master/journal.png"
          alt="journal"
          id="journalImg"
        /> */}
        <div class="text-block">
          <h1 id="grinHead">Welcome to Gringotts</h1>
          <p id="grinText">Your current balance is: </p>
          <p id="grinBalance"> AMOUNT golden Galleons</p>
        </div>
      </div>
    </div>
  );
}

export default Gringotts;