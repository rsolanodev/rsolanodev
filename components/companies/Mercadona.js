import Image from "next/image";

const Mercadona = () => {
  return (
    <div className="flex gap-8 flex-col md:flex-row mb-8 p-4">
      <div className="shrink-0">
        <Image
          src="/images/mo_office.webp"
          width={300}
          height={100}
          className="rounded-xl object-cover h-full"
        />
      </div>
      <div>
        <div className="flex gap-4 mb-8">
          <Image
            src="/images/companies/mo.jpeg"
            alt="Mercadona Tech"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <div>
            <div className="font-bold text-md">Software Engineer</div>
            <div className="text-md">Mercadona Tech</div>
            <div className="text-xs">2023 - Actualidad</div>
          </div>
        </div>
        <div>
          Necesitaba un cambio para seguir creciendo e impulsar mi carrera
          profesional, por lo que decidí unirme a Mercadona Tech. Al principio
          tenía miedo, venía de trabajar en remoto y con mucha flexibilidad.
          Sabía que mi vida iba cambiar, pero este cambio era necesario.
        </div>
      </div>
    </div>
  );
};

export { Mercadona };
