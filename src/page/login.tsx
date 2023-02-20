import { FormLogin } from "../components/content/login/FormLogin";
import { HomeMiddleware } from "../components/middleware/homeMiddleware/homeMiddleware";
import { Title } from "../components/UI/title/title";

export const Login = () => {
  return (
    <HomeMiddleware>
      <div className="md:flex md:flex-col md:justify-center md:items-center">
        <div className="p-2 space-y-10 md:w-96">
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src="https://res.cloudinary.com/grosir113/image/upload/v1676658736/portfolio/mylogo_umlaau.svg"
              className="h-[150px] w-[150px]"
              alt="logo"
            />
            <Title>Rahmatullah Ashar</Title>
          </div>
          <FormLogin />
        </div>
      </div>
    </HomeMiddleware>
  );
};
