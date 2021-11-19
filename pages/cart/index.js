import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Typography,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import AddIcon from "@material-ui/icons/Add";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cart";
import CartItem from "../../components/CartItem";
import router from "next/router";
import { formatMoney } from "../../UtilityService/Helpers";
import Head from "next/head";
import MobileCartView from "../../components/MobileCartView";
import { ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    backgroundColor: "#fff",
  },
  cell: {
    border: "solid 1px black",
  },
  table: {
    border: "solid green",
    width: "80%",
  },
  cell: {
    border: "solid 1px black",
    borderRight: "none",
    // minHeight: 50,
    padding: 16,
  },
  quantityCell: {
    border: "solid 1px black",
    borderRight: "none",
    minHeight: 50,
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  lastCell: {
    border: "solid 1px black",
    minHeight: 50,
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  parentContainer: {
    overflowX: "auto",
    [theme.breakpoints.up("md")]: {
      padding: 100,
      paddingBottom: 300,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 16,
      paddingBottom: 100,
    },
  },
  row3: {
    display: "flex",
    justifyContent: "right",
    marginTop: 32,
    marginBottom: 100,
  },
  row4: {
    display: "flex",
    justifyContent: "right",
  },
  total: {
    [theme.breakpoints.up("md")]: {
      fontSize: 28,
    },
    marginLeft: 32,
    fontWeight: 600,
  },
  totalText: {
    [theme.breakpoints.up("md")]: {
      fontSize: 28,
    },
    fontWeight: 700,
  },
  btn: {
    [theme.breakpoints.up("md")]: {
      height: 59,
      width: 200,
      fontSize: 16,
    },
    borderRadius: 25,
    marginLeft: 32,
    textTransform: "none",
  },
  btn2: {
    [theme.breakpoints.up("md")]: {
      height: 59,
      width: 200,
      fontSize: 16,
    },
    borderRadius: 25,
    marginLeft: 32,
    textTransform: "none",
    border: "1px solid black",
  },
  powderImg: {
    [theme.breakpoints.up("md")]: {
      height: 109,
      width: 87,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      height: 50,
    },
  },
  productName: {
    fontWeight: 700,
    marginBottom: 12,
  },
  remove: {
    color: "red",
    fontWeight: 500,
    fontSize: 16,
  },
  quantityValue: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 16,
      marginRight: 16,
    },
    color: "#000",
  },
  money: {
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
  },
  row1: {
    marginBottom: 40,
  },
  bold: {
    fontWeight: 700,
    display: "flex",
  },
  heading: {
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
    fontWeight: 500,
    marginBottom: 8,
  },
  iconBtn: {
    color: "#000",
  },
  bagIcon: {
    fontSize: 40,
    marginRight: 16,
  },
}));

function Cart() {
  const dispatch = useDispatch();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = useSelector((state) => state.products);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  useEffect(() => {
    let quantity = 0;
    let price = 0;
    cart.forEach((item) => {
      quantity += item.qty;
      price += item.qty * item.amount;
    });
    setTotalQuantity(quantity);
    setTotalPrice(price);
  }, [cart]);

  return (
    <>
      <Head>
        <title>Greenfinite - Cart</title>
        <meta name="description" content="" />
      </Head>
      {isMobile ? (
        <MobileCartView />
      ) : (
        <div className={classes.root}>
          <Grid
            container
            direction="column"
            className={classes.parentContainer}
          >
            {/* ROW 1 */}
            <Grid item className={classes.row1}>
              <Typography variant="h4" className={classes.bold}>
                <ShoppingCart className={classes.bagIcon} />
                <span> {totalQuantity} item(s) in Cart</span>
              </Typography>
            </Grid>
            {/* ROW 2 */}
            <Grid item container>
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
            {cart && cart.length > 0 ? (
              cart.map((item) => <CartItem item={item} />)
            ) : (
              <Typography variant="h6">Cart is empty</Typography>
            )}
            {/* ROW 3 */}
            <Grid item className={classes.row3}>
              <Typography variant="body1" className={classes.totalText}>
                Total
              </Typography>
              <Typography variant="body2" className={classes.total}>
                {/* ₦{totalPrice.toFixed(2)} */} {formatMoney(totalPrice)}
              </Typography>
            </Grid>
            {/* ROW 4 */}
            <Grid item className={classes.row4}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.btn2}
                onClick={() => router.push("/shop")}
              >
                Buy More
              </Button>
              {cart.length > 0 ? (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  onClick={() => router.push("/check-out")}
                >
                  Checkout
                </Button>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export default Cart;
