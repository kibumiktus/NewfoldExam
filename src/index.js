const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require("./api/swaggerDocument.js");
const port = 8080
app.get('/v1/cinemas',(req,res)=>{
    res.send({"zz":1})
})
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })