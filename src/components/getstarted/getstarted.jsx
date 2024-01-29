import React from "react";
import "./getstarted.css";

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <hr className="divider" />
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with LSP</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your Needs soon
          </span>
          <a href="mailto:laxmi_stationers10@rediffmail.com" className="button">Get Started</a>
          <div className="button-top-gradients"></div> {/* Add this div for the gradients */}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
