import Image from "next/image";
import { Button } from "@spirit-ui/react";

export default function Page() {
  return (
    <>
      {/**
       *
       * Ignore the mess for now, just trying to move fast to build a rough concept
       *
       * */}
      <main className="w-full sm:max-w-[720px] mx-auto py-16 flex flex-col gap-16">
        {/* Hero */}
        <div className="px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex shrink-0 rounded-full border-2 border-zinc-200">
            <Image
              aria-hidden
              className="rounded-full border-2 border-white"
              src="/headshot.jpeg"
              alt="Tayte Stokes"
              width={125}
              height={125}
            />
          </div>
          <hgroup className="flex flex-col items-center md:items-start gap-2 max-md:text-center">
            <h1 className="text-4xl font-semibold  tracking-tight">
              Tayte Stokes
            </h1>
            <p className="text-medium text-zinc-700">
              Software Engineer with experience in building performant,
              scalable, secure, and accessible web applications.
            </p>
          </hgroup>
        </div>

        {/* Projects */}
        <div className="px-4">
          <h2 className="text-xl font-semibold  tracking-tight mb-8">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-4">
            <a
              href="https://afterthoughts.dev"
              rel="noopener noreferrer"
              target="_blank"
              className="flex transition duration-150 ease-in rounded-md hover:-translate-y-1"
            >
              <div className="flex flex-col items-start gap-4 p-4 bg-zinc-100 rounded-md">
                <div className="flex-1">
                  <p className="text-lg font-medium ">After Thoughts</p>
                  <p className="text-sm text-zinc-700">
                    A software development blog to share ideas and knowledge on
                    different programming paradigms and technologies.
                  </p>
                </div>
                <p className="text-xs text-zinc-500">afterthoughts.dev</p>
              </div>
            </a>

            <a
              href="https://spirit-ui.dev"
              rel="noopener noreferrer"
              target="_blank"
              className="flex transition duration-150 ease-in rounded-md hover:-translate-y-1"
            >
              <div className="flex flex-col items-start gap-4 p-4 bg-zinc-100 rounded-md">
                <div className="flex-1">
                  <p className="text-lg font-medium ">Spirit UI</p>
                  <p className="text-sm text-zinc-700">
                    A component library for building web applications with
                    consistent expereinces.
                  </p>
                </div>
                <p className="text-xs text-zinc-500">spirit-ui.dev</p>
              </div>
            </a>
          </div>
        </div>

        {/* Experience */}
        <div className="px-4">
          <h2 className="text-xl font-semibold tracking-tight mb-8">
            Experience
          </h2>

          <div className="grid gap-8">
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8">
              <p className="min-w-30 text-xs text-zinc-500 font-semibold uppercase tracking-wide mt-1.5 text-nowrap">
                2023 - Present
              </p>
              <div>
                <p className="text-lg font-medium">Senior Software Engineer</p>
                <a
                  href="https://www.aumni.fund"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex transition duration-150 ease-in rounded-md mb-4"
                >
                  <p className="flex items-center text-sm text-zinc-500 ">
                    Aumni, a J.P.Morgan company
                  </p>
                </a>
                <p className="text-sm text-zinc-700 mb-4">
                  Led the development of the Market Insights and Analytics
                  products that gave deeper insight and observability to market
                  trends to empower users to make better investment decisions
                  with their portfolio. This included making technical decisions
                  to change the existing architecture of embedding Metabase
                  dashboards with the goal to improve the performance,
                  reliability, security, testability, and developer experience.
                </p>
                <p className="text-sm text-zinc-700 mb-4">
                  Focused on curating and improving the frontend development
                  culture through contributing to the existing Frontend Guild by
                  implementing a new meeting format that follows the same
                  guidelines and principles of Lean Coffee which helped promote
                  growth opportunities for other engineers to participate in the
                  meeting and discuss paradigms, patterns, tooling, and other
                  related topics to help guide the future of frontend
                  development practices at Aumni.
                </p>
                <div className="flex items-center gap-1 flex-wrap">
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    JavaScript
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    TypeScript
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    React
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    NextJs
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    Cypress
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    Storybook
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    Ruby
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    Ruby on Rails
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8">
              <p className="min-w-30 text-xs text-zinc-500 font-semibold uppercase tracking-wide mt-1.5 text-nowrap">
                2021 - 2023
              </p>
              <div>
                <p className="text-lg font-medium">Software Engineer</p>
                <a
                  href="https://www.podium.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex transition duration-150 ease-in rounded-md mb-4"
                >
                  <p className="text-sm text-zinc-500">Podium</p>
                </a>
                <p className="text-sm text-zinc-700 mb-4">
                  Focused on improving the performance and developer experience
                  of Podium's main web application, a monolithic React
                  application, by improving build script times by over 90%,
                  defining and enforcing code patterns and standards through
                  custom lint rules, deprecating and replacing unmaintained and
                  bottle necking technologies, reworking the applications CI/CD
                  process into a healthy and efficient flow, and improving
                  observability of the application by implementing tools to
                  monitor and alert application status.
                </p>
                <p className="text-sm text-zinc-700 mb-4">
                  Innovated with the Websuite Marketing team to develop and
                  implement the Hosted Forms product, which allows clients to
                  create and host custom surveys for their business.
                </p>
                <p className="text-sm text-zinc-700 mb-4">
                  Helped curate the culture of frontend development by hosting
                  the Frontend Guild, which is a bi-weekly meeting to allow the
                  frontend engineers to congregate and have meaningful
                  discussions and presentations around frontend paradigms,
                  tooling, and the future of frontend development practices at
                  Podium.
                </p>
                <div className="flex items-center gap-1 flex-wrap">
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    JavaScript
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    React
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    GraphQL
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    Elixir
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    Phoenix
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    GitLab
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8">
              <p className="min-w-30 text-xs text-zinc-500 font-semibold uppercase tracking-wide mt-1.5 text-nowrap">
                2019 - 2021
              </p>
              <div>
                <p className="text-lg font-medium">Software Engineer</p>
                <a
                  href="https://www.mx.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex transition duration-150 ease-in rounded-md mb-4"
                >
                  <p className="text-sm text-zinc-500">MX Technologies</p>
                </a>
                <p className="text-sm text-zinc-700 mb-4">
                  Collaborated with engineering, design, quality assurance, and
                  product teams to innovate and develop MoneyMap, a widget based
                  financial management tool that empowered 60+ million users to
                  take control of their financial habits.
                </p>
                <p className="text-sm text-zinc-700 mb-4">
                  Helped lead the creation of Finstrong, an application that
                  provides users with a clear path to financial stability and
                  growth by gamifying their finances, through building out an
                  intuitive frontend application that utilizes data
                  visualizations to surface financial data to the users.
                </p>
                <div className="flex items-center gap-1 flex-wrap">
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    JavaScript
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    React
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    Redux
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    Ruby
                  </div>
                  <div className="bg-zinc-100 text-xs px-2 py-1 rounded-full">
                    Ruby on Rails
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full sm:max-w-[720px] mx-auto px-4 py-8 flex items-center justify-between">
        <p className="text-xs text-zinc-700">
          &copy; {new Date().getFullYear()} - Tayte Stokes
        </p>
        <a href="https://github.com/taytestokes/website">
          <p className="text-xs text-zinc-700">View Source</p>
        </a>
      </footer>
    </>
  );
}
