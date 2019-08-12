import React, {useReducer, useState} from 'react'
import {LoginInfo} from './LoginCrud'

export default function LoginWithoutReducer() {

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    const [isLoading, setisLoading] = useState(false)
    const [Error, setError] = useState("")
    const [isLoggedIn, setisLoggedIn] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        setisLoading(true);
        try{
            await LoginInfo(Username, Password)
            setisLoggedIn(true)
            setUsername('')
            setPassword('')
        }catch{
           setError("Inavlid Username Password!")
        }
        setisLoading(false);
    }

    return (
        <div className="container m-4">
            {isLoggedIn?(
                <>
                    <h1>Hello {Username}!</h1><br/>
                    <button onClick={()=>setisLoggedIn(false)}>Log Out</button>
                </>
           ):(
           <form onSubmit={handleSubmit}>
               {<p style={{color:"red"}}>{Error}</p>}
            <div className="form-group">
                <label >Username</label>
                <input type="text" value={Username} onChange={e=>setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" value={Password} onChange={e=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading? "Logging in...": "Log In"}
            </button>
            </form>
            )}
        </div>
    )
}
