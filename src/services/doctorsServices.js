import bcrypt from 'bcrypt'

async function create({name, email, password, specialty, location}){
    const {rowCount} = await doctorRepositories.findByEmail(email);
    if(rowCount) throw erros.duplicatedEmailError

    const hashedPassord = await bcrypt.hash(password, 10)
    await doctorRepositories
    .create({name, email, password: hashedPassord, specialty, location})
}

export default {
  create,
}