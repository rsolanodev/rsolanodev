// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Rubén Solano · Software Engineer";
export const SITE_DESCRIPTION =
  "Desarrollador de software con +5 años de experiencia ubicado en Valencia con experiencia en distintas áreas tecnológicas.";

export const FEATURED_PROJECTS = [
  {
    title: "Mercadona Tech",
    description:
      "Desarrollo en el backend de una aplicación interna para la gestión del catálogo de productos de Mercadona Online (empresa comercial líder de España en distribución alimentaria y productos de gran consumo): integración de nuevas funcionalidades para optimizar procesos, mejoras en la eficiencia del código y resolución de problemas. Además, colaboro en el frontend cuando es necesario para apoyar al equipo",
    image: "/images/mercadona.png",
    tools: ["django", "postgres", "rabbitmq", "sentry", "elastic", "react"],
  },
  {
    title: "Dahl",
    description:
      "Desarrollo en el backend de la aplicación Dahl (empresa comercial líder de Suecia en fontanería, calefacción y suministro de agua), permitiendo a los usuarios realizar compras inteligentes tanto a distancia como en tienda física sin colas, gracias a la implementación de APIs robustas y eficientes. En el frontend colaboré en la migración de la aplicación de Vue 2 a Vue 3.",
    image: "/images/dahl.jpeg",
    tools: ["django", "postgres", "graphql", "celery", "sentry", "vue"],
    company: "Dekalabs",
  },
  {
    title: "APR València",
    description:
      "Colaboré en el desarrollo del frontend para facilitar la gestión de matrículas en zonas APR en Valencia por parte del personal adminsitrativo del Ayuntamiento.",
    image: "/images/aprvalencia.png",
    tools: ["vue", "sentry"],
    company: "Dekalabs",
  },
  {
    title: "Mastercard",
    description:
      "Desarrollo de backoffice y backend para generar y enviar NFTs a la wallet del usuario para apoyar a músicos emergentes: integración con servicio interno para desplegar contrato y mintear el token a la dirección deseada.",
    image: "/images/mastercard.png",
    tools: ["django", "postgres", "celery", "polygon", "sentry"],
    company: "Dekalabs",
  },
  {
    title: "Metrovacesa",
    description:
      "Desarrollo de backoffice y backend para generar y enviar NFTs a la wallet del usuario para la realización de pre-reservas de viviendas: integración con servicio interno para desplegar contrato y mintear el token a la dirección deseada.",
    image: "/images/metrovacesa.jpg",
    tools: ["django", "postgres", "celery", "polygon", "sentry"],
    company: "Dekalabs",
  },
];

export const EXPERIENCE = [
  {
    stage: "diciembre 2023 - actualidad",
    company: "Mercadona Tech",
    company_url: "https://www.mercadonatech.com/",
    company_image: "/images/selling-lechugas.png",
    position: "Backend Software Engineer",
    highlights: [
      "Formo parte del equipo de Market, donde trabajamos en el backoffice para la gestión del catálogo de productos de Mercadona Online.",
      "Desarrollo backend en Python, aplicando principios de arquitectura hexagonal, eventos y TDD para asegurar la escalabilidad y la calidad del software.",
      "Optimizo el rendimiento corrigiendo errores de Sentry, reduciendo N+1 y mejorando los tiempos de respuesta de las APIs.",
      "Aporto valor al negocio en la definición y desarrollo de funcionalidades que automatizan tareas manuales y repetitivas de los gerentes de surtido.",
      "Colaboro estrechamente con equipos multidisciplinares para alinear las soluciones técnicas con las necesidades del negocio.",
    ],
  },
  {
    stage: "octubre 2019 - diciembre 2023",
    company: "Dekalabs",
    company_url: "https://dekalabs.com/",
    company_image: "/images/drinking-coffee.png",
    position: "Software Engineer",
    highlights: [
      "Formé parte de múltiples equipos de desarrollo, trabajando en proyectos de diferentes áreas como Backend, Frontend y DevOps.",
      "Colaboré en la definición de historias de usuario junto al equipo, organizando y priorizando las tareas para maximizar la entrega de valor al cliente en cada sprint.",
      "Desarrollo backend en Python, utilizando Django como marco de trabajo, aplicando pruebas y documentación para garantizar la calidad y la mantenibilidad del software.",
      "Adquirí experiencia en desarrollo frontend con Vue, realizando despliegues con herramientas como Github Actions, Docker y Ansible, y gestionando proyectos con Taiga.",
      "Aunque mi responsabilidad principal era el backend, colaboré activamente en tareas de frontend para apoyar al equipo y asegurar el cumplimiento de los objetivos del sprint.",
    ],
  },
];

export const EDUCATION = [
  {
    stage: "septiembre 2018 - junio 2020",
    school: "CIPFP Ausiàs March",
    school_url: "https://www.ausiasmarch.net/",
    position: "Grado Superior en Desarrollo de Aplicaciones Web",
  },
  {
    stage: "septiembre 2016 - junio 2018",
    school: "IES Salvador Gadea",
    school_url: "https://portal.edu.gva.es/iessalvadorgadea/",
    position: "Grado Medio en Sistemas Microinformáticos y Redes",
  },
];
