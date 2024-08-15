import React from "react";
import "./Companies.css";

function Companies() {
  return (
    <section className="clients">
      <h2>Companies I worked with</h2>
      <div className="client-logos">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
          alt="Google Logo"
          className="client-logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png"
          alt="Slack Logo"
          className="client-logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="client-logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Android_logo_%282015-2019%29.svg"
          alt="Android Logo"
          className="client-logo"
        />
      </div>
    </section>
  );
}

export default Companies;
