import React, {useReducer, useState} from 'react'
import {LoginInfo} from './LoginCrud'

export default function Login() {

    function loginReducer(state, action) {
        switch (action.type) {
            case 'login':
                return{
                    ...state,
                    isLoading:true,
                    Error:'',
                }
            case 'success':
                return{
                    ...state,
                    isLoggedIn:true,
                    isLoading:false,
                    Username:'',
                    Password:'',
                }
    
            case 'error':
                return{
                    ...state,
                    Error:"Inavlid Username Password!",
                    Username:'',
                    Password:'',
                    isLoading:false,
                    isLoggedIn:false,
                }
            case 'logout':
                return{
                    ...state,
                     isLoggedIn:false
                }
            
            case 'field':
                return{
                    ...state,
                    [action.name]:[action.value]
                }
        
            default:
                return state;
        }
    }

    const initialState = {
        Username : '',
        Password : '',
        isLoading : false,
        Error : '',
        isLoggedIn : false,
    }

    const [state, dispatch] = useReducer(loginReducer, initialState)

    const{Username, Password, isLoading, Error, isLoggedIn}=state;

    async function handleSubmit(e) {
        e.preventDefault()

        dispatch({type:'login'})
        
        try{
            await LoginInfo({Username, Password})
            dispatch({type:'success'})
        }catch(error){
            dispatch({type:"error"})
        }
    }

    return (
        <div className="container m-4">
            {console.log(isLoggedIn)}
            {isLoggedIn?(
                <>
                    <h1>Hello {Username}!</h1><br/>
                    <button onClick={()=>dispatch({type:'logout'})}>Log Out</button>
                </>
           ):(
           <form onSubmit={handleSubmit}>
               {<p style={{color:"red"}}>{Error}</p>}
            <div className="form-group">
                <label >Username</label>
                <input type="text" value={Username} onChange={e=>
                    dispatch({
                        type:'field', 
                        name:"Username", 
                        value:e.target.value
                        })
                    } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" value={Password} onChange={e=>
                dispatch({
                    type:'field', 
                    name:"Password", 
                    value:e.target.value
                    })
                } className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading? "Logging in...": "Log In"}
            </button>
            </form>
            )}
        </div>
    )
}
