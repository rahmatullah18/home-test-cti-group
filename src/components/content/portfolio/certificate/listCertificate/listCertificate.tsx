import { InfoBox } from "../../../../UI/infoBox/infoBox";
import { TypePropsListCertificate } from "./TypePropsListCertificate";

export const ListCertificate = ({
  listCertificate,
}: TypePropsListCertificate) => {
  const mapListCertificate = listCertificate.map((list) => {
    const { id, urlCertificate, title } = list;
    return (
      <div className="flex justify-between items-center" key={id}>
        <h1 className="font-semibold text-lg">{title}</h1>
        <a
          className="underline"
          target={"_blank"}
          rel="noreferrer"
          href={urlCertificate}
        >
          Link
        </a>
      </div>
    );
  });

  return (
    <InfoBox>
      <div className="flex flex-col space-y-4">{mapListCertificate}</div>
    </InfoBox>
  );
};
