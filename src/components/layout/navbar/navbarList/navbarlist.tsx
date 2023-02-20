import React from "react";
import { TypePropsNavbar } from "./typePropsNavbar";

export const Navbarlist = ({ lists }: TypePropsNavbar) => {
  return (
    <ul className="flex items-center space-x-5 justify-evenly md:justify-start md:space-x-10">
      {lists.map((list) => (
        <button
          className="text-lg font-semibold text-primary2 hover:text-secondary1"
          key={list.id}
          onClick={list.handleFunction}
        >
          {list.title}
        </button>
      ))}
    </ul>
  );
};
