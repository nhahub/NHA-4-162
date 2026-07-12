import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { useState } from "react";

function Layout() {
  const [logInDetails, setLogInDetails] = useState({
    isLoggedIn: false,
    loggedUserName: "",
    token: "",
  });

  return (
    <div>
      <NavBar logInDetails={logInDetails} setLogInDetails={setLogInDetails} />
      <Outlet context={{ setLogInDetails }} />
    </div>
  );
}

export default Layout;
