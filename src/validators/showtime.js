const joi = require('joi')
function validate(model) {
        const schema = joi.object({
                movieId: joi.number()
                            .min(1)
                            .max(2000000)
                            .required(),
                        
                screenId: joi.number()
                            .min(1)
                            .max(30000),
                startOn: joi.date()
                            .required()
        })
        return schema.validate(model)
}
module.exports = { validate }