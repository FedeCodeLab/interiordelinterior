import Image from "next/image";
import { ButtonLink } from "../ui/button-link";

interface CardProps {
  className?: string;
  portada: string;
  title: string;
  description: string;
  href: string;
}

export const Card = ({
  className = "",
  portada,
  title,
  description,
  href,
}: CardProps) => {
  return (
    <div className={`flex flex-col gap-4 ${className} justify-between`}>
      <div className="flex flex-col gap-4+">
        <Image
          width={300}
          height={300}
          alt={title}
          className="w-full h-80 object-cover"
          src={portada}
        />
        <div className="flex flex-col gap-2 pr-10">
          <h3 className="text-xl">{title}</h3>
          <p className="">{description}</p>
        </div>
      </div>

      <ButtonLink href={href}>Leer más en Substack</ButtonLink>
    </div>
  );
};
