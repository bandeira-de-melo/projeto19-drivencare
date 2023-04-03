function invalidFormat(){
  return{
    name: 'Invalid format',
    message: 'Invalid data format'
  }
}

function duplicatedEmailError(){
  return {
    name: 'duplicatedEmailError',
    message: 'This email is already in use'
  }
}

function wrongCredentialsError(){
  return {
    name:'wrongCredentialsError',
    message: 'Invalid email or password'
  }
}

export default {
  duplicatedEmailError,
  wrongCredentialsError,
  invalidFormat
}