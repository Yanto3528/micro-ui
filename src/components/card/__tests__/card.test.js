import React from 'react'

import { render, screen } from '@/test-utils'

import { RenderComponent } from '../../../storybook-helpers'
import { defaultCard, horizontalCard } from '../utils/constant'
import { Card } from '../index'

const imageSrc =
  'https://images.unsplash.com/photo-1640697687394-d02650d7ecc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

const cardCustomStyle = [
  {
    type: 'Card.Image',
    props: {
      src: imageSrc,
      alt: 'Sea photo',
      customStyle: {
        'margin-bottom': '10px',
      },
    },
  },
  {
    type: 'Card.Body',
    props: {
      customStyle: {
        margin: '10px',
      },
    },
    components: [
      {
        type: 'Card.Group',
        props: {
          customStyle: {
            padding: '10px',
          },
        },
        components: [
          {
            type: 'Card.Title',
            props: {
              children: 'Title',
              customStyle: {
                padding: '20px',
              },
            },
          },
          {
            type: 'Card.Text',
            props: {
              color: 'lightGray',
              children: 'Monday Jan 20 , 2020',
              customStyle: {
                'margin-top': '10px',
              },
            },
          },
        ],
      },
      {
        type: 'Card.Text',
        props: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut platea...',
        },
      },
    ],
  },
]

/* eslint-disable */
const BaseCard = ({ components, ...props }) => {
  return (
    <Card {...props}>
      <RenderComponent components={components} parentComponent={Card} />
    </Card>
  )
}
/* eslint-enable */

describe('components > Card', () => {
  it('should render correctly', () => {
    render(<BaseCard components={defaultCard} />)
    const cardWrapper = screen.getByTestId('card-wrapper')
    const img = screen.getByRole('img')
    const title = screen.getByText(/title/i)
    const text = screen.getByText(/lorem/i)

    expect(cardWrapper).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  it('should render with horizontal direction', () => {
    render(<BaseCard components={horizontalCard} direction='row' />)
    const cardWrapper = screen.getByTestId('card-wrapper')

    expect(cardWrapper).toHaveStyle({
      flexDirection: 'row',
    })
  })

  it('should render with customStyle', () => {
    render(
      <BaseCard
        components={cardCustomStyle}
        customStyle={{ padding: '20px' }}
      />
    )

    const cardWrapper = screen.getByTestId('card-wrapper')
    const body = screen.getByTestId('card-body')
    const group = screen.getByTestId('card-group')
    const title = screen.getByText(/title/i)
    const image = screen.getByRole('img')
    const text = screen.getByText(/monday/i)

    expect(cardWrapper).toHaveStyle({
      padding: '20px',
    })
    expect(body).toHaveStyle({
      margin: '10px',
    })
    expect(group).toHaveStyle({
      padding: '10px',
    })
    expect(title).toHaveStyle({
      padding: '20px',
    })
    expect(image).toHaveStyle({
      'margin-bottom': '10px',
    })
    expect(text).toHaveStyle({
      'margin-top': '10px',
    })
  })
})
