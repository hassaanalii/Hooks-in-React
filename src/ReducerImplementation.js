import { useReducer, useState } from "react"
import { INITIAL_STATES, postReducer } from "./postReducer"

const ReducerImplementation = () =>{
    // const [loading,setLoading] = useState(false)
    // const [post,setPost] = useState({})
    // const [error,setError] = useState(false)
    const [state,dispatch] = useReducer(postReducer, INITIAL_STATES)

    const handlePost =()=>{
        // setLoading(true)
        dispatch({type:"FETCH_START"})
        // setError(false)
        fetch('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
            return res.json()
        }).then((data)=>{
            dispatch({type:"FETCH_SUCCESS",payload:data})
            // setPost(data[0])
            // setLoading(false)
        }).catch((err)=>{
            dispatch({type:"FETCH_ERROR"})
            // setError(true);
            // setLoading(false)
        })
    }

    //WHEN TWO OR MORE STATES CHANGE TOGETHER ITS BETTER TO USE USEREDUCER THAN USESTATE
    return (
        <div>
            <button onClick={handlePost}>
                {state.loading ? "Wait" : "Fetch"}
            </button>
            <p>{state.post?.title}</p>

            <p>{state.error && "something went wrong"}</p>
        </div>
    )
}
export default ReducerImplementation;