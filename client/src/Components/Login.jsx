import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [uname,setUname]=useState("");
    const [pass,setPass]=useState("");
    const [error,setError]=useState("")
    const navigate=useNavigate();
    function handleSubmit(){
        if(uname=="admin" && pass=="manager")
        {
          navigate("/user")
        }
        else{
          setError("Login failed: check credentials")  
        }
    }
  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <h2 style={{color: "red"}}>{error}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          User Name: 
          <input type="text"
                 value={uname}
                 placeholder="Enter the user Name"
                 onChange={(e)=>setUname(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="password"
                 value={pass}
                 placeholder="Enter the password"
                 onChange={(e)=>setPass(e.target.value)}/>
        </label>
        <div className="login-buttons">
          <button type="submit">Login</button>
          <button type="reset">Reset</button>             
        </div>
      </form>
    </div>
  )
}

export default Login