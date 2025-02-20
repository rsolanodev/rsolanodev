import GithubLink from "@/components/links/GithubLink";
import "./page.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LinkedInLink from "@/components/links/LinkedInLink";
import XLink from "@/components/links/XLink";
import InstagramLink from "@/components/links/InstagramLink";
import EmailLink from "@/components/links/EmailLink";
import Experience from "@/components/Experience";
import Section from "@/components/section";

export function calculateAge(birthDate: string): number {
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

export default function Home() {
  const t = useTranslations();

  return (
    <main className="max-w-6xl mx-auto px-4 pt-4 md:pt-20 pb-4">
      <div className="sections">
        <Section name="header" className="font-bold text-xl">
          👨‍💻​ Software Engineer
        </Section>

        <Section name="details">
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
        </Section>

        <Section name="about">
          <div className="font-bold text-xl mb-2">{t("aboutMe")}</div>
          <div>{t("myDescription")}</div>
        </Section>

        <Section
          name="dev"
          className="col-span-3 flex gap-2 justify-center md:flex-col items-center font-semibold text-lg md:text-2xl"
        >
          <div className="flex gap-6 text-center md:text-left">
            <span>☁️ {t("imagine")}</span>
            <span>🦄 {t("design")}</span>
          </div>
          <div className="flex gap-6 text-center md:text-left">
            <span>⚙️ {t("code")}</span>
            <span>🔁 {t("repeat")}</span>
          </div>
        </Section>

        <Section
          name="social"
          className="container flex justify-between items-center"
        >
          <GithubLink />
          <LinkedInLink />
          <XLink />
          <InstagramLink />
          <EmailLink />
        </Section>

        <Section name="experience" className="grid grid-cols-3 gap-4">
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
        </Section>

        <Image
          src="/images/me_adult.png"
          alt="Rubén as an adult"
          width={500}
          height={500}
          className="section-me h-full w-full object-cover rounded-2xl gradient-inverse"
        />
      </div>

      <Section>
        <Experience />
      </Section>
    </main>
  );
}
