import express from 'express'
import routes from './routes/index.routes'

const port = process.env.PORT || 1010
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('App is running...')
})

app.use(routes)

app.use((req, res, next) => {
    next(new Error('Route not Found'))
})

app.listen(port, () => {
    console.log(`Server is listening on PORT: ${port}`)
})
