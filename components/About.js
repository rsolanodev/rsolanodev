import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="About container">
      <div className="font-bold text-xl mb-2">{t("aboutMe")}</div>
      <div>{t("myDescription")}</div>
    </div>
  );
};

export default About;
