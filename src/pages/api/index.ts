// pages/api/index.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { createServer } from 'http'
import { Server } from 'socket.io'
import express from 'express'
import { Sequelize } from 'sequelize'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { cors: { origin: '*' } })

const sequelize = new Sequelize({
	dialect: 'mysql',
	host: 'localhost',
	username: 'root',
	password: 'root',
	database: 'discord_clone',
})

app.use(express.json())

// Example route
app.post('/login', async (req: NextApiRequest, res: NextApiResponse) => {
	// Handle login
	res.json({ message: 'Login route' })
})

io.on('connection', socket => {
	console.log('New client connected')
})

httpServer.listen(5000, () => {
	console.log('Server running on port 5000')
})
