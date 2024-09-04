import { useTranslation } from "next-i18next";

const Inspiration = () => {
  const { t } = useTranslation();

  return (
    <div className="container col-span-3 Developing flex gap-2 justify-center md:flex-col items-center font-semibold text-lg md:text-2xl">
      <div className="flex gap-6 text-center md:text-left">
        <span>☁️ {t("imagine")}</span>
        <span>🦄 {t("design")}</span>
      </div>
      <div className="flex gap-6 text-center md:text-left">
        <span>⚙️ {t("code")}</span>
        <span>🔁 {t("repeat")}</span>
      </div>
    </div>
  );
};

export default Inspiration;
