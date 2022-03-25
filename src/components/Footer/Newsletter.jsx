import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to our newsletter</h1>
      <p className="p__opensans">Never miss our updates!</p>
    </div>
  </div>
);

export default Newsletter;
