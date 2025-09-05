/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Capgemini Solutions Canada Inc.',
    position: 'Senior Manager',
    url: 'https://www.capgemini.com/ca-en/',
    startDate: 'August 2022',
    endDate: 'July 2024',
    highlights: [
      'Led a team to design, implement, and integrate Data Governance, Data Quality, and Data Privacy solutions across enterprise platforms.',
      'Collected & maintained metadata across enterprise applications to support data cataloging, lineage tracking, and governance initiatives, guiding team members in these efforts.',
      'Developed and maintained Glossaries, Lineage, and Data Asset Inventory in Informatica Axon to strengthen enterprise-wide data governance practices, with direct oversight and individual contributions.',
      'Built Data Quality rules in Informatica Analyst and ETL mappings in IDQ Developer, monitored KPIs, and reported data health to stakeholders, combining leadership with hands-on execution.',
      'Partnered with business and stakeholders to identify opportunities, plan roadmaps, and ensure on-time delivery of governance initiatives',
    ],
  },
  {
    name: 'Capgemini America Inc.',
    position: 'Senior Manager',
    url: 'https://www.capgemini.com/us-en/',
    startDate: 'Oct 2021',
    endDate: 'August 2022',
    highlights: [
      'Design and implement the operations of key strategic data governance, data quality and data privacy management solutions.',
      'Recruited, trained, and mentored team members on tools, processes, and best practices',
      'Identify and discuss new opportunities with business partners and turn them into concrete initiatives',
      'Evaluate and address data management challenges, and providing solutions to regional/national level data regulatory mandates.',
      'Work on enterprise products and services, and partner with the business to identify new opportunities and convert them into actionable initiatives and roadmaps.',
    ],
  },
  {
    name: 'Apex Systems LLC',
    position: 'Database Developer',
    url: 'https://www.apexsystems.com/',
    startDate: 'Dec 2019',
    endDate: 'May 2021',
    highlights: [
      'Created and maintained database schema objects (tables, views, stored procedures, triggers) ensuring referential integrity in Teradata.',
      'Developed scripts for end-to-end database testing and migration.',
      'Conducted pre-UAT and UAT validation for incentive systems, ensuring smooth deployment.',
      'Analyzed dependencies and prepared roadmaps for database migration initiatives.',
    ],
  },
  {
    name: 'Business Intelli Solutions Inc.',
    position: 'Software Developer',
    url: 'https://www.businessintelli.com/',
    startDate: 'Dec 2017',
    endDate: 'November 2019',
    highlights: [
      'Curated and maintained metadata across enterprise systems, supporting data cataloging, lineage tracking',
      'Added and maintained Glossaries, Lineage, and Data Asset Inventory in Informatica Axon to strengthen enterprise-wide data governance practices.',
      'Implemented Data Quality rules in Informatica Analyst, built ETL mappings in IDQ Developer, and monitored KPIs & data quality dashboard.',
      'Designed and implemented stored procedures, complex queries, and reports to provide actionable insights to business stakeholders.',
    ],
  },
  {
    name: 'Business Intelli Solutions Inc.',
    position: 'SoftwareDeveloper',
    url: 'https://www.businessintelli.com/',
    startDate: 'April 2017',
    endDate: 'Dec 2017',
    highlights: [
      'Engaged with clients to gather requirements and develop SQL queries for customers preferred mode of communications.',
      'Facilitated data to the team by developing and executing complex queries in Oracle (SQL Developer)',
      'Performed ORT testing for the communications sent out to the customers.',
      'Designed and developed ad-hoc reports and trend analyses to provide actionable insights.',
    ],
  },
  {
    name: 'Infosys',
    position: 'Tehcnology Analyst',
    url: 'https://www.infosys.com/',
    startDate: 'Mar 2010',
    endDate: 'Nov 2016',
    highlights: [
      'Collaborated with stakeholders to gather requirements, perform impact analysis, and design technical solutions for data integration and reporting.',
      'Designed, developed, tested, and deployed SSIS packages for ETL workflows across multiple data sources, ensuring reliable and automated data pipelines.',
      'Developed and optimized database objects (schemas, tables, views, indexes, stored procedures, and complex queries) in MS SQL Server to improve performance (statistical reporting efficiency got improved by >25%) and maintain data integrity.',
      'Built and maintained SSRS reports and dashboards for operational insights and business decision-making.',
      'Implemented automation and monitoring solutions for ETL jobs and scheduled processes, improving efficiency and reducing manual intervention.',
    ],
  },
];

export default work;
