export const theme = {
  colors: {
    primary: '#D31145',
    secondary: '#424242',
    dark: '#292825',
    lightGray: '#F2F2F2',
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
        fontWeight: 400,
      },
      input: {
        bg: 'lightGray',
        color: 'secondary',
        padding: '12px 16px',
        radius: '15px',
        rounded: false,
        fluid: false,
        fontFamily: 'AIARegular',
        fontSize: '1.4rem',
        variant: 'solid',
        borderColor: 'primary',
        focusBorderColor: 'primary',
        paddingleftElement: '36px',
        paddingRightElement: '36px',
      },
      checkbox: {
        activeColor: 'primary',
        borderColor: 'primary',
        color: 'secondary',
        radius: '4px',
        fontSize: '1.4rem',
        fontFamily: 'AIARegular',
      },
      radio: {
        activeColor: 'primary',
        borderColor: 'primary',
        color: 'secondary',
        radius: '4px',
        fontSize: '1.4rem',
        fontFamily: 'AIARegular',
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
        fontWeight: '400',
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
        fontWeight: '700',
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
          fontSize: '1.5rem',
          fontWeight: 400,
          margin: '0 0 20px 0',
          fontFamily: 'AIAMedium',
        },
        body: {
          color: 'secondary',
          margin: '0 0 20px 0',
          fontSize: '1.5rem',
          fontFamily: 'AIARegular',
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
        variant: 'solid',
        borderColor: 'primary',
        focusBorderColor: 'primary',
        rows: 5,
        width: '500px',
        resize: 'none',
      },
    },
  },
}
