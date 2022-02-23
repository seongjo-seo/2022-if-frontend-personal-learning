//@ts-check

/* eslint-disable no-console */

const express = require('express')

/* app라우터에서 전체 반환 */
const app = require('./app')

const PORT = 8090

app.listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`)
})

// 이곳이 분기점 이 아래 부분으로 다 수정하면 됨... express-error-handler제거

// var serveStatic = require('serve-static')
// var path = require('path')
// var expressSession = require('express-session')

// var bodyParser_post = require('body-parser') //post 방식 파서
//post 방식 일경우 begin
//post 의 방식은 url 에 추가하는 방식이 아니고 body 라는 곳에 추가하여 전송하는 방식
// app.use(bodyParser_post.urlencoded({ extended: false })) // post 방식 세팅
// app.use(bodyParser_post.json()) // json 사용 하는 경우의 세팅
//post 방식 일경우 end

// app.use(serveStatic(path.join(__dirname, 'public')))

//세션 환경 세팅
//세션은 서버쪽에 저장하는 것을 말하는데, 파일로 저장 할 수도 있고 레디스라고 하는 메모리DB등 다양한 저장소에 저장 할 수가 있는데
// app.use(
//   expressSession({
//     secret: 'my key', //이때의 옵션은 세션에 세이브 정보를 저장할때 할때 파일을 만들꺼냐 , 아니면 미리 만들어 놓을꺼냐 등에 대한 옵션들임
//     resave: true,
//     saveUninitialized: true,
//   })
// )
