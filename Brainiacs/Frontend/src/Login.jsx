

// import React, { useState } from "react";
// import axios from "axios";
// import "./Login.css";

// const Login = () => {
//   const [gmail, setGmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [user, setUser] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/login",
//         { gmail, password },
//         {
//           withCredentials: true, // allows cookies to be sent
//         }
//       );

//       setUser(response.data);
//     } catch (err) {
//       if (err.response && err.response.data) {
//         setError(err.response.data);
//       } else {
//         setError("Login failed. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {user ? (
//         <div>
//           <h3>Welcome, {user.name || user.gmail}!</h3>
//         </div>
//       ) : (
//         <form onSubmit={handleLogin}>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={gmail}
//               onChange={(e) => setGmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Log In</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:4000/login", // ✅ matches backend
        { gmail, password },
        {
          withCredentials: true,
        }
      );

      setUser(response.data);
      
      const data = await response.json(); 

      localStorage.setItem("user", JSON.stringify(data.data)); // Save the user info
     localStorage.setItem("token", data.token); // Save the token (optional, if you're using it)

    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user ? (
        <div>
          <h3>Welcome, {user.fullName || user.gmail}!</h3>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
};

export default Login;

