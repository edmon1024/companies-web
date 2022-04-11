import {
  extendTheme,
} from '@chakra-ui/react'
const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
}

const colors = {
  "colors": {
    "teal": {
      "50": "#ECF9F9",
      "100": "#C9EEED",
      "200": "#A6E3E1",
      "300": "#83D7D6",
      "400": "#61CCCA",
      "500": "#3EC1BF",
      "600": "#319B98",
      "700": "#257472",
      "800": "#194D4C",
      "900": "#0C2726"
    },
    "red": {
      "50": "#FCE9E9",
      "100": "#F7C0C0",
      "200": "#F19898",
      "300": "#EC6F6F",
      "400": "#E64747",
      "500": "#E11E1E",
      "600": "#B41818",
      "700": "#871212",
      "800": "#5A0C0C",
      "900": "#2D0606"
    },
    "gray": {
      "50": "#F0F2F4",
      "100": "#D6DAE1",
      "200": "#BCC3CD",
      "300": "#A1ABBA",
      "400": "#8793A6",
      "500": "#6C7C93",
      "600": "#576375",
      "700": "#414A58",
      "800": "#2B323B",
      "900": "#16191D"
    },
    "cyan": {
      "50": "#E5FBFF",
      "100": "#B8F3FF",
      "200": "#8AECFF",
      "300": "#5CE5FF",
      "400": "#2EDDFF",
      "500": "#00D6FF",
      "600": "#00ABCC",
      "700": "#008099",
      "800": "#005566",
      "900": "#002B33"
    },
    "blue": {
      "50": "#EAF3FA",
      "100": "#C5DCF1",
      "200": "#A0C6E8",
      "300": "#7BAFE0",
      "400": "#5698D7",
      "500": "#3182CE",
      "600": "#2768A5",
      "700": "#1D4E7C",
      "800": "#143452",
      "900": "#0A1A29"
    },
    "purple": {
      "50": "#EFEBFA",
      "100": "#D3C6F1",
      "200": "#B7A2E7",
      "300": "#9B7DDE",
      "400": "#7F58D5",
      "500": "#6334CB",
      "600": "#4F29A3",
      "700": "#3B1F7A",
      "800": "#271551",
      "900": "#140A29"
    },
    "pink": {
      "50": "#FAEAF2",
      "100": "#F2C4DC",
      "200": "#EA9FC5",
      "300": "#E279AF",
      "400": "#D95398",
      "500": "#D12E82",
      "600": "#A72568",
      "700": "#7E1B4E",
      "800": "#541234",
      "900": "#2A091A"
    },
    "yellow": {
      "50": "#FBF5EA",
      "100": "#F3E3C3",
      "200": "#ECD19D",
      "300": "#E4C077",
      "400": "#DDAE50",
      "500": "#D59C2A",
      "600": "#AB7D21",
      "700": "#805E19",
      "800": "#553E11",
      "900": "#2B1F08"
    },
    "orange": {
      "50": "#FCF0E9",
      "100": "#F6D6C1",
      "200": "#F0BB99",
      "300": "#EAA170",
      "400": "#E58648",
      "500": "#DF6C20",
      "600": "#B2561A",
      "700": "#864113",
      "800": "#592B0D",
      "900": "#2D1606"
    }
  }
}

const theme = extendTheme({ 
  colors,
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
                color: "black",
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top'
            },
          },
        },
      },
    },
  },
})

export default theme

