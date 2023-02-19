export type TypePasswordState = {
  value: string;
  isValid: boolean | null;
};

export type TypePasswordAction =
  | { type: "USER_INPUT"; val: string }
  | { type: "INPUT_BLUR" };
