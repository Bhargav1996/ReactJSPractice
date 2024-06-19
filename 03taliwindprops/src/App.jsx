import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: "Hitesh",
    age: 28
  }
  let newArr = [7,8,6]
  return (
    <>
      <h1 classNameName='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind Test</h1>
      
    <Card username ="Chai aur code" btnText="click me" />
    <br/> 
    <Card username="Bhargav Nirmal Founder of ...." btnText = "Visit me"/>
    </>
  )
}

export default App
