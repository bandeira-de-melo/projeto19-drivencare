import { connectionDb } from "../config/database.js"

async function findByEmail(email){
  return await connectionDb.query(`
  SELECT * FROM pacients WHERE email=$1`,
  [email])
}

async function create({name, email, password, dateOfBirth}){
  await connectionDb.query(`
  INSERT INTO doctors(name, email, password, dateOfBirth)
  VALUES(1$, 2$, 3$, 4$)
  `,[name, email, password, dateOfBirth]);
}

export default {
  findByEmail,
  create,
}