// Archivo para iniciar json-server en Render
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Usamos middlewares (logs, cors, etc.)
server.use(middlewares)

// Usamos las rutas del router
server.use(router)

// Levantamos el servidor
server.listen(process.env.PORT || 3000, () => {
  console.log('✅ JSON Server está corriendo en el puerto 3000')
})