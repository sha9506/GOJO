import React,{ useState} from "react";
import './Login.css';

const Login =({setPageNumber})=>
{
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [rememberMe, setRememberMe] = useState(false);

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(email, password, rememberMe);
};
const handleLogin=()=>
{
    setPageNumber(2)
}

return (
    <div className="body">
        <div className="title">GOJO</div>
        <div className="side-bar">
        <div className="login-container">
            <form onSubmit={handleSubmit}>
             <h2>Login</h2>
            <p>Login to become a Gojo</p>
        <div className="input-group">
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
      </div>
      <div className="input-group">
        <input 
          type="password" 
          placeholder="Enter your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
      </div>
      <div className="input-group checkbox-group">
        <input 
          type="checkbox" 
          id="rememberMe" 
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)} 
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
      <div className="login-footer">
        <a href="#forgot-password">Forgot Password</a>
        <p>Dont have an account? <a href="#sign-up">Sign up</a></p>
      </div>
    </form>
  </div>
        </div>
 
  </div>
);
};
export default Login