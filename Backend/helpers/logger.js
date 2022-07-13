require('dotenv/config')

function log(message, level) {
  if (process.env.ENABLE_LOGGING) {
    switch (level) {
      case 'error':
        {}
        break
      case 'warn':
        {}
        break
      case 'info':
        {}
        break
      case 'debug':
        if (process.env.ENABLE_DEBUGGING) {
          
        }
        break
      default:
        {}
        {}
    }
  }
}

exports.log = log
