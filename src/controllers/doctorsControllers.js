import doctorsServices from "../services/doctorsServices.js"

async function create(req, res, next){
  const {name, email, password, specialty, location} = res.locals.data
  try {
    await doctorsServices.create({name, email, password, specialty, location})
    return res.sendStatus(201)
  } catch (error) {
    next(error)
  }
}

export default {
  create,
}