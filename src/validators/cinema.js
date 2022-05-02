const joi = require('joi')
function validate(model) {
        const schema = joi.object({
                name: joi.string()
                        .alphanum()
                        .min(3)
                        .max(30)
                        .required(),
                
                city: joi.string()
                        .alphanum()
                        .min(3)
                        .max(100)
                        .required()
        })
        return schema.validate(model)
}
module.exports = {validate}