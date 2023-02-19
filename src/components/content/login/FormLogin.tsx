import React, { useContext, useReducer, useState } from "react";
import { AuthContext } from "../../../store/auth-context";
import { ButtonSubmit } from "../../UI/buttonSubmit/buttonSubmit";
import { Checkbox } from "../../UI/checkbox/checkbox";
import { InputText } from "../../UI/inputText/inputText";
import { Loading } from "../../UI/loading/loading";

interface EmailState {
  value: string;
  isValid: boolean | null;
}

type EmailAction = { type: "USER_INPUT"; val: string } | { type: "INPUT_BLUR" };

function emailReducer(state: EmailState, action: EmailAction) {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: null };
}

interface PasswordState {
  value: string;
  isValid: boolean | null;
}

type PasswordAction =
  | { type: "USER_INPUT"; val: string }
  | { type: "INPUT_BLUR" };

const passwordReducer = (state: PasswordState, action: PasswordAction) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: null };
};

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

  const validateEmailHandler = () => {
    dispatchEmail({
      type: "INPUT_BLUR",
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: "INPUT_BLUR",
    });
  };

  const handleOnSubmit = (e: any) => {
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
          type="text"
          handleOnChange={emailChangeHandler}
          name={"inputEmail"}
          value={emailState.value}
          handleOnBlur={validateEmailHandler}
          className={emailState.isValid === false ? "bg-red-200" : ""}
        />
        <InputText
          placeHolder="Password"
          type="password"
          handleOnChange={passwordChangeHandler}
          name={"inputPassword"}
          value={passwordState.value}
          handleOnBlur={validatePasswordHandler}
          className={passwordState.isValid === false ? "bg-red-200" : ""}
        />
        <Checkbox />
        <ButtonSubmit disable={!formIsValid}>Login</ButtonSubmit>
      </form>
    </div>
  );
};
