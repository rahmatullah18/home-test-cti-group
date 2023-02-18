import React from "react";
import { TypePropsProfile } from "./typePropsProfile";

export const Profile = ({ profile }: TypePropsProfile) => {
  const { urlImage, name, role, desc } = profile;
  return (
    <div className="bg-white shadow-md grid grid-cols-2 gap-2 w-full p-2 rounded-lg">
      <img
        src={urlImage}
        alt="rahmatullah ashar"
        className="h-44 bg-secondary1 w-44 rounded-lg"
      />
      <div className="space-y-1 flex flex-col justify-between">
        <div>
          <h1 className="font-semibold text-secondary2">{name}</h1>
          <h2 className="font-semibold text-secondary3 text-sm">{role}</h2>
        </div>
        <p className="text-xs text-justify text-secondary2">{desc}</p>
      </div>
    </div>
  );
};
