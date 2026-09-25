import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Palette,
  Sparkles,
  Users2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, scalable web applications built with modern tooling and clean architecture.",
  },
  {
    icon: Palette,
    title: "UI Development",
    description:
      "Clean, responsive interfaces that feel intuitive on every screen size.",
  },
  {
    icon: Users2,
    title: "Consulting",
    description:
      "Practical guidance to help you plan and ship your next digital project.",
  },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid bg-radial-fade" />

        {/* Blob utama */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[120px]" />

        {/* Blob kiri */}
        <div className="animate-blob absolute top-16 left-10 -z-10 h-72 w-72 rounded-full bg-accent/40 blur-[90px]" />

        {/* Blob kanan */}
        <div className="animate-blob absolute top-40 right-10 -z-10 h-72 w-72 rounded-full bg-[#FFDE59]/40 blur-[90px] [animation-delay:4s]" />

        {/* Blob bawah kiri */}
        <div className="animate-blob absolute bottom-10 left-1/3 -z-10 h-64 w-64 rounded-full bg-[#7B5CFF]/35 blur-[90px] [animation-delay:2s]" />

        {/* Blob bawah kanan */}
        <div className="animate-blob absolute right-1/4 bottom-20 -z-10 h-56 w-56 rounded-full bg-secondary/50 blur-[90px] [animation-delay:6s]" />

        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
          {/* Sparkle dekorasi */}
          <Sparkles className="absolute top-10 right-16 size-6 animate-pulse text-[#FFDE59]" />

          <Sparkles className="absolute bottom-20 left-12 size-5 animate-pulse text-accent [animation-delay:1s]" />

          <Sparkles className="absolute top-1/3 left-8 size-4 animate-pulse text-primary [animation-delay:2s]" />

          {/* Hero Content */}
          <div className="animate-fade-up mx-auto max-w-3xl text-center">
            {/* ================= BADGE ================= */}
            <div
              className="
                mx-auto
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#FF498C]/20
                bg-[#FF498C]/10
                px-4
                py-1.5
                text-sm
                font-medium
                text-[#190399]
                backdrop-blur-sm
              "
            >
              <Sparkles className="size-3.5 text-[#190399]" />

              Welcome to MyWebsite
            </div>

            {/* Heading */}
            <h1 className="text-gradient text-4xl font-bold tracking-tight md:text-6xl">
              Build something meaningful with technology.
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We help individuals and businesses build modern, simple, and
              useful digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-accent px-6 text-accent-foreground shadow-lg shadow-accent/30 hover:bg-primary"
                )}
              >
                Explore Services

                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "rounded-full border-border px-6 text-foreground hover:bg-secondary/30"
                )}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            What we do
          </h2>

          <p className="mt-3 text-muted-foreground">
            A small set of things we focus on, done well.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="
                group
                border
                border-border
                bg-card/80
                transition-all
                hover:-translate-y-1
                hover:border-primary/20
                hover:shadow-xl
                hover:shadow-primary/10
              "
            >
              <CardHeader>
                <div
                  className="
                    mb-3
                    flex
                    size-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary/10
                    text-primary
                    transition-colors
                    group-hover:bg-primary/20
                  "
                >
                  <Icon className="size-5" />
                </div>

                <CardTitle className="text-base">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-border
            bg-card/80
            px-8
            py-14
            text-center
          "
        >
          {/* Background CTA */}
          <div className="bg-grid bg-radial-fade absolute inset-0 opacity-60" />

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Let&apos;s talk about what you&apos;re building and how we can
              help.
            </p>

            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 rounded-full bg-accent px-6 text-accent-foreground hover:bg-primary"
              )}
            >
              Get in touch

              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}