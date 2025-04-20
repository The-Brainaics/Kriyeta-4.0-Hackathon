 
 // LoginSignupPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Adminlogin.css";

 const LoginSignupPageAdmin=()=> {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:4000/admin/login", {
        
        email,
        password,
        
        // role: "nurse",
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/nurse/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const handleSignup = async () => {
     

    try {
      const res = await axios.post("http://localhost:4000/admin/signup", {
        
        email,
        password,
        // role: "nurse",
         
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/nurse/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
         <div className="signup-page">
        <div className="admin-login-container">
          <h2>Nurse {isLogin ? "Login" : "Signup"}</h2>
      
          <div className="toggle-buttons">
            <button onClick={() => setIsLogin(true)}>Login</button>
            <button onClick={() => setIsLogin(false)}>Signup</button>
          </div>
      
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
             
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
      
            <button type="submit" onClick={isLogin ? handleLogin : handleSignup}>
              {isLogin ? "Login" : "Signup"}
            </button>
      
            {error && <p className="error">{error}</p>}
          </form>
        </div>
        </div>
      );
  
}

export default LoginSignupPageAdmin