import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF7700',
    },
    secondary: {
      main: '#2264A7',
    },
  },
});

export default responsiveFontSizes(theme);
