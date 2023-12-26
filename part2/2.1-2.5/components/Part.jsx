const Part = ({marts}) => {
    var value = marts.map(mart => <p>{mart.name} {mart.exercises}</p>)
    
    return (
      <div>{value}</div>
      
    );
  };

  export default Part