import { useState } from "react";
import '../Styles/Nav.css'

export function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <div className="Nav d-none d-md-flex">
        <span className="Title">Iron Reign</span>
        <div className="Nav-Links gap-md-3">
          <a href="" className="Nav-Link">
            About
          </a>
          <a href="" className="Nav-Link">
            Classes
          </a>
          <a href="" className="Nav-Link">
            Trainers
          </a>
          <a href="" className="Nav-Link">
            Membership
          </a>
          <a href="" className="Nav-Link">
            Shop
          </a>
          <a href="" className="Nav-Link">
            Journal
          </a>
          <a href="" className="Nav-Link">
            Contact
          </a>
        </div>
        <button className="Nav-Button">Sign in</button>
      </div>
      <div className="d-md-none">
        <div className="Nav-Mobile d-md-none ">
          <span className="Title">Iron Reign</span>
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="Nav-Mobile-Button"
          >
            {menuIsOpen ? "Close" : "Menu"}
          </button>
        </div>
        <div className={`Nav-Mobile-Links ${menuIsOpen ? "d-flex" : "d-none"}`}>
          <a href="" className="Nav-Mobile-Link">
            About
          </a>
          <a href="" className="Nav-Mobile-Link">
            Classes
          </a>
          <a href="" className="Nav-Mobile-Link">
            Trainers
          </a>
          <a href="" className="Nav-Mobile-Link">
            Membership
          </a>
          <a href="" className="Nav-Mobile-Link">
            Shop
          </a>
          <a href="" className="Nav-Mobile-Link">
            Journal
          </a>
          <a href="" className="Nav-Mobile-Link">
            Contact
          </a>
          <button className="Nav-Mobile-Button">Sign in</button>
        </div>
      </div>
    </>
  );
}
