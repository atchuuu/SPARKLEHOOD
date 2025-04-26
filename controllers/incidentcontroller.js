const Incident = require('../models/incidentmodel')

exports.getAll = async (req, res) => {
  const incidents = await Incident.find()
  res.json(incidents.map(incident => ({
    id: incident._id,
    title: incident.title,
    description: incident.description,
    severity: incident.severity,
    reported_at: incident.reported_at
  })))
}

exports.create = async (req, res) => {
  const { title, description, severity } = req.body
  if (!title || !description || !severity) {
    return res.status(400).json({ error: 'All fields required' })
  }
  if (!['Low', 'Medium', 'High'].includes(severity)) {
    return res.status(400).json({ error: 'Invalid severity' })
  }
  const incident = new Incident({ title, description, severity })
  await incident.save()
  res.status(201).json({
    id: incident._id,
    title,
    description,
    severity,
    reported_at: incident.reported_at
  })
}

exports.getById = async (req, res) => {
  const incident = await Incident.findById(req.params.id)
  if (!incident) {
    return res.status(404).json({ error: 'Not found' })
  }
  res.json({
    id: incident._id,
    title: incident.title,
    description: incident.description,
    severity: incident.severity,
    reported_at: incident.reported_at
  })
}

exports.delete = async (req, res) => {
  const incident = await Incident.findByIdAndDelete(req.params.id)
  if (!incident) {
    return res.status(404).json({ error: 'Not found' })
  }
  res.status(204).send()
}