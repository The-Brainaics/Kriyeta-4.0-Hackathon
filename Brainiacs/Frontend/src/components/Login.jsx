
// import React, { useState } from 'react'
// import axios from 'axios';
// // import { useDispatch } from 'react-redux';
// // import { useDispatch } from "react-redux";
// // import { addUser } from "./utils/userSlice";
// import { useNavigate } from 'react-router-dom';
// // import { BASE_URL } from "./utils/constant";
// import "./Login.css";

// const Login=()=> {
//   const [gmail,setEmailId]=useState("");
//   const [password,setPassword]=useState("");
//   // const dispatch = useDispatch();
//   const navigate=useNavigate();
//   const [error,setErrorMsg]=useState();


//   const handleLogin= async()=>{
//     try{
//       const res=await axios.post("http://localhost:4000/login",{
//         gmail, // cheeck both variable same as backend field name
//         password,
//       },{withCredentials:true},);

      
//       // dispatch(addUser(res.data));
//       navigate("/appointments");

//       // dispatch(addUser(res.data)) // store data in redux store
//     }
//     catch(err)
//     {
//       setErrorMsg(err?.response?.data||"somthing went wrong");
//       console.log(err);
//     }
//   }

//   return (
//     <div className="login-container">
//       <h2 className="login-title">Hospital Admin Login</h2>

//       {/* {error && <p className="error-message">{error}</p>} */}
//       {/* {success && <p className="success-message">{success}</p>} */}

//       <form onSubmit={handleLogin} className="login-form">
//         <label>
//           Email Address
//           <input
//             type="email"
//             name="gmail"
//             required
//             value={gmail}
//             onChange={(e)=>setEmailId(e.target.value)}
//           />
//         </label>

//         <label>
//           Password
//           <input
//             type="password"
//             name="password"
//             required
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//           />
//         </label>

//         <button type="submit" className="login-button">Login</button>
//       </form>
//     </div>
//   );
// }


// export default Login;




import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // keep your styling here

const Login = () => {
  const [gmail, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // prevents page reload

    try {
      const res = await axios.post(
        "http://localhost:4000/login", // ✅ match your backend route
        { gmail, password },
        { withCredentials: true } // ✅ send cookie
      );

      // Navigate to the protected route after successful login
      const id=res.data._id;

      alert(`Please Note Patient Id=${id}`)
      navigate("/sidebar");
    } catch (err) {
      setErrorMsg(err?.response?.data || "Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="signup-page">
    <div className="login-container">
      <h2 className="login-title">Hospital Admin Login</h2>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleLogin} className="login-form">
        <label>
          Email Address
          <input
            type="email"
            name="gmail"
            required
            value={gmail}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default Login;

