export type SkillsData = {
  category: string;
  skills: string[];
};

export const skills: SkillsData[] = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'JavaScript',
      'TailwindCSS',
      'Relay',
      'Remix / React Router v7',
      'TypeScript',
      'D3.js',
      'Shadcn',
    ],
  },
  {
    category: 'Backend and Databases',
    skills: [
      'Python',
      'FastAPI',
      'GraphQL',
      'SQLAlchemy',
      'MySQL',
      'Django',
      'Express',
      'DrizzleORM',
      'PostgreSQL',
    ],
  },
  {
    category: 'DevOps and Tooling',
    skills: [
      'Git',
      'Poetry',
      'Docker',
      'AWS',
      'Github',
      'Vite',
      'Ubuntu',
      'Linux',
    ],
  },
  {
    category: 'Robotics',
    skills: ['ROS 2', 'C++', 'ROS 2 Control', 'Python'],
  },
  {
    category: 'Data Science',
    skills: ['Python', 'matplotlib', 'numpy', 'Jupyter'],
  },
  {
    category: 'Other',
    skills: ['Java', 'C'],
  },
];
