import bcrypt from 'bcrypt'
import doctorsRepositories from '../repositories/doctorsRepositories.js';
import errors from '../errors/errors.js';

async function create({name, email, password, specialty, location}){
    const {rowCount} = await doctorsRepositories.findByEmail(email);
    if(rowCount) throw errors.duplicatedEmailError()

    const hashedPassword = await bcrypt.hash(password, 10)
    await doctorsRepositories.create({name, email, password: hashedPassword, specialty, location})
}

export default {
  create,
}