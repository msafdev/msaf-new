import Link from "next/link";

// Components
import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// Icons
import {
  FileText,
  Link2,
  MessageCircleHeart,
  Sparkles,
  MonitorSmartphone,
} from "lucide-react";
import Shine from "@/components/macro/shine";

export default function Page() {
  return (
    <>
      <section
        id="home"
        className="flex h-full w-full flex-col pt-4 md:grow md:pt-8 lg:pt-12"
      >
        <div className="pad-x relative w-full">
          <h1 className="text-balance text-left text-2xl font-medium leading-tight xs:text-3xl md:w-[60%] lg:text-4xl">
            Software Engineer
            <br />
            UI Designer
            <br />
            and Speaker
          </h1>

          <div className="pad-r absolute bottom-0 right-0 hidden flex-col items-end gap-y-2 sm:flex">
            <code className="justify-end gap-x-2 text-xs text-muted-foreground">
              Theme{" "}
              <kbd className="pointer-events-none inline-flex h-fit select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>M
              </kbd>
            </code>
            <code className="justify-end gap-x-2 text-xs text-muted-foreground">
              Command{" "}
              <kbd className="pointer-events-none inline-flex h-fit select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>F
              </kbd>
            </code>
          </div>
        </div>

        <div className="anim mt-4 grid h-fit w-full grid-cols-2 grid-rows-3 items-center justify-between border-y md:mt-8 md:flex md:grid-rows-1 lg:mt-12">
          <Link
            href={
              "https://github.com/msafdev?tab=repositories&q=&type=template"
            }
            target="_blank"
            className="md:pad-l anim group col-span-1 flex h-fit w-full items-center justify-center gap-x-2 py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2"
          >
            <Sparkles
              size={14}
              className="anim-slow delay-100 group-hover:text-sky-500"
            />
            <p className="text-center text-xs font-medium text-foreground">
              Starter
            </p>
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/1V7Qa8LvjbemeR9QcOb0p1hoVKRmp5m1i/view?usp=sharing"
            }
            target="_blank"
            className="anim group col-span-1 flex h-fit w-full items-center justify-center gap-x-2 border-l py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2"
          >
            <FileText
              size={14}
              className="anim-slow delay-100 group-hover:text-rose-600"
            />
            <p className="text-center text-xs font-medium text-foreground">
              Resume
            </p>
          </Link>
          <Link
            href={"/guestbook"}
            className="anim group col-span-1 flex h-fit w-full items-center justify-center gap-x-2 border-l-0 border-t py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2 md:border-l md:border-t-0"
          >
            <MessageCircleHeart
              size={14}
              className="anim-slow delay-100 group-hover:text-pink-500"
            />
            <p className="text-center text-xs font-medium text-foreground">
              Guestbook
            </p>
          </Link>
          <Link
            href={"https://github.com/msafdev/"}
            target="_blank"
            className="anim group col-span-1 flex h-fit w-full items-center justify-center gap-x-2 border-l border-t py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2 md:border-t-0"
          >
            <MonitorSmartphone
              size={14}
              className="anim-slow delay-100 group-hover:text-violet-600"
            />
            <p className="text-center text-xs font-medium text-foreground">
              Setup
            </p>
          </Link>
          <Link
            href={"https://msaf-link.vercel.app"}
            className="md:pad-r anim group col-span-2 flex h-fit w-full items-center justify-center gap-x-2 border-t py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2 md:border-l md:border-t-0"
          >
            <Link2
              size={14}
              className="anim-slow delay-100 group-hover:text-green-500"
            />
            <p className="text-center text-xs font-medium text-foreground">
              Link
            </p>
          </Link>
        </div>

        <div className="pad-x flex w-full flex-col justify-center py-4 md:grow md:py-8 lg:py-12">
          <div className="grid grid-cols-1 items-end gap-x-6 md:grid-cols-2">
            <div className="flex flex-col justify-between">
              <Shine className="anim mb-2 inline-flex w-fit items-center justify-center py-1">
                <span>✨ I'm open for work</span>
              </Shine>
              <h2 className="mb-3 w-full max-w-lg text-balance text-xl font-semibold text-foreground md:mb-4 md:text-2xl lg:text-3xl">
                I strive to create beatiful and useful things
              </h2>
              <p className="text-balance text-base text-muted-foreground md:max-w-sm md:text-lg lg:max-w-lg">
                Ola! My name is{" "}
                <span className="font-medium text-foreground">Salman</span>, a
                very funny-looking visual design enthusiast. I do web design,
                web development, product management, project manager, infra, and
                also a speaker. Feel free to surf around 👋
              </p>

              <h2 className="ml-auto mt-8 text-sm font-semibold uppercase text-foreground md:ml-0 md:text-base">
                Featured Projects
              </h2>
            </div>

            {/* Test */}
            <Accordion
              className="h-fit w-full md:ml-auto md:max-w-md lg:max-w-lg"
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Countify</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-muted-foreground">
                    A simple expense tracker web app that helps you to manage
                    your daily expenses. Built with{" "}
                    <span className="text-foreground">Next</span>,{" "}
                    <span className="text-foreground">Tailwind</span>, and{" "}
                    <span className="text-foreground">Supabase</span>. It is
                    still on development, so might be a bit buggy.
                  </p>
                  <div className="flex items-center justify-between gap-x-4">
                    <Badge
                      variant="secondary"
                      className="relative flex w-fit items-center gap-x-2 rounded-full"
                    >
                      <div className="h-1.5 w-1.5 animate-ping rounded-full bg-green-500" />
                      <div className="absolute left-2.5 h-1.5 w-1.5 rounded-full bg-green-500" />
                      Live
                    </Badge>
                    <Link
                      href="https://countify-wine.vercel.app"
                      target="_blank"
                      className="rounded-sm border bg-popover px-2 text-popover-foreground"
                    >
                      <code className="text-xs font-medium md:text-sm">
                        Visit Project
                      </code>
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Terma</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-muted-foreground">
                    A terminal-styled portfolio website, with functional and
                    scalable commands. Built with{" "}
                    <span className="text-foreground">Next</span> and{" "}
                    <span className="text-foreground">Tailwind</span>.
                  </p>
                  <div className="flex items-center justify-between gap-x-4">
                    <Badge
                      variant="secondary"
                      className="relative flex w-fit items-center gap-x-2 rounded-full"
                    >
                      <div className="h-1.5 w-1.5 animate-ping rounded-full bg-green-500" />
                      <div className="absolute left-2.5 h-1.5 w-1.5 rounded-full bg-green-500" />
                      Live
                    </Badge>
                    <Link
                      href="https://msaf-terminal.vercel.app"
                      target="_blank"
                      className="rounded-sm border bg-popover px-2 text-popover-foreground"
                    >
                      <code className="text-xs font-medium md:text-sm">
                        Visit Project
                      </code>
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Linkify</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-muted-foreground">
                    A little to no-code Linktree alternative with pre-made
                    components you can easily customize. Built with{" "}
                    <span className="text-foreground">Next</span> and{" "}
                    <span className="text-foreground">Tailwind</span>.
                  </p>
                  <div className="flex items-center justify-between gap-x-4">
                    <Badge
                      variant="secondary"
                      className="relative flex w-fit items-center gap-x-2 rounded-full"
                    >
                      <div className="h-1.5 w-1.5 animate-ping rounded-full bg-green-500" />
                      <div className="absolute left-2.5 h-1.5 w-1.5 rounded-full bg-green-500" />
                      Live
                    </Badge>
                    <Link
                      href="https://linkify-demo.vercel.app"
                      target="_blank"
                      className="rounded-sm border bg-popover px-2 text-popover-foreground"
                    >
                      <code className="text-xs font-medium md:text-sm">
                        Visit Project
                      </code>
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
