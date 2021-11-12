import React from "react";
import Link from "next/link";
import {
  Box,
  Divider,
  Grid,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 10 + "rem",
    marginBottom: 115 + "px",
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 36,
    fontWeight: 600,
    lineHeight: 54 + "px",
    marginBottom: 5 + "px",
  },
  titleSpan: {
    marginRight: 5 + "px",
  },
  pageText: {
    fontFamily: "Avenir",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 30 + "px",
  },
  productContainer: {
    marginTop: 85 + "px",
    [theme.breakpoints.down("md")]: {
      marginTop: 5 + "rem",
    },
  },
  productBox: {
    [theme.breakpoints.down("md")]: {
      marginBottom: 35 + "px"
    }
  },
  productImage: {
    textAlign: "center",
  },
  productContent: {
    marginLeft: 35 + "px",
    marginTop: 60 + "px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginTop: 30 + "px",
    },
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 35 + "px",
    fontFamily: "Poppins",
    letterSpacing: 0.01 + "em",
    marginBottom: 25 + "px",
    cursor: "pointer",
  },
  productTitleSpan: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 30 + "px",
    fontFamily: "Poppins",
    letterSpacing: 0.01 + "em",
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 40 + "px",
    fontFamily: "Poppins",
    letterSpacing: 0.01 + "em",
    marginBottom: 15 + "px",
  },
  addButton: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 24 + "px",
    letterSpacing: 0.01 + "em",
    backgroundColor: "#3D8754",
    color: "white",
    paddingTop: 15 + "px",
    paddingBottom: 15 + "px",
    border: "none",
    paddingLeft: 25 + "px",
    paddingRight: 25 + "px",
    borderRadius: 50,
    fontSize: 17,
    cursor: "pointer",
  },
  divider: {
    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
    },
  },
}));

function Shop() {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <Box style={{ textAlign: "center" }}>
        <Typography className={classes.title}>
          <span className={classes.titleSpan}>
            <img src="./images/shopIcon.png" alt="product image" />
          </span>
          Shop
        </Typography>

        <Typography component="p" className={classes.pageText}>
          Our products contain no preservatives or additives and have been
          certified by the National <br /> Agency for Food and Drug
          Administration and Control (NAFDAC)
        </Typography>
      </Box>

      <Grid container spacing={2} className={classes.productContainer}>
        <Grid item xs={12} md={5} className={classes.productBox}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box className={classes.productImage}>
                <img src="./images/productShop.png" alt="product image" />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box className={classes.productContent}>
                <Link href="shop/item-detail">
                  <Typography className={classes.productTitle}>
                    Dates Powder{" "}
                    <Typography
                      component="span"
                      className={classes.productTitleSpan}
                    >
                      (500g)
                    </Typography>
                  </Typography>
                </Link>

                <Typography className={classes.productPrice}>
                  N10,000
                </Typography>

                <Link href="/cart" underline="none">
                  <button href="/cart" className={classes.addButton}>
                    Add to cart
                  </button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className={classes.divider}
        />

        <Grid item xs={12} md={5} className={classes.productBox}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box className={classes.productImage}>
                <img src="./images/productShop.png" alt="product image" />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box className={classes.productContent}>
                <Link href="shop/item-detail">
                  <Typography className={classes.productTitle}>
                    Dates Powder{" "}
                    <Typography
                      component="span"
                      className={classes.productTitleSpan}
                    >
                      (500g)
                    </Typography>
                  </Typography>
                </Link>

                <Typography className={classes.productPrice}>
                  N10,000
                </Typography>

                <Link href="/cart" underline="none">
                  <button href="/cart" className={classes.addButton}>
                    Add to cart
                  </button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Shop;
