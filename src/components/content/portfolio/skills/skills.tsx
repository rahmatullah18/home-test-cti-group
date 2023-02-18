import React from "react";
import { Title } from "../../../UI/title/title";
import { TypePropsSkills } from "./typePropsSkills";

export const Skills = ({ skills }: TypePropsSkills) => {
  return (
    <div className="space-y-4">
      <Title>Skill</Title>
      <div className=" grid grid-cols-2 gap-4 h-full">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex justify-start space-x-2 items-center"
          >
            <img
              src={skill.urlImage}
              className="w-10 h-10  rounded-full"
              alt="skill"
            />
            <span className="text-secondary1 font-light">{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
