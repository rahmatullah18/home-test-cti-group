import { useContext } from "react";
import { AuthContext } from "../../../store/auth-context";
import { Navbarlist } from "./navbarList/navbarlist";

export const Navbar = () => {
  let pathname = window.location.pathname;
  const ctxAuth = useContext(AuthContext);
  const navLists = [
    {
      id: 1,
      title: "Home",
      handleFunction: () => (window.location.href = "/"),
    },
    {
      id: 2,
      title: "Portfolio",
      handleFunction: () => (window.location.href = "/portfolio"),
    },
  ];

  return (
    <div>
      <nav
        className={`${
          pathname === "/login" && "hidden"
        } flex items-center justify-between w-full p-4 bg-secondary3`}
      >
        <Navbarlist lists={navLists} />
        <button
          onClick={ctxAuth.onLogout}
          className="text-lg font-semibold text-primary2 hover:text-secondary1"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};
