const express = require('express')
const app = express()
const PORT = process.env.PORT||8080

const  contactRouter = require('./Routes/contactRoutes')

app.use(express.json())
//app.use(cors)
app.use('/contact', contactRouter)


// app.get('*', (req, res) => {
//     res.send('<h1>No Data</h1>')
// })

app.listen(PORT, ()=>{
    console.log("running on 8080")
})