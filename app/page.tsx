// Components
import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex h-full w-full flex-col pt-4 md:grow md:pt-8 lg:pt-12"
      >
        <div className="pad-x relative w-full">
          <h1 className="text-balance text-center text-2xl font-semibold leading-tight xs:text-3xl sm:text-left md:w-[70%] lg:text-4xl">
            Visual Driven<span className="mx-2 text-yellow-400">★</span>Web
            Developer, converting ideas into reality
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
          <div className="md:pad-l anim col-span-1 flex h-fit w-full items-center justify-center py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2">
            <p className="text-center text-xs font-medium text-foreground">
              Jira
            </p>
          </div>
          <div className="anim col-span-1 flex h-fit w-full items-center justify-center border-l py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2">
            <p className="text-center text-xs font-medium text-foreground">
              Typescript
            </p>
          </div>
          <div className="anim col-span-1 flex h-fit w-full items-center justify-center border-l-0 border-t py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2 md:border-l md:border-t-0">
            <p className="text-center text-xs font-medium text-foreground">
              Hygraph
            </p>
          </div>
          <div className="anim col-span-1 flex h-fit w-full items-center justify-center border-l border-t py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2 md:border-t-0">
            <p className="text-center text-xs font-medium text-foreground">
              Next
            </p>
          </div>
          <div className="md:pad-r anim col-span-2 flex h-fit w-full items-center justify-center border-t py-4 font-medium transition-all duration-200 ease-in-out hover:w-full hover:bg-muted md:w-1/2 md:border-l md:border-t-0">
            <p className="text-center text-xs font-medium text-foreground">
              Github
            </p>
          </div>
        </div>

        <div className="pad-x flex w-full flex-col justify-center py-4 md:grow md:py-8 lg:py-12">
          <div className="grid grid-cols-1 items-end gap-x-6 md:grid-cols-2">
            <div className="flex flex-col justify-between">
              <p className="mb-2 w-full text-sm font-medium uppercase text-muted-foreground">
                Works
              </p>
              <h2 className="mb-4 w-full text-balance text-xl font-semibold text-foreground md:mb-6 md:text-2xl lg:text-3xl max-w-lg">
                I strive to create beatiful and useful things
              </h2>
              <p className="text-balance text-base text-muted-foreground md:max-w-sm md:text-lg lg:max-w-lg">
                Ola! My name is <span className="font-semibold">Salman</span>, a
                very funny-looking visual design enthusiast. I do web design,
                web development, product management, project manager, infra, and
                also a speaker. Feel free to surf around 👋
              </p>

              <h2 className="ml-auto mt-8 font-semibold uppercase text-foreground md:ml-0">
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
                <AccordionTrigger>
                  Countify
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-muted-foreground">
                    A simple expense tracker web app that helps you to manage
                    your daily expenses. Built with{" "}
                    <span className="text-foreground">Next</span>,{" "}
                    <span className="text-foreground">Tailwind</span>, and{" "}
                    <span className="text-foreground">Supabase</span>.
                  </p>
                  <Badge
                    variant="secondary"
                    className="relative flex w-fit items-center gap-x-2 rounded-full"
                  >
                    <div className="h-1.5 w-1.5 animate-ping rounded-full bg-green-500" />
                    <div className="absolute left-2.5 h-1.5 w-1.5 rounded-full bg-green-500" />
                    Live
                  </Badge>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Terma
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-muted-foreground">
                    A terminal-styled portfolio website, with functional and
                    scalable commands. Built with{" "}
                    <span className="text-foreground">Next</span>, and{" "}
                    <span className="text-foreground">Tailwind</span>.
                  </p>
                  <Badge
                    variant="secondary"
                    className="relative flex w-fit items-center gap-x-2 rounded-full"
                  >
                    <div className="h-1.5 w-1.5 animate-ping rounded-full bg-green-500" />
                    <div className="absolute left-2.5 h-1.5 w-1.5 rounded-full bg-green-500" />
                    Live
                  </Badge>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Noteify
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-muted-foreground">
                    A note taking website that can help you to write down,
                    manage, and visualize your thoughts and ideas. Built with{" "}
                    <span className="text-foreground">Next</span>, and{" "}
                    <span className="text-foreground">Tailwind</span>.
                  </p>
                  <Badge
                    variant="secondary"
                    className="relative flex w-fit items-center gap-x-2 rounded-full"
                  >
                    <div className="h-1.5 w-1.5 animate-ping rounded-full bg-yellow-500" />
                    <div className="absolute left-2.5 h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    Building
                  </Badge>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
