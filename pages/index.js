import Head from "next/head";
import Image from "next/image";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Experience from "@/components/Experience";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Social from "@/components/Social";
import Title from "@/components/Title";
import Details from "@/components/Details";
import Inspiration from "@/components/Inspiration";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main className="max-w-6xl mx-auto px-4 pt-4 md:pt-20 pb-4">
        <div className="contenedor mb-4">
          <About />
          <Stats />
          <Social />
          <Title />
          <Details />
          <Inspiration />
          <Image
            src="/images/me_adult.png"
            alt="me"
            width={300}
            height={300}
            className="Me h-full w-full object-cover rounded-2xl gradient-inverse"
          />
        </div>
        <Experience />
      </main>
    </>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
