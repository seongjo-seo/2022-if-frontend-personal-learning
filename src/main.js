//@ts-check

/* eslint-disable no-console */

const express = require('express')

const userRouter = express.Router()

const app = express()
app.use(express.json())

app.set('views', 'src/views')
app.set('view engine', 'pug')

const PORT = 5000

userRouter.get('/', (req, res) => {
  res.send('User list')
})

const USERS = {
  15: {
    nickname: 'foo',
  },
  16: {
    nickname: 'bar',
  },
}

userRouter.param('id', (req, res, next, value) => {
  // @ts-ignore
  req.user = USERS[value]
  next()
})

userRouter.get('/:id', (req, res) => {
  const resMimeType = req.accepts(['json', 'html'])

  if (resMimeType === 'json') {
    //@ts-ignore
    res.send(req.user)
  } else if (resMimeType === 'html') {
    res.render('user-profile', {
      nickname: req.user.nickname,
    })
  }
})

userRouter.post('/', (req, res) => {
  // Register user
  res.send('User registered.')
})

userRouter.post('/:id/nickname', (req, res) => {
  // req.body: {"nickname":"bar"}
  // @ts-ignore
  const { user } = req
  const { nickname } = req.body

  user.nickname = nickname

  res.send(`User nickname updated: ${nickname}`)
})

app.use('/users', userRouter)

app.get('/', (req, res) => {
  res.render('index', {
    message: 'Hello, pug!!!',
  })
})

app.listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`)
})
