//@ts-check

/* eslint-disable no-console */

const express = require('express')

const app = require('./app')

const PORT = 5000

app.listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`)
})
