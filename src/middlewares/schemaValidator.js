function schemaValidator(schema) {
  return (req, res, next) => {
      const body = req.body;

      const {error, value} = schema.validate(body, {abortEarly: false})

      if(error) throw errors.invalidFormat

      res.locals.data = value

      next()
  }
}