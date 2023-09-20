import Image from "next/image";

import { useTranslation } from "next-i18next";

const Dekalabs = () => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-8 flex-col md:flex-row">
      <div className="flex gap-4 shrink-0">
        <Image
          src="/dekalabs.png"
          alt="Dekalabs"
          width={48}
          height={48}
          className="w-12 h-12"
        />
        <div>
          <div className="font-bold text-md">Software Engineer</div>
          <div className="text-md">Dekalabs</div>
          <div className="text-xs">2019 - {t("present")}</div>
        </div>
      </div>
      <div>{t("experience.dekalabs")}</div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-row gap-4">
      <Dekalabs />
    </div>
  );
};

export default Experience;
