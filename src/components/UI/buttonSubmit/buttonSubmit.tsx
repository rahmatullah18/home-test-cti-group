import React from "react";
import { TypePropsButtonSubmit } from "./typePropsButtonSubmit";

export const ButtonSubmit = ({
  children,
  className,
}: TypePropsButtonSubmit) => {
  return (
    <button
      type="submit"
      className={`${className} w-full bg-secondary1 h-10 font-semibold text-primary1 rounded-lg`}
    >
      {children}
    </button>
  );
};
