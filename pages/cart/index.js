import React from "react";
import {
  Grid,
  Button,
  Typography,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddIcon from '@material-ui/icons/Add';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const useStyles = makeStyles((theme) => ({
  root:{
    paddingTop: 100,
  },
  cell:{
    border: "solid 1px black"
  },
  table:{
    border: 'solid green',
    width: '80%'
  },
  cell:{
    border: 'solid 1px black',
    borderRight: 'none',
    // minHeight: 50,
    padding: 16
  },
  quantityCell:{
    border: 'solid 1px black',
    borderRight: 'none',
    minHeight: 50,
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  lastCell:{
    border: 'solid 1px black',
    minHeight: 50,
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
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
  row3:{
    display: 'flex',
    justifyContent: 'right',
    marginTop: 32,
    marginBottom: 100
  },
  row4:{
    display: 'flex',
    justifyContent: 'right'
  },
  total:{
    [theme.breakpoints.up('md')]: {
      fontSize: 28
    },
    marginLeft: 32,
    fontWeight: 600
  },
  totalText:{
    [theme.breakpoints.up('md')]: {
      fontSize: 28
    },
    fontWeight: 700
  },
  btn:{
    [theme.breakpoints.up('md')]: {
      height: 59,
      width: 200,
      fontSize: 16
    },
    borderRadius: 25,
    marginLeft: 32,
    textTransform: 'none'
  },
  btn2:{
    [theme.breakpoints.up('md')]: {
      height: 59,
      width: 200,
      fontSize: 16
    },
    borderRadius: 25,
    marginLeft: 32,
    textTransform: 'none',
    border: '1px solid black'
  },
  powderImg:{
    [theme.breakpoints.up('md')]: {
        height: 109,
        width: 87,
    },
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        height: 50
    },
  },
  productName:{
    fontWeight: 700,
    marginBottom: 12
  },
  remove:{
    color: 'red',
    fontWeight: 500,
    fontSize: 16
  },
  quantityValue:{
    [theme.breakpoints.up('md')]: {
      marginLeft: 16,
      marginRight: 16
    },
    color: '#000'
  },
  money:{
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      fontSize: 24
    },
  },
  row1:{
    marginBottom: 40
  },
  bold:{
    fontWeight: 700
  },
  heading:{
    [theme.breakpoints.up('md')]: {
      fontSize: 20
    },
    fontWeight: 500,
    marginBottom: 8
  },
  iconBtn:{
    color: '#000'
  },
  bagIcon:{
    fontSize: 40,
    marginRight: 16
  }

}));

function Cart() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid 
        container
        direction="column"
        className={classes.parentContainer}
      > 
        {/* ROW 1 */}
        <Grid item className={classes.row1}>
          <Typography variant="h4" className={classes.bold}> 
            <LocalMallOutlinedIcon className={classes.bagIcon}/><span>Cart (1 item)</span>
          </Typography>
        </Grid>
        {/* ROW 2 */}
        <Grid 
          item 
          container
        >
          <Grid item xs={6}>
              <Typography variant="body2" className={classes.heading}>
                Product
              </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" className={classes.heading}>
              Quantity
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" className={classes.heading}>
              Unit Price
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" className={classes.heading}>
              Subtotal
            </Typography>
          </Grid>
        </Grid>
        <Grid 
          item 
          container
        >
          <Grid 
            item
            container 
            xs={6} 
            className={classes.cell}
          >
            <Grid item xs={4}>
              <img
                src="./images/dates-powder.png"
                alt="dates powder"
                className={classes.powderImg}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography 
                variant="h5" 
                component="h6" 
                className={classes.productName}
              > 
                Date Powder (500g)
              </Typography>
              <IconButton 
                aria-label="delete"
                className={classes.remove}
              >
                <DeleteForeverIcon /> Remove
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={2} className={classes.quantityCell}>
              <IconButton className={classes.iconBtn}>
                <RemoveRoundedIcon />
              </IconButton>
              <Typography 
                variant="h5"
                className={classes.quantityValue}
              >
                {'5'}
              </Typography>
              <IconButton className={classes.iconBtn}>
                <AddIcon />
              </IconButton>

          </Grid>
          <Grid item xs={2} className={classes.quantityCell}>
            <Typography 
              variant="caption"
              className={classes.money}
            > 
              ₦10,000
            </Typography>
          </Grid>
          <Grid 
            item 
            xs={2} 
            className={classes.lastCell}
          >
            <Typography 
              variant="caption"
              className={classes.money}
            > 
              ₦50,000
            </Typography>
          </Grid>
        </Grid>
        {/* ROW 3 */}
        <Grid item className={classes.row3}>
          <Typography variant="body1" className={classes.totalText}>Total</Typography>
          <Typography variant="body2" className={classes.total}>{'₦50,000'}</Typography>
        </Grid>
        {/* ROW 4 */}
        <Grid item className={classes.row4}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.btn2}
          >
            Buy More
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            Checkout
          </Button>
        </Grid>

      </Grid>
    </div>
  );
}

export default Cart;
