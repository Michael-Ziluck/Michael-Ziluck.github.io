import { Experience } from './models/experience';

export const Experiences: Experience[] = [
  {
    company: 'Service Management Group',
    title: 'Senior Software Engineer',
    employed: {
      start: 'March 2021',
    },
    website: 'https://smg.com/',
    description: 'Acted as the company\'s Angular and general front-end subject-matter expert. Ran the transition from Angular '
      + 'to React, creating a platform to create new, deployable applications within minutes. Spearheaded a greenfield '
      + 'micro-front-end solution by leveraging Webpack\'s Module Federation that is used by all internal teams. Created '
      + 'a robust Angular component library that is used to develop consistent web applications. Updated legacy apps '
      + 'from AngularJS to Angular while simultaneously adding new functionality. Collaborated with development, UX, '
      + 'and product leads to define and achieve technical requirements.',
  },
  {
    company: 'Kingland Systems Corporation',
    title: 'Software Engineer',
    employed: {
      start: 'May 2019',
      end: 'March 2021',
    },
    website: 'https://kingland.com/',
    description: 'Designed and implemented components of various enterprise data management tooling. Was a '
      + 'subject-matter expert for the Angular framework. Responsible for implementation of test-driven software based '
      + 'on software designs and requirements. Part of high-level production maintenance on critical solutions. '
      + 'Progressed to full-time employment upon completion of a successful internship.',
  },
  {
    company: 'ISU—Environmental Health and Safety',
    title: 'Full-Stack Developer',
    employed: {
      start: 'August 2015',
      end: 'May 2019',
    },
    website: 'https://ehs.iastate.edu/',
    description: 'Designed and implemented software that manages the use, maintenance, and disposal of all materials '
      + 'and equipment used in campus laboratories. Single-handedly constructed reporting tools for the DHS, automated '
      + 'the process of generating NFPA 704 and other hazard signs, as well as improved and added to management '
      + 'systems for laboratories and principal investigators.',
  },
];
