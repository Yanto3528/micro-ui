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
