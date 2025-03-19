export const Courses = ({courses}) => {
    return (
      <div>
        <Course courses={courses} />
      </div>
    )
  }
  
export const Course = ({courses}) => {
    return (
      <div>
        {courses.map(course => 
          <div key={course.id}>
            <h1>
              {course.name}
            </h1>
            {course.parts.map(part =>
              <p key={part.id}>
                {part.name} {part.exercises}
              </p>
            )}
            <CourseTotal courses={courses} course={course.id}/>
          </div>
        )}
      </div>
    )
  }
  
export const CourseTotal = ({courses, course}) => {
    const courseTotalIndividual = courses.map(course => 
      course.parts.reduce((sum, part) => sum + part.exercises, 0)
    )
    return <h3>total of {courseTotalIndividual[course-1]} exercises</h3>
  }