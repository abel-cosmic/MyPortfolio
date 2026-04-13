"use client";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image";

const ProfileImage = ({
  className,
  src,
  alt,
  ...props
}: HTMLAttributes<HTMLDivElement> & { src: string; alt: string }) => (
  <div
    className={cn(
      "relative rounded-[2rem] overflow-hidden ring-4 ring-background shadow-2xl",
      className,
    )}
    {...props}
  >
    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
    <Image
      src={src}
      alt={alt}
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      fill
      priority
      sizes="(max-width: 768px) 192px, 224px"
    />
  </div>
);

export default ProfileImage;
