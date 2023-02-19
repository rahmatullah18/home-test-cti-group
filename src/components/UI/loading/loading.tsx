import React from "react";
import { LoadingComponent } from "../../icon/Loading";

export const Loading = () => {
  return (
    <div className=" absolute z-20 bg-opacity-25 bg-gray-400 inset-0">
      <div className="flex justify-center items-center h-full">
        <span className="animate-spin">
          <LoadingComponent width={50} height={50} />
        </span>
      </div>
    </div>
  );
};
