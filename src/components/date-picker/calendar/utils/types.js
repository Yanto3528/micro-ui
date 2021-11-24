import dayjs from 'dayjs'

function checkDayjs(props, propName, componentName) {
  if (!dayjs.isDayjs(props[propName])) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}, ${propName} should be instance of Dayjs.`
    )
  }
}

function checkDayjsType(isRequired, props, propName, componentName) {
  return checkDayjs(props, propName, componentName)
}

const dayjsType = checkDayjsType.bind(null, false)
dayjsType.isRequired = checkDayjsType.bind(null, true)

export { dayjsType }
