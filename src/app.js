// @ts-check

/* eslint-disable no-console */
const express = require('express')
// dom 파서(?)
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(express.static(`${__dirname}/src/public`))

app.use(express.json())
app.set('views', 'src/views')
app.set('view engine', 'pug')
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우
// 제대로 인식되지 않는 문제 해결해준다. parser를 위한 값
app.use(bodyParser.urlencoded({ extended: true }))

const userRouter = require('./routers/user')
const loginRouter = require('./routers/login')
const joinRouter = require('./routers/join')
// 죽여놓은 곳
// const sessionRouter = require('./routers/session')
// const chatRouter = require('./routers/chat')

// app.use('/chat', chatRouter)
// app.use('/count', sessionRouter)
app.use('/join', joinRouter)
app.use('/login', loginRouter)
app.use('/users', userRouter)
app.use('/public', express.static('src/public'))
app.use('/uploads', express.static('uploads'))

// Error 잡는 곳
app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500
  res.send(err.message)
})

module.exports = app
