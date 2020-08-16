import React from "react";
import CameraAlt from "@material-ui/icons/CameraAlt";

function Bio() {
  return (
    <div className="bioWrapper">
      <div id="headerContainer">
        <div id="bannerImage">
          <img
            src="https://opinionstage-res.cloudinary.com/image/upload/c_lfill,dpr_3.0,f_auto,fl_lossy,q_auto:good,w_400/v1/polls/bsevnhsp9oc6xmbppl5v"
            alt=""
          />
        </div>
        <div id="userInformation">
          <div id="userProfilePic">
            <img
              src="https://pyxis.nymag.com/v1/imgs/171/429/c95b07becc2bef532d9669b4824ea4386f-08-harry-potter.rsquare.w1200.jpg"
              alt=""
            />
          </div>
          <div id="userName">INSERT NAME</div>

          <div id="editProfile">
            <CameraAlt color="disabled" />
          </div>
        </div>
        <div id="profileGrid"></div>
      </div>
    </div>
  );
}

export default Bio;
