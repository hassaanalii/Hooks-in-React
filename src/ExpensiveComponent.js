import React from "react";

const ExpensiveComponent = React.memo(() =>{

    console.log("NEW RUNNING")
    let sum = 0
    for(let i = 0; i <20 ;i++){
        sum+=i
    }
    return sum;

})

export default ExpensiveComponent;