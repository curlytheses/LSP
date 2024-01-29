import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="padding">
      {/* Divider with shadow */}
      <hr className="divider" />
      <div className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
          {}
          <div className="flexColStart f-left">
            <img  src="./favicon.ico" alt="" width={120}/>
            <span className="secondaryText">
              Our vision is to make fair Market
              <br />
              and provide best Price to all.
            </span>
          </div>

          <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <br />
            <span className="secondaryText">
              215 Old China Bazar Street, BBD Bag, <br /> Dalhousie Kolkata -
              700001
            </span>
            <div className="flexCenter f-menu">
              <span>Property</span>
              <span>Services</span>
              <span>Product</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
