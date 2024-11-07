import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scaler from './MyComponent'
import { a, b, c } from './MyComponent'

function App() {

  return (
    <>
      <Scaler message='Component 1' name='Scaler' />
      a: {a}
      b: {b}
      <Scaler message='Component 2' />
      {c}
      <Scaler message='Component 3' />
      <Scaler message='Component 4' />
      <Scaler message='Component 5' />
    </>
  )
}

export default App
