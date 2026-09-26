
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { useFavorite } from "@/context/FavoriteContext";
import { useTheme } from "@/context/ThemeContext";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/profile", label: "Profile" },
  { href: "/contact", label: "Contact" },
  { href: "/users", label: "Users" },
  { href: "/favorites", label: "Favorite" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { name, submitted } = useUser();
  const { favorites } = useFavorite();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-4xl px-4">
      <nav className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-background/70 px-4 py-2 shadow-lg shadow-black/20 backdrop-blur-xl">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-sm font-bold tracking-tight"
        >
          MyWebsite
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-1 text-sm text-muted-foreground sm:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 transition-colors hover:text-foreground",
                  isActive && "bg-foreground/10 text-foreground"
                )}
              >
                {link.label}

                {link.href === "/favorites" &&
                  favorites.length > 0 && (
                    <Badge
                      variant="secondary"
                      className="ml-1 px-1.5 py-0 text-xs font-medium"
                    >
                      ({favorites.length})
                    </Badge>
                  )}
              </Link>
            );
          })}
        </div>

        {/* Greeting */}
        {submitted && (
          <span className="whitespace-nowrap text-sm font-medium">
            Hi, {name} 👋
          </span>
        )}

        {/* Dark / Light Mode Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Light Mode" : "Dark Mode"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-foreground/10"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Contact Button */}
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "sm" }),
            "rounded-full"
          )}
        >
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
