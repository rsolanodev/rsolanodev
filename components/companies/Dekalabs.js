import Image from "next/image";

import { useTranslation } from "next-i18next";

const Dekalabs = () => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-8 flex-col md:flex-row mb-8 p-4">
      <div>
        <div className="flex gap-4 mb-8">
          <Image
            src="/images/companies/dekalabs.png"
            alt="Dekalabs"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <div>
            <div className="font-bold text-md">Software Engineer</div>
            <div className="text-md">Dekalabs</div>
            <div className="text-xs">2019 - 2023</div>
          </div>
        </div>
        <div>
          Mi entusiasmo me llevó a buscar la empresa en la que quería hacer las
          prácticas, una de las empresas que mas llamó mi atención fue Dekalabs.
          Desde el momento en que me comentaron sobre el stack me propuse
          aprender Django. Pasaron los meses y en vista de que podía compaginar
          los estudios con el trabajo, decidí unirme a ellos.
          <br />
          <br />
          Durante mi trayectoria trabajé en el desarrollo y mantenimiento de
          proyectos en Django y Vue, haciendo uso de herramientas y servicios
          como Django Rest Framework, Celery, Docker, PostgreSQL, Redis,
          RabbitMQ, WebSockets, etc. Además de ello, realicé despliegues en
          entornos de producción haciendo uso de Linode, AWS y herramientas como
          Ansible, Docker Swarm y GitHub Actions.
          <br />
          <br />
          En Dekalabs trabajaba en remoto con un equipo multidisciplinar,
          aplicando metodología ágil. Aprendí mucho de mis compañeros y me
          ayudaron a crecer tanto personal como profesionalmente. Fue una
          experiencia increíble y estoy muy agradecido por todo lo que aprendí.
        </div>
      </div>
      <div className="shrink-0">
        <Image
          src="/images/me_dev.jpg"
          width={300}
          height={300}
          className="rounded-xl object-cover h-full"
        />
      </div>
    </div>
  );
};

export { Dekalabs };
