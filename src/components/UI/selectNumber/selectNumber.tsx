import React from "react";
import { TypePropsSelectNumber } from "./selectNumer";

export const SelectNumber = ({ handleUserPage }: TypePropsSelectNumber) => {
  return (
    <select
      name="items"
      className=" h-10  px-2 rounded-lg outline-none border-none shadow-md text-primary1"
      onChange={handleUserPage}
    >
      <option value="10">10 Items</option>
      <option value="20">20 Items</option>
      <option value="50">50 Items</option>
    </select>
  );
};
