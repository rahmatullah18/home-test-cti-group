import { useEffect } from "react";
import { FormLogin } from "../components/content/login/FormLogin";
import { Title } from "../components/UI/title/title";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const local = localStorage.getItem("isLoggedIn") === "1";
    if (local) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="p-2 space-y-10">
      <div className="flex flex-col justify-center items-center space-y-4">
        <img
          src="https://res.cloudinary.com/grosir113/image/upload/v1676658736/portfolio/mylogo_umlaau.svg"
          className="h-[150px] w-[150px]"
          alt="logo"
        />
        <Title>Rahmatullah Ashar</Title>
      </div>
      <FormLogin />
    </div>
  );
};
