const express = require("express")

const app = express()

// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  
//   app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
//   })

const port = 8000

app.get("/",(req, res) => {
    return res.send("kya karra lavdu");
})

app.get("/login",(req, res) => {
    return res.send("login karle bhayyyyy");
})



app.listen(port, () => {
    console.log("server is running on port: ",port)
})