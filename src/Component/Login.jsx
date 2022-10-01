import React from 'react'
import { useDispatch } from 'react-redux';
import { authData } from '../Redux/action';
import  { useNavigate} from "react-router-dom"
export default function Login() {
    const[email,setEmail] =React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const getData = async() =>{
        let getFetchData = await fetch(`http://localhost:8080/user`);
        let result = await getFetchData.json();
        result.forEach(element => {
             if(element.password==password && element.email==email){
                 dispatch(authData(element))
                 navigate("/todo")
             }
        });

    }

    const handleLogin = () =>{
        getData();
        }

  return (
    <div className='signup'>
        <h3>Log-in</h3>
       <input className='name' type="email" value={email}  placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
       <input className='name' type="password" value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
       <input type="submit"  onClick={handleLogin} placeholder='Submit' />
    </div>
  )
}
