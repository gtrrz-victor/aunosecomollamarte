import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import Container from '@material-ui/core/Container';
import { createTheme, createStyles, makeStyles,ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BreadRecipeMaker } from './components/BreadRecipeMaker';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
      textAlign: 'center'
    },
  }),
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b3c4f',
    },
    secondary: {
      main: '#21821d',
    },
  },
});

function App () {
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider  theme={theme}>
        <ScopedCssBaseline>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Bread Recipe Maker
            </Typography>
          </Toolbar>
        </AppBar>
          <Container maxWidth="xl">
            <BreadRecipeMaker/>
          </Container>
        </ScopedCssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
