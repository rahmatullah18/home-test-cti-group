import React from "react";
import { TypePropBack } from "./typePropsBack";
import { Link } from "react-router-dom";

export const Back = ({ url }: TypePropBack) => {
  return (
    <Link
      to={url}
      className="text-secondary3 text-lg bg-secondary1 w-fit px-4 py-1 rounded-lg"
    >
      Kembali
    </Link>
  );
};
