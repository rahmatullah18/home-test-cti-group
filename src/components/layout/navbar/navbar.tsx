import { useNavigate } from "react-router-dom";
import { Navbarlist } from "./navbarList/navbarlist";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
  };
  const navLists = [
    { id: 1, title: "Home", handleFunction: () => navigate("/") },
    { id: 2, title: "Portfolio", handleFunction: () => navigate("/portfolio") },
    { id: 3, title: "Logout", handleFunction: handleLogout },
  ];

  return (
    <nav className=" p-4 w-full  bg-secondary3">
      <Navbarlist lists={navLists} />
    </nav>
  );
};
