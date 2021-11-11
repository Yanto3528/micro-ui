import dayjs from 'dayjs'

function checkDayjs(props, propName, componentName) {
  if (!dayjs.isDayjs(props[propName])) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}, ${propName} should be instance of Dayjs.`
    )
  }
}

function checkDayjsType(isRequired, props, propName, componentName) {
  if (props[propName] == null) {
    if (isRequired) {
      return new Error(
        `${propName} is marked as required, but received undefined in ${componentName}.`
      )
    }
    return null
  } else {
    return checkDayjs(props, propName, componentName)
  }
}

const dayjsType = checkDayjsType.bind(null, false)
dayjsType.isRequired = checkDayjsType.bind(null, true)

export { dayjsType }
