export interface Skill {
  name: string;
  level?: SkillLevel;
  subSkills?: Skill[];
}

export type SkillLevel = 'Expert' | 'Advanced' | 'Intermediate';
