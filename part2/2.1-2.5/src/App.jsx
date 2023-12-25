

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = ({marts}) => {
  var value = marts.map(mart => <p>{mart.name} {mart.exercises}</p>)
  
  return (
    <div>{value}</div>
    
  );
};

const Content = ({farts}) => {
  return (
    <div>
      <Part marts = {farts}></Part>
    </div>
  );
};

const Total = ({parts}) => {
  var total = parts.reduce((sum, part) => sum += part.exercises ,0)

  return (
    <p>
      Course Total: {total}
    </p>
  );
};

const Course = ({course}) =>{
  return <div><Header course = {course}></Header>
    <Content farts={course.parts} />
    <Total parts={course.parts} />
 </div>

}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
      {
        name:" Hello world",
        exercises: 15,
      }
    ],
  };

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  
    
    return (
      <div>
      <h1> Web development</h1>
      <Course course={courses[0]}></Course>
      <Course course={courses[1]}></Course> 
      </div>
      
    )

    /*<div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>*/
};

export default App