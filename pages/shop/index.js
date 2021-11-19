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
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { GET_ID } from "../../redux/actions/Contants";

import router from "next/router";
import { addToCart } from "../../redux/actions/cart";
import { getAllProduct } from "../../redux/actions/products";
import useFunctions from "../../UtilityService/useFunctions";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "1em 0",
    width: "95%",
    border: "1px solid #d3d3d3",
    display: "flex",
    justifyContent: "center",
    borderRadius: "20px",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      padding: "1em",
      textAlign: "center",
    },
  },
  item: {
    display: "flex",
    wordBreak: "break-all",
    overflowWrap: "break-word",
    width: "100%",

    // boxShadow: "0px -1px 29px 8px rgba(210,210,210,0.15)",
    // alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
      marginBottom: "2em",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "100%",
    },
  },
  logo: {
    maxWidth: "100%",
    // height: "240px",
    // width: "280px",
    // objectFit: "cover",
    // [theme.breakpoints.down("md")]: {
    //   height: "140px",
    //   width: "140px",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   height: "120px",
    //   width: "180px",
    //   // objectFit: "cover",
    // },
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "36px",
    cursor: "pointer",
    textAlign: "center",
    overflowWrap: "break-word",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "20px",
    },
  },

  content: {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: "400",

    marginTop: ".2em",
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "18px",
    },
  },
  button: {
    borderRadius: "50px",
    background: "#3D8754",
    color: "#fff",
    padding: "10px 20px",
    textTransform: "capitalize",
    width: "160px",
    height: "50px",
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
    fontSize: "14px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  container: {
    margin: "2em 0 5em 0",
    display: "flex",
    // justifyContent: "center",
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
  cardContent: {
    display: "flex",
    textAlign: "left",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  progress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
  },
  icon: {
    maxWidth: "100%",
    width: "34px",
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "30px",
    },
  },
}));
function Shop() {
  const dispatch = useDispatch();
  const toast = useFunctions();
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
    toast();
  };
  useEffect(() => {
    setLoading(true);
    if (products.length === 0) {
      dispatch(getAllProduct(() => setLoading(false)));
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <Container style={{ marginTop: 10 + "rem" }}>
      {/* <Grid style={{ textAlign: 'center' }}></Grid> */}
      <Box style={{ textAlign: "center" }}>
        <img
          src="/images/Vector.png"
          alt="shop icon"
          className={classes.icon}
        />
        <h1
          style={{
            fontFamily: "Poppins",
            fontSize: 36,
            fontWeight: 600,
            lineHeight: 54 + "px",
            display: "inline",
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
          <div className={classes.progress}>
            {" "}
            <CircularProgress />
          </div>
        ) : (
          <>
            {products &&
              products.length &&
              products.map((product) => (
                <Grid
                  item
                  container
                  xs={12}
                  sm={6}
                  md={3}
                  spacing={2}
                  style={{ marginBottom: "1em" }}
                >
                  <Grid item className={classes.item}>
                    <Card className={classes.card} elevation={0}>
                      <Box>
                        <Link href={`/shop/${product.product_id}`}>
                          <img
                            src={product.image_url}
                            alt="product"
                            className={classes.logo}
                          />
                        </Link>
                      </Box>
                      {/* <CardMedia
                      component="img"
                      height="194"
                      image={product.image_url}
                      alt="product"
                    /> */}
                      {/* <Box> */}
                      <CardContent className={classes.cardContent}>
                        <Typography variant="h4">
                          <Link href={`/shop/${product.product_id}`}>
                            <MenuItem
                              className={classes.title}
                              onClick={() => getId(product.product_id)}
                            >
                              {product.name}{" "}
                            </MenuItem>
                          </Link>{" "}
                          <small className={classes.grams}>
                            ({product.net_weight})
                          </small>
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
                      </CardContent>
                      {/* </Link> */}
                      {/* </Box> */}
                    </Card>
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
