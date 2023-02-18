import React from "react";

export const Checkbox = () => {
  return (
    <div className="flex items-center space-x-4">
      <input
        className=" h-6 w-6 rounded-lg "
        type="checkbox"
        value=""
        id="flexCheckChecked"
      />
      <label htmlFor="flexCheckChecked" className="text-primary2 text-lg">
        remember me
      </label>
    </div>
  );
};
