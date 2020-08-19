import React from "react";
import HomeButton from "./homeButton.js"

function Gringotts(props) {
  // We need to pull in CurrentUser's gringCoin balance and insert it into line 22. This balance needs to be updated in a useEffect hook with the currentUser as a dependency. 


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