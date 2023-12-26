const Total = ({parts}) => {
    var total = parts.reduce((sum, part) => sum += part.exercises ,0)
  
    return (
      <p>
        Course Total: {total}
      </p>
    );
  };

  export default Total