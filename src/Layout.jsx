import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function Layout() {
  const [logInDetails, setLogInDetails] = useState({
    isLoggedIn: false,
    loggedUserName: "",
    token: "",
  });

  return (
    <div>
      <ScrollToTop />
      <NavBar logInDetails={logInDetails} setLogInDetails={setLogInDetails} />
      <Outlet context={{ setLogInDetails, logInDetails }} />
      <Footer />
    </div>
  );
}

export default Layout;