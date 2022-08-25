import { createTheme } from '@mui/material/styles';

const themeOptions = createTheme(
    {
        palette: {
          type: 'light',
          primary: {
            main: '#fc8118',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#171b28',
            contrastText: '#ffffff',
          },
          warning: {
            main: '#da7d38',
            contrastText: '#ffffff',
          },
          success: {
            main: '#48c578',
            contrastText: '#ffffff',
          },
          info: {
            main: '#8a594a',
            contrastText: '#8a594a',
          },
          error: {
            main: '#d53c4d',
            contrastText: '#ffffff',
          },
          background: {
            default: '#fffefe',
            paper: '#fffefe',
          },
          text: {
            primary: '#3d4152',
            secondary: '#ffffff',
            hint: '#686b78',
          },
        },
        typography: {
          fontFamily: 'Ubuntu',
        },
    }
)

export default themeOptions;