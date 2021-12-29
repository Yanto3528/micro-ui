const imageSrc =
  'https://images.unsplash.com/photo-1640697687394-d02650d7ecc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

export const defaultCard = [
  {
    type: 'Card.Image',
    props: {
      src: imageSrc,
      alt: 'Sea photo',
    },
  },
  {
    type: 'Card.Body',
    components: [
      {
        type: 'Card.Group',
        components: [
          {
            type: 'Card.Title',
            props: {
              children: 'Title',
            },
          },
          {
            type: 'Card.Text',
            props: {
              color: 'lightGray',
              children: 'Monday Jan 20 , 2020',
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

export const horizontalCard = [
  {
    type: 'Card.Image',
    props: {
      src: imageSrc,
      alt: 'Sea photo',
    },
  },
  {
    type: 'Card.Body',
    components: [
      {
        type: 'Card.Group',
        components: [
          {
            type: 'Card.Title',
            props: {
              children: 'Title',
            },
          },
          {
            type: 'Card.Text',
            props: {
              color: 'lightGray',
              children: 'Monday Jan 20 , 2020',
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
