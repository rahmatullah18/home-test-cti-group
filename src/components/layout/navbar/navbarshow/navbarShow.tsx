import { TypePropsNavbarShow } from "./typePropsNavbarShow";
import { useLocation } from "react-router-dom";

export const NavbarShow = ({ children }: TypePropsNavbarShow) => {
  let { pathname } = useLocation();
  return <>{pathname !== "/login" ? children : <div></div>}</>;
};
