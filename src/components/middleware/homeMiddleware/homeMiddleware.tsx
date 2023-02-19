import { TypePropsHomeMiddleware } from "./TypePropsHomeMiddleware";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const HomeMiddleware = ({ children }: TypePropsHomeMiddleware) => {
  const navigate = useNavigate();
  useEffect(() => {
    const local = localStorage.getItem("isLoggedIn") === "1";
    if (local) {
      navigate("/");
    }
  }, [navigate]);
  return <>{children}</>;
};
