import React from 'react';

import type { Course as CourseType } from '@/data/resume/courses';

interface CourseProps {
  data: CourseType;
  last?: boolean;
}

const Course: React.FC<CourseProps> = ({ data, last = false }) => (
  <li className="Job-container" style={{transform: 'lowercase'}}>
      <p className="course-name" style={{transform: 'lowercase'}}>{data.title}</p>
   
  </li>
);

export default Course;
