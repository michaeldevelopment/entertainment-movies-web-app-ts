import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { sumNumbers, calcBmi } from './playingWithTs'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  console.log(sumNumbers(1,2, "add", "el resultado es: "))
  console.log(calcBmi(180, 74))

  return (
    <Homepage />
  )
}

export default App
