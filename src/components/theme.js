import { Icon } from './icon'

export const theme = {
  colors: {
    primary: '#D31145',
    secondary: '#424242',
    dark: '#292825',
    lightGray: '#E8E8E8',
    lightGray2: '#F2F2F2',
    gray: '#d8d8d8',
    darkGray: '#a5a5a6',
    iconForm: '#596C80',
    darkYellow: '#DBB680',
    lightYellow: '#FAF9F5',
    darkBgForm: '#E8E8E8',
    brown: '#695556',
    danger: '#D31145',
    complete: '#0086C8',
    approved: '#9DC869',
    darkBlueGray: '#596C80',
    white: '#fff',
    black: '#000',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  default: {
    component: {
      accordion: {
        title: 'Title',
        arrowPosition: 'left',
        defaultOpen: false,
        fontFamily: 'AIARegular',
        fontSize: '1.4rem',
        fontWeight: 'normal',
        item: {
          padding: '15px',
        },
        header: {
          padding: '15px',
          icon: 'forward',
          iconWrapperStyle: {
            bg: 'white',
            boxShadow: 'rgb(170 8 54 / 32%) 2px 0px 10px 0px',
            padding: '15px',
          },
        },
        content: {
          padding: '15px',
        },
      },
      button: {
        bg: 'primary',
        color: 'white',
        rounded: true,
        padding: '0.8em 2em',
        radius: '4px',
        fluid: false,
        variant: 'solid',
        fontFamily: 'AIARegular',
        fontSize: '1.4rem',
        fontWeight: 'normal',
      },
      contactInput: {
        bg: 'lightGray',
        color: 'secondary',
        padding: '7px 16px',
        width: '335px',
        height: '40px',
        radius: '15px',
        rounded: false,
        fluid: false,
        fontFamily: 'AIARegular',
        fontSize: '1.4rem',
        fontWeight: '400',
        variant: 'solid',
        borderColor: 'primary',
        focusBorderColor: 'primary',
        separatorColor: 'rgba(0,0,0,0.3)',
        supportedCode: [
          { value: '+65', name: '+65' },
          { value: '+62', name: '+62' },
          { value: '+60', name: '+60' },
        ],
      },
      datePicker: {
        bg: 'lightGray',
        color: 'secondary',
        padding: '12px 16px',
        radius: '15px',
        rounded: false,
        fluid: false,
        width: '335px',
        fontFamily: 'AIARegular',
        fontSize: '1.4rem',
        fontWeight: 'normal',
        variant: 'solid',
        borderColor: 'primary',
        focusBorderColor: 'primary',
        rightElement: <Icon name='calendar' size='1.3em' />,
        paddingLeftElement: '36px',
        paddingRightElement: '36px',
        dateFormat: 'DD/MM/YYYY',
        calendarProps: {
          wrapperStyle: {
            fontFamily: 'AIARegular',
            fontSize: '1.4rem',
            fontWeight: 'normal',
          },
          yearStyle: {
            fontFamily: 'AIAMedium',
            fontSize: '1.4rem',
            fontWeight: 'normal',
          },
          monthStyle: {
            fontFamily: 'AIAMedium',
            fontSize: '1.4rem',
            fontWeight: 'normal',
          },
          dayStyle: {
            activeBg: 'primary',
            activeColor: 'white',
          },
        },
      },
      input: {
        bg: 'lightGray',
        color: 'secondary',
        padding: '12px 16px',
        radius: '15px',
        rounded: false,
        fluid: false,
        width: '335px',
        fontFamily: 'AIARegular',
        fontSize: '1.4rem',
        fontWeight: 'normal',
        variant: 'solid',
        borderColor: 'primary',
        focusBorderColor: 'primary',
        paddingLeftElement: '36px',
        paddingRightElement: '36px',
      },
      checkbox: {
        activeColor: 'primary',
        borderColor: 'primary',
        color: 'secondary',
        radius: '4px',
        fontSize: '1.4rem',
        fontFamily: 'AIARegular',
        fontWeight: 'normal',
      },
      radio: {
        activeColor: 'primary',
        borderColor: 'primary',
        color: 'secondary',
        radius: '4px',
        fontSize: '1.4rem',
        fontFamily: 'AIARegular',
        fontWeight: 'normal',
        variant: 'circular',
        margin: '0 0 12px 0',
      },
      radioButton: {
        bg: 'primary',
        activeBGColor: 'secondary',
        activeTextColor: 'white',
        color: 'white',
        radius: '15px',
        variant: 'outline',
        fontSize: '1.4rem',
        fontFamily: 'AIAMedium',
        fontWeight: 'normal',
        buttonType: 'default',
        padding: '0.8em 2em',
        width: '150px',
        height: '40px',
        iconSpacing: '30px',
        size: '140px',
      },
      divider: {
        bg: 'gray',
        margin: '10px 0',
        fontFamily: 'AIARegular',
        fontWeight: 'normal',
        fontSize: '1.4rem',
        textPadding: '0 20px',
      },
      tag: {
        bg: 'primary',
        color: 'white',
        padding: '3px 10px',
        variant: 'solid',
        radius: '4px',
        fontSize: '1.4rem',
        fontFamily: 'AIAMedium',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      modal: {
        wrapper: {
          fontFamily: 'AIARegular',
          bg: 'white',
          radius: '15px',
          width: '450px',
        },
        content: {
          padding: '30px',
          alignment: 'center',
        },
        header: {
          bgImage:
            'linear-gradient(to right, rgb(232, 73, 116) 0%, rgb(205, 73, 96) 52%, rgb(193, 55, 91) 100%)',
          iconWrapperStyle: {
            bg: 'white',
            boxShadow: 'rgb(170 8 54 / 32%) 2px 0px 10px 0px',
            padding: '15px',
          },
        },
        title: {
          margin: '0 0 20px 0',
          fontSize: '1.5rem',
          fontFamily: 'AIAMedium',
          fontWeight: 'normal',
        },
        body: {
          color: 'secondary',
          margin: '0 0 20px 0',
          fontSize: '1.5rem',
          fontFamily: 'AIARegular',
          fontWeight: 'normal',
        },
        close: {
          bg: 'transparent',
          color: 'white',
          radius: '4px',
        },
        actions: {
          spacing: '10px',
          alignment: 'center',
        },
      },
      radioGroup: {
        wrapper: {
          direction: 'column',
          gap: '10px',
        },
        radio: {
          activeColor: 'primary',
          borderColor: 'primary',
          color: 'secondary',
          radius: '4px',
          fontSize: '1.4rem',
          fontFamily: 'AIARegular',
          fontWeight: 'normal',
          variant: 'circular',
        },
      },
      textarea: {
        bg: 'lightGray',
        color: 'secondary',
        padding: '6px 16px',
        radius: '15px',
        rounded: false,
        fluid: false,
        fontFamily: 'AIARegular',
        fontSize: '1.4rem',
        fontWeight: 'normal',
        variant: 'solid',
        borderColor: 'primary',
        focusBorderColor: 'primary',
        rows: 5,
        width: '500px',
        resize: 'none',
      },
      select: {
        fluid: false,
        width: '335px',
        height: '40px',
        padding: '10px 16px',
        rounded: false,
        radius: '15px',
        fontFamily: 'AIARegular',
        fontWeight: 'normal',
        fontSize: '1.4rem',
        icon: <Icon name='down' size='m' />,
        bg: 'lightGray',
        color: 'secondary',
        borderColor: 'primary',
        focusBorderColor: 'primary',
        placeholderColor: 'darkGray',
        variant: 'solid',
        searchable: false,
      },
      table: {
        wrapper: {
          width: '100%',
          variant: 'striped',
          borderSpacing: 0,
        },
        header: {
          padding: '12px 15px 14px 15px',
          bg: 'lightGray',
          fontFamily: 'AIARegular',
          fontSize: '1.4rem',
          fontWeight: 'normal',
          borer: 0,
          cursor: 'auto',
        },
        data: {
          padding: '11px 15px',
          border: '1px solid',
          borderColor: 'lightGray2',
          fontFamily: 'AIARegular',
          fontSize: '1.4rem',
          fontWeight: 'normal',
          cursor: 'auto',
          lineHeight: '18px',
        },
      },
    },
  },
}
