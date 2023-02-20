import React from "react";
import { ButtonSubmit } from "../../../UI/buttonSubmit/buttonSubmit";
import { InputText } from "../../../UI/inputText/inputText";

export const FormSearch = () => {
  return (
    <form className="grid grid-cols-4 space-x-1">
      <InputText
        type="text"
        placeHolder="Cari user"
        className="w-40 col-span-3"
      />
      <ButtonSubmit className="w-16">Cari</ButtonSubmit>
    </form>
  );
};
