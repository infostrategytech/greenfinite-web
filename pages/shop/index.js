import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Box,
  Divider,
  Grid,
  Container,
  Typography,
  Button,
  MenuItem,
  CircularProgress,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { GET_ID } from "../../redux/actions/Contants";
import Head from 'next/head';
import router from "next/router";
import { addToCart } from "../../redux/actions/cart";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
      marginBottom: "2em",
    },
  },
  logo: {
    maxWidth: "100%",
    // height: "240px",
    // width: "280px",
    // objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      height: "140px",
      width: "140px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "120px",
      width: "180px",
      // objectFit: "cover",
    },
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "30px",
    fontWeight: "600",
    lineHeight: "36px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
      lineHeight: "20px",
    },
  },

  content: {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "28px",
    marginTop: ".2em",
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "18px",
    },
  },
  button: {
    borderRadius: "50px",
    background: "#3D8754",
    color: "#fff",
    padding: "10px 20px",
    textTransform: "capitalize",
    width: "115px",
    height: "40px",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
    margin: ".5em 0",
    "&:hover": { color: "#3D8754" },
    [theme.breakpoints.down("md")]: {
      width: "150px",
      height: "50px",
      fontSize: "14px",
    },
  },
  grams: {
    display: "block",
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  container: {
    margin: "2em 0 5em 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiListItem-root ": {
      padding: 0,
      paddingBottom: "10px",
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
function Shop() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { products } = useSelector((state) => state.products);
  const [isInCart, setIsInCart] = useState(false);
  const getId = (id) => {
    dispatch({
      type: GET_ID,
      payload: id,
    });
  };
  const addCart = (id) => {
    dispatch(addToCart(id));
    setIsInCart(true);
    setTimeout(() => {
      setIsInCart(false);
    }, 2000);
  };

  return (
    <Container style={{ marginTop: 10 + "rem" }}>
      <Head>
          <title>
              Greenfinite - Shop
          </title>
          <meta
          name="description"
          content=""
          />
      </Head>
      {/* <Grid style={{ textAlign: 'center' }}></Grid> */}
      <Box style={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "Poppins",
            fontSize: 36,
            fontWeight: 600,
            lineHeight: 54 + "px",
          }}
        >
          Shop
        </h1>
        <p
          style={{
            fontFamily: "Avenir",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 30 + "px",
          }}
        >
          Our products contain no preservatives or additives and have been
          certified by the National <br /> Agency for Food and Drug
          Administration and Control (NAFDAC)
        </p>
      </Box>

      <Grid container className={classes.container}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {products &&
              products.length &&
              products.map((product) => (
                <Grid item container xs={8} md={5}>
                  <Grid item className={classes.item}>
                    <Box>
                      <Link href={`/shop/${product.product_id}`}>
                        <img
                          src={product.image_url}
                          alt="date product"
                          className={classes.logo}
                        />
                      </Link>
                    </Box>
                    <Box>
                      <Typography variant="h4">
                        <Link href={`/shop/${product.product_id}`}>
                          <MenuItem
                            className={classes.title}
                            onClick={() => getId(product.product_id)}
                          >
                            {product.name} ({product.net_weight}g)
                          </MenuItem>
                        </Link>
                      </Typography>
                      <Typography variant="h4" className={classes.content}>
                        ₦{product.amount}
                      </Typography>
                      {/* <Link
                        href={`/shop/${product.product_id}`}
                        className={classes.button}
                      >
                        <Button variat="contained" className={classes.button}>
                          Buy Now
                        </Button>
                      </Link> */}

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

                      {/* <Link href="#"> */}
                      <Button
                        onClick={() => addCart(product.product_id)}
                        className={classes.button}
                      >
                        Buy Now
                      </Button>
                      {/* </Link> */}
                    </Box>
                  </Grid>
                </Grid>
              ))}
          </>
        )}
      </Grid>
    </Container>
  );
}

export default Shop;
