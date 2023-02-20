import { InputText } from "../../../UI/inputText/inputText";
import { TypePropsFormSearch } from "./typePropsFormSearch";

export const FormSearch = ({ value, handleOnChange }: TypePropsFormSearch) => {
  return (
    <InputText
      value={value}
      handleOnChange={handleOnChange}
      type="text"
      placeHolder="Cari user"
      className="w-40 col-span-3"
    />
  );
};
