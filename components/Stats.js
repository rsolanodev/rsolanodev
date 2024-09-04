import { useTranslation } from "next-i18next";

const Stats = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-3 gap-4 Experience">
      <div className="container text-center flex justify-center flex-col">
        <div className="font-bold text-3xl">+4</div>
        <div className="text-xs">{t("yearsExperience")}</div>
      </div>

      <div className="container text-center flex justify-center flex-col">
        <div className="font-bold text-3xl">+65</div>
        <div className="text-xs">{t("projects")}</div>
      </div>

      <div className="container text-center flex justify-center flex-col">
        <div className="font-bold text-3xl">+3256</div>
        <div className="text-xs">{t("contributions")}</div>
      </div>
    </div>
  );
};

export default Stats;
