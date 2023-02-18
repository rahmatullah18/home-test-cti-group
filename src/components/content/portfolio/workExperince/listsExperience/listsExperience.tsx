import { InfoBox } from "../../../../UI/infoBox/infoBox";
import { TypePropsListExperience } from "./typeListsExperience";

export const ListsExperience = ({
  listExperiences,
}: TypePropsListExperience) => {
  const mapListExperience = listExperiences.map((list) => {
    const { id, company, years, desc } = list;
    return (
      <div key={id}>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg">{company}</h1>
          <span>{years}</span>
        </div>
        <ul className="list-disc list-inside">
          {desc.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  });

  return <InfoBox>{mapListExperience}</InfoBox>;
};
