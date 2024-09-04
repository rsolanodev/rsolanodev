import Image from "next/image";

import { useTranslation } from "next-i18next";
import { Dekalabs } from "./companies/Dekalabs";
import { Mercadona } from "./companies/Mercadona";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="container w-full">
      <div className="font-bold text-xl mb-4">{t("skillsAndExperience")}</div>
      <div className="flex flex-row gap-4">
        <div>
          <div className="flex gap-12 flex-col md:flex-row mb-8 px-4 py-8">
            <div className="shrink-0 items-center flex">
              <Image
                src="/images/me_kid.png"
                width={250}
                height={300}
                className="rounded-xl gradient"
              />
            </div>
            <div>
              <div className="text-2xl pb-4 font-bold">
                Este soy yo, un niño de padres ecuatorianos que llegaron a
                Valencia en busca de una vida mejor
              </div>
              <div>
                Mi padre decidió comprarme un portátil en el 2009 cuando yo aún
                tenía 8 años, mi primer portátil fue un Acer, que aún conservo.
                Para aquel entonces tenía 9 años, en ese momento ya contaba con
                mi propio correo de hotmail y disfrutaba de juegos como Habbo,
                Minecraft y GTA. Casualmente todos comparten una característica
                en común, y es que se podían crear servidores para crear tu
                propio mundo personalizado con las reglas que tu quisieras. Se
                podría decir que fue mi primer acercamiento a la programación,
                aunque en ese momento no lo sabía.
                <br />
                <br />
                Durante mi adolescencia me enfoqué en la edición de imágenes y
                vídeos, la creación de contenido para YouTube estaba empezando a
                ser tendencia y algunos compañeros del instituto acudían a mi
                para que les ayudara a crear los diseños para su canal, el logo,
                el banner, la intro, la outro, las miniaturas, etc.
                <br />
                <br />
                Termino el instituto y es el momento de elegir mi camino, lo
                tenía claro, quería estudiar un grado medio relacionado con
                informática, aunque mi familia no estaba de acuerdo. Lo disfruté
                bastante y fue cuando descubrí la programación, me encantaba
                crear cosas, ver como de un simple código podía surgir algo tan
                complejo. Por esa razón decidí estudiar un grado superior de
                Desarrollo de Aplicaciones Web en el 2018.
              </div>
            </div>
          </div>
          <hr className="opacity-20 py-4" />
          <Dekalabs />
          <hr className="opacity-20 py-4" />
          <Mercadona />
        </div>
      </div>
    </div>
  );
};

export default Experience;
