import React, {useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth"

function Login (props) {

  const[user, setUser] = useState({
    username:"",
    password:""
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
  })
  }

  const handleSubmit = (event) =>{
    event.preventDefault()

    axiosWithAuth().post("/login", user)
      .then(res =>{
        console.log(res)
        localStorage.setItem("token", res.data.payload)
        props.history.push("/BubblePage")
      })
      .catch(err =>{
        console.log(err)
      })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          placeholder="username"
          value={user.username}
          onChange={handleChange}
          />
        <input 
          type="text"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
          />
          <button >Sign In</button>
      </form>
    </>
  );
};

export default Login;
