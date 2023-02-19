export type TypeEmailState = {
  value: string;
  isValid: boolean | null;
};

export type TypeEmailAction =
  | { type: "USER_INPUT"; val: string }
  | { type: "INPUT_BLUR" };
