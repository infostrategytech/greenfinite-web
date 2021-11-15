import React from 'react'
import { Grid, Typography, makeStyles, TextField, Button } from '@material-ui/core'
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const useStyles = makeStyles((theme) => ({
    root:{
        paddingTop: 100,
    },
    powderImg:{
        [theme.breakpoints.down('sm')]: {
            maxWidth:'100%'
        },
        [theme.breakpoints.up('md')]: {
            height: 463,
            width: 294,
        },
        marginTop: 16
    },
    parentContainer:{
        [theme.breakpoints.up('md')]: {
            padding: 100,
            paddingTop: 50,
            paddingBottom: 300
        },
        [theme.breakpoints.down('sm')]: {
            padding: 16,
            paddingBottom: 100
        },
    },
    headerText:{
        fontWeight: 700,
        fontSize: 40,
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
    sectionOne:{
        [theme.breakpoints.down('sm')]: {
            paddingTop: 32
        },
        [theme.breakpoints.up('md')]: {
            padding: 32,
        },
        display: 'flex',
        justifyContent: 'center',
        // padding: 16,
    },
    sectionTwo:{
        [theme.breakpoints.up('md')]: {
            paddingTop: 100,
            paddingLeft: 50
        },
    },
    form:{
        [theme.breakpoints.up('md')]: {
            paddingTop: 40,
            paddingBottom: 40,
        },
        border: 'solid 1px #A1A1A1',
        textAlign: 'center',
        padding: 8,
        borderRadius: 10
    },
    contactItem:{
        marginTop: 8,
        marginBottom: 8
    },
    contactText: {
        textDecoration: 'underline',
        marginLeft: 16
    },
    contactText2: {
        marginLeft: 16
    },
    subhead:{
        fontSize: 30
    },
    bottomItem:{
        [theme.breakpoints.down('sm')]: {
            paddingTop: 32
        }, 
    }

}));

function ContactUs() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container className={classes.parentContainer}>
                <Grid item xs={12} md={6} className={classes.sectionOne}>
                    <form className={classes.form}>
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
                            label="Subject"
                            className={classes.formfield}
                            size="small"
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
                <Grid 
                    item 
                    container  
                    xs={12} 
                    md={6} 
                    direction="column" 
                    className={classes.sectionTwo}
                >
                    <Grid item className={classes.bottomItem}>
                        <Typography variant="h4" className={classes.headerText}>
                            Contact Us
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                            variant="h5"
                            className={classes.subhead}
                        >
                            How can we help you?
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography 
                            variant="body1"
                            className={classes.subtext}
                        >
                            Fill in the form or drop an email,
                            and we will reach out to you as soon
                            as possible. 
                        </Typography>
                    </Grid>
                    <Grid item className={classes.contactItem}>
                        <Typography 
                            variant="body1"
                        >
                           <LocalPhoneOutlinedIcon/> 
                           <span className={classes.contactText}>
                               +2348034045109
                            </span>
                        </Typography>
                    </Grid>
                    <Grid item className={classes.contactItem}>
                        <Typography 
                            variant="body1"
                        >
                            <EmailOutlinedIcon /> 
                            <span className={classes.contactText}>
                                support@greenfinite.ng
                            </span>
                        </Typography>
                    </Grid>
                    <Grid item className={classes.contactItem}>
                        <Typography 
                            variant="body1"
                        >
                            <RoomOutlinedIcon /> 
                            <span className={classes.contactText2}>
                                25D, Drive 3, Prince and Princess Estate, Abuja
                            </span> 
                        </Typography>
                    </Grid>

                </Grid>
              


            </Grid>
        </div>
    )
}

export default ContactUs