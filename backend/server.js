import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import blogRoutes from './routes/blogRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

const __dirname = path.resolve()

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())



app.use('/api/blogs', blogRoutes)
app.use('/api/users', userRoutes) 


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join( __dirname, '/frontend/build')))

    app.get("*", (req,res) => res.sendFile(path.resolve( __dirname, 'frontend', 'build', 'index.html')))
}else{
    app.get('/', (req,res) => {
        res.send('API is running.....')
    })
    
}

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))