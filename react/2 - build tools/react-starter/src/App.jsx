import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scaler from './MyComponent'
import { a, b, c } from './MyComponent'
import DisplayData from './DisplayData'


function App() {

  const fruits = ['Apple', 'Banana', 'Mango', 'Guava', 'Cherry', "melon"];
  const person = {
    name: 'Alice',
    age: 30
  }

  return (
    <>
      <DisplayData fruitsArr={fruits} personObj={person} />
      {/* <Scaler message='Component 1' name='Scaler' />
      a: {a}
      b: {b}
      <Scaler message='Component 2' />
      {c}
      <Scaler message='Component 3' />
      <Scaler message='Component 4' />
      <Scaler message='Component 5' /> */}
    </>
  )
}

export default App
