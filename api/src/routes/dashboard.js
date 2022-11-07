const { Router } = require('express')
const rutaDashboard = Router()
const { listAllUsers, setUserRole } = require('./../controlers/dashboard')

rutaDashboard.get('/promover', (req, res) => {
  const { email } = req.query
  res.json(setUserRole(email, 'admin'))
})

rutaDashboard.get('/degradar', (req, res) => {
  const { email } = req.query
  res.json(setUserRole(email, 'regular'))
})

rutaDashboard.get('/', async (req, res) => {
  const usuarios = await listAllUsers()
  console.log('Se envió la lista de usuarios a dashboard')
  res.json(usuarios)
})

module.exports = rutaDashboard
