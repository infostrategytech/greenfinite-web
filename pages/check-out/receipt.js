import React from 'react'
import { Grid,Typography,makeStyles,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@material-ui/core'
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
    root:{
        paddingTop: 100,
        backgroundColor: '#fff'
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
    logo:{
        width: 90,
        height: 45
    },
    particulars:{
        [theme.breakpoints.up('md')]: {
           maxWidth: 300
        },
    },
    particulars2:{
        [theme.breakpoints.up('md')]: {
           maxWidth: 300
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 8
        },
        backgroundColor: '#DCDCDC',
        padding: 12
    },
    tableHead: {
        backgroundColor: '#DCDCDC',
        color: '#000',
    },
    tableRow:{
        maxWidth: '100%'
    },
    dev:{
        textAlign: 'center'
    },
    bold:{
        fontWeight: 700
    },
    date:{
        color: '#039C40',
        fontWeight: 500
    },
    topDividerBox:{
        marginTop: 20,
        marginBottom: 30
    },
    divider:{
        opacity: 0.3
    },
    section3:{
        marginBottom: 50
    },
    section5: {
        marginTop: 50,
        marginBottom: 20
    },
    bottomDividerBox:{
        marginTop:50,
        marginBottom: 30
    },
    lightText:{
        color: '#A1A1A1'
    }

}));

function Receipt() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Head>
                <title>
                    Greenfinite - Receipt
                </title>
                <meta
                name="description"
                content=""
                />
            </Head>
            <Grid 
                container
                direction="column"
                className={classes.parentContainer}>
                <Grid 
                    item 
                    container
                    justifyContent="space-between"
                >
                    <Grid item>
                        <Typography 
                            variant="body1" 
                            component="h5"
                            className={classes.bold}
                        >
                            Your Order is Confirmed
                        </Typography>
                        <Typography 
                            variant="body2" 
                            component="p"
                        >
                            Delivery Date:
                        </Typography>
                        <Typography 
                            variant="body2"
                            className={classes.date}
                        >
                            {'1st December 2021'}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img 
                            alt="greenfinite-logo" 
                            src="../images/footerLogo.png"
                            className={classes.logo}
                        />
                    </Grid>
                </Grid>
                {/* DIVIDER */}
                <Grid item className={classes.topDividerBox}>
                    <hr  className={classes.divider}/>

                </Grid>
                {/* RECEIPT NUMBER AND DATE */}
                <Grid 
                    item 
                    container
                    direction="column"
                    alignItems="flex-end"
                    className={classes.section3}
                >
                    <Grid 
                        item
                        container 
                        justifyContent="space-between"
                        className={classes.particulars}
                    >
                        <Grid item>
                            <Typography 
                                variant="body2"
                                className={classes.bold}
                            >
                                RECEIPT #
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                            >
                                {'0047'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid 
                        item
                        container 
                        justifyContent="space-between"
                        className={classes.particulars}
                    >
                        <Grid item>
                            <Typography
                                variant="body2"
                                className={classes.bold}
                            >
                                RECEIPT DATE
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>{'November 15, 2021'}</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* ORDER ITEMS TABLE */}
                <Grid item className={classes.tableRow}>
                    <TableContainer component={"div"}>
                        <Table aria-label="order details table">
                            <TableHead className={classes.tableHead}>
                                <TableRow>
                                    <TableCell className={classes.bold}>Item</TableCell>
                                    <TableCell align="right" className={classes.bold}>Quantity</TableCell>
                                    <TableCell align="right" className={classes.bold}>Unit Cost</TableCell>
                                    <TableCell align="right" className={classes.bold}>Subtotal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{'Date Powder (200g)'}</TableCell>
                                    <TableCell align="right">{'3'}</TableCell>
                                    <TableCell align="right">{'₦10,000'}</TableCell>
                                    <TableCell align="right">{'₦30,000'}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                {/* NOTES AND TOTAL */}
                <Grid
                    item
                    container
                    justifyContent="space-between"
                    className={classes.section5}
                >
                    <Grid item>
                        <Typography 
                            variant="body1" 
                            component="p"
                            className={classes.bold}
                        >
                            Notes
                        </Typography>
                        <Typography variant="caption" component="p">
                            Shipping fee is a flat rate of ₦2000
                        </Typography>
                    </Grid>
                    <Grid 
                        item
                        container 
                        justifyContent="space-between"
                        className={classes.particulars2}
                    >
                        <Grid item>
                            <Typography
                                variant="h6"
                                className={classes.bold}
                            >
                                Total
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="h6"
                                className={classes.bold}
                            >
                                {'₦52000'}
                            </Typography>
                        </Grid>
                    </Grid> 
                </Grid>

                {/* ADDRESS */}
                <Grid item>
                    <Typography variant="body1" component="p" className={classes.bold}>Delivery Address</Typography>
                    <Typography variant="body1" component="p">{'No. 4 Madiana Close'}</Typography>
                    <Typography variant="body1" component="p">{'Wuse 2'}</Typography>
                    <Typography variant="body1" component="p">{'Abuja'}</Typography>

                </Grid>

                {/* DIVIDER */}
                <Grid item className={classes.bottomDividerBox}>
                    <hr className={classes.divider}/>
                </Grid>
                <Grid item className={classes.dev}>
                    <Typography variant="caption" className={classes.lightText}>Invoice powered by Greenfinite Ltd.</Typography>
                </Grid>


            </Grid>
        </div>
    )
}

export default Receipt