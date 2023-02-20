import React from "react";
import { Title } from "../../../UI/title/title";
import { TypePropsSkills } from "./typePropsSkills";

export const Skills = ({ skills }: TypePropsSkills) => {
  return (
    <div className="space-y-4">
      <Title>Skill</Title>
      <div className="grid h-full grid-cols-2 gap-4 md:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center justify-start space-x-2"
          >
            <img
              src={skill.urlImage}
              className="w-10 h-10 rounded-full md:h-16 md:w-16"
              alt="skill"
            />
            <span className="font-light text-secondary1 md:text-xl">
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
