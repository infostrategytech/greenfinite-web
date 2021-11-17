import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff',
    paddingTop: '100px',
  },
  container: {
    marginLeft: '7rem',
    paddingTop: '4rem',
    paddingBottom: '6rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  headers: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 40,
    lineHeight: '60px',
    letterSpacing: '0.01em',
    color: '#000000',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      textAlign: 'center',
    },
  },
  subTxt: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: '30px',
    letterSpacing: '0.01em',
    color: '#000000',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      textAlign: 'center',
    },
  },
  logoHd: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 30,
    lineHeight: '60px',
    letterSpacing: '0.01em',
    color: '#000000',
  },
  logo: {
    padding: 15,
    marginRight: 10,
    border: '1px solid #3D8754',
    borderRadius: '100px',
  },
}));

const AbujaOffices = [
  'IC World Center, Gwarimpa',
  'Bakangizo Supermarket,Gwarimpa',
  'Grand Square Central Businees District',
  'Next Cash and Carry, Kado',
  'Tonia Pharmacy, Capital Hub',
  'Wholesome Health Stores,Nawa Complex,Banex-Gwarimpa expressway',
  'Pyramid Pharmacy, Garki',
  'Dunes Center, Maitama',
  'Baobab Kitchen, Garki',
  'Dunes Center, Maitama',
  'Exclusive Supermarket, Wuse 2',
  '4U Supermarket, Wuse 2',
  'Mcray Supermarket, Wuse 2',
  '@satapremiummart,Old Garki Market',
  'Maitama Stores,Maitama Shopping Complex',
  'Wuse Within, Lokogoma',
  'Tefcon Supermarket, Lokogoma',
  'Cherries Hypermarket,CityCenter,Gimbiya Strret, Garki',
  'Garki Supermarket, Garki',
  'Maple Supermarket, Gudu',
  'Dollar Pharmacy, Asokoro',
  'Day Spa, Wuse 2',
  'Faxx Supermarket, Apo',
];

const KanoOffices = ['Kano mart', 'Sheshi stores'];

const OyoOffices = [
  'Mosh Pharmacy',
  'Wimpy supermarket',
  'glory to glory supermarket ',
];

const LagosOffices = [
  'Victory drugs',
  'Shop on click',
  'Goodness supermarket',
  'Koli supermarket',
  'Confirm supermarket',
  'New cruise home store',
  'Baykins pharmacy and mart',
  'Everybright stores',
  'Wmart pharmacy',
];

const KwaraOffices = [
  'Martrite superstores',
  'Liyagold stores',
  'Mamtess shopping mall',
];

const StateDistributors = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container xs={12} className={classes.container}>
        <Grid
          item
          container
          direction="column"
          style={{ marginBottom: '1rem' }}
        >
          <Typography variant="body1" className={classes.headers}>
            Buy From State Distributors
          </Typography>
          <Typography variant="body2" className={classes.subTxt}>
            Select a state distributor nearest to your location
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems="flex-start"
          direction="column"
          style={{ marginTop: '1.5rem' }}
        >
          <Grid item>
            <span className={classes.logo}>A</span>
            <span className={classes.logoHd}>Abuja Distributors</span>
          </Grid>
          <Grid item style={{ marginTop: '1.5rem' }}>
            <ul>
              {AbujaOffices.map((name) => (
                <li key={name}> {name} </li>
              ))}
            </ul>
          </Grid>
        </Grid>

        <Grid
          item
          container
          alignItems="flex-start"
          direction="column"
          style={{ marginTop: '1.5rem' }}
        >
          <Grid item>
            <span className={classes.logo}>K</span>
            <span className={classes.logoHd}>Kano Distributors</span>
          </Grid>
          <Grid item style={{ marginTop: '1.5rem' }}>
            <ul>
              {KanoOffices.map((name) => (
                <li key={name}> {name} </li>
              ))}
            </ul>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="flex-start"
          direction="column"
          style={{ marginTop: '1.5rem' }}
        >
          <Grid item>
            <span className={classes.logo}>K</span>
            <span className={classes.logoHd}>Kwara Distributors</span>
          </Grid>
          <Grid item style={{ marginTop: '1.5rem' }}>
            <ul>
              {KwaraOffices.map((name) => (
                <li key={name}> {name} </li>
              ))}
            </ul>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="flex-start"
          direction="column"
          style={{ marginTop: '1.5rem' }}
        >
          <Grid item>
            <span className={classes.logo}>L</span>
            <span className={classes.logoHd}>Lagos Distributors</span>
          </Grid>
          <Grid item style={{ marginTop: '1.5rem' }}>
            <ul>
              {LagosOffices.map((name) => (
                <li key={name}> {name} </li>
              ))}
            </ul>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="flex-start"
          direction="column"
          style={{ marginTop: '1.5rem' }}
        >
          <Grid item>
            <span className={classes.logo}>O</span>
            <span className={classes.logoHd}>Oyo Distributors</span>
          </Grid>
          <Grid item style={{ marginTop: '1.5rem' }}>
            <ul>
              {OyoOffices.map((name) => (
                <li key={name}> {name} </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StateDistributors;
