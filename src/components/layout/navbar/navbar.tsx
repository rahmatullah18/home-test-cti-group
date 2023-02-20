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
  ];

  return (
    <nav className="flex items-center justify-between w-full p-4 bg-secondary3">
      <Navbarlist lists={navLists} />
      <button
        onClick={ctxAuth.onLogout}
        className="text-lg font-semibold text-primary2 hover:text-secondary1"
      >
        Logout
      </button>
    </nav>
  );
};
