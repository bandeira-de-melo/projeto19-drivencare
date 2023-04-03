import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import errors from "../errors/errors.js";
import pacientRepositories from "../repositories/pacientRepositories.js";
import dotenv from 'dotenv'
dotenv.config()

async function create({name, email, password}){
  const {rowCount} = await pacientRepositories.findByEmail(email)
  if(rowCount) throw errors.duplicatedEmailError()

  const hashedPassword = await bcrypt.hash(password, 10)
  await pacientRepositories.create({name, email, password: hashedPassword})
}

async function signin({email, password}){
  //checar se email existe(se não, retornar erro wrong credentials)
  const {rowCount, rows:[pacient]} = await pacientRepositories.findByEmail(email)
  if(!rowCount) throw errors.wrongCredentialsError()
  //comparar com o hashedpass do db(se não, retornar erro wrong credentials)
  const isMatch = await bcrypt.compare(password, pacient.password)
  if(!isMatch) throw errors.wrongCredentialsError()
  //estando tudo certo, gerar e retornar jwt

  const token = jwt.sign(
    {pacientId: pacient.id, role: pacient.role}, 
    process.env.JWT_SECRET, 
    {expiresIn: 86400}//1º payload, 2º chave secreta, 3º opção
    )
  
    return token

}

export default{
  create,
  signin
}