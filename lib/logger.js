import Winston from 'winston'

module.exports = new Winston.Logger({
  transports: [
    new Winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ]
});
