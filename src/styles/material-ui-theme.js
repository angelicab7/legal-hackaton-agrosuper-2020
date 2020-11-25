import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF7700',
    },
    secondary: {
      main: '#002F87',
    },
  },
});

export default responsiveFontSizes(theme);
