import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const titles = [("Give feeback"), ("Statistics")];
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  

  const handleClick2 =() =>
  {
    let number = Math.floor((Math.random() * 7) + 1)
    setSelected(number)
  }

  const vote = () =>
  {
    const copy =[...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log(votes)
    

  }

  const highestVotes = Math.max(...votes);
  // set a value with the correct anecdote based on the index of the value with the most votes
  const winner = anecdotes[votes.indexOf(highestVotes)];

  

  return (
    <div>
      <Header name={titles[0]}></Header>
      <Button handleClick={() => setGood(good + 1)} text="good"></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"></Button>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"></Button>
      <Header name={titles[1]}></Header>
      <Statistics good={good} neutral={neutral} bad={bad} name="Good" name1="Neurtal" name2="Bad"></Statistics>
      <Anecdotes anecdotes = {anecdotes} selected = {selected}></Anecdotes>
      <div><button onClick = {handleClick2}>Next Anecdote</button></div>
      <div><button onClick = {vote}>Vote</button></div>
      <WinningAnecdote winner = {winner}></WinningAnecdote>
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.name}</h1>
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const Statistics = (props) => {
  var total = props.good + props.bad + props.neutral;
  if (total === 0) {
    return (
      <div>
        Total = 0
      </div>
    )
  }
  return <div>
    <p>{props.name} {props.good}</p>
    <p>{props.name1} {props.neutral}</p>
    <p>{props.name2} {props.bad}</p>
    <p>Total: {total}</p>
    <p>Average: {total / 3}</p>
    <p>Positive: {(props.good / total) * 100}%</p>
  </div>
}

const WinningAnecdote = ({winner}) =>{
  return <div><h1>Winning Anecdote</h1>
   <p>{winner}</p>
   </div>
}

const Anecdotes = (props)=>{
 return <div>{props.anecdotes[props.selected]}</div>
}


export default App