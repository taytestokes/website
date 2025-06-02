type Experience = {
  tenure: string;
  position: string;
  company: {
    name: string;
    href: string;
  };
  contributions: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    tenure: '2023 - Present',
    position: 'Senior Software Engineer',
    company: {
      name: 'Aumni, a J.P.Morgan company',
      href: 'https://www.aumni.fund',
    },
    contributions: [
      'Led the development of the Market Insights and Analytics products that gave deeper insight and observability to market trends to empower users to make better investment decisions with their portfolio. This included making technical decisions to change the existing architecture of embedding Metabase dashboards with the goal to improve the performance, reliability, security, testability, and developer experience.',
      'Focused on curating and improving the frontend development culture through contributing to the existing Frontend Guild by implementing a new meeting format that follows the same guidelines and principles of Lean Coffee which helped promote growth opportunities for other engineers to participate in the meeting and discuss paradigms, patterns, tooling, and other related topics to help guide the future of frontend development practices at Aumni.',
    ],
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'NextJs',
      'Styled Components',
      'Cypress',
      'Vitest',
      'Storybook',
      'Ruby',
      'Ruby on Rails',
    ],
  },
  {
    tenure: '2021 - 2023',
    position: 'Software Engineer',
    company: {
      name: 'Podium',
      href: 'https://www.podium.com',
    },
    contributions: [
      "Focused on improving the performance and developer experience of Podium's main webapplication, a monolithic React application, by improving build script times by over 90%, defining and enforcing code patterns and standards through custom lint rules, deprecating and replacing unmaintained and bottle necking technologies, reworking the applications CI/CD process into a healthy and efficient flow, and improving observability of the application by implementing tools to monitor and alert application status.",
      'Innovated with the Websuite Marketing team to develop and implement the Hosted Forms product, which allows clients to create and host custom surveys for their business.',
      'Helped curate the culture of frontend development by hosting the Frontend Guild, which is a bi-weekly meeting to allow the frontend engineers to congregate and have meaningful discussions and presentations around frontend paradigms, tooling, and the future of frontend development practices at Podium.',
    ],
    technologies: [
      'JavaScript',
      'React',
      'GraphQL',
      'React Testing Library',
      'Jest',
      'Elixir',
      'Phoenix',
      'GitLab',
    ],
  },

  {
    tenure: '2019 - 2021',
    position: 'Software Engineer',
    company: {
      name: 'MX Technologies',
      href: 'https://www.mx.com',
    },
    contributions: [
      'Collaborated with engineering, design, quality assurance, and product teams to innovate and develop MoneyMap, a widget based financial management tool that empowered 60+ million users to take control of their financial habits.',
      'Helped lead the creation of Finstrong, an application that provides users with a clear path to financial stability and growth by gamifying their finances, through building out an intuitive frontend application that utilizes data visualizations to surface financial data to the users.',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Redux',
      'React Testing Library',
      'Jest',
      'Ruby',
      'Ruby on Rails',
    ],
  },
];
