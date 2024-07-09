import Button from "./components/Button";
import './App.css';

function App() {
  return (
    <>
      <Button background="blue" color="white" width="100px" height="50px" content="Click Me" />
      <Button background="red" color="white" width="120px" height="60px" content="Delete" />
      <Button background="green" color="black" width="150px" height="70px" content="Submit" />
    </>
  )
}

export default App;
