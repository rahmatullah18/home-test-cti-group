import { TypePropsProfile } from "./typePropsProfile";

export const Profile = ({ profile }: TypePropsProfile) => {
  const { urlImage, name, role, desc } = profile;
  return (
    <>
      <div className="grid w-full grid-cols-2 gap-2 p-2 rounded-lg shadow-md bg-primary2 md:flex md:w-full">
        <img
          src={urlImage}
          alt="rahmatullah ashar"
          className="w-full h-full rounded-lg bg-secondary1 md:w-60 md:h-60"
        />
        <div className="flex flex-col justify-between space-y-1 md:justify-start">
          <div>
            <h1 className="font-semibold text-secondary2 md:text-3xl">
              {name}
            </h1>
            <h2 className="text-sm font-semibold text-secondary3 md:text-2xl">
              {role}
            </h2>
          </div>
          <p className="text-xs text-justify text-secondary2 md:text-xl md:leading-loose">
            {desc}
          </p>
        </div>
      </div>
      <h2 className="text-sm font-semibold text-center text-primary2 md:text-2xl">
        My Projects :{" "}
        <a
          target={"_blank"}
          rel="noreferrer"
          className="underline"
          href="https://www.rahmatullahashar.my.id/portfolio"
        >
          rahmatullahashar.my.id
        </a>
      </h2>
    </>
  );
};
