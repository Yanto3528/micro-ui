export const normalizeOptionsData = (options) => {
  const parsedStart = Number(options.start)
  const parsedEnd = Number(options.end)
  const parsedStep = Number(options.step) || 1
  let result = {}
  if (Array.isArray(options)) {
    result = options.reduce(
      (accum, next) => ({ ...accum, [next.value]: next.name }),
      {}
    )
  } else if (parsedStart >= 0 && parsedEnd >= parsedStart) {
    for (let i = parsedStart; i <= parsedEnd; i += parsedStep) {
      result[i] = i
    }
  }

  return result
}

export const generateOptions = (options, filter) => {
  const parsedStart = Number(options?.start)
  const parsedEnd = Number(options?.end)
  const parsedStep = Number(options?.step)

  if (Array.isArray(options)) {
    const filteredData = filterOptions(options, filter)
    return filteredData
  } else if (parsedStart >= 0 && parsedEnd >= parsedStart) {
    const optionArray = []
    const step = parsedStep || 1

    for (let i = parsedStart; i <= parsedEnd; i += step) {
      optionArray.push({ value: String(i), name: String(i) })
    }

    return optionArray
  } else {
    return []
  }
}

// Private function
const filterOptions = (options, filterArray) => {
  if (Array.isArray(filterArray)) {
    const optionResult = [...options]
    filterArray.forEach((filterOption) => {
      const optionIndex = optionResult.findIndex(
        (option) => option.value === filterOption
      )
      if (optionIndex !== -1) {
        optionResult.splice(optionIndex, 1)
      }
    })
    return optionResult
  }

  return options
}
