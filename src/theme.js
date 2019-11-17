import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#009688',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#dcdee6',
    },
  },
});

export default theme;