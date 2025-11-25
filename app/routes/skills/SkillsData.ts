export type SkillsData = {
  category: string;
  skills: string[];
};

export const skills: SkillsData[] = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'TypeScript', 'C++'],
  },
  {
    category: 'Frontend',
    skills: [
      'TailwindCSS',
      'Relay',
      'React',
      'React Router v7',
      'TypeScript',
      'Shadcn',
      'Vite',
      'Astro',
    ],
  },
  {
    category: 'Backend and Databases',
    skills: [
      'Python',
      'FastAPI',
      'GraphQL',
      'gRPC',
      'SQLAlchemy',
      'pgvector',
      'MySQL',
      'NestJS',
      'DrizzleORM',
      'PostgreSQL',
    ],
  },
  {
    category: 'Machine Learning and Data Science',
    skills: [
      'Python',
      'matplotlib',
      'numpy',
      'Jupyter',
      'PyTorch',
      'scikit-learn',
      'SQL',
    ],
  },
  {
    category: 'Robotics',
    skills: ['ROS 2', 'C++', 'ROS 2 Control', 'Python', 'Foxglove'],
  },
  {
    category: 'DevOps',
    skills: ['Git', 'Docker', 'AWS', 'Github', 'Ubuntu'],
  },
  {
    category: 'Tooling',
    skills: ['ESLint', 'Prettier', 'Turborepo', 'uv', 'pnpm'],
  },
  {
    category: 'Graphics',
    skills: ['WebGL2'],
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Expo'],
  },
];
