const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 80;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
const authenticationRouth = require('./routes/authentication')
// app.use('/subscribers', subscribersRouter)
app.use('/authentication',authenticationRouth)
app.get('/', (req, res) => res.send(`Server Started at PORT ${PORT}`));
app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`))