import React from "react";
import { TypePropsButtonSubmit } from "./typePropsButtonSubmit";

export const ButtonSubmit = ({
  children,
  className,
  disable,
}: TypePropsButtonSubmit) => {
  return (
    <button
      type="submit"
      disabled={disable}
      className={`${className} ${
        disable ? "bg-gray-400 line-through" : "bg-secondary1"
      } w-full  h-10 font-semibold text-primary1 rounded-lg `}
    >
      {children}
    </button>
  );
};
