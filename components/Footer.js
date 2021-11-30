import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { Facebook, Instagram, Twitter, LinkedIn } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import router from "next/router";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D8754",
    padding: "5em 1em",
  },
  footerLogo: {
    maxWidth: "100%",
    height: "60px",
    width: "100px",
    backgroundColor: "#fff",
    padding: "10px 0",
  },
  header: {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: "900",
    color: "#fff",
    lineHeight: "25px",
  },
  footerList: {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "35px",
    color: "#fff",
    cursor: "pointer",
  },
  icon: {
    marginTop: "10px",
    color: "#fff",
  },
  icons: {
    marginRight: "30px",
    padding: ".5em 0",
  },
  bottomLine: {
    height: "1px",
    width: "100%",
    backgroundColor: "#fff",
    margin: "20px 0",
  },
  dev: {
    marginLeft: 4,
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.wrapper}>
        <Grid container xs={12} sm={12} md={10}>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <img
                src="/images/footerLogo.png"
                alt="Footer logo"
                className={classes.footerLogo}
              />
            </Box>
            <Typography variant="h4" className={classes.footerList}>
              (+234) 8034540109
            </Typography>
            <Typography variant="h4" className={classes.footerList}>
              info@greenfinite.ng{" "}
            </Typography>
            {/* <Typography variant="h4" className={classes.footerList}>
              info@greenfinite.ng{" "}
            </Typography> */}
            <Typography variant="h4" className={classes.footerList}>
              25D, Drive 3, Prince and Princess Estate, Abuja F.C.T
            </Typography>
            <Typography variant="h4" className={classes.icon}>
              <span className={classes.icons}>
                <Facebook />
              </span>
              <span className={classes.icons}>
                <Instagram />
              </span>
              <span className={classes.icons}>
                <Twitter />
              </span>
              <span className={classes.icons}>
                <LinkedIn />
              </span>
            </Typography>
          </Grid>
          <Grid item container xs={12} sm={12} md={6}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h4" className={classes.header}>
                Company
              </Typography>
              <Typography
                onClick={() => router.push("/about-us")}
                variant="h4"
                className={classes.footerList}
              >
                About us
              </Typography>
              <Typography
                onClick={() => router.push("contact-us")}
                variant="h4"
                className={classes.footerList}
              >
                Contact us{" "}
              </Typography>
              {/* <Typography
                onClick={() => router.push()}
                variant="h4"
                className={classes.footerList}
              >
                FAQs{" "}
              </Typography> */}
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h4" className={classes.header}>
                Products{" "}
              </Typography>
              <Typography
                onClick={() => router.push("/shop")}
                variant="h4"
                className={classes.footerList}
              >
                Dates Powder
              </Typography>

              <Typography
                onClick={() => router.push("/shop")}
                variant="h4"
                className={classes.footerList}
              >
                Dates Syrup
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <div className={classes.bottomLine}></div>
            <Grid item>
              <Typography variant="h5" className={classes.footerList}>
                &copy; 2021 Greenfinite All rights reserved.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" className={classes.footerList}>
                <span className={classes.dev}>Powered by Infostrategy</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
