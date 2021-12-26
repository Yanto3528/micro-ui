import React from 'react'
import userEvent from '@testing-library/user-event'
import { Plus, Minus } from 'react-feather'

import { render, screen, fireEvent, waitFor } from '@/test-utils'

import { theme } from '../../theme'
import { Accordion } from '../index'

const mockFn = jest.fn()

/* eslint-disable */
const BaseAccordion = ({ items, ...props }) => {
  return (
    <Accordion {...props}>
      {items.map((item, index) => (
        <Accordion.Item {...item.props} key={index}>
          <Accordion.Header {...item.header.props}>
            {item.header.children}
          </Accordion.Header>
          <Accordion.Content {...item.content.props}>
            {item.content.children}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
/* eslint-enable */

const defaultItems = [
  {
    header: { children: 'header' },
    content: { children: 'content', props: { onClick: mockFn } },
  },
  {
    header: { children: 'header' },
    content: { children: 'content', props: { onClick: mockFn } },
  },
  {
    header: { children: 'header' },
    content: { children: 'content', props: { onClick: mockFn } },
  },
]

const itemsHeaderIcon = [
  {
    header: {
      children: 'header',
      props: {
        openIcon: <Plus size='1em' />,
        closeIcon: <Minus size='1em' />,
      },
    },
    content: { children: 'content' },
  },
  {
    header: {
      children: 'header',
      props: {
        openIcon: <Plus size='1em' />,
        closeIcon: <Minus size='1em' />,
      },
    },
    content: { children: 'content' },
  },
  {
    header: {
      children: 'header',
      props: {
        openIcon: <Plus size='1em' />,
        closeIcon: <Minus size='1em' />,
      },
    },
    content: { children: 'content' },
  },
]

const itemsWithStyle = [
  {
    props: {
      customStyle: {
        'margin-top': '10px',
      },
    },
    header: {
      children: 'header',
      props: {
        customStyle: {
          'margin-bottom': '10px',
        },
        activeStyle: {
          'background-color': theme.colors.primary,
          color: theme.colors.white,
        },
      },
    },
    content: {
      children: 'content',
      props: {
        customStyle: {
          padding: '20px',
        },
      },
    },
  },
  {
    props: {
      customStyle: {
        'margin-top': '10px',
      },
    },
    header: {
      children: 'header',
      props: {
        customStyle: {
          'margin-bottom': '10px',
        },
        activeStyle: {
          'background-color': theme.colors.primary,
          color: theme.colors.white,
        },
      },
    },
    content: {
      children: 'content',
      props: {
        customStyle: {
          padding: '20px',
        },
      },
    },
  },
  {
    props: {
      customStyle: {
        'margin-top': '10px',
      },
    },
    header: {
      children: 'header',
      props: {
        customStyle: {
          'margin-bottom': '10px',
        },
        activeStyle: {
          'background-color': theme.colors.primary,
          color: theme.colors.white,
        },
      },
    },
    content: {
      children: 'content',
      props: {
        customStyle: {
          padding: '20px',
        },
      },
    },
  },
]

describe('components > Accordion', () => {
  it('should render correctly', () => {
    render(<BaseAccordion items={defaultItems} />)
    const items = screen.getAllByTestId('accordion-item')
    const headersText = screen.getAllByText(/header/i)
    const contentsText = screen.queryAllByText(/content/i)

    expect(items.length).toBe(3)
    expect(headersText.length).toBe(3)
    expect(contentsText.length).toBe(0)
  })

  it('should be able to expand accordion content', async () => {
    render(<BaseAccordion items={defaultItems} />)
    const items = screen.getAllByTestId('accordion-item')
    userEvent.click(items[0])
    let content = screen.getByText(/content/i)
    expect(content).toBeInTheDocument()

    userEvent.click(items[0])
    content = screen.queryByText(/content/i)
    expect(content).toBeInTheDocument()

    // Click on 2nd item, 1st item should be closed and 2nd should be expanded
    userEvent.click(items[1])
    fireEvent.animationEnd(
      screen.getAllByTestId('animate-accordion-wrapper')[0]
    )
    await waitFor(() => {
      expect(items[0].children.length).toBe(1)
    })
    expect(items[1].children.length).toBe(2)
  })

  it('should be able to expand/close accordion content with allowToggle', async () => {
    render(<BaseAccordion items={defaultItems} allowToggle />)
    const items = screen.getAllByTestId('accordion-item')
    userEvent.click(items[0])
    let content = screen.getByText(/content/i)
    expect(content).toBeInTheDocument()

    // Making sure that clicking the content won't close the accordion
    userEvent.click(content)
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(content).toBeInTheDocument()

    userEvent.click(items[0])
    fireEvent.animationEnd(screen.getByTestId('animate-accordion-wrapper'))
    await waitFor(() => {
      expect(screen.queryByText(/content/i)).not.toBeInTheDocument()
    })
  })

  it('should be able to expand multiple accordion content with allowMultiple', () => {
    render(<BaseAccordion items={defaultItems} allowMultiple />)
    const items = screen.getAllByTestId('accordion-item')
    userEvent.click(items[0])
    userEvent.click(items[1])
    let contents = screen.getAllByText(/content/i)
    expect(contents.length).toBe(2)
  })

  it('should be able to open one of accordion content by default with defaultIndex', () => {
    render(<BaseAccordion items={defaultItems} defaultIndex={1} />)
    const items = screen.getAllByTestId('accordion-item')
    expect(items[0].children.length).toBe(1)
    expect(items[1].children.length).toBe(2)
    expect(items[2].children.length).toBe(1)
  })

  it('should render with custom header icon for open and close icon', () => {
    render(<BaseAccordion items={itemsHeaderIcon} />)
    const headers = screen.getAllByTestId('accordion-header')
    headers.forEach((headerWrapper) => {
      expect(headerWrapper.children.length).toBe(2)
      expect(headerWrapper.children[0]).toBeInTheDocument()

      userEvent.click(headerWrapper)
      expect(headerWrapper.children[0]).toBeInTheDocument()
    })
  })

  it('should render with style props', () => {
    const { rerender } = render(<BaseAccordion items={itemsWithStyle} fluid />)
    const wrapper = screen.getByTestId('accordion-wrapper')
    expect(wrapper).toHaveStyle({
      width: '100%',
    })

    // Fluid is higher priority than width, so width will not have any effect here
    rerender(<BaseAccordion items={itemsWithStyle} fluid width='500px' />)
    expect(wrapper).toHaveStyle({
      width: '100%',
    })

    rerender(
      <BaseAccordion
        items={itemsWithStyle}
        width='500px'
        customStyle={{
          'margin-bottom': '30px',
        }}
        allowMultiple
        arrowPosition='left'
      />
    )
    expect(wrapper).toHaveStyle({
      width: '500px',
      'margin-bottom': '30px',
    })
    const items = screen.getAllByTestId('accordion-item')
    const headers = screen.getAllByTestId('accordion-header')
    items.forEach((item) => {
      expect(item).toHaveStyle({
        'margin-top': '10px',
      })
    })

    headers.forEach((header) => {
      expect(header).toHaveStyle({
        'margin-bottom': '10px',
        'flex-direction': 'row',
      })
    })

    userEvent.click(items[0])
    userEvent.click(items[1])
    userEvent.click(items[2])
    const contents = screen.getAllByText(/content/i)
    contents.forEach((content) => {
      expect(content).toHaveStyle({
        padding: '20px',
      })
    })

    // Test active style
    headers.forEach((header) => {
      expect(header).toHaveStyle({
        'background-color': theme.colors.primary,
        color: theme.colors.white,
      })
    })
  })

  it('should throw an error when using <Accordion.Item /> outside of Accordion', () => {
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn())
    expect(() => render(<Accordion.Item>Item</Accordion.Item>)).toThrow()
    jest.restoreAllMocks()
  })

  it('should throw an error when using <Accordion.Header /> or <Accordiont.Content outside of Accordion.Item', () => {
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn())
    expect(() => render(<Accordion.Header>Header</Accordion.Header>)).toThrow()
    expect(() =>
      render(<Accordion.Content>Content</Accordion.Content>)
    ).toThrow()
    jest.restoreAllMocks()
  })
})
