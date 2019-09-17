import React, { useState, useEffect } from 'react'

const Login: React.SFC<any> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(sessionStorage.getItem('login') || "false")

  useEffect(() => {
    sessionStorage.setItem('login', login)
  })

if (login === "false"){
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        setLogin("true")
      }}
    >
      <div className="form-group">
        <label htmlFor="loginEmail">Email address</label>
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="loginPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
    )
  } else {
    return <h1>Logged in</h1>
  }
}

export default Login
