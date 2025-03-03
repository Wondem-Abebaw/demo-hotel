"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
interface NavProps {
  children: ReactNode;
  className?: string;
}
export function Nav({ children, className }: NavProps) {
  return (
    <nav
      className={cn(
        "bg-primary-bg text-secondary-text flex justify-center px-4",
        className
      )}
    >
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "p-4  hover:text-primary-text focus-visible:bg-primary-bg focus-visible:text-primary-text",
        pathname === props.href && " text-primary-text"
      )}
    />
  );
}
