// this just creates and fills a zero-indexed array array; 0, 1, 2, 3, etc
export const arraySequence = numberOfElements => Array.from(Array(numberOfElements).keys())

export const assertRange = (value, max = 127, min = 0) => {
  let result = typeof value === 'string' ? parseInt(value, 10) : value

  if (Number.isNaN(result) || result === null) {
    result = min
  }
  return result >= min ? (result <= max ? result : max) : min
}

export const findObj = (key, value) => arr => arr?.find(item => item?.[key] === value)

export const memoize = (functionParam) => {
  const cacheMap = new Map()

  return (...argsObj) => {
    const key = argsObj[0]
    if (cacheMap.has(key)) return cacheMap.get(key)
    const resultSet = functionParam(...argsObj)
    cacheMap.set(key, resultSet)
    return resultSet
  }
}
