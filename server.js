require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const incidentRoutes = require('./routes/incidentroutes')

const app = express()
app.use(express.json())
app.use('/incidents', incidentRoutes)

mongoose.connect(process.env.MONGODB_URI)
console.log("Mongo DB Connected...");
app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Server error' })
})
console.log("code is uploaded on git @ https://github.com/atchuuu/SPARKLEHOOD")
const PORT = process.env.PORT || 3000
console.log("PORT IS RUNNING ON "+PORT);
app.listen(PORT)