import { useState } from "react";
import { TitleInfoBox } from "../../../UI/infoBox/titleInfoBox/titleInfoBox";
import { ListsExperience } from "./listsExperience/listsExperience";
import { TypePropsWorkExperince } from "./typeWorkExperience";

export const WorkExperience = ({ workExperience }: TypePropsWorkExperince) => {
  const [isOpen, setIsOpen] = useState(false);
  const listExperiences = isOpen && (
    <ListsExperience listExperiences={workExperience} />
  );
  return (
    <div className="space-y-2">
      <TitleInfoBox
        title="Experience"
        desc="See my experience"
        isOpen={isOpen}
        handleOpen={() => setIsOpen(!isOpen)}
      />
      {listExperiences}
    </div>
  );
};
