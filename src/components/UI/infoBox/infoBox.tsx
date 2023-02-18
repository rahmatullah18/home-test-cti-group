import React from "react";
import { TypePropsInfoBox } from "./typePropsInfoBox";

export const InfoBox = ({ children }: TypePropsInfoBox) => {
  return (
    <div className="w-full h-fit bg-primary2 rounded-lg p-2 space-y-4 shadow-md">
      {children}
    </div>
  );
};
