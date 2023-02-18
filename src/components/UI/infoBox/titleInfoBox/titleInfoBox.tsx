import { ScrollDown } from "../../../icon/ScrollDown";
import { Title } from "../../title/title";
import { TypePropsTitleInfoBox } from "./typePropsTitleInfoBox";

export const TitleInfoBox = ({
  title,
  desc,
  isOpen,
  handleOpen,
}: TypePropsTitleInfoBox) => {
  return (
    <div className="flex justify-between items-center">
      <Title>{title}</Title>
      <button
        onClick={handleOpen}
        className="text-secondary2 underline text-lg"
      >
        {isOpen ? <ScrollDown width={35} height={35} /> : desc}
      </button>
    </div>
  );
};
