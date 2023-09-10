const express = require('express')
const app = express()
const port = 3000

app.get('/tin_tuc', function (req, res){
    return res.send('Hello World!')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})