import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {addTodo , deleteTodo , removeTodo}   from '../actions/index'
import '../our.css'
const Todo = () => {
    // useDispatch is hooks 
    const dispatch = useDispatch()
    // useSelector function is use to get data from centralized store 
    const list = useSelector((state)=>state.todoReducers.list)
    console.log(list)
    const [inputData,setInputData] = useState ('')
  return (
    <>
        <div className='maindiv'>
            <input 
            type="text" 
            placeholder='Enter todo'
            value={inputData}
            onChange = {(event)=>setInputData(event.target.value)}
            />
            <button onClick={()=>dispatch(addTodo(inputData),setInputData(''))
            }>add </button>
            <button onClick={()=>dispatch(removeTodo())}>delete all</button>
        </div>
        <div className='showitem'>
            {
                list.map((Element)=>{
                    return(
                        
                            <div key={Element.id}>
                                <h1>{Element.data}</h1>
                                <button onClick={()=>dispatch(deleteTodo(Element.id))}>delete</button>
                            </div>
                        
                    )
                })
            }
        </div>
    </>
  )
}

export default Todo