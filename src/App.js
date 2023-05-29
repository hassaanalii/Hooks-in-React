import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';
import ExpensiveComponent from './ExpensiveComponent';

// React renders alot. Whenever a state changes, the whole component re-renders. If u have a child component, it also re-renders


function App() {
  const [value,setValue] = useState("");
    const [num,setNum] = useState(6);

  const expensiveFunction = (num) =>{
    console.log("running")
    let sum = 0
    for(let i = 0; i <num ;i++){
        sum+=i
    }
    return sum;
  }

  const ans = useMemo(()=> expensiveFunction(num),[]) // Now this function is not called on every re-render when the state changes. it is in the memory
  
  return (
    <div>
      <input placeholder='Enter Value' value={value} onChange={(e)=> setValue(e.target.value)}></input>
      <input type='number' value={num} onChange={(e)=> setNum(e.target.value)}></input>

      <h1>{ans}</h1>
      

      {/* Now we will have a child expensive component and to prevent it from re-rendering we will use wrap it with memo hook */}
      <ExpensiveComponent />  
    </div>
  );
}

export default App;
