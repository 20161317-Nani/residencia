import darkLogo from "@/assets/logos/dark.svg";
import logo from "@/assets/logos/main.svg";
import Image from "next/image";

export function Logo({
  label = "Mezcalero",
  showImage = true,
}: {
  label?: string;
  showImage?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      {showImage && (
        <div className="relative h-8 w-8">
          <Image
            src={logo}
            fill
            className="dark:hidden"
            alt="NextAdmin logo"
            role="presentation"
            quality={100}
          />

          <Image
            src={darkLogo}
            fill
            className="hidden dark:block"
            alt="NextAdmin logo"
            role="presentation"
            quality={100}
          />
        </div>
      )}

      <span className="text-lg font-semibold">{label}</span>
    </div>
  );
}
