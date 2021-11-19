import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
  makeStyles,
  MenuItem,
} from "@material-ui/core";

import { getAllProduct, getSingleProduct } from "../../redux/actions/products";
import { addToCart, adjustQuantity } from "../../redux/actions/cart";
import useFunctions from "../../UtilityService/useFunctions";

const useStyles = makeStyles((theme) => ({
  quantityValue: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 16,
      marginRight: 16,
    },
    color: "#000",
  },
  iconBtn: {
    color: "#000",
  },
  button: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    maxWidth: "100%",
    width: "250px",
    height: "400px",
    [theme.breakpoints.down("md")]: {
      width: "200px",
      height: "200px",
    },
    // [theme.breakpoints.up("md")]: {
    //   width: "100%",
    // },
  },
  title: {
    display: "inline",
    fontFamily: "Poppins",
    fontSize: "4opx",
    fontWeight: "600",
    lineHeight: "36px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "20px",
    },
  },
  progress: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  grams: {
    display: "inline",
    fontFamily: "Poppins",
    fontWeight: "800",
    fontSize: "30px",
    lineHeight: "40px",

    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
    },
  },
  button: {
    borderRadius: "50px",
    background: "#3D8754",
    color: "#fff",
    padding: "10px 20px",
    textTransform: "capitalize",
    width: "180px",
    height: "60px",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: "500",
    margin: "1em 0",
    "&:hover": { color: "#3D8754" },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      width: "150px",
      height: "50px",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  content: {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "700",
    // lineHeight: "22px",

    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "24px",
    },
  },
  add: {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: "500",
    // lineHeight: "22px",

    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "24px",
    },
  },
  view: {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: "500",
    main: "#3D8754",
    color: "#3D8754",
    textDecoration: "underline",
    cursor: "pointer",

    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "24px",
    },
  },
}));
function ItemDetails() {
  const [cartCount, setCartCount] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const toast = useFunctions();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { product, cart } = useSelector((state) => state.products);

  const productID = router.query.itemId;
  useEffect(() => {
    setLoading(true);
    if (productID) {
      dispatch(
        getSingleProduct(productID, () => {
          setLoading(false);
        })
      );
    }
  }, [productID]);

  useEffect(() => {
    let cartCount = 0;

    // cart.forEach((item) => {
    //   cartCount += item.qty;
    //   setCartCount(cartCount);
    // });
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product_id === product.product_id) {
        cartCount += cart[i].qty;
        setCartCount(cartCount);
      }
    }
  }, [cart, cartCount]);
  const addCart = (id) => {
    dispatch(addToCart(id));
    toast();
  };

  return (
    <Container style={{ marginTop: 10 + "rem", marginBottom: 115 + "px" }}>
      {loading ? (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Grid container className={classes.container}>
            <Grid item xs={12} md={5}>
              {loading && <CircularProgress />}
              <Box>
                <img
                  src={product.image_url}
                  alt="product "
                  className={classes.logo}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography className={classes.title}>
                <small className={classes.grams}>
                  {product && product.name}{" "}
                  {product && `(${product.net_weight})`}
                </small>
              </Typography>
              <Typography
                component="p"
                style={{
                  fontSize: 18 + "px",
                  fontFamily: "Avenir",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  lineHeight: 30 + "px",
                  letterSpacing: 0.01 + "em",
                }}
              >
                {product && product.description}
              </Typography>
              <Box className={classes.content}>
                ₦{product && product.amount}
              </Box>
              {/* <Link href="#"> */}
              <Button
                onClick={() => addCart(product.product_id)}
                className={classes.button}
              >
                Add to cart
              </Button>
              {/* </Link> */}

              <Typography component="p">
                <Link href="/cart">
                  <Typography className={`${classes.view}`}>
                    View Cart
                  </Typography>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
}

export default ItemDetails;
{
  /* <Box>
  <Typography className={classes.title}>
    <small className={classes.grams}>
      {product && product.name} {product && `(${product.net_weight})`}g
    </small>
  </Typography>
  <Typography
    component="p"
    style={{
      fontSize: 18 + "px",
      fontFamily: "Avenir",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: 30 + "px",
      letterSpacing: 0.01 + "em",
    }}
  >
    {product && product.description}
  </Typography>
  <Box>
    <Box className={classes.content}>₦{product && product.amount}</Box>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box style={{ textAlign: "right" }}>
          <Button
            onClick={() => addCart(product.product_id)}
            className={classes.button}
          >
            Add to cart
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>

  <Typography
    component="p"
    style={{
      fontSize: 16,
      fontWeight: 600,
      fontFamily: "Poppins",
      lineHeight: 24 + "px",
      marginTop: 10 + "px",
    }}
  >
    {cart.length > 0 ? "Item has been added to cart" : ""}
  </Typography>

  <Typography component="p">
    <Link href="/cart">
      <MenuItem
        style={{
          fontSize: 18,
          fontWeight: 600,
          fontFamily: "Poppins",
          fontStyle: "normal",
          lineHeight: 27 + "px",
          cursor: "pointer",
          color: "#3D8754",
          letterSpacing: 0.01 + "em",
          textDecoration: "underline",
          marginTop: 5 + "px",
        }}
      >
        View Cart
      </MenuItem>
    </Link>
  </Typography>
</Box>; */
}
