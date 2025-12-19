import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type ButtonLinkVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonLinkSize = "sm" | "md" | "lg" | "xl";

interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: ButtonLinkVariant;
  size?: ButtonLinkSize;
  className?: string;
}

const buttonLinkVariants: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-[#FF6719] text-white hover:bg-[#E55A15] active:bg-[#CC4D11] focus:ring-[#FF6719]",
  secondary:
    "bg-[#232525] text-white hover:bg-[#1a1c1c] active:bg-[#111313] focus:ring-[#232525]",
  outline:
    "bg-transparent border-2 border-[#232525] text-white hover:bg-[#232525]/10 active:bg-[#232525]/20 focus:ring-[#232525]",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-500",
};

const buttonLinkSizes: Record<ButtonLinkSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const classes = `
    ${buttonLinkVariants[variant]}
    ${buttonLinkSizes[size]}
    ${className}
    flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-center
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <Link href={href} className={classes} {...props} target="_blank">
      {children}
    </Link>
  );
}
