import React from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import Container from '@material-ui/core/Container';
import { createTheme, createStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import { BreadRecipeMaker } from './components/BreadRecipeMaker';
import { IFrame } from './components/WordPress';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { setTimeout } from 'timers';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
      textAlign: 'center'
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    gotobreadMaker: {
      position: 'absolute',
      top: theme.spacing(1),
      margin: theme.spacing(1),
      right: theme.spacing(2)
    }
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
  const [isVisible, setNavigationVisibility] = React.useState(true);
  const classes = useStyles();
  setTimeout(() => {
    setNavigationVisibility(false)
  }, 5000)
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Switch>
            <Route path="/bread-recipe-maker">
              <ScopedCssBaseline>
                <AppBar position="static">
                  <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                      Bread Recipe Maker
                    </Typography>
                  </Toolbar>
                </AppBar>
                <Container maxWidth="xl">
                  <BreadRecipeMaker />
                </Container>
              </ScopedCssBaseline>
            </Route>
            <Route path="/">
              {
                isVisible===true && <Fab
                  variant="extended"
                  size="small"
                  aria-label="add"
                  color="secondary"
                  className={classes.gotobreadMaker}
                  href="#/bread-recipe-maker"
                >
                  <NavigationIcon className={classes.extendedIcon} />
                  Go To Bread Recipe Maker
                </Fab>
              }
              <IFrame />
            </Route>
          </Switch>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
