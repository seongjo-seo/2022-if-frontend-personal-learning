'use stirct'
// db 설정
// @ts-check
const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'papdb',
})
// 이부분 연결하면 왜 에러가 날까
// -> root에 권한 조정 때문이었음 cmd 창에서 권한부여로 에러 해결됨 메모
db.connect()

module.exports = db
