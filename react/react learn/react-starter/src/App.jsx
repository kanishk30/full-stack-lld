
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scaler from './MyComponent'
import { a, b, c } from './MyComponent'
import DisplayData from './DisplayData'
import ConditionRendering from './ConditionalRendering'
import Button from './Button'
import State from './State'
import Form from './Form'
import FormAdvanced from './FormAdvanced'


function App() {

  const fruits = ['Apple', 'Banana', 'Mango', 'Guava', 'Cherry', "melon"];
  const person = {
    name: 'Alice',
    age: 30
  }
  const loggedIn = true;
  return (
    <>
      <FormAdvanced />
      {/* <Form /> */}
      {/* <State /> */}
      {/* <Button /> */}
      {/* <ConditionRendering person={person} isLoggedin={loggedIn} /> */}
      {/* <DisplayData fruitsArr={fruits} personObj={person} /> */}
      {/* <Scaler message='Component 1' name='Scaler' />
      a: {a}
      b: {b}
      <Scaler message='Component 2' />
      {c} */}
    </>
  )
}

export default App
