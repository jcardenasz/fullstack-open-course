import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Total = (props) => {
  return (
    <p> {props.text} {props.value} </p>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [goodClicks, setGoodClicks] = useState(0)

  const [neutral, setNeutral] = useState(0)
  const [neutralClicks, setNeutralClicks] = useState(0)

  const [bad, setBad] = useState(0)
  const [badClicks, setBadClicks] = useState(0)

  const goodClickHandler = () => {
    setGoodClicks( goodClicks+1 )
  }
  
  const neutralClickHandler = () => {
    setNeutralClicks( neutralClicks+1 )
  }
  
  const badClickHandler = () => {
    setBadClicks( badClicks+1 )
  }

  const title = 'give feedback'
  const statistics = 'statistics'
  const total = good + neutral + bad
  const average = 'average'
  const positive = 'positive'

  return (
    <div>
      <h1> {title} </h1>

      <Button onClick={() => {
        setGood( good+1 ),
        goodClickHandler()
      }} text='good'/>

      <Button onClick={() => {
        setNeutral( neutral+1 ),
        neutralClickHandler()
      }} text='neutral'/>

      <Button onClick={() => {
        setBad( bad+1 ),
        badClickHandler()
      }} text='bad'/>

      <h1> {statistics} </h1>

      <Total text='good' value={ good } />
      <Total text='neutral' value={ neutral } />
      <Total text='bad' value={ bad } />
      <p>all { total } </p>
      <p>{average} {total==0 ? 0 : (good * 1 + neutral * 0 + bad * (-1)) / ( total )} </p>
      <p>{positive} {total==0 ? 0 : (good / total) * 100} % </p>
    </div>
  )
}

export default App