import React from 'react'
import { Calendar, ChevronDown } from 'react-feather'

import { mergeDeep } from '../utils'

export const theme = {
  colors: {
    primary: '#4C6FFF',
    secondary: '#E4ECF7',
    tertiary: '#FF92AE',
    success: '#66CB9F',
    warning: '#F7936F',
    danger: '#F16063',
    info: '#68DBF2',
    darkBlue: '#16192C',
    dark: '#424242',
    dark1: '#292825',
    lightGray: '#718096',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    white: '#fff',
    black: '#000',
    facebook: '#3b5998',
    twitter: '#1da1f2',
    youtube: '#ff0000',
    instagram: '#c32aa3',
    pinterest: '#bd081c',
    linkedin: '#0a66c2',
    google: '#4285f4',
  },
  fontSize: {
    xs: '1rem',
    sm: '1.2rem',
    md: '1.4rem',
    lg: '2rem',
  },
  fontWeight: {
    normal: 'normal',
    'semi-bold': '500',
    bold: 'bold',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '15px',
  },
  default: {
    component: {
      accordion: {
        wrapper: {
          arrowPosition: 'right',
          fontSize: 'md',
          width: '100%',
          allowToggle: false,
          allowMultiple: false,
        },
        header: {
          padding: '1rem',
          borderColor: 'gray.100',
          fontSize: 'md',
          fontWeight: 'bold',
          color: 'dark',
        },
        content: {
          padding: '1rem',
          maxHeight: '500px',
          color: 'dark',
        },
      },
      avatar: {
        size: '4rem',
        rounded: true,
        showBorder: false,
      },
      badge: {
        bg: 'primary',
        color: 'white',
        padding: '0.3rem 1rem',
        variant: 'solid',
        radius: 'sm',
        fontSize: 'sm',
        textTransform: 'uppercase',
      },
      button: {
        bg: 'primary',
        color: 'white',
        rounded: false,
        padding: '1.2rem 1.6rem',
        radius: 'sm',
        fluid: false,
        variant: 'solid',
        fontSize: 'md',
        fontWeight: '600',
      },
      card: {
        wrapper: {
          radius: 'md',
          direction: 'column',
          width: '33.5rem',
        },
        body: {
          padding: '1.5rem',
        },
        title: {
          fontWeight: '600',
          fontSize: '1.6rem',
          color: 'dark',
        },
        text: {
          fontSize: '1.4rem',
          color: 'gray.600',
          marginBottom: '2rem',
        },
        group: {
          marginBottom: '2rem',
        },
        image: {
          width: '100%',
          height: 'auto',
          radius: '0px',
        },
      },
      checkbox: {
        activeColor: 'primary',
        borderColor: 'gray.300',
        color: 'dark',
        radius: 'sm',
        fontSize: 'md',
        width: 'auto',
        height: 'auto',
      },
      contactInput: {
        bg: 'gray.100',
        color: 'dark',
        padding: '0.7rem 1.6rem',
        height: '45px',
        radius: 'sm',
        rounded: false,
        width: '100%',
        fontSize: 'md',
        variant: 'solid',
        borderColor: 'gray.200',
        focusBorderColor: 'primary',
        separatorColor: 'rgba(0,0,0,0.3)',
        supportedCode: [
          { value: '+65', name: '+65' },
          { value: '+62', name: '+62' },
          { value: '+60', name: '+60' },
        ],
      },
      datePicker: {
        bg: 'gray.100',
        color: 'dark',
        padding: '1.2rem 1.6rem',
        radius: 'sm',
        rounded: false,
        width: '100%',
        height: '45px',
        fontSize: 'md',
        variant: 'solid',
        borderColor: 'gray.200',
        focusBorderColor: 'gray.200',
        rightElement: <Calendar size={20} />,
        paddingLeftElement: '3.6rem',
        paddingRightElement: '3.6rem',
        dateFormat: 'DD/MM/YYYY',
        calendarProps: {
          wrapperProps: {
            fontSize: 'md',
          },
          yearProps: {
            fontSize: 'md',
            color: 'dark',
            radius: 'sm',
          },
          yearMonthProps: {
            fontWeight: 'bold',
            fontSize: 'md',
          },
          monthProps: {
            radius: 'sm',
          },
          dayProps: {
            activeBg: 'primary',
            activeColor: 'white',
            radius: 'sm',
          },
          dateInputProps: {
            borderColor: 'gray.200',
            color: 'dark',
          },
        },
      },
      divider: {
        bg: 'gray.300',
        color: 'dark',
        marginBlock: '10px',
        fontSize: 'md',
        textPaddingInline: '20px',
        orientation: 'horizontal',
      },
      flex: {
        alignItems: 'center',
        justify: 'flex-start',
        wrap: 'nowrap',
        direction: 'row',
        gap: '2rem',
      },
      grid: {
        gap: '2rem',
      },
      input: {
        bg: 'gray.100',
        color: 'dark',
        padding: '1.2rem 1.6rem',
        radius: 'sm',
        rounded: false,
        width: '100%',
        fontSize: 'md',
        variant: 'solid',
        borderColor: 'gray.200',
        focusBorderColor: 'primary',
        paddingLeftElement: '3.6rem',
        paddingRightElement: '3.6rem',
      },
      modal: {
        wrapper: {
          fontSize: 'md',
          bg: 'white',
          radius: 'sm',
          width: '450px',
        },
        close: {
          position: 'right',
          bg: 'transparent',
          color: 'gray.500',
          radius: 'sm',
        },
        body: {
          padding: '1rem 2rem',
          alignment: 'left',
        },
        header: {
          bg: 'primary',
          color: 'white',
          padding: '1rem 2rem',
          fontWeight: 'bold',
          fontSize: 'md',
          height: '45px',
        },
        title: {
          fontWeight: 'bold',
          padding: '2rem 2rem 1.5rem 2rem',
          fontSize: 'md',
          color: 'dark',
        },
        text: {
          color: 'dark',
          margin: '10px 0 0 0',
          fontSize: 'md',
        },
        actions: {
          spacing: '10px',
          alignment: 'right',
        },
      },
      multiSelect: {
        width: '100%',
        padding: '1rem 3.6rem 1rem 1.2rem',
        rounded: false,
        radius: 'sm',
        fontSize: 'md',
        icon: <ChevronDown size={20} />,
        bg: 'gray.100',
        color: 'dark',
        borderColor: 'gray.200',
        focusBorderColor: 'primary',
        placeholderColor: 'darkGray',
        variant: 'solid',
        searchable: false,
        selectedOptionProps: {
          bg: 'gray.200',
          color: 'dark',
          padding: '4px',
          radius: 'sm',
          fontSize: 'sm',
        },
      },
      navMenu: {
        wrapper: {
          position: 'relative',
          height: '50px',
        },
        list: {
          gap: '1rem',
        },
        item: {
          padding: '1.5rem',
          gap: '0.5rem',
          color: 'dark',
          fontSize: '1.4rem',
          fontWeight: 'normal',
        },
        subMenu: {
          padding: '1rem',
          gap: '0.5rem',
          color: 'dark',
          fontSize: '1.4rem',
          fontWeight: 'normal',
        },
      },
      radio: {
        activeColor: 'primary',
        borderColor: 'gray.300',
        color: 'dark',
        radius: 'sm',
        fontSize: 'md',
        variant: 'circular',
      },
      radioButton: {
        bg: 'primary',
        activeBGColor: 'dark',
        activeTextColor: 'white',
        color: 'white',
        radius: 'sm',
        variant: 'outline',
        fontWeight: 'bold',
        fontSize: 'md',
        buttonType: 'default',
        padding: '0.8em 2em',
        fluid: false,
        width: '150px',
        height: '45px',
        iconSpacing: '30px',
        size: '140px',
      },
      radioGroup: {
        wrapper: {
          direction: 'column',
          gap: '10px',
        },
        radio: {
          activeColor: 'primary',
          borderColor: 'gray.200',
          color: 'dark',
          radius: 'sm',
          fontSize: 'md',
          variant: 'circular',
        },
        radioButton: {
          width: '100%',
        },
      },
      select: {
        width: '100%',
        height: '45px',
        padding: '1.2rem 1.2rem 1.2rem 1.6rem',
        rounded: false,
        radius: 'sm',
        fontSize: 'md',
        icon: <ChevronDown size={20} />,
        bg: 'gray.100',
        color: 'dark',
        borderColor: 'gray.200',
        focusBorderColor: 'primary',
        placeholderColor: 'darkGray',
        variant: 'solid',
        searchable: false,
      },
      skeleton: {
        width: '100%',
        height: '2rem',
        radius: 'sm',
        bg: 'gray.300',
        spacing: '0.5rem',
        duration: '1.5s',
      },
      table: {
        wrapper: {
          width: '100%',
          variant: 'striped',
          borderSpacing: 0,
        },
        header: {
          padding: '1.2rem 1.5rem 1.4rem 1.5rem',
          bg: 'gray.100',
          fontWeight: 'bold',
          fontSize: 'md',
          border: 0,
          cursor: 'auto',
          alignment: 'left',
          color: 'dark',
        },
        row: {
          stripeColor: 'gray.100',
        },
        data: {
          padding: '1.1rem 1.5rem',
          border: '1px solid',
          borderColor: 'gray.100',
          fontSize: 'md',
          cursor: 'auto',
          lineHeight: '18px',
          color: 'dark',
        },
      },
      textarea: {
        bg: 'gray.100',
        color: 'dark',
        padding: '0.6rem 1.6rem',
        radius: 'sm',
        rounded: false,
        width: '100%',
        fontSize: 'md',
        variant: 'solid',
        borderColor: 'gray.200',
        focusBorderColor: 'primary',
        rows: 5,
        resize: 'none',
      },
      toaster: {
        position: 'top',
        status: 'success',
        isCloseable: true,
        duration: 4000,
        gap: '2rem',
      },
      tooltip: {
        fontSize: 'md',
        placement: 'top',
        padding: '1rem',
        radius: 'sm',
        width: '200px',
        height: 'auto',
        bg: 'dark',
        color: 'white',
        hasArrow: true,
      },
      unitNumber: {
        bg: 'gray.100',
        color: 'dark',
        padding: '0.7rem 1.6rem',
        height: '45px',
        radius: 'sm',
        rounded: false,
        width: '100%',
        fontSize: 'md',
        variant: 'solid',
        borderColor: 'gray.200',
        focusBorderColor: 'primary',
        alignment: 'center',
      },
    },
  },
}

export const extendTheme = (newTheme) => {
  return mergeDeep(theme, newTheme)
}