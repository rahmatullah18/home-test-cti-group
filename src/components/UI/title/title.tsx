import React from "react";
import { TypePropsTitle } from "./title.test";

export const Title = ({ children }: TypePropsTitle) => {
  return (
    <h1 className="font-semibold text-2xl text-secondary1 uppercase">
      {children}
    </h1>
  );
};
