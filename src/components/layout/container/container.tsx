import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import { NavbarShow } from "../navbar/navbarshow/navbarShow";
import { TypeContainerProps } from "./typePropsContainer";

export const Container = ({ children }: TypeContainerProps) => {
  return (
    <>
      <div className="bg-primary1 h-screen flex flex-col justify-between font-archivo">
        <NavbarShow>
          <Navbar />
        </NavbarShow>

        <div className=" max-h-full overflow-auto flex flex-col items-center px-2 py-5 bg-primary1">
          <div className=" w-full h-full">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};
