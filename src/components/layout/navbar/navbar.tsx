import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../store/auth-context";
import { Navbarlist } from "./navbarList/navbarlist";

export const Navbar = () => {
  const ctxAuth = useContext(AuthContext);
  const navigate = useNavigate();
  const navLists = [
    { id: 1, title: "Home", handleFunction: () => navigate("/") },
    { id: 2, title: "Portfolio", handleFunction: () => navigate("/portfolio") },
    { id: 3, title: "Logout", handleFunction: ctxAuth.onLogout },
  ];

  return (
    <nav className=" p-4 w-full  bg-secondary3">
      <Navbarlist lists={navLists} />
    </nav>
  );
};
