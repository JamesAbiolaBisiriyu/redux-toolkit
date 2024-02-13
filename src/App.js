// import logo from './logo.svg';

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";


// import './App.css';


function App() {
// const [count, setCount] = React.useState(0);
const { count } = useSelector((state) => state.counter);
// const count = useSelector((state)=> state.counter.count);
const dispatch = useDispatch( );

  return (
    <div className="App">
      <h1> the count is: {count}</h1>
      {/* <button onClick={()=> setCount(count +1)}> Increament</button> */}
      {/* <button onClick={()=> setCount(count -1)}> Decreament</button> */}
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(9))}>Increment By Amount </button>



    </div>
  );
}

export default App;
