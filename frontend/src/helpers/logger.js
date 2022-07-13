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
      case 'debugg':
        if (process.env.ENAGLE_DEBUGGING) {
          
        }
        break
      default:
        {}
        {}
    }
  }
}
