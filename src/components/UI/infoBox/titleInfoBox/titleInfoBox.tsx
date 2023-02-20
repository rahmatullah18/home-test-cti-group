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
    <div className="flex items-center justify-between lg:justify-start lg:space-x-4">
      <Title>{title}</Title>
      <button
        onClick={handleOpen}
        className="text-lg underline text-secondary2"
      >
        {isOpen ? <ScrollDown width={35} height={35} /> : desc}
      </button>
    </div>
  );
};
