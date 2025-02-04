'use client';

import useApi from '../api/useApi';

export default function CourseList() {
  const { data: courseList, loading, error } = useApi('/api/learner_home/init/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Courses</h1>
      <br />
      <ul>
        {courseList.courses.map((courseData, index) => {
          const { course, courseProvider, courseRun } = courseData;
          return (
            <li key={index}>
              <div>
                <strong>Course Number:</strong> {course.courseNumber}
              </div>
              <div>
                <strong>Course Name:</strong> {course.courseName}
              </div>
              <div>
                <strong>Course Provider:</strong> {courseProvider.name}
              </div>
              <div>
                <strong>Start Date:</strong> {new Date(courseRun.startDate).toLocaleDateString()}
              </div>
              <hr />
            </li>
          );
        })}
      </ul>



      {/* <ul>
        Course Number: {courseList.courses[0].course.courseNumber}
        <br />
        Course Name: {courseList.courses[0].course.courseName}
        <br />
        Course Provider: {courseList.courses[0].courseProvider.name}
        <br />
        Start Date: {courseList.courses[0].courseRun.startDate}
      </ul> */}
    </div>
  );
}
