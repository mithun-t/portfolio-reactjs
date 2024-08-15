import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer" style={{ marginBottom: "150px" }}>
      <div className="cta">
        <h2>Are You Ready to kickstart your project?</h2>
        <h5>
          Reach out and let's make it happend ✨. I'm also available for
          full-time or part-time opportunities to push the boundaries of design
          and deliver exceptional work.
        </h5>
        <button
          className="btn"
          style={{ backgroundColor: "#000", color: "#e7fd5a" }}
        >
          Let's Talk
        </button>
      </div>
      <div className="copyright">
        ©Copyright <span style={{ color: "#e7fd5a" }}>Wize</span> All Rights
        Reserved.
      </div>
    </footer>
  );
}

export default Footer;
