'use stirct'
// db 설정
// @ts-check
const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  // 예제들이 port 번호가 없다 port: '3306',
  user: 'root',
  password: '1234',
  database: 'papdb',
})
// 이부분 연결하면 왜 에러가 날까
db.connect()

module.exports = db
