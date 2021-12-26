import React from 'react'
import { Plus, Minus } from 'react-feather'

import { theme } from '../theme'
import { Accordion } from './index'

export default {
  title: 'Components/Others/Accordion',
  component: Accordion,
  subcomponents: {
    Header: Accordion.Header,
    Item: Accordion.Item,
    Content: Accordion.Content,
  },
}

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus dolor et porta commodo. Sed luctus, eros et pretium efficitur, justo risus suscipit diam, vel vehicula metus felis et quam. Pellentesque pharetra augue velit, at vestibulum orci dapibus eu. Praesent mollis eros nec tempus semper.'

/* eslint-disable */
const Template = ({ items, ...props }) => {
  return (
    <Accordion {...props}>
      {items.map((item, index) => (
        <Accordion.Item key={index}>
          <Accordion.Header {...item.header.props}>
            {item.header.children}
          </Accordion.Header>
          <Accordion.Content {...item?.content?.props}>
            {content}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
/* eslint-enable */

export const OpenOne = Template.bind({})
OpenOne.args = {
  ...theme.default.component.accordion.wrapper,
  defaultIndex: 1,
  items: [
    {
      header: {
        children: 'Header',
      },
    },
    {
      header: {
        children: 'Header',
      },
    },
    {
      header: {
        children: 'Header',
      },
    },
    {
      header: {
        children: 'Header',
      },
    },
  ],
}

export const OpenOneAndToggle = Template.bind({})
OpenOneAndToggle.args = {
  ...theme.default.component.accordion.wrapper,
  allowToggle: true,
  items: [
    {
      header: {
        children: 'Header',
      },
    },
    {
      header: {
        children: 'Header',
      },
    },
    {
      header: {
        children: 'Header',
      },
    },
    {
      header: {
        children: 'Header',
      },
    },
  ],
}

export const OpenMultiple = Template.bind({})
OpenMultiple.args = {
  ...theme.default.component.accordion.wrapper,
  allowMultiple: true,
  items: [
    {
      header: {
        children: 'Header',
      },
    },
    {
      header: {
        children: 'Header',
      },
    },
    {
      header: {
        children: 'Header',
      },
    },
    {
      header: {
        children: 'Header',
      },
    },
  ],
}

export const WithCustomActiveStyles = Template.bind({})
WithCustomActiveStyles.args = {
  ...theme.default.component.accordion.wrapper,
  items: [
    {
      header: {
        children: 'Header',
        props: {
          activeStyle: {
            'background-color': theme.colors.primary,
            color: 'white',
          },
        },
      },
    },
    {
      header: {
        children: 'Header',
        props: {
          activeStyle: {
            'background-color': theme.colors.primary,
            color: 'white',
          },
        },
      },
    },
    {
      header: {
        children: 'Header',
        props: {
          activeStyle: {
            'background-color': theme.colors.primary,
            color: 'white',
          },
        },
      },
    },
    {
      header: {
        children: 'Header',
        props: {
          activeStyle: {
            'background-color': theme.colors.primary,
            color: 'white',
          },
        },
      },
    },
  ],
}

export const WithArrowLeft = Template.bind({})
WithArrowLeft.args = {
  ...theme.default.component.accordion.wrapper,
  arrowPosition: 'left',
  items: [
    {
      header: {
        children: 'Header',
      },
    },
    {
      header: {
        children: 'Header',
      },
    },
    {
      header: {
        children: 'Header',
      },
    },
    {
      header: {
        children: 'Header',
      },
    },
  ],
}

export const WithCustomIcon = Template.bind({})
WithCustomIcon.args = {
  ...theme.default.component.accordion.wrapper,
  items: [
    {
      header: {
        children: 'Header',
        props: {
          openIcon: <Plus size='1em' />,
          closeIcon: <Minus size='1em' />,
        },
      },
    },
    {
      header: {
        children: 'Header',
        props: {
          openIcon: <Plus size='1em' />,
          closeIcon: <Minus size='1em' />,
        },
      },
    },
    {
      header: {
        children: 'Header',
        props: {
          openIcon: <Plus size='1em' />,
          closeIcon: <Minus size='1em' />,
        },
      },
    },
    {
      header: {
        children: 'Header',
        props: {
          openIcon: <Plus size='1em' />,
          closeIcon: <Minus size='1em' />,
        },
      },
    },
  ],
}
