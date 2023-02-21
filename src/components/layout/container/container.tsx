import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import { TypeContainerProps } from "./typePropsContainer";

export const Container = ({ children }: TypeContainerProps) => {
  return (
    <>
      <div className="flex flex-col justify-between h-screen bg-primary1 font-archivo">
        <Navbar />

        <div className="flex flex-col items-center max-h-full px-2 py-5 overflow-auto bg-primary1 ">
          <div className="w-full h-full p-0 md:px-5 lg:px-52">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};
