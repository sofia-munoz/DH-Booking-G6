import React, { useEffect } from "react"
import LoginForm from "../components/LoginForm"

const Login = ({ setOnPage }) => {
  useEffect(() => setOnPage("/login"))
  return <LoginForm />
}

export default Login
