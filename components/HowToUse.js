import React from "react";
import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    height: "60vh",
    background: " #EFF8F2;",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  wrapper: {
    width: "80%",
    margin: "2em 0 5em 0",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 3.5em",
  },
  logo: {
    maxWidth: "100%",
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "60px",
  },
  content: {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: "40px",
    marginTop: ".8em",
    marginBottom: "1.5em",
  },
  video: {
    borderRadius: "5px",
    height: "300px",
  },
}));
function HowToUse() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Box className={classes.wrapper}>
          <Grid container className={classes.container}>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Typography variant="h3" className={classes.title}>
                  How to Use
                </Typography>
                <Typography variant="body1" className={classes.content}>
                  Watch our interesting video on ways to use your favourite
                  sweetener
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className={classes.leftSide}>
              {/* <img className={classes.videoImage} src="/images/BusinessVideo.svg" alt="iRecharge video" /> */}
              <iframe
                className={classes.video}
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/TbDQGq83ttc"
                title="iRecharge Vendor Testimonials"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default HowToUse;
