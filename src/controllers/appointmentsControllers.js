
import pacientRepositories from "../repositories/pacientRepositories.js"


async function getDoctors(req, res, next) {
  try {
  const listOfDocs = pacientRepositories.getDoctors
  const docsByInfo = listOfDocs.map(doc => {
    return {
      doctorName: doc.name,
      doctorSpecialty: doc.specialty,
      docLocations: doc.location
    }
  })
  return res.status(200).send(docsByInfo)
  } catch (error) {
    
  }
}

export default {
  schedule,
}