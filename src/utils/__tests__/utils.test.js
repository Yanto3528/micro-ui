import { theme, extendTheme } from '../../components/theme'

import {
  getColor,
  getBorderRadius,
  resolveColor,
  selectProps,
  getProps,
  mergeRefs,
  getMediaQuery,
  mergeDeep,
} from '../index'

describe('utils > getColor', () => {
  it('should return color from theme if it exists, or whatever the value passed if not exist', () => {
    let color = getColor(theme, 'primary')
    expect(color).toBe(theme.colors.primary)

    color = getColor(theme, '#ddd')
    expect(color).toBe('#ddd')
  })
})

describe('utils > getBorderRadius', () => {
  it('should return radius from theme if it exists, or whatever the value passed if not exist', () => {
    let radius = getBorderRadius({ theme, rounded: true, radius: '4px' })
    expect(radius).toBe('50px')

    // Access theme.radius.md and return it
    radius = getBorderRadius({ theme, rounded: false, radius: 'md' })
    expect(radius).toBe(theme.radius.md)

    // If radius not exist in theme.radius then return whatever value pass as radius
    radius = getBorderRadius({ theme, rounded: false, radius: '20px' })
    expect(radius).toBe('20px')
  })
})

describe('utils > resolveColor', () => {
  it('should return a function to get color based on parameter', () => {
    const colorFn = resolveColor('color')
    const resultColor = colorFn({ theme, color: 'secondary' })
    expect(resultColor).toBe(theme.colors.secondary)
  })
})

describe('utils > extendTheme', () => {
  it('should return an object which is merged with base theme and newTheme', () => {
    const result = extendTheme({
      colors: {
        newColor: '#f0a030',
        secondary: '#333',
      },
    })
    expect(result).toEqual({
      ...theme,
      colors: {
        ...theme.colors,
        newColor: '#f0a030',
        secondary: '#333',
      },
    })
  })
})

describe('utils > selectProps', () => {
  it('should return an object containing the selected keys', () => {
    const result = selectProps({ bg: 'primary', color: 'white' }, ['color'])
    expect(result).toEqual({
      color: 'white',
    })
  })

  it('should return an object with same key if theres no selectedKey provided', () => {
    const result = selectProps({ bg: 'primary', color: 'white' })
    expect(result).toEqual({
      bg: 'primary',
      color: 'white',
    })
  })

  it('should return an object which only containing valid selectedKeys', () => {
    const result = selectProps(
      { bg: 'primary', color: 'white', width: '300px' },
      ['width', 'height']
    )
    expect(result).toEqual({
      width: '300px',
    })
  })
})

describe('utils > getProps', () => {
  it('should return an object which override the default theme props with component props', () => {
    const result = getProps(
      { bg: 'primary', color: 'white' },
      { bg: 'secondary' }
    )
    expect(result).toEqual({
      bg: 'primary',
      color: 'white',
    })
  })

  it('should return an object which override the default theme props and select only specific keys', () => {
    const result = getProps(
      { bg: 'primary', color: 'white' },
      { color: 'secondary' },
      ['color']
    )
    expect(result).toEqual({
      color: 'white',
    })
  })
})

describe('components > mergeRefs', () => {
  it('should return a function to call refs that has been merged', () => {
    const refFn = jest.fn()
    const refObj = {}

    const resultFn = mergeRefs(refFn, refObj)
    expect(typeof resultFn).toBe('function')
    resultFn('Hello')

    expect(refFn).toHaveBeenCalledTimes(1)
    expect(refFn).toHaveBeenCalledWith('Hello')
    expect(refObj.current).toBe('Hello')
  })

  it('should return null when nothing is passed to mergeRefs', () => {
    let result = mergeRefs()
    expect(result).toBeNull()

    result = mergeRefs(false, '', undefined, 0)
    expect(result).toBeNull()
  })
})

describe('utils > getMediaQuery', () => {
  it('should return a function to call for styled-components', () => {
    const result = getMediaQuery(1920)
    expect(typeof result).toBe('function')
  })

  it('should throw an error when passing non number value to getMediaQuery', () => {
    const nonValidValue = [false, undefined, null, '']
    nonValidValue.forEach((value) => {
      expect(() => getMediaQuery(value)).toThrow()
    })
  })
})

describe('utils > mergeDeep', () => {
  const obj1 = {
    colors: {
      primary: 'primary',
      secondary: 'secondary',
    },
    default: {
      component: {
        button: {
          bg: 'primary',
          color: 'white',
        },
      },
    },
  }
  const obj2 = {
    colors: {
      secondary: 'lightGray',
      blue: 'blue',
    },
  }
  const expectedResult = {
    colors: {
      primary: 'primary',
      secondary: 'lightGray',
      blue: 'blue',
    },
    default: {
      component: {
        button: {
          bg: 'primary',
          color: 'white',
        },
      },
    },
  }

  it('should return an object which is the result of merging 2 object together', () => {
    const result = mergeDeep(obj1, obj2)
    expect(result).toEqual(expectedResult)
  })

  it('should throw an error if it is not an object', () => {
    const nonObjectValue = [['color'], true, 'bg', 4, undefined, null]
    nonObjectValue.forEach((value) => {
      expect(() => mergeDeep({ color: 'white' }, value)).toThrow()
    })
    nonObjectValue.forEach((value) => {
      expect(() => mergeDeep(value, { color: 'white' })).toThrow()
    })
  })
})
