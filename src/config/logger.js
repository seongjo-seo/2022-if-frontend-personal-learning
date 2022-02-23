const { createLogger, transports, format } = require('winston')
const { combine, timestamp, label, printf, simple, colorize } = format

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`
})

// test 수정할 곳 많음 다시보기 log남기는 페이지

const printLogFormat = {
  file: combine(
    label({
      label: 'test code',
    }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:dd',
    }),
    printFormat
  ),
  console: combine(
    colorize(), //
    simple()
  ),
}

const opts = {
  file: new transports.File({
    filename: 'access.log',
    dirname: './logs',
    level: 'info',
    format: printLogFormat.file,
  }),
  console: new transports.Console({
    level: 'info',
    format: printLogFormat.console,
  }),
}

const logger = createLogger({
  transports: [opts.file],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(opts.console)
}

logger.stream = {
  write: (message) => logger.info(message),
}

module.exports = logger
