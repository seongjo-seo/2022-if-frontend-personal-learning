// @ts-check

/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

// app.use(express.json())
// pug는 임시 템플릿
app.set('views', 'src/views')
app.set('view engine', 'ejs')
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우
// 제대로 인식되지 않는 문제 해결해준다. parser를 위한 값
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const signRouter = require('./routers/sign')

app.use('/', signRouter)

// static data
app.use('/public', express.static('src/public'))
// 다시 봐야할듯
app.use(express.static(`${__dirname}/src/public`))

// Error 잡는 곳
app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500
  res.send(err.message)
})

module.exports = app
