import { useTranslation } from "next-i18next";

const Details = () => {
  const { t } = useTranslation();

  function calculateAge(birthDate) {
    const today = new Date();
    const birthDateFormat = new Date(birthDate);

    let age = today.getFullYear() - birthDateFormat.getFullYear();
    const monthDiff = today.getMonth() - birthDateFormat.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDateFormat.getDate())
    ) {
      age--;
    }

    return age;
  }

  return (
    <div className="Details container">
      <div className="flex justify-between">
        <ul>
          <li>{t("name")}</li>
          <li>{t("age")}</li>
          <li>{t("location")}</li>
          <li>{t("organization")}</li>
        </ul>
        <ul className="font-bold text-right">
          <li>Rubén Solano</li>
          <li>{calculateAge("2000-11-19")}</li>
          <li>🌴 {t("myLocation")}</li>
          <li>🥘 Mercadona Tech</li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
