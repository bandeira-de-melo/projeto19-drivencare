import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import errors from "../errors/errors.js";
import pacientRepositories from "../repositories/pacientRepositories.js";
dotenv.config()

 export async function pacientAuthMiddleware(req, res, next) {
  const {authorization} = req.headers;

  const tokenParts = authorization.split(' ');
  if(tokenParts.length !== 2) throw errors.unauthorizedError();
  
  const [tokenType, token] = tokenParts
  if (tokenType !== 'Bearer') throw errors.unauthorizedError();
  
  jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
    try {
      if(error !== null) throw errors.unauthorizedError();
      const {rows: [pacient]} = pacientRepositories.findById(decoded.pacientId)
      if(!pacient) throw errors.unauthorizedError();

      res.locals.pacient = pacient

      next()
    } catch (error) {
      next(error);
    }
  })

}

