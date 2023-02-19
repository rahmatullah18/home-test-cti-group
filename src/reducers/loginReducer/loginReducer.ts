import {
  TypeEmailAction,
  TypeEmailState,
} from "../../components/content/login/TypeEmail";
import {
  TypePasswordAction,
  TypePasswordState,
} from "../../components/content/login/TypePassword";

export function emailReducer(state: TypeEmailState, action: TypeEmailAction) {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: null };
}

export const passwordReducer = (
  state: TypePasswordState,
  action: TypePasswordAction
) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: null };
};
