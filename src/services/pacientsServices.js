import errors from "../errors/errors.js";
import pacientRepositories from "../repositories/pacientRepositories.js";

async function create({name,email,password,dateOfBirth}){
  const {rowCount} = await pacientRepositories.findByEmail(email)
  if(rowCount) throw errors.duplicatedEmailError()

  const hashedPassord = await bcrypt.hash(password, 10)
  await pacientRepositories
  .create({name, email, password: hashedPassord,dateOfBirth})
}

export default{
  create
}