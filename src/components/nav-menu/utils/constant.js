import React from 'react'
import { FiActivity, FiHome, FiSettings, FiMail } from 'react-icons/fi'

export const defaultMenu = [
  {
    type: 'NavMenu.Item',
    props: {
      children: (
        <>
          <FiActivity /> Micro UI
        </>
      ),
    },
  },
  {
    type: 'NavMenu.List',
    components: [
      {
        type: 'NavMenu.Item',
        props: {
          active: true,
          children: 'Home',
        },
      },
      {
        type: 'NavMenu.Item',
        props: {
          children: 'Products',
        },
      },
      {
        type: 'NavMenu.Item',
        props: {
          children: 'About',
        },
      },
    ],
  },
]

export const withIconMenu = [
  {
    type: 'NavMenu.Item',
    props: {
      children: (
        <>
          <FiActivity /> Micro UI
        </>
      ),
    },
  },
  {
    type: 'NavMenu.List',
    components: [
      {
        type: 'NavMenu.Item',
        props: {
          children: 'Home',
          icon: <FiHome />,
        },
      },
      {
        type: 'NavMenu.Item',
        props: {
          children: 'Products',
          icon: <FiSettings />,
        },
      },
      {
        type: 'NavMenu.Item',
        props: {
          children: 'About',
          icon: <FiMail />,
        },
      },
    ],
  },
]

export const withSubMenu = [
  {
    type: 'NavMenu.Item',
    props: {
      children: (
        <>
          <FiActivity /> Micro UI
        </>
      ),
    },
  },
  {
    type: 'NavMenu.List',
    components: [
      {
        type: 'NavMenu.Item',
        props: {
          children: 'Home',
          icon: <FiHome />,
        },
      },
      {
        type: 'NavMenu.SubMenu',
        props: {
          title: 'Products',
          icon: <FiSettings />,
        },
        components: [
          {
            type: 'NavMenu.Item',
            props: {
              children: 'Car',
            },
          },
          {
            type: 'NavMenu.Item',
            props: {
              children: 'House',
            },
          },
          {
            type: 'NavMenu.Item',
            props: {
              children: 'Airplane',
            },
          },
        ],
      },
      {
        type: 'NavMenu.SubMenu',
        props: {
          title: 'About',
          icon: <FiMail />,
        },
        components: [
          {
            type: 'NavMenu.Item',
            props: {
              children: 'Car',
            },
          },
          {
            type: 'NavMenu.Item',
            props: {
              children: 'House',
            },
          },
          {
            type: 'NavMenu.Item',
            props: {
              children: 'Airplane',
            },
          },
        ],
      },
    ],
  },
]

export const withCustomStyle = [
  {
    type: 'NavMenu.Item',
    props: {
      children: (
        <>
          <FiActivity /> Micro UI
        </>
      ),
    },
  },
  {
    type: 'NavMenu.List',
    props: {
      customStyle: {
        'margin-top': '20px',
      },
    },
    components: [
      {
        type: 'NavMenu.Item',
        props: {
          active: true,
          children: 'Home',
          customStyle: {
            padding: '20px',
          },
        },
      },
      {
        type: 'NavMenu.Item',
        props: {
          children: 'Products',
          customStyle: {
            padding: '20px',
          },
        },
      },
      {
        type: 'NavMenu.Item',
        props: {
          children: 'About',
          customStyle: {
            padding: '20px',
          },
        },
      },
    ],
  },
]
