import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../App";

export function NavBar({ logInDetails, setLogInDetails }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  async function handleLogOut() {
    try {
      const response = await fetch(
        "https://gemdashboard-production.up.railway.app/api/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${logInDetails.token}`,
          },
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message);
        return;
      }

      setLogInDetails({
        isLoggedIn: false,
        loggedUserName: "",
        token: "",
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="Nav d-none d-md-flex container-fluid">
        <span className="Title">GemFit</span>
        <div className="Nav-Links gap-md-3">
          <NavLink to={""} className="Nav-Link">
            Home
          </NavLink>
          <NavLink to={"about"} className="Nav-Link">
            About
          </NavLink>
          <NavLink className="Nav-Link">Classes</NavLink>
          <NavLink to={"memberships"} className="Nav-Link">
            Membership
          </NavLink>
          <NavLink to={"shop"} className="Nav-Link">
            Shop
          </NavLink>
          <NavLink to={"journal"} className="Nav-Link">
            Journal
          </NavLink>
          <NavLink to={"contact"} className="Nav-Link">
            Contact
          </NavLink>
        </div>

        {logInDetails.isLoggedIn ? (
          <div>
            <Button>{logInDetails.loggedUserName}</Button>
            <Button onClick={() => handleLogOut()}>sign out</Button>
          </div>
        ) : (
          <NavLink to={"signin"} className="Nav-Button">
            Sign in
          </NavLink>
        )}
      </div>
      <div className="d-md-none Mobile-Sticky">
        <div className="Nav-Mobile d-md-none ">
          <span className="Title">GemFit</span>
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="Nav-Mobile-Button"
          >
            {menuIsOpen ? "Close" : "Menu"}
          </button>
        </div>
        <div className={`Nav-Mobile-Links ${menuIsOpen ? "d-flex" : "d-none"}`}>
          <NavLink
            to={""}
            className="Nav-Mobile-Link"
            onClick={() => setMenuIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to={"about"}
            className="Nav-Mobile-Link"
            onClick={() => setMenuIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className="Nav-Mobile-Link"
            onClick={() => setMenuIsOpen(false)}
          >
            Classes
          </NavLink>
          <NavLink
            to={"memberships"}
            className="Nav-Mobile-Link"
            onClick={() => setMenuIsOpen(false)}
          >
            Membership
          </NavLink>
          <NavLink
            to={"shop"}
            className="Nav-Mobile-Link"
            onClick={() => setMenuIsOpen(false)}
          >
            Shop
          </NavLink>
          <NavLink
            to={"journal"}
            className="Nav-Mobile-Link"
            onClick={() => setMenuIsOpen(false)}
          >
            Journal
          </NavLink>
          <NavLink
            to={"contact"}
            className="Nav-Mobile-Link"
            onClick={() => setMenuIsOpen(false)}
          >
            Contact
          </NavLink>
          {logInDetails.isLoggedIn ? (
            <div>
              <Button onClick={() => setMenuIsOpen(false)}>
                {logInDetails.loggedUserName}
              </Button>
              <Button
                onClick={() => {
                  setMenuIsOpen(false);
                  handleLogOut();
                }}
              >
                sign out
              </Button>
            </div>
          ) : (
            <NavLink
              to={"signin"}
              className="Nav-Mobile-Button"
              onClick={() => setMenuIsOpen(false)}
            >
              Sign in
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}
