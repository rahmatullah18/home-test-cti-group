import React from "react";

export type TypePropsInput = {
  value?: string;
  handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type: string;
  placeHolder: string;
  name?: string;
  handleOnBlur?: () => void;
};
