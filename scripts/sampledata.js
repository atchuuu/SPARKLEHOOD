require('dotenv').config()
const mongoose = require('mongoose')
const Incident = require('../models/incidentmodel')

mongoose.connect(process.env.MONGODB_URI)

const incidents = [
  { title: 'AI Error', description: 'Wrong output given', severity: 'Low' },
  { title: 'Crash', description: 'System stopped', severity: 'High' },
  { title: 'Bias Issue', description: 'Unfair results', severity: 'Medium' }
]

async function sampledata() {
  await Incident.deleteMany({})
  await Incident.insertMany(incidents)
  mongoose.connection.close()
}

sampledata()