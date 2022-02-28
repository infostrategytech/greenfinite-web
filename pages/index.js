import {
  Box,
  Button,
  Grid,
  Typography,
  makeStyles,
  Card,
  CircularProgress,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Distributor from "../components/Distributor";
import Footer from "../components/Footer";
import HowToUse from "../components/HowToUse";
import ProductBenefits from "../components/products/ProductBenefits";
import Products from "../components/products/Products";
import ProductSection from "../components/products/ProductSection";
import Image from "next/image";
import Link from "next/link";
import LatestBlog from "../components/LatestBlog";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  wrapper: {
    background: "#FFF1DA",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // marginBottom: "8em",
      padding: "0 2em",
      // height: "80vh",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 3em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  logo: {
    maxWidth: "100%",
    [theme.breakpoints.only("sm")]: {
      width: "300px",
      height: "300px",
    },
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "50px",
    [theme.breakpoints.down("md")]: {
      fontSize: "36px",
      lineHeight: "50px",
      textAlign: "justify",
    },
  },
  content: {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "30px",
    marginTop: ".2em",
    marginBottom: "1.5em",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      textAlign: "justify",
    },
  },
  button: {
    borderRadius: "50px",
    background: "#3D8754",
    color: "#fff",
    padding: "20px",
    textTransform: "capitalize",
    width: "176px",
    height: "67px",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      width: "105px",
      height: "43px",
      fontSize: "14px",
    },
  },

  products: {
    width: "80%",
    position: "relative",
    top: "-120px",
    [theme.breakpoints.down("sm")]: {
      top: "0",
      width: "100%",
    },
  },
  becomeADistributor: {
    width: "80%",
    marginBottom: "5rem",
    [theme.breakpoints.down("sm")]: {
      top: "0",
      width: "100%",
    },
  },
  becomeADistributorTitleSection: {
    display: "flex",
    flexDirection: "row",
    columnGap: "4rem",
    marginBottom: "1rem",
  },
  becomeADistributorTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "60px",
    letterSpacing: "0.01em",
    color: "#000000",
  },
  becomeADistributorButton: {
    border: "1px solid #3D8754",
    boxSizing: "border-box",
    borderRadius: "50px",
    padding: "10px 25px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "0.01em",
    color: "#3D8754",
  },
  becomeADistributorText: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.01em",
    color: "#000000",
    width: "50%",
  },
  order2: {
    [theme.breakpoints.down("sm")]: {
      order: "2",
    },
  },
  order1: {
    [theme.breakpoints.down("sm")]: {
      order: "1",
    },
  },
  item4: {
    textAlign: "center",
    marginTop: 100,
    backgroundColor: "#EFF8F2",
    paddingTop: "7rem",
    paddingBottom: "7rem",
  },
  subhead: {
    marginBottom: 16,
    fontWeight: 700,
    fontFamily: "Poppins",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  product__container: {
    marginTop: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "3rem",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      rowGap: "3rem",
    },
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "3rem",
    },
  },
  value: {
    padding: 0,
  },
  number: {
    fontSize: 28,
  },
  subTitle: {},
  item5: {
    display: "grid",
    textAlign: "center",
    gap: "2rem",
    [theme.breakpoints.up("sm")]: {
      marginTop: "5rem",
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 100,
      paddingRight: 100,
      marginTop: "7rem",
      marginBottom: "7rem",
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      // marginTop: 32,
    },
    marginTop: 50,
  },
  clientImg: {
    height: 81,
    width: 153,
  },
blogParentContainer: {
  padding: 16
}
}));
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.main}>
        <Box className={classes.wrapper}>
          <Grid container className={classes.container}>
            <Grid item xs={12} sm={12} md={5} className={classes.order2}>
              <Box>
                <Typography variant="h3" className={classes.title}>
                  Healthy sweeteners <br /> made from Dates fruit
                </Typography>
                <Typography variant="body1" className={classes.content}>
                  Your favourite alternative to refined sugar made with no
                  preservatives or additives.{" "}
                </Typography>
                <Link href="/shop">
                  <Button variat="contained" className={classes.button}>
                    Buy Now
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item item xs={12} sm={12} md={5} className={classes.order1}>
              <Image
                src="/images/bowl.png"
                alt="Powdered nuts"
                className={classes.logo}
                width="600px"
                height="500px"
                placeholder="blur"
                priority={true}
                // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
              />
            </Grid>
          </Grid>

          {/* <Box
            className={classes.becomeADistributor}
            xs={12}
            lg={12}
            md={8}
            sm={12}
          >
            <Grid className={classes.becomeADistributorTitleSection}>
              <Typography className={classes.becomeADistributorTitle}>
                Become a Distributor
              </Typography>
              <Button className={classes.becomeADistributorButton}>
                Join Now
              </Button>
            </Grid>
            <Typography className={classes.becomeADistributorText}>
              Our goal is to empower as many people as possible to make extra
              income by partnering with us . To become a Greenfinite distributor
              , please Click the Join Us button
            </Typography>
          </Box> */}

        </Box>
        <Box className={classes.products}>
          <Products />
        </Box>
        <Box>
          <ProductBenefits />
          <ProductSection />
          <HowToUse />
          <Distributor />

          <Grid item container direction="column" className={classes.item4}>
            <Grid item>
              <Typography variant="h4" className={classes.subhead}>
                Our Products in Numbers
              </Typography>
            </Grid>

            <Grid
              item
              container
              justifyContent="space-evenly"
              className={classes.product__container}
            >
              <Grid item className={classes.value}>
                <Typography
                  variant="h4"
                  component="h3"
                  className={classes.number}
                >
                  500,000
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  className={classes.subTitle}
                >
                  Products Supplied
                </Typography>
              </Grid>
              <Grid item className={classes.value}>
                <Typography
                  variant="h4"
                  component="h3"
                  className={classes.number}
                >
                  290
                </Typography>
                <Typography variant="h6" component="p">
                  Over Distributors
                </Typography>
              </Grid>
              <Grid item className={classes.value}>
                <Typography
                  variant="h4"
                  component="h3"
                  className={classes.number}
                >
                  100%
                </Typography>
                <Typography variant="h6" component="p">
                  Satisfied Customers
                </Typography>
              </Grid>

              <Grid item className={classes.value}>
                <Typography
                  variant="h4"
                  component="h3"
                  className={classes.number}
                >
                  7
                </Typography>
                <Typography variant="h6" component="p">
                  Countries
                </Typography>
              </Grid>

              <Grid item className={classes.value}>
                <Typography
                  variant="h4"
                  component="h3"
                  className={classes.number}
                >
                  57
                </Typography>
                <Typography variant="h6" component="p">
                  Cities
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container className={classes.item5}>
            <Grid item>
              <img
                src="./images/next.png"
                alt="next cash and carry"
                className={classes.clientImg}
              />
            </Grid>
            <Grid item>
              <img
                src="./images/tonia.png"
                alt="tonia pharmacy"
                className={classes.clientImg}
              />
            </Grid>
            <Grid item>
              <img
                src="./images/pyramid.png"
                alt="pyramid pharmacy"
                className={classes.clientImg}
              />
            </Grid>
            <Grid item>
              <img
                src="./images/mcray.png"
                alt="mcray supermarket"
                className={classes.clientImg}
              />
            </Grid>
            <Grid item>
              <img
                src="./images/bakan-gizo.png"
                alt="bakan gizo"
                className={classes.clientImg}
              />
            </Grid>
            <Grid item>
              <img
                src="./images/dunes.png"
                alt="dunes center"
                className={classes.clientImg}
              />
            </Grid>
            <Grid item>
              <img
                src="./images/maple.png"
                alt="maple"
                className={classes.clientImg}
              />
            </Grid>
            <Grid item>
              <img
                src="./images/tefcon.png"
                alt="tefcon"
                className={classes.clientImg}
              />
            </Grid>
          </Grid>

          <Box className={classes.blogParentContainer}>
            <LatestBlog />
          </Box>
        </Box>
      </div>
    </>
  );
}
