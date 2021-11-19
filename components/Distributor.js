import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Grid,
  Typography,
  makeStyles,
  Card,
} from "@material-ui/core";
import router from "next/router";

const useStyles = makeStyles((theme) => ({
  box: {
    height: "60vh",
    background: " #EFF8F2;",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    margin: "2em 0 5em 0",
    height: "60vh",
  },
  logo: {
    maxWidth: "100%",
  },
  title: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "60px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  content: {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "30px",
    marginTop: ".8em",
    marginBottom: "1.5em",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      marginTop: ".2em",
      marginBottom: "1em",
    },
  },
  button: {
    fontFamily: "Poppins",
    borderRadius: "100px",
    background: "#3D8754",
    color: "#fff",
    padding: "20px",
    textTransform: "capitalize",
    width: "280px",
    height: "65px",
    fontSize: "18px",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      width: "200px",
      height: "45px",
    },
  },
  item: {
    display: "flex",
    justifyContent: "center",
  },
  items: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));
const Distributor = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.wrapper}>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={12} className={classes.item}>
            <Box className={classes.items}>
              <Typography variant="h3" className={classes.title}>
                Become a Distributor
              </Typography>
              <Typography variant="body1" className={classes.content}>
                Our goal is to empower as many people as possible to make extra
                income by partnering with us . <br /> To become a Greenfinite
                distributor , please Click the Join Us button
              </Typography>

              {/* <Link href="/distributors"> */}
                <Button onClick={() => router.push("/distributors")} variat="contained" className={classes.button}>
                  Join Us
                </Button>
              {/* </Link> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Distributor;
