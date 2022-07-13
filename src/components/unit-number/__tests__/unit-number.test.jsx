import React, { useState } from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen } from '@/test-utils'

import { theme } from '../../theme'
import { UnitNumber } from '../index'

/* eslint-disable */
const ControlledUnitNumber = ({ value: valueProps, ...props }) => {
  const [value, setValue] = useState(valueProps || '')

  return (
    <>
      <p data-testid='unit-number-value'>{value}</p>
      <UnitNumber
        {...props}
        placeholder='xxxx'
        value={value}
        onChange={setValue}
      />
    </>
  )
}
/* eslint-enable */

describe('components > UnitNumber', () => {
  it('should render correctly', () => {
    render(<UnitNumber placeholder='xxxx' />)
    const unitNumberFields = screen.getAllByRole('textbox')
    expect(unitNumberFields.length).toBe(2)
  })

  describe('Controlled', () => {
    it('should be able to type in unit-number and return the correct value', () => {
      render(<ControlledUnitNumber />)
      const unitNumberFields = screen.getAllByRole('textbox')
      const valueText = screen.getByTestId('unit-number-value')
      userEvent.type(unitNumberFields[0], '1234')
      userEvent.type(unitNumberFields[1], '8899')
      expect(unitNumberFields[0]).toHaveValue('1234')
      expect(unitNumberFields[1]).toHaveValue('8899')
      expect(valueText).toHaveTextContent('1234-8899')

      // Should remove non number character
      userEvent.clear(unitNumberFields[0])
      expect(valueText).toHaveTextContent('-8899')
      userEvent.type(unitNumberFields[0], '12ABC78')

      userEvent.clear(unitNumberFields[1])
      expect(valueText).toHaveTextContent('1278-')
      userEvent.type(unitNumberFields[1], '34PA12')

      expect(unitNumberFields[0]).toHaveValue('1278')
      expect(unitNumberFields[1]).toHaveValue('3412')
      expect(valueText).toHaveTextContent('1278-3412')

      userEvent.clear(unitNumberFields[0])
      userEvent.clear(unitNumberFields[1])
      expect(valueText).toHaveTextContent('')
    })

    it('should render with style props', () => {
      const { rerender } = render(<ControlledUnitNumber fluid rounded />)
      const unitNumberWrapper = screen.getByTestId('unit-number-wrapper')
      expect(unitNumberWrapper).toHaveStyle({
        width: '100%',
        'border-radius': '50px',
      })

      // Fluid is higher priority than width, so width will not have any effect here
      // Rounded is higher priority than radius, so radius will not have effect here
      rerender(
        <ControlledUnitNumber fluid width='400px' rounded radius='8px' />
      )
      expect(unitNumberWrapper).toHaveStyle({
        width: '100%',
        'border-radius': '50px',
      })

      rerender(
        <ControlledUnitNumber
          width='400px'
          height='50px'
          radius='8px'
          hasError
          customStyle={{
            'margin-bottom': '20px',
            padding: '10px',
          }}
        />
      )
      expect(unitNumberWrapper).toHaveStyle({
        width: '400px',
        padding: '10px',
        'border-radius': '8px',
        'border-color': theme.colors.danger,
        'margin-bottom': '20px',
      })
    })

    it('should not be able to type in input field with disabled/readOnly props', () => {
      const { rerender } = render(<ControlledUnitNumber disabled />)
      const unitNumberFields = screen.getAllByRole('textbox')
      userEvent.type(unitNumberFields[0], '1234')
      userEvent.type(unitNumberFields[1], '5678')
      expect(unitNumberFields[0]).toHaveValue('')
      expect(unitNumberFields[1]).toHaveValue('')

      rerender(<ControlledUnitNumber readOnly />)
      expect(() => userEvent.click(unitNumberFields[0])).toThrow()
      expect(() => userEvent.click(unitNumberFields[1])).toThrow()
    })

    it('should render with outline variant', () => {
      const { rerender } = render(
        <ControlledUnitNumber variant='outline' borderColor='secondary' />
      )
      const unitNumberWrapper = screen.getByTestId('unit-number-wrapper')
      expect(unitNumberWrapper).toHaveStyle({
        'border-color': theme.colors.secondary,
      })

      rerender(<ControlledUnitNumber variant='outline' hasError />)
      const unitNumberFields = screen.getAllByRole('textbox')
      userEvent.type(unitNumberFields[0], '1234')
      userEvent.type(unitNumberFields[1], '5678')

      expect(unitNumberFields[0]).toHaveValue('1234')
      expect(unitNumberFields[1]).toHaveValue('5678')
    })

    it('should throw error when value is not of type string', () => {
      vi.spyOn(console, 'error').mockImplementation(() => vi.fn())
      expect(() => render(<ControlledUnitNumber value={true} />)).toThrow() //eslint-disable-line
      vi.restoreAllMocks()
    })
  })
})
