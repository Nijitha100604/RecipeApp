import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
      e.preventDefault();
      navigate("/");
      localStorage.setItem("user",JSON.stringify(user));
      setUser("");
      setEmail("");
  }

  return (
    <div className="loginWrapper">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={user} onChange={(e)=>setUser(e.target.value)}/>
          </div>
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;