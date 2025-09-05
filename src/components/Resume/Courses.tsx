import React from 'react';

import type { Course as CourseType } from '@/data/resume/courses';

import Course from './Courses/Course';

interface CoursesProps {
  data: CourseType[];
}

const getRows = (courses: CourseType[]) =>
  courses.map((course, idx) => (
    <Course data={course} key={course.title} last={idx === courses.length - 1} />
  ));

const Courses: React.FC<CoursesProps> = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Key Acheievements</h3>
    </div>
    {getRows(data)}
  </div>
);

export default Courses;
