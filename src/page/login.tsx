import { FormLogin } from "../components/content/login/FormLogin";
import { Title } from "../components/UI/title/title";

export const Login = () => {
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
