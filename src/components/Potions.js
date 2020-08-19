import React from "react";

(function (d, m) {
  let kommunicateSettings = {
    appId: "fa0725106707d7bca8da8c826a216993",
    popupWidget: true,
    automaticChatOpenOnNavigation: true
  };
  let s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  let h = document.getElementsByTagName("head")[0];
  h.appendChild(s);
  window.kommunicate = m;
  m._globals = kommunicateSettings;
})(document, window.kommunicate || {});

function Potions() {
  return (
    <div className="classroom">
      <div>
        <section>
          <div className="classContainer">
            <h1 id="potionTitle">
              Hurry up, take a seat. It's time for class.
            </h1>
            <p id="lessonPlan">
              Lesson #1: When you're ready, just click the button on the lower
              right-hand side & summon your instuctor just by typing "Accio!"
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Potions;
