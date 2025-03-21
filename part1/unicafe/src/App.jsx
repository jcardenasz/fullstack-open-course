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

const StatisticLine = (props) => {
  return (
    <>
    <tr>
      <td> {props.text} </td>
      <td> {props.value} </td>
    </tr>
    </>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h1> statistics </h1>
        <p> No feedback given </p>
      </div>
    )
  }
  return (
    <div>
      <h1> statistics </h1>
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good} />
          <StatisticLine text='neutral' value={props.neutral} />
          <StatisticLine text='bad' value={props.bad} />
          <StatisticLine text='all' value={props.total} />
          <StatisticLine text='average' value={props.average} />
          <StatisticLine text='positive' value={props.positive + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [goodClicks, setGoodClicks] = useState(0)

  const [neutral, setNeutral] = useState(0)
  const [neutralClicks, setNeutralClicks] = useState(0)

  const [bad, setBad] = useState(0)
  const [badClicks, setBadClicks] = useState(0)

  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const goodClickHandler = () => {
    setGoodClicks( goodClicks+1 )
  }
  
  const neutralClickHandler = () => {
    setNeutralClicks( neutralClicks+1 )
  }
  
  const badClickHandler = () => {
    setBadClicks( badClicks+1 )
  }

  const averagePositiveHandlerGood = () => {
    const updatedGood = good + 1    
    const updatedGoodClicks = goodClicks + 1
    setAverage( (updatedGood * 1 + neutral * 0 + bad * (-1)) / ( updatedGoodClicks + neutralClicks + badClicks ) )
    setPositive( updatedGood/(updatedGood + neutral + bad)*100 )
  }

  const averagePositiveHandlerNeutral = () => {
    const updatedNeutral = neutral + 1    
    const updatedNeutralClicks = neutralClicks + 1
    setAverage( (good * 1 + updatedNeutral * 0 + bad * (-1)) / ( goodClicks + updatedNeutralClicks + badClicks ) )
    setPositive( good/(good + updatedNeutral + bad)*100 )
  }

  const averagePositiveHandlerBad = () => {
    const updatedBad = bad + 1    
    const updatedBadClicks = badClicks + 1
    setAverage( (good * 1 + neutral * 0 + updatedBad * (-1)) / ( goodClicks + neutralClicks + updatedBadClicks ) )
    setPositive( good/(good + neutral + updatedBad)*100 )
  }

  const title = 'give feedback'

  return (
    <div>
      <h1> {title} </h1>

      <Button onClick={() => {
        setGood( good+1 ),
        goodClickHandler(),
        averagePositiveHandlerGood()
      }} text='good'/>

      <Button onClick={() => {
        setNeutral( neutral+1 ),
        neutralClickHandler(),
        averagePositiveHandlerNeutral()
      }} text='neutral'/>

      <Button onClick={() => {
        setBad( bad+1 ),
        badClickHandler(),
        averagePositiveHandlerBad()
      }} text='bad'/>

      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={good + neutral + bad} 
        average={average} 
        positive={positive} 
      />

    </div>
  )
}

export default App