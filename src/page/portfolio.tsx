import { Certificate } from "../components/content/portfolio/certificate/certificate";
import { dataCertificate } from "../components/content/portfolio/certificate/dataCertificate";
import { dataProfile } from "../components/content/portfolio/profile/dataProfile";
import { Profile } from "../components/content/portfolio/profile/profile";
import { dataSkills } from "../components/content/portfolio/skills/dataSkills";
import { Skills } from "../components/content/portfolio/skills/skills";
import { dataWorkExperinces } from "../components/content/portfolio/workExperince/dataWorkExperience";
import { WorkExperience } from "../components/content/portfolio/workExperince/workExperience";
import { Back } from "../components/UI/back/back";

const portfolio = {
  profile: dataProfile,
  skills: dataSkills,
  workExperience: dataWorkExperinces,
  certificate: dataCertificate,
};

export const Portfolio = () => {
  const { profile, skills, workExperience, certificate } = portfolio;
  return (
    <div className="flex flex-col space-y-5">
      <Back url="/" />
      <Profile profile={profile} />
      <Skills skills={skills} />
      <WorkExperience workExperience={workExperience} />
      <Certificate certificate={certificate} />
    </div>
  );
};
