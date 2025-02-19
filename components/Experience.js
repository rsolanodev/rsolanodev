import Image from "next/image";

import { Dekalabs } from "./companies/Dekalabs";
import { Mercadona } from "./companies/Mercadona";
import { useTranslations } from "next-intl";

const Experience = () => {
  const t = useTranslations();

  return (
    <div className="container w-full">
      <div className="font-bold text-xl mb-4">{t("skillsAndExperience")}</div>
      <div className="flex flex-row gap-4">
        <div>
          <Dekalabs />
          <hr className="opacity-20 py-4" />
          <Mercadona />
        </div>
      </div>
    </div>
  );
};

export default Experience;
