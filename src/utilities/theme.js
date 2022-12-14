// export const theme = Object.freeze({
//   colors: {
//     textDarkColor: '#010101',
//     textLightColor: '#ffffff',
//     textMiddleColor: '#808080',
//     backgroundLightColor: '#ffffff',
//     backgroundMiddleColor: 'rgb(230, 230, 230)',
//     borderMiddleColor: 'rgb(187, 187, 187)',
//     accentColor: 'orange',
//     barColor: 'blue',
//   },
//   shadow: '0 5px 10px #808080',
//   borderRadius: '5px',
//   indent: '12px',
// });
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#262626',
    },
    secondary: {
      main: '#fff',
    },
    triadic: {
      main: '#1500ff',
      light: '#ffdebf',
      dark: '#de977f',
    },
  },
});
