import { Grid, Typography, makeStyles, TextField, Button } from '@material-ui/core'
import React from 'react'
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
    root:{
        paddingTop: 100,
    },
    powderImg:{
        [theme.breakpoints.up('md')]: {
            height: 539,
            width: 400,
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        },
        marginTop: 16
    },
    parentContainer:{
        [theme.breakpoints.up('md')]: {
            padding: 100,
            paddingBottom: 300
        },
        [theme.breakpoints.down('sm')]: {
            padding: 16,
            paddingBottom: 100
        },
    },
    headerText:{
        fontWeight: 700,
        fontSize: 30,
        marginBottom: 16
    },
    formfield:{
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        width: '80%',
        marginTop: 16,
        marginBottom: 8
    },
    subtext:{
        marginBottom: 16
    },
    btn:{
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        borderRadius: 25,
        width: '80%',
        marginTop: 32,
        height: 60
    },
    sectionTwo:{
        [theme.breakpoints.down('sm')]: {
            paddingTop: 32
        },  
    }
}));

function Distributors() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Head>
                <title>
                    Greenfinite - Distributors
                </title>
                <meta
                name="description"
                content=""
                />
            </Head>
            <Grid container className={classes.parentContainer}> 
                <Grid item container  xs={12} md={6} direction="column">
                    <Grid item>
                        <Typography variant="h4" className={classes.headerText}>
                            Want to partner with us?
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img
                            src="./images/dates-powder.png"
                            alt="dates powder"
                            className={classes.powderImg}
                        />
                    </Grid>

                </Grid>
                <Grid item xs={12} md={6} className={classes.sectionTwo}>
                    <Typography 
                        variant="h4"
                        component="h3" 
                        className={classes.headerText}
                    >
                        JOIN US
                    </Typography>
                    <Typography variant="body1" component="p" className={classes.subtext}>
                        Our goal is to empower as many people as possible to make extra income
                        by partnering with us. To become a Greenfinite distributor, please fill
                        the application form below and you will receive a message from us.
                    </Typography>
                    <form>
                        <TextField 
                            type="text"
                            variant="outlined"
                            label="Your Name"
                            className={classes.formfield}
                            size="small"
                        />
                        <TextField 
                            type="text"
                            variant="outlined"
                            label="Your Email"
                            className={classes.formfield}
                            size="small"
                        />
                        <TextField 
                            type="text"
                            variant="outlined"
                            label="Your Phone Number"
                            className={classes.formfield}
                            size="small"
                        />
                        <TextField 
                            type="text"
                            variant="outlined"
                            label="State"
                            className={classes.formfield}
                            size="small"
                        />
                        <TextField 
                            type="text"
                            variant="outlined"
                            label="Address"
                            multiline
                            rows={2}
                            className={classes.formfield}
                        />
                        <TextField 
                            type="text"
                            variant="outlined"
                            label="Your Message"
                            multiline
                            rows={4}
                            className={classes.formfield}
                        />
                        <Button 
                            className={classes.btn}
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            Send
                        </Button>
                    </form>

                </Grid>


            </Grid>
        </div>
    )
}

export default Distributors
