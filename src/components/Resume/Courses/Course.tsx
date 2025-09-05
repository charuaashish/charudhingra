import React from 'react';

import type { Course as CourseType } from '@/data/resume/courses';

interface CourseProps {
  data: CourseType;
  last?: boolean;
}

const Course: React.FC<CourseProps> = ({ data, last = false }) => (
  <li className="Job-container">
    <p className="course-name">{data.title}</p>
  </li>
);

export default Course;
