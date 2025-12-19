import Link from "next/link";
import { Instagram, Github } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#2E2F30] mt-20">
      <div className="w-[95%] md:w-[80%] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex-1 max-w-xl">
            <p className="text-gray-400 text-sm leading-relaxed">
              Soy poeta y profesora de Literatura. Actualmente curso la Maestría
              en Humanidades Aumentadas en la UNR y soy editora en Luz Futura.
              Vivo y escribo desde San Luis, Argentina.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/unmarvertical/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF6719] transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </Link>

            <Link
              href="https://substack.com/@elinteriordelinterior"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:opacity-80 transition-opacity duration-200"
              aria-label="Substack"
            >
              <Image
                width={24}
                height={24}
                alt="Substack"
                src="/substack.png"
                className="brightness-75 hover:brightness-100 transition-all"
              />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#2E2F30]">
          <p className="text-gray-500 text-sm text-center">
            Marlene Ayala{" "}
            <Link
              href="https://substack.com/@elinteriordelinterior"
              className="text-blue-400 hover:text-blue-300"
            >
              @elinteriordelinterior.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
