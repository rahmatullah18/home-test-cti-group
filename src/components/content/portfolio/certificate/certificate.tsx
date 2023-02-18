import { useState } from "react";
import { TitleInfoBox } from "../../../UI/infoBox/titleInfoBox/titleInfoBox";
import { TypePropsCertificate } from "./typePropsCertificate";
import { ListCertificate } from "./listCertificate/listCertificate";

export const Certificate = ({ certificate }: TypePropsCertificate) => {
  const [isOpen, setIsOpen] = useState(false);
  const listCertificate = isOpen && (
    <ListCertificate listCertificate={certificate} />
  );

  return (
    <div className="space-y-2">
      <TitleInfoBox
        title="Certificate"
        desc="See my certificate"
        isOpen={isOpen}
        handleOpen={() => setIsOpen(!isOpen)}
      />
      {listCertificate}
    </div>
  );
};
