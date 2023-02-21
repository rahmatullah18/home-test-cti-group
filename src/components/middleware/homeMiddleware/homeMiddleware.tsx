import { TypePropsHomeMiddleware } from "./TypePropsHomeMiddleware";
import { useEffect } from "react";

export const HomeMiddleware = ({ children }: TypePropsHomeMiddleware) => {
  useEffect(() => {
    const local = localStorage.getItem("isLoggedIn") === "1";
    if (local) {
      window.location.href = "/";
    }
  }, []);
  return <>{children}</>;
};
