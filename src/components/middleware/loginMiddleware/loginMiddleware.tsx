import { TypePropsLoginMiddleware } from "./TypePropsLoginMiddleware";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoginMiddleware = ({ children }: TypePropsLoginMiddleware) => {
  const navigate = useNavigate();
  useEffect(() => {
    const local = localStorage.getItem("isLoggedIn") === "1";
    if (local === false) {
      navigate("/login");
    }
  }, [navigate]);
  return <>{children}</>;
};
