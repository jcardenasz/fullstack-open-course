const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part, exercises }) => {
  return <p>{part} {exercises}</p>;
};

const Content = ({ parts }) => {
  const part1 = parts[0];
  const part2 = parts[1];
  const part3 = parts[2];

  return (
    <div>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const infoObject = {
    course: 'Half Stack application development',
    parts: [
      { 
        name: 'Fundamentals of React', 
        exercises: 10 
      },
      { 
        name: 'Using props to pass data', 
        exercises: 7 
      },
      { 
        name: 'State of a component', 
        exercises: 14 
      }
    ]
  };

  return (
    <div>
      <Header course={infoObject.course} />
      <Content parts={infoObject.parts} />
      <Total parts={infoObject.parts} />
    </div>
  );
};

export default App;
