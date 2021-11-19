import React, { useState } from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  AbujaOffices,
  KwaraOffices,
  LagosOffices,
  OyoOffices,
  KanoOffices,
} from '../../UtilityService/Helpers';

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
      paddingTop: 0,
    },
  },
  subContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: 10,
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
      lineHeight: '0px',
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
      lineHeight: '0px',
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
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
    },
  },
  logo: {
    padding: 15,
    marginRight: 10,
    border: '1px solid #3D8754',
    borderRadius: '100px',
  },
}));

const StateDistributors = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
        <Grid item className={classes.subContainer}>
          <Grid
            item
            container
         
            direction="column"
            style={{ marginTop: '1.5rem' }}
          >
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: ' #28AA63' }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Grid item>
                  <span className={classes.logo}>A</span>
                  <span className={classes.logoHd}>Abuja Distributors</span>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item>
                  <ul>
                    {AbujaOffices.map((name) => (
                      <li key={name}> {name} </li>
                    ))}
                  </ul>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid
            item
            container
           
            direction="column"
            style={{ marginTop: '1.5rem' }}
          >
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: ' #28AA63' }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              
              >
                <Grid item>
                  <span className={classes.logo}>K</span>
                  <span className={classes.logoHd}>Kano Distributors</span>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item>
                  <ul>
                    {KanoOffices.map((name) => (
                      <li key={name}> {name} </li>
                    ))}
                  </ul>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid
            item
            container
            direction="column"
            style={{ marginTop: '1.5rem' }}
          >
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
              
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: ' #28AA63' }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                // className={classes.sumBorder}
              >
                <Grid item>
                  <span className={classes.logo}>K</span>
                  <span className={classes.logoHd}>Kwara Distributors</span>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item>
                  <ul>
                    {KwaraOffices.map((name) => (
                      <li key={name}> {name} </li>
                    ))}
                  </ul>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid
            item
            container
           
            direction="column"
            style={{ marginTop: '1.5rem' }}
          >
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
             
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: ' #28AA63' }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                
              >
                <Grid item>
                  <span className={classes.logo}>L</span>
                  <span className={classes.logoHd}>Lagos Distributors</span>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item>
                  <ul>
                    {LagosOffices.map((name) => (
                      <li key={name}> {name} </li>
                    ))}
                  </ul>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid
            item
            container
            // alignItems
            direction="column"
            style={{ marginTop: '1.5rem' }}
          >
            <Accordion
              expanded={expanded === 'panel5'}
              onChange={handleChange('panel5')}
              // style={{ marginBottom: '1rem' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: ' #28AA63' }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                // className={classes.sumBorder}
              >
                <Grid item>
                  <span className={classes.logo}>O</span>
                  <span className={classes.logoHd}>Oyo Distributors</span>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item>
                  <ul>
                    {OyoOffices.map((name) => (
                      <li key={name}> {name} </li>
                    ))}
                  </ul>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StateDistributors;
