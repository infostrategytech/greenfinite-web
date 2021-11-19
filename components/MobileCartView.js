import {
  Box,
  Button,
  Grid,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import {
  addToCart,
  adjustQuantity,
  removeFromCart,
} from "../redux/actions/cart";
import {
  AddCircleOutline,
  RemoveCircleOutline,
  ShoppingCart,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { formatMoney } from "../UtilityService/Helpers";
import router from "next/router";
import useFunctions from "../UtilityService/useFunctions";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "2em",
  },
  wrapper: {
    display: "flex",

    borderRadius: "5px",
    border: "1px solid #d3d3d3",
    justifyContent: "center",
    width: "100%",
    flexDirection: "column",
    marginBottom: "1em",
  },
  cards: {
    background:
      "linear-gradient(0deg, rgba(255,255,255,0.6), rgba(255,255,255,0.6))",
    padding: "0 4em",
    boxShadow: "0px -1px 29px 8px rgba(210,210,210,0.15)",
    [theme.breakpoints.down("md")]: {
      padding: "1em",
    },
  },
  fruitContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "2em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0",
    },
  },
  logo1: {
    maxWidth: "100%",
    // height: "240px",
    // width: "240px",

    [theme.breakpoints.down("md")]: {
      height: "140px",
      width: "140px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "140px",
      width: "120px",
    },
  },
  title1: {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "36px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "20px",
    },
  },

  content: {
    fontFamily: "Poppins",
    fontWeight: "700",
    lineHeight: "22px",
    color: "#3D8754",
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
  },
  content1: {
    fontFamily: "Poppins",
    fontWeight: "700",
    lineHeight: "22px",
    // marginTop: ".2em",
    // marginBottom: "1em",
    color: "#3D8754",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",

      textAlign: "justify",
    },
  },

  button1: {
    borderRadius: "50px",
    background: "#3D8754",
    color: "#fff",
    padding: "10px 20px",
    textTransform: "capitalize",
    width: "115px",
    height: "40px",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: "500",
    "&:hover": { color: "#3D8754" },
  },
  grams: {
    display: "inline",
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  boxFooter: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #d3d3d3",
  },
  remove: {
    color: "red",
    fontWeight: 500,
    fontSize: 16,
  },
  iconBtn: {
    color: "#000",
    fontWeight: 500,
    fontSize: 16,
  },
  quantityCell: {
    display: "flex",
    alignItems: "center",
  },
  quantityValue: {
    fontFamily: "Poppins",
    fontSize: "24px",
    display: "block",
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "36px",
  },
  buttomContainer: {
    marginTop: "5em",
    padding: "20px ",
    paddingBottom: 0,
    border: "1px solid #d3d3d3",
    borderRadius: "5px",
  },
  buttomItem: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "start",
    marginBottom: "1.2em",
  },
  buttomItem2: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  deliveryFee1: {
    fontSize: "14px",
    color: "#4e4e4e",
    fontWeight: "400",
    display: "block",
    marginLeft: "5px",
    marginBottom: "3em",
  },
  deliveryFee: {
    fontSize: "14px",
    color: "#606060",
    fontWeight: "400",
    display: "block",
  },
  btn: {
    width: "100%",
    margin: "5px 0",
    borderRadius: "50px",
    textTransform: "capitalize",
  },
  bold: {
    marginTop: "2em",
    marginBottom: 5,
    display: "flex",
    alignItems: "center",
  },
  bagIcon: {
    fontSize: 30,
    marginRight: 10,
    // color: "rgba(0, 0, 0, 0.54)",
  },
}));
const MobileCartView = () => {
  const dispatch = useDispatch();
  const toast = useFunctions();
  const classes = useStyles();
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = useSelector((state) => state.products);
  useEffect(() => {
    setDisabled(false);
    let quantity = 0;
    let price = 0;
    cart.forEach((item) => {
      quantity += item.qty;
      price += item.qty * item.amount;
    });
    setCount(quantity);
    setTotalPrice(price);
  }, [cart, disabled]);
  const removeItems = (id) => {
    dispatch(removeFromCart(id));
  };
  const onAddHandler = (id) => {
    dispatch(addToCart(id));
    // setDisabled(false);
    toast();
  };
  const onReduceHandler = (item) => {
    if (item.qty <= 1) {
      setDisabled(true);
      dispatch(removeFromCart(item.product_id));
    } else {
      setDisabled(false);
      dispatch(adjustQuantity(item.product_id));
    }
  };
  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h4" className={classes.bold}>
          <ShoppingCart className={classes.bagIcon} />
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            {count} item(s) in Cart
          </span>
        </Typography>
        <small className={classes.deliveryFee1}>
          Shipping fee is a flat rate of {formatMoney(2000)}
        </small>
        {cart.length > 0 &&
          cart.map((item) => (
            <Grid container className={classes.wrapper}>
              {/* Dates Syrup */}
              <Grid item xs={12} className={classes.fruitContainer}>
                <Box>
                  <img
                    src={item.image_url}
                    alt="powdered fruits"
                    className={classes.logo1}
                  />
                </Box>
                <Box>
                  <Typography variant="h3" className={classes.title1}>
                    {item.name}
                    <small className={classes.grams}>
                      {" "}
                      ({item.net_weight}){" "}
                    </small>
                  </Typography>
                  <Typography variant="h3" className={classes.content1}>
                    {formatMoney(item.amount)}
                  </Typography>
                </Box>
              </Grid>
              <Box className={classes.boxFooter}>
                <Box>
                  <IconButton
                    aria-label="delete"
                    className={classes.remove}
                    onClick={() => removeItems(item.product_id)}
                  >
                    <DeleteForeverIcon /> Remove
                  </IconButton>
                </Box>
                <Box className={classes.quantityCell}>
                  <IconButton
                    className={classes.iconBtn}
                    onClick={() => onReduceHandler(item)}
                    disabled={disabled}
                  >
                    <RemoveCircleOutline />
                  </IconButton>
                  <Typography variant="h5" className={classes.quantityValue}>
                    {item.qty}
                  </Typography>
                  <IconButton
                    className={classes.iconBtn}
                    onClick={() => onAddHandler(item.product_id)}
                  >
                    <AddCircleOutline />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          ))}
        <Grid container className={classes.buttomContainer}>
          <Grid item className={classes.buttomItem}>
            <Typography variant="h3" className={classes.title}>
              Total
            </Typography>
            <Box>
              <Typography variant="h3" className={classes.content}>
                {formatMoney(totalPrice)}
              </Typography>
              <small className={classes.deliveryFee}>
                {cart.length > 0 && "(Delivery fee not included)"}
              </small>
            </Box>
          </Grid>
          <Grid item className={classes.buttomItem2}>
            {cart.length === 0 ? (
              ""
            ) : (
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={() => router.push("/check-out")}
                disableElevation
              >
                Checkout
              </Button>
            )}
            <Button
              variant="outlined"
              color="primary"
              className={classes.btn}
              onClick={() => router.push("/shop")}
            >
              Buy More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MobileCartView;
