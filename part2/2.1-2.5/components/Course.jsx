import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) =>{
    return <div><Header course = {course}></Header>
      <Content farts={course.parts} />
      <Total parts={course.parts} />
   </div>
  
  }

  export default Course