import React, { useContext, useReducer, useState } from "react";
import {
  emailReducer,
  passwordReducer,
} from "../../../reducers/loginReducer/loginReducer";
import { AuthContext } from "../../../store/auth-context";
import { ButtonSubmit } from "../../UI/buttonSubmit/buttonSubmit";
import { InputText } from "../../UI/inputText/inputText";
import { Loading } from "../../UI/loading/loading";

export const FormLogin = () => {
  // context
  const ctxLogin = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState<boolean | null>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({
      type: "USER_INPUT",
      val: event.target.value,
    });
    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatchPassword({
      type: "USER_INPUT",
      val: event.target.value,
    });
    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateLoginHandler = (input: string) => {
    if (input === "email") {
      dispatchEmail({
        type: "INPUT_BLUR",
      });
    } else if (input === "password") {
      dispatchPassword({
        type: "INPUT_BLUR",
      });
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      ctxLogin.onLogin(emailState.value, passwordState.value);
      dispatchEmail({
        type: "USER_INPUT",
        val: "",
      });
      dispatchPassword({
        type: "USER_INPUT",
        val: "",
      });
      setFormIsValid(false);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="relative">
      {isLoading && <Loading />}
      <form className="flex  flex-col space-y-4 " onSubmit={handleOnSubmit}>
        <InputText
          placeHolder="Email"
          type="email"
          handleOnChange={emailChangeHandler}
          name={"inputEmail"}
          value={emailState.value}
          handleOnBlur={() => validateLoginHandler("email")}
          className={emailState.isValid === false ? "bg-red-200" : ""}
        />
        <InputText
          placeHolder="Password"
          type="password"
          handleOnChange={passwordChangeHandler}
          name={"inputPassword"}
          value={passwordState.value}
          handleOnBlur={() => validateLoginHandler("password")}
          className={passwordState.isValid === false ? "bg-red-200" : ""}
        />
        <ButtonSubmit disable={!formIsValid}>Login</ButtonSubmit>
      </form>
    </div>
  );
};
