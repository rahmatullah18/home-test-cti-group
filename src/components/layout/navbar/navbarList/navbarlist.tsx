import React from "react";
import { TypePropsNavbar } from "./typePropsNavbar";

export const Navbarlist = ({ lists }: TypePropsNavbar) => {
  return (
    <ul className="flex justify-evenly items-center">
      {lists.map((list) => (
        <button
          className="text-primary2 hover:text-secondary1 font-semibold text-lg"
          key={list.id}
          onClick={list.handleFunction}
        >
          {list.title}
        </button>
      ))}
    </ul>
  );
};
