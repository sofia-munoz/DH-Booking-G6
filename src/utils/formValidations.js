/*--------------- Validates user inputs ----------------*/
const PASSWORD_VALID_LENGHT = 6

const validateEmail = (email) => {
  const expression = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  const test = expression.test(email)
  return test
}

const validatePassword = (password, confirmPassword) => {
  return password === confirmPassword
}

const validatePasswordLength = (password) => {
  return password.length > PASSWORD_VALID_LENGHT
}

export { validateEmail, validatePassword, validatePasswordLength }
