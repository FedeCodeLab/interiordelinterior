import { ButtonLink } from "../ui/button-link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="border-b border-[#2E2F30]">
      <div className="flex items-center justify-between max-w-[80%] mx-auto px-6 py-4">
        <h4 className="text-lg shine-text">@elinteriordelinterior</h4>
        <div className="flex items-center justify-center gap-2">
          <ButtonLink href="https://substack.com/@elinteriordelinterior">
            Substack
            <Image width={20} height={20} alt="Substack" src="/substack.png" />
          </ButtonLink>
        </div>
      </div>
    </nav>
  );
};
