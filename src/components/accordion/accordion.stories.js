import React from 'react'

import { theme } from '../theme'
import { Accordion } from './index'
import { Button } from '../button/index'

const DummyText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export default {
  title: 'Utils/Accordion',
  component: Accordion,
}

const Template = (args) => <Accordion {...args} />

export const AccordionLeftArrow = Template.bind({})
AccordionLeftArrow.args = {
  ...theme.default.component.accordion,
  children: DummyText,
}

export const AccordionRightArrow = Template.bind({})
AccordionRightArrow.args = {
  ...theme.default.component.accordion,
  children: DummyText,
  arrowPosition: 'right',
}

export const AccordionCustomStyle = Template.bind({})
AccordionCustomStyle.args = {
  ...theme.default.component.accordion,
  children: DummyText,
  arrowPosition: 'left',
  wrapperCustomStyle: {
    border: '1px solid red',
    borderRadius: '10px',
  },
  titleCustomStyle: {
    padding: '20px',
    color: 'blue',
  },
  contentCustomStyle: {
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '10px',
  },
}

export const AccordionWithComponent = Template.bind({})
AccordionWithComponent.args = {
  ...theme.default.component.accordion,
  title: <Button children='Toggle Accordion' variant='outline' />,
  children: DummyText,
  arrowPosition: 'left',
}
