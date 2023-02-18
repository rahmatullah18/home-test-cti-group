import React from "react";
import { ButtonSubmit } from "../../UI/buttonSubmit/buttonSubmit";
import { Checkbox } from "../../UI/checkbox/checkbox";
import { InputText } from "../../UI/inputText/inputText";

export const FormLogin = () => {
  return (
    <>
      <form className="flex flex-col space-y-4 ">
        <InputText
          placeHolder="Email"
          type="text"
          //   handleOnChange={(e) => setUserName(e.target.value)}
        />
        <InputText
          placeHolder="Password"
          type="password"
          //   handleOnChange={(e) => setUserName(e.target.value)}
        />
        <Checkbox />
        <ButtonSubmit>Login</ButtonSubmit>
      </form>
    </>
  );
};
