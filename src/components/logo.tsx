import darkLogo from "@/assets/logos/dark.svg";
import logo from "@/assets/logos/main.svg";
import Image from "next/image";
import type { SVGProps } from "react";

type SVGPropsType = SVGProps<SVGSVGElement>;

function MezcalIcon(props: SVGPropsType) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      {/* Botella */}
      <path
        d="M10 2h4v3l2 2v13a2 2 0 01-2 2H10a2 2 0 01-2-2V7l2-2V2z"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
      {/* Etiqueta */}
      <rect
        x="10"
        y="10"
        width="4"
        height="5"
        fill="currentColor"
        rx="1"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <MezcalIcon className="text-black dark:text-white" />
      <span className="text-lg font-bold text-black dark:text-white">
        Mezcalero
      </span>
    </div>
  );
}