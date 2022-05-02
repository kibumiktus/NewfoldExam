const joi = require('joi')
function validate(model) {
        const schema = joi.object({
                name: joi.string()
                        .alphanum()
                        .min(3)
                        .max(50)
                        .required(),
                
                year: joi.number()
                        .min(1850)
                        .max(2025),
                        
                duration: joi.number()
                        .min(1)
                        .max(600)
        })
        return schema.validate(model)
}
module.exports = {validate}