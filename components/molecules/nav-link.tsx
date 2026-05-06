"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`inline-flex min-h-12 items-center px-6 text-sm font-black uppercase transition-all border-4 border-[var(--text-primary)] ${
        isActive
          ? "bg-[var(--accent)] text-[var(--accent-soft-text)] shadow-none translate-x-[4px] translate-y-[4px]"
          : "bg-transparent text-[var(--text-primary)] shadow-[4px_4px_0px_0px_var(--text-primary)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
      }`}
    >
      {label}
    </Link>
  );
}
