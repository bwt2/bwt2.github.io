export type ExperienceData = {
  company: string;
  title: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  href?: string;
  bulletPoints?: string[];
};

export const experiences: ExperienceData[] = [
  {
    company: 'oNex',
    title: 'Software Engineer',
    location: 'Sydney, NSW',
    startDate: new Date(2025, 4),
    endDate: null,
    href: 'https://www.onexhq.com',
    bulletPoints: [
      'Designing and implementing scalable data pipeline for ingesting and preprocessing mobile time-series data, supporting continuous online learning of downstream ML models.',
      'Built personalized content-based recommendation service with Python, embedding models, and vector databases for fast ANN vector search and tailored user recommendations, integrating with our backend using gRPC.',
      'Building responsive mobile UIs in React Native, integrating GraphQL backend using Relay.',
      'Collected user feedback and proposed landing page improvements to boost engagement; implemented features using Astro, TypeScript, TailwindCSS, and SolidJS via an island architecture.',
    ],
  },
  {
    company: 'Sydney Interplanetary Rover Initiative (SIRI)',
    title: 'Software Engineer',
    location: 'Sydney, NSW',
    startDate: new Date(2024, 4),
    endDate: new Date(2025, 11),
    href: 'https://www.linkedin.com/company/sydney-interplanetary-rover-initiative/',
    bulletPoints: [
      'Led development of base station control panel for remote command and telemetry of our flagship rover using Foxglove, React, and ROS2.',
      "Implemented rover's autonomous AI in the form of a behavior tree using BehaviorTree.CPP and BehaviorTree.ROS in C++.",
      'Developed ROS2 C++ controllers for autonomous and manual rover steering (spin and 4-wheel convergent ackermann) alongside ESTOP and keep alive mechanisms for rover safety using Python and C++ ROS2 nodes.',
      'Upgraded simulation and deployment workflows to follow ROS2 best practices (upgrading to Python, xacro urdfs, docker).',
    ],
  },
  {
    company: 'USYD Cybersecurity Society',
    title: 'Backend Developer',
    location: 'Sydney, NSW',
    startDate: new Date(2024, 7),
    endDate: new Date(2024, 12),
    href: 'https://usydcyber.com/',
    bulletPoints: [
      'Built Django REST API endpoints to serve team and member data from PostgreSQL.',
      'Added tooling to auto-generate database schema diagrams, improving internal documentation.',
    ],
  },
  {
    company: 'Sydney Institute for Astronomy (SIfA)',
    title: 'Undergraduate Research Assistant',
    location: 'Sydney, NSW',
    startDate: new Date(2024, 2),
    endDate: new Date(2024, 5),
    href: 'https://sifa.sydney.edu.au/research/#Radio-Transients',
    bulletPoints: [
      'Created automated data retrieval and crossmatching Python program using the Astroquery CASDA API to investigate viability of exoplanet detection by radio waves, found 2 candidate planetary systems satisfying criteria.',
    ],
  },
  {
    company: 'Sydney Institute for Astronomy (SIfA)',
    title: 'Undergraduate Research Assistant',
    location: 'Sydney, NSW',
    startDate: new Date(2023, 8),
    endDate: new Date(2023, 12),
    href: 'https://sifa.sydney.edu.au/research/#Radio-Transients',
    bulletPoints: [
      "Analysed MEERKAT radio telescope time series data using pandas, numpy, and matplotlib to document changes from a particular fast radio burst (FRB) from 2019 to 2022, narrowing down theoretical models for the FRB's source.",
    ],
  },
  {
    company: 'Coles Group',
    title: 'Service and Trolleys Team Member',
    location: 'Sydney, NSW',
    startDate: new Date(2023, 2),
    endDate: new Date(2023, 8),
  },
];
