import React, { useEffect } from "react"

import RegisterForm from "../components/RegisterForm"

const Register = ({ setOnPage }) => {
  useEffect(() => setOnPage("/register"))

  return <RegisterForm />
}

export default Register
