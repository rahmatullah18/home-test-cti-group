import React from "react";
import { TypePropsTitle } from "./title.test";

export const Title = ({ children }: TypePropsTitle) => {
  return (
    <h1 className="text-xl font-semibold uppercase md:text-3xl text-secondary1">
      {children}
    </h1>
  );
};
