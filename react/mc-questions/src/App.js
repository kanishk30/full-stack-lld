import logo from './logo.svg';
import './App.css';
import Stopwatch from './stopwatch/Stopwatch';
import Carousel from './carousel/Carousel';
import Modal from './Modal';
import useVisibility from './useVisibility';

function App() {

  const { isVisible, show, hide, toggle } = useVisibility(false);

  return (
    <div>
      <Stopwatch />
      <Carousel />

      <h2>Custom hook example</h2>
      <button onClick={show}>Show Modal</button>
      <button onClick={toggle}>Toggle modal</button>
      <Modal isVisible={isVisible} hide={hide} />
    </div>
  )
}

export default App;
