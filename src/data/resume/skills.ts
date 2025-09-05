export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}
const skills: Skill[] = [
  {
    title: 'T-SQL',
    competency: 5,
    category: ['Database Languages', 'Data Engineering'],
  },
  {
    title: 'PL/SQL',
    competency: 5,
    category: ['Database Languages', 'Data Engineering'],
  },
  {
    title: 'BI Development',
    competency: 4,
    category: ['Business Intelligence', 'Data Engineering'],
  },
  {
    title: 'ETL Development',
    competency: 4,
    category: ['Business Intelligence', 'Data Engineering'],
  },
  {
    title: 'Data Governance',
    competency: 4,
    category: ['Data Governance', 'Data Management'],
  },
  {
    title: 'Data Quality',
    competency: 4,
    category: ['Data Governance', 'Data Management'],
  },
  {
    title: 'Metadata Management',
    competency: 4,
    category: ['Data Governance', 'Data Management'],
  },
  {
    title: 'Data Lineage',
    competency: 3,
    category: ['Data Governance', 'Data Management'],
  },
  {
    title: 'Data Integration',
    competency: 4,
    category: ['Data Engineering', 'Data Management'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Data Reporting & Visualization',
    competency: 4,
    category: ['Data Science', 'Business Intelligence'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
