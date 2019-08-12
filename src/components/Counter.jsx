import React, {useReducer} from 'react'

export default function Counter() {

    const [count, dispatch] = useReducer((state, action)=>{
        switch(action){
            case 'add':
                return state+1;
            case '-':
                return state-1;
            default:
                return state
        }
    }, 5)

    return (
        <div>
            <button onClick={()=>dispatch('add')}>+</button>
            <button onClick={()=>dispatch('-')}>-</button>
            <h4>{count}</h4>
        </div>
    )
}
