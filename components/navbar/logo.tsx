import Image from "next/image";

export const Logo = () => (
  <Image
    src="/logo-dark.png"
    alt="Logo"
    width={40}
    height={40}
    className="w-10 h-10"
    priority
  />
);
