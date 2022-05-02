const joi = require('joi')
function validate(model) {
        const schema = joi.object({
                name: joi.string()
                        .alphanum()
                        .min(3)
                        .max(50)
                        .required(),
                
                cinemaId: joi.number()
                        .min(1)
                        .max(1024)
                        .required(),
                        
                capacity: joi.number()
                        .min(1)
                        .max(30000)
        })
        return schema.validate(model)
}
module.exports = { validate }