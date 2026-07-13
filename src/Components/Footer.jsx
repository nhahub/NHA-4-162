import { NavLink } from "react-router-dom";
import "../Styles/Footer.css";
function Footer() {
  return (
    <>
      <div className="Footer-Container">
        <div className="Footer-Title">
          <h3>GemFit</h3>
          <p>
            Established 2024. Built on the foundation of brutal honesty and
            heavy iron.
          </p>
        </div>
        <div className="Footer-Location">
          <h5>location</h5>
          <p>1200 Industrial Ave Brooklyn, NY 11211</p>
          <span>Open 5:00 — 23:00 daily</span>
        </div>
        <div className="Footer-Navigation">
          <h5>navigate</h5>
          <NavLink to={"classes"} className="Nav-Link">
            Classes
          </NavLink>
          <NavLink to={"memberships"} className="Nav-Link">
            Membership
          </NavLink>
          <NavLink to={"shop"} className="Nav-Link">
            Shop
          </NavLink>
          <NavLink to={"contact"} className="Nav-Link">
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Footer;
