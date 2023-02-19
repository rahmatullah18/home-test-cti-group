import { TypePropsInput } from "./inputTextProps";

export const InputText = ({
  value,
  handleOnChange,
  className,
  type,
  placeHolder,
  name,
  handleOnBlur,
}: TypePropsInput) => {
  return (
    <input
      type={type}
      className={`${className} w-full h-10 text-lg px-2 rounded-lg outline-none border-none shadow-md text-primary1`}
      placeholder={placeHolder}
      onChange={handleOnChange}
      value={value}
      name={name}
      onBlur={handleOnBlur}
    />
  );
};
