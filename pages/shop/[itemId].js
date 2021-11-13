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
} from "@material-ui/core";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import AddIcon from "@material-ui/icons/Add";

import { getAllProduct, getSingleProduct } from "../../redux/actions/products";
import { addToCart, adjustQuantity } from "../../redux/actions/cart";

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
}));
function ItemDetails() {
  const [prodValue, setProdValue] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    product,
    cart,
    id: productID,
  } = useSelector((state) => state.products);

  useEffect(() => {
    // const productID = router.query.itemId;
    setLoading(true);
    dispatch(getAllProduct(() => {}));
    dispatch(
      getSingleProduct(productID, () => {
        setLoading(false);
      })
    );
  }, []);

  useEffect(() => {
    let cartCount = 0;
    cart.forEach((item) => {
      cartCount += item.qty;
      setCartCount(cartCount);
    });
  }, [cart, cartCount]);
  const addCart = (id) => {
    dispatch(addToCart(id));
  };
  const increment = (id) => {
    // setProdValue((prevState) => prevState + 1)
    dispatch(adjustQuantity(id, prodValue));
  };
  const decrement = () => {
    setProdValue((prevState) => prevState - 1);
  };
  return (
    <Container style={{ marginTop: 10 + "rem", marginBottom: 115 + "px" }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={6}>
          {loading && <CircularProgress />}
          <Box>
            <img
              src={product && product.image_url}
              alt="product "
              style={{ maxWidth: "100%", width: "400px", height: "400px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={8} md={6}>
          <Box style={{ marginLeft: 57 + "px" }}>
            <Grid xs={8}>
              <Box>
                <Typography
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                    lineHeight: 50 + "px",
                    fontFamily: "Poppins",
                    letterSpacing: 0.01 + "em",
                    padding: 5,
                  }}
                >
                  {product && product.name}
                  <Typography
                    component="span"
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      lineHeight: 30 + "px",
                      fontFamily: "Poppins",
                      letterSpacing: 0.01 + "em",
                      padding: 5,
                    }}
                  >
                    {product && product.net_weight}
                  </Typography>
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
                    marginBottom: 40 + "px",
                  }}
                >
                  {product && product.description}
                </Typography>
                <Box>
                  <Box
                    style={{
                      marginTop: 2 + "rem",
                      fontSize: 36,
                      fontWeight: 500,
                      lineHeight: 40 + "px",
                      fontFamily: "Poppins",
                      letterSpacing: 0.01 + "em",
                      marginBottom: 20 + "px",
                    }}
                  >
                    {product && product.amount}
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Box
                        style={{ margin: "17px 0" }}
                        className={classes.button}
                      >
                        <IconButton
                          className={classes.iconBtn}
                          onClick={decrement}
                        >
                          <RemoveRoundedIcon />
                        </IconButton>
                        <Typography
                          variant="h5"
                          className={classes.quantityValue}
                        >
                          {prodValue}
                        </Typography>
                        <IconButton
                          className={classes.iconBtn}
                          onClick={() => increment(product.product_id)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                      <Grid>
                        <Box style={{ textAlign: "right" }}>
                          <button
                            onClick={() => addCart(product.product_id)}
                            style={{
                              backgroundColor: "#3D8754",
                              color: "white",
                              paddingTop: 20 + "px",
                              paddingBottom: 20 + "px",
                              paddingLeft: 35 + "px",
                              paddingRight: 35 + "px",
                              borderRadius: 50,
                              fontSize: 18,
                              fontWeight: "Poppins",
                              fontWeight: 500,
                              lineHeight: 24 + "px",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            Add to cart
                          </button>
                        </Box>
                      </Grid>
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
                  {cartCount} items
                  <Typography
                    component="span"
                    style={{
                      fontSize: 16,
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      lineHeight: 24 + "px",
                      marginLeft: 5 + "px",
                    }}
                  >
                    added to cart
                  </Typography>
                </Typography>

                <Typography
                  component="p"
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
                </Typography>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ItemDetails;
