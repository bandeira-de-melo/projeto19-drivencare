import bcrypt from 'bcrypt'
import doctorsRepositories from '../repositories/doctorsRepositories.js';

async function create({name, email, password, specialty, location}){
    const {rowCount} = await doctorsRepositories.findByEmail(email);
    if(rowCount) throw erros.duplicatedEmailError

    const hashedPassord = await bcrypt.hash(password, 10)
    await doctorsRepositories
    .create({name, email, password: hashedPassord, specialty, location})
}

export default {
  create,
}