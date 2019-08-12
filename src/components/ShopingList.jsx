import React, {useReducer, useRef} from 'react'

export default function ShopingList() {

    const inputRef= useRef();

    const [items, dispatch] = useReducer((state, action)=>{
        switch (action.type) {
            case 'add':
                    return [
                        ...state,
                        {
                            id:state.length,
                            name:action.name
                        }
                    ] 
            case 'del':
                return state.filter((_, index)=>index!==action.index)
            default:
                return state;
        }
    },[])

    function handleClick(event) {
        event.preventDefault()
        console.log(inputRef.current.value)
        dispatch({
            type:'add',
            name:inputRef.current.value
        })
        inputRef.current.value=''
    }

    return (
        <div>
            {
                <>
                 <form onSubmit={handleClick}>
                    Enter Items: <input type="text" ref={inputRef}/>
                    </form>
                    <ul>
                        {
                        items.map((item,index)=>(
                            <li key={item.id}>{item.name} 
                            <button onClick={
                                ()=>dispatch({
                                    type:'del', index
                                })
                            }>X</button></li>
                        ))
                        }
                    </ul>
                </>
            }
        </div>
    )
}
