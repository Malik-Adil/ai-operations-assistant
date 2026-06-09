"use client";

import Image from "next/image";
import { forwardRef } from "react";

const AvatarRoot = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className = "", ...props }, ref) => (
  <span
    ref={ref}
    className={`relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full ${className}`}
    {...props}
  />
));
AvatarRoot.displayName = "Avatar";

function AvatarImage({
  src,
  alt = "",
  className = "",
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={36}
      height={36}
      className={`aspect-square h-full w-full object-cover ${className}`}
    />
  );
}

function AvatarFallback({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`flex h-full w-full items-center justify-center rounded-full bg-zinc-200 text-sm font-medium text-zinc-700 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export function Avatar({
  src,
  alt,
  fallback,
  className = "",
}: {
  src: string | null | undefined;
  alt?: string;
  fallback: React.ReactNode;
  className?: string;
}) {
  return (
    <AvatarRoot className={className}>
      {src ? (
        <AvatarImage src={src} alt={alt ?? ""} />
      ) : (
        <AvatarFallback>{fallback}</AvatarFallback>
      )}
    </AvatarRoot>
  );
}
