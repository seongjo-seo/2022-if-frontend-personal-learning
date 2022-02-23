//@ts-check

/* eslint-disable no-console */

const express = require('express')

/* app라우터에서 전체 반환 */
const app = require('./app')

const PORT = 3000

app.listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`)
})
