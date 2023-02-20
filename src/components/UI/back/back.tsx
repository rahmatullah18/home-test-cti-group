import React from "react";
import { TypePropBack } from "./typePropsBack";
import { Link } from "react-router-dom";

export const Back = ({ url }: TypePropBack) => {
  return (
    <Link
      to={url}
      className="px-4 py-1 text-lg rounded-lg text-secondary3 md:text-2xl bg-secondary1 w-fit"
    >
      Kembali
    </Link>
  );
};
