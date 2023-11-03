import { Skill } from './models/skill';

export const Skills: Skill[] = [
  { name: 'Angular', level: 'Expert' },
  { name: 'TypeScript', level: 'Expert' },
  { name: 'HTML, SCSS, JavaScript', level: 'Advanced' },
  { name: 'Blazor', level: 'Advanced' },
  { name: 'Java', level: 'Advanced' },
  { name: 'C#', level: 'Intermediate' },
  {
    name: 'Cloud Services',
    subSkills: [
      { name: 'Amazon Web Services (AWS)', level: 'Advanced' },
      { name: 'Terraform', level: 'Intermediate' },
      { name: 'Azure', level: 'Advanced' },
    ],
  },
  { name: 'Document-Oriented Databases (MongoDB)', level: 'Intermediate' },
  {
    name: 'Relational Databases',
    level: 'Advanced',
    subSkills: [
      { name: 'Postgres', level: 'Advanced' },
      { name: 'SQL Server', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
    ],
  },
  { name: 'Scrum / Agile', level: 'Advanced' },
  {
    name: 'Git',
    level: 'Advanced',
    subSkills: [
      { name: 'GitHub', level: 'Expert' },
      { name: 'BitBucket', level: 'Advanced' },
      { name: 'GitLab', level: 'Advanced' },
    ],
  },
  {
    name: 'CI tooling',
    subSkills: [
      { name: 'Jenkins/CloudBees', level: 'Intermediate' },
      { name: 'GitHub Actions', level: 'Advanced' },
    ],
  },
  {
    name: 'Automated testing tools',
    subSkills: [
      { name: 'Selenium', level: 'Expert' },
      { name: 'Karma', level: 'Advanced' },
      { name: 'Jasmine', level: 'Advanced' },
      { name: 'Jest', level: 'Intermediate' },
      { name: 'Gauge', level: 'Intermediate' },
    ],
  },
  {
    name: 'Build tools',
    subSkills: [
      { name: 'Gradle', level: 'Advanced' },
      { name: 'Maven', level: 'Advanced' },
      { name: 'Webpack', level: 'Advanced' },
    ],
  },
];
