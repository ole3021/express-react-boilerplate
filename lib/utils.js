export const errMsg = (err) => {
  if (err.errors) {
    return Object.keys(err.errors).map((key) => {
      const error = err.errors[key]
      return error.message || error.name + ':' + error.path + error.kind
    })
  }

  if (err.message) {
    return 'ERROR: ' + err.message
  }

  return 'Unknow Error, please contact Admin for help'
}

export const test = 'test'
