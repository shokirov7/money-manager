import React, { useState } from "react";
import './Login.css'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginEvent = (e) => {
        e.preventDefault()
        let userCredential={
            username, password
        }

    }

  return (
    <div className="login">
      <form class="form" onSubmit={handleLoginEvent}>
        <p class="form-title">Sign in</p>
        <div class="input-container">
          <input type="email" placeholder="Username" required value={email} onChange={(e) =>setUsername(e.target.value)}/>
          <span></span>
        </div>
        <div class="input-container">
          <input type="password" placeholder="Password" required value={password} onChange={(e) =>setPassword(e.target.value)}/>
        </div>
        <button type="submit" class="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
