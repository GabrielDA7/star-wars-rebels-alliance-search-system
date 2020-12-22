import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body, #root': {
          height: '100%',
          backgroundColor: '#0e2439',
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#1f364d',
      main: '#0e2439',
    },
    secondary: {
      main: '#ffe000',
    },
  },
});

export { theme };
