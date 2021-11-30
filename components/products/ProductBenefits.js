import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
    margin: "2em 0 5em 0",
    [theme.breakpoints.down("md")]: {
      margin: "1em 0 3em 0",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "1em 0",
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "60px",
    marginLeft: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "40px",
      textAlign: "center",
    },
  },
  content1: {
    fontFamily: "Poppins",
    fontSize: "15px",
    fontWeight: "400",
    lineHeight: "28px",
    marginTop: ".2em",
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "30px",
      textAlign: "justify",
    },
  },
}));

function ProductBenefits() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Grid container className={classes.wrapper}>
          <Grid item md={6}>
            <Typography variant="h2" className={classes.title}>
              Health benefits of our product
            </Typography>
          </Grid>
          <Grid item container className={classes.container}>
            <Grid item xs={12} sm={12} md={6}>
              <ul>
                <li className={classes.content1}>
                  Dates are high in magnesium and potassium which play
                  significant roles in blood sugar control. The potassium helps
                  to reduce cholesterol and keeps the risk of stroke in check
                </li>
                <li className={classes.content1}>
                  They are a good source probiotics, phytonutrients and soluble
                  fibre which improves digestive health and may prevent colon
                  cancer.
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ul>
                <li className={classes.content1}>
                  Dates are a low Glycemic index fruit and suitable for
                  diabetics and pre-diabetics, in moderation.
                </li>
                <li className={classes.content1}>
                  Dates contain potent antioxidants and are high in polyphenols
                  which can reduce inflammation in the body
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ProductBenefits;
