import { connectionDb } from "../config/database.js"

async function findByEmail(email){
  return await connectionDb.query(`
  SELECT * FROM pacients WHERE email=$1
  `, [email])
}

async function create({name, email, password}){
  await connectionDb.query(`
  INSERT INTO pacients(name, email, password)
  VALUES(1$, $2, 3$);
  `,[name, email, password]);
}

async function findById(pacientId){
  return await connectionDb.query(`
  SELECT id, name AS pacient_name, role FROM pacients WHERE id=$1
  `,[pacientId])
}

async function getDoctors(){
  return await connectionDb.query(`
  SELECT name, specialty, location FROM doctors;
  `)
}

export default {
  findByEmail,
  create,
  findById,
  getDoctors
}