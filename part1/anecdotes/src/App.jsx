import { useEffect, useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
  <button onClick={onClick}>
    {text}
  </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = useState({ votes: 0, position: 0 })

  useEffect(() => {
    const maxVotes = Math.max(...votes)
    const maxIndex = votes.indexOf(maxVotes)
    setMostVotes({ votes: maxVotes, position: maxIndex })
  }, [votes])

  const nextHandler = () => {
    const randomSelection = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomSelection)
    console.log('anecdotes length: ',anecdotes.length)
    console.log('selection: ',randomSelection)
  }

  const voteHandler = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
    console.log('voted!')
    console.log(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h4>"{anecdotes[selected]}"</h4>
      <h4>has {votes[selected]} votes</h4>
      <Button onClick={voteHandler} text='vote' />
      <Button onClick={nextHandler} text='next' />
      <h1>Anecdote with most votes: {mostVotes.votes}</h1>
      <h4>"{anecdotes[mostVotes.position]}"</h4>
    </div>
  )
}

export default App