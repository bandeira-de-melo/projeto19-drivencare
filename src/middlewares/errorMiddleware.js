import httpStatus from 'http-status';

export function handleAppErros(err, req, res, next) {
  if(err.name==='duplicatedEmailError'){
    return res.status(httpStatus.CONFLICT).send({message: err.message})
  }

  if(err.name==='wrongCredentialsError'){
    return res.status(httpStatus.FORBIDDEN).send({message: err.message})
  }

  if(err.name==='Invalid format'){
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({message: err.message})
  }

  if(err.name === 'unauthorizedError'){
    return res.status(httpStatus.UNAUTHORIZED).send({message: err.message})
  }
}