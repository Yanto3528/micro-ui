import React, { useState } from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen } from '@/test-utils'

import { RadioGroup } from '../index'

/* eslint-disable */
const ControlledRadioGroup = ({ children, value: valueProps, ...props }) => {
  const [value, setValue] = useState(valueProps || '')

  return (
    <RadioGroup {...props} value={value} onChange={setValue} name='gender'>
      {children}
    </RadioGroup>
  )
}
/* eslint-enable */

describe('components > RadioGroup', () => {
  describe('Radio component', () => {
    beforeEach(() => {
      render(
        <ControlledRadioGroup>
          <RadioGroup.Radio value='M'>Male</RadioGroup.Radio>
          <RadioGroup.Radio value='F'>Female</RadioGroup.Radio>
        </ControlledRadioGroup>
      )
    })

    it('should render correctly', () => {
      const radios = screen.getAllByRole('radio')
      expect(radios.length).toBe(2)
    })

    it('should be able to check male and female back and forth', () => {
      const maleRadio = screen.getByRole('radio', { name: /^male/i })
      const femaleRadio = screen.getByRole('radio', { name: /^female/i })
      expect(maleRadio).toHaveAttribute('name', 'gender')
      expect(femaleRadio).toHaveAttribute('name', 'gender')

      expect(maleRadio).not.toBeChecked()
      expect(femaleRadio).not.toBeChecked()

      userEvent.click(maleRadio)
      expect(maleRadio).toBeChecked()
      expect(femaleRadio).not.toBeChecked()

      userEvent.click(femaleRadio)
      expect(maleRadio).not.toBeChecked()
      expect(femaleRadio).toBeChecked()
    })
  })

  describe('RadioButton component', () => {
    beforeEach(() => {
      render(
        <ControlledRadioGroup>
          <RadioGroup.Button value='M'>Male</RadioGroup.Button>
          <RadioGroup.Button value='F'>Female</RadioGroup.Button>
        </ControlledRadioGroup>
      )
    })

    it('should render correctly', () => {
      const radios = screen.getAllByRole('radio')
      expect(radios.length).toBe(2)
    })

    it('should be able to check male and female back and forth', () => {
      const maleButton = screen.getByRole('radio', { name: /^male/i })
      const femaleButton = screen.getByRole('radio', { name: /^female/i })
      expect(maleButton).toHaveAttribute('name', 'gender')
      expect(femaleButton).toHaveAttribute('name', 'gender')

      expect(maleButton).not.toBeChecked()
      expect(femaleButton).not.toBeChecked()

      userEvent.click(maleButton)
      expect(maleButton).toBeChecked()
      expect(femaleButton).not.toBeChecked()

      userEvent.click(femaleButton)
      expect(maleButton).not.toBeChecked()
      expect(femaleButton).toBeChecked()
    })
  })

  it('should render with customStyle', () => {
    const { rerender } = render(
      <ControlledRadioGroup fluid width='400px'>
        <RadioGroup.Button value='M'>Male</RadioGroup.Button>
        <RadioGroup.Button value='F'>Female</RadioGroup.Button>
      </ControlledRadioGroup>
    )

    const radioGroupWrapper = screen.getByRole('radiogroup')
    expect(radioGroupWrapper).toHaveStyle({
      width: '100%',
    })

    rerender(
      <ControlledRadioGroup
        gap='20px'
        direction='row'
        customStyle={{ 'margin-bottom': '20px' }}
        width='335px'
      >
        <RadioGroup.Button value='M'>Male</RadioGroup.Button>
        <RadioGroup.Button value='F'>Female</RadioGroup.Button>
      </ControlledRadioGroup>
    )
    expect(radioGroupWrapper).toHaveStyle({
      width: '335px',
      gap: '20px',
      'flex-direction': 'row',
      'margin-bottom': '20px',
    })
  })

  it('should throw an error when using <RadioGroup.Radio /> or <RadioGroup.Button /> outside of RadioGroup', () => {
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn())
    expect(() => render(<RadioGroup.Radio>Male</RadioGroup.Radio>)).toThrow()
    expect(() =>
      render(<RadioGroup.Button>Female</RadioGroup.Button>)
    ).toThrow()
    jest.restoreAllMocks()
  })
})
