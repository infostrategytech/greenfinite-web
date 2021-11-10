import React from "react";
import { IconButton, Typography, Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
    margin: "2em 0 5em 0",
  },
  top: {
    display: "flex",
  },
  logo: {
    maxWidth: "100%",
    height: "50px",
    width: "50px",
    [theme.breakpoints.down("md")]: {
      height: "40px",
      width: "40px",
    },
  },
  logo1: {
    maxWidth: "100%",
    width: "450px",
    height: "400px",
    [theme.breakpoints.down("md")]: {
      width: "80px",
      height: "80px",
    },
  },
  content1: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "22px",
    marginTop: ".2em",
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "20px",
    },
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "48px",
    fontWeight: "700",
    lineHeight: "60px",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      lineHeight: "20px",
    },
  },
  title1: {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "60px",

    marginBottom: "20px",
  },
  subtitle: {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "30px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "20px",
      fontWeight: "300",
    },
  },
  fruitContainer: {
    display: "flex",
    alignItems: "center",
  },
  container: {
    margin: "2em 0",
  },
}));
const ProductSection = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Grid container className={classes.wrapper}>
          <Grid item>
            <Typography variant="h2" className={classes.title}>
              Our Products
            </Typography>

            <Box className={classes.top}>
              <IconButton>
                <img
                  src="./images/nafdac.png"
                  alt="nafdac logo"
                  className={classes.logo}
                />
              </IconButton>
              <Typography variant="h2" className={classes.subtitle}>
                Our products contain no preservatives or additives and have been
                certified by the National Agency for Food and Drug
                Administration and Control (NAFDAC)
              </Typography>
            </Box>
          </Grid>
          <Grid item container className={classes.container}>
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={12}
              spacing={4}
              className={classes.fruitContainer}
            >
              <Grid item md>
                <Typography variant="h3" className={classes.title1}>
                  Date Powder
                </Typography>
                <Typography variant="body1" className={classes.content1}>
                  Our Dates powder is made from the flesh of Dates Fruit which
                  have been dried and ground into fine powder. We pride
                  ourselves as being the manufacturers of the finest and purest
                  Dates Powder.
                  <small className={classes.grams}>200g and 500g </small>
                </Typography>
              </Grid>
              <Grid item md>
                <img
                  src="./images/productgroup.png"
                  alt="Powdered nuts"
                  className={classes.logo1}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={12}
              spacing={4}
              className={classes.fruitContainer}
            >
              <Grid item md style={{ order: "2" }}>
                <img
                  src="./images/productgroup.png"
                  alt="Powdered nuts"
                  className={classes.logo1}
                />
              </Grid>
              <Grid item md style={{ order: "1" }}>
                <Typography variant="h3" className={classes.title1}>
                  Date Syrup
                </Typography>
                <Typography variant="body1" className={classes.content1}>
                  Our Dates powder is made from the flesh of Dates Fruit which
                  have been dried and ground into fine powder. We pride
                  ourselves as being the manufacturers of the finest and purest
                  Dates Powder.
                  <small className={classes.grams}>200g and 5000g</small>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductSection;
