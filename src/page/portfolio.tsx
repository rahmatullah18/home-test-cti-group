import { Certificate } from "../components/content/portfolio/certificate/certificate";
import { dataCertificate } from "../components/content/portfolio/certificate/dataCertificate";
import { dataProfile } from "../components/content/portfolio/profile/dataProfile";
import { Profile } from "../components/content/portfolio/profile/profile";
import { dataSkills } from "../components/content/portfolio/skills/dataSkills";
import { Skills } from "../components/content/portfolio/skills/skills";
import { dataWorkExperinces } from "../components/content/portfolio/workExperince/dataWorkExperience";
import { WorkExperience } from "../components/content/portfolio/workExperince/workExperience";
import { Container } from "../components/layout/container/container";
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
    <Container>
      <div className="flex flex-col pb-10 space-y-8 md:space-y-16">
        {/* button kembali */}
        <Back url="/" />
        {/* profile */}
        <Profile profile={profile} />
        {/* skills */}
        <Skills skills={skills} />
        <div className="space-y-5 md:grid md:grid-cols-2 md:gap-10 md:space-y-0 lg:flex lg:flex-col">
          {/* pengalaman kerja */}
          <WorkExperience workExperience={workExperience} />
          {/* certifikat */}
          <Certificate certificate={certificate} />
        </div>
      </div>
    </Container>
  );
};
