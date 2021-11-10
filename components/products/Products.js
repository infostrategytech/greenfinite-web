import React from "react";
import { Card, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cards: {
    background:
      "linear-gradient(0deg, rgba(255,255,255,0.6), rgba(255,255,255,0.6))",
    padding: "2em 4em",
    boxShadow: "0px -1px 29px 8px rgba(210,210,210,0.15)",
  },
  fruitContainer: {
    // display: "flex",
    // alignItems: "center",
  },
  logo1: {
    maxWidth: "100%",
    width: "120px",
    height: "240px",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      width: "80px",
      height: "140px",
    },
  },
  title1: {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "36px",
  },
  content1: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "22px",
    marginTop: ".2em",
    marginBottom: "1em",
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
  },
  grams: {
    display: "block",
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "18px",
  },
}));

const Products = () => {
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.cards}>
      <Grid container justifyContent="space-between">
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={6}
          spacing={4}
          className={classes.fruitContainer}
        >
          <Grid item>
            <img
              src="./images/fruit.png"
              alt="Powdered nuts"
              className={classes.logo1}
            />
          </Grid>
          <Grid item md>
            <Typography variant="h3" className={classes.title1}>
              Date Powder
            </Typography>
            <Typography variant="body1" className={classes.content1}>
              flesh of Dates Fruit which have been dried and ground into fine
              powder.
              <small className={classes.grams}>200g and 500g </small>
            </Typography>
            <Button variat="contained" className={classes.button1}>
              Buy Now
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={6}
          spacing={4}
          className={classes.fruitContainer}
        >
          <Grid item>
            <img
              src="./images/fruit.png"
              alt="Powdered nuts"
              className={classes.logo1}
            />
          </Grid>
          <Grid item md>
            <Typography variant="h3" className={classes.title1}>
              Date Syrup
            </Typography>
            <Typography variant="body1" className={classes.content1}>
              flesh of Dates Fruit which have been dried and ground into fine
              powder.
              <small className={classes.grams}>200g and 5000g</small>
            </Typography>
            <Button variat="contained" className={classes.button1}>
              Buy Now
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Products;
