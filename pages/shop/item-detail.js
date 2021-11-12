import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 10 + "rem",
    marginBottom: 115 + "px",
  },
  productImage: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      width: "350px",
      height: "350px",
    },
  },
  infoBox: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 57 + "px",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  },
  productTitle: {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 50 + "px",
    fontFamily: "Poppins",
    letterSpacing: 0.01 + "em",
    padding: 5,
  },
  productTitleSpan: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 30 + "px",
    fontFamily: "Poppins",
    letterSpacing: 0.01 + "em",
    padding: 5,
  },
  productText: {
    fontSize: 18 + "px",
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 30 + "px",
    letterSpacing: 0.01 + "em",
    marginBottom: 40 + "px",
  },
  productPrice: {
    marginTop: 2 + "rem",
    fontSize: 36,
    fontWeight: 500,
    lineHeight: 40 + "px",
    fontFamily: "Poppins",
    letterSpacing: 0.01 + "em",
    marginBottom: 20 + "px",
  },
  buttonGroup: {
    margin: "17px 0",
  },
  removeBtn: {
    border: "1px solid #3D8754",
    borderRadius: 100 + "%",
    fontSize: 24,
    cursor: "pointer",
    width: 32 + "px",
    height: 32 + "px",
  },
  removeBtnSpan: {
    fontSize: 22,
    fontWeight: 750,
    marginLeft: 15,
    marginRight: 15,
  },
  addBtn: {
    border: "none",
    borderRadius: 100,
    backgroundColor: "#3D8754",
    color: "#ffff",
    fontSize: 24,
    cursor: "pointer",
    width: 32 + "px",
    height: 32 + "px",
  },
  btnAlign: {
    [theme.breakpoints.up("md")]: {
      textAlign: "right",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center"
    }
  },
  btn: {
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
  },
  cartItems: {
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "Poppins",
    lineHeight: 24 + "px",
    marginTop: 10 + "px",
  },
  cartItemSpan: {
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 400,
    lineHeight: 24 + "px",
    marginLeft: 5 + "px",
  },
  viewCart: {
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
  },
}));

function Item() {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {/* <Box > */}
            <img className={classes.productImage} src="../images/shopItem.png" alt="product image" />
          {/* </Box> */}
        </Grid>
        <Grid item xs={12} md={8}>
          <Box className={classes.infoBox}>
            <Grid xs={12} md={8}>
              <Box>
                <Typography className={classes.productTitle}>
                  Dates Powder{" "}
                  <Typography
                    component="span"
                    className={classes.productTitleSpan}
                  >
                    (500g)
                  </Typography>
                </Typography>
                <Typography component="p" className={classes.productText}>
                  Our Dates powder is made from the flesh of Dates Fruit which
                  have been dried and ground into fine powder. We pride
                  ourselves as being the manufacturers of the finest and purest
                  Dates Powder. Our Dates powder is the nutrient-dense, perfect
                  alternative to refined sugar, loaded with antioxidants,
                  vitamins and minerals. Considered very healthy for babies,
                  toddlers, young children and adults.
                </Typography>

                <Box>
                  <Typography className={classes.productPrice}>
                    N 10,000
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <Box className={classes.buttonGroup}>
                        <button className={classes.removeBtn}>-</button>{" "}
                        <span className={classes.removeBtnSpan}>2</span>{" "}
                        <button className={classes.addBtn}>+</button>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Grid>
                        <Box className={classes.btnAlign}>
                          <Link href="/cart" underline="none">
                            <button href="/cart" className={classes.btn}>
                              Add to cart
                            </button>
                          </Link>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>

                <Typography component="p" className={classes.cartItems}>
                  2 items
                  <Typography component="span" className={classes.cartItemSpan}>
                    added to cart
                  </Typography>
                </Typography>

                <Typography
                  component="p"
                  className={classes.viewCart}
                  className={classes.viewCart}
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

export default Item;
