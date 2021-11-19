import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import Head from "next/head";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
  },
  datesImg: {
    maxWidth: "100%",
    // width: "500px",
    // height: "100px ",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "200px",
    },
  },
  parentContainer: {
    [theme.breakpoints.up("md")]: {
      paddingTop: 50,
      paddingBottom: 200,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 16,
      paddingBottom: 100,
    },
  },
  boxes: {
    width: "90%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0",
    },
  },
  headerText: {
    fontWeight: 700,
    fontSize: 40,
    marginBottom: 16,
    fontFamily: "Poppins",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginBottom: 10,
    },
  },
  headerTextSmall: {
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 16,
    fontFamily: "Poppins",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  subhead: {
    marginBottom: 16,
    fontWeight: 700,
    fontFamily: "Poppins",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  item1: {
    // textAlign: "center",
    marginBottom: 100,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 100,
      paddingRight: 100,
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: 50,
    },
  },
  item2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      paddingLeft: 100,
      paddingRight: 100,
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "justify",
    },
  },
  item3: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: 100,
      paddingRight: 100,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 32,
      textAlign: "justify",
    },
    marginTop: 50,
  },
  item4: {
    textAlign: "center",
    marginTop: 100,
    backgroundColor: "#EFF8F2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  item5: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: 200,
      paddingRight: 200,
      marginTop: 100,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 32,
    },
    marginTop: 50,
  },
  item6: {
    marginTop: "75px",
    marginBottom: 100,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 100,
      paddingRight: 100,
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: 50,
    },
  },
  imgContainer: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  box: {
    marginTop: 16,
    marginBottom: 100,
    fontFamily: "Poppins",
    [theme.breakpoints.down("md")]: {
      textAlign: "justify",
      marginBottom: 50,
    },
  },
  value: {
    padding: 8,
  },
  clientImg: {
    height: 81,
    width: 153,
  },
  font: {
    fontFamily: "Poppins",
    fontSize: "15px",
  },
  coreValues: {
    backgroundColor: "#EFF8F2",
    paddingBottom: "75px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

function AboutUs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>Greenfinite - About Us</title>
        <meta name="description" content="" />
      </Head>
      <Grid container direction="column" className={classes.parentContainer}>
        <Box className={classes.boxes}>
          <Grid item className={classes.item1}>
            <Typography
              variant="h3"
              component="h1"
              className={classes.headerText}
            >
              About Us
            </Typography>
            <Typography variant="body1" component="p" className={classes.font}>
              We are an organic food processing company into the production of
              healthy sweeteners made from Dates Fruits. We process Dates Fruits
              into powder and syrup forms as a suitable natural replacement for
              refined sugar or other sweeteners in any recipe.
            </Typography>
          </Grid>
          {/* ROW 2 */}
          <Grid item container className={classes.item2}>
            <Grid item xs={12} md={6}>
              <Box className={classes.box}>
                <Typography variant="h4" className={classes.subhead}>
                  Our Vision
                </Typography>
                <Typography variant="body1" className={classes.font}>
                  To be the go-to brand for trusted natural alternatives.
                </Typography>
              </Box>
              <Box className={classes.box}>
                <Typography variant="h4" className={classes.subhead}>
                  Our Mission
                </Typography>
                <Typography variant="body1" className={classes.font}>
                  Our infinite motive is to support the health and wellbeing of
                  homes by providing the best natural sweeteners and also enable
                  financial growth and wealth creation by partnering with
                  distributors worldwide.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} className={classes.imgContainer}>
              <img
                src="/images/about-us-img.png"
                alt="bag of dates"
                className={classes.datesImg}
                // width="400px"
                // height="300px"
              />
            </Grid>
          </Grid>
          {/* ROW 3 */}
        </Box>

        <Box className={classes.coreValues}>
          <Grid item container direction="column" className={classes.item3}>
            <Grid item>
              <Typography variant="h4" className={classes.subhead}>
                Our Core Values
              </Typography>
            </Grid>

            <Grid item container>
              <Grid item xs={12} md={3} className={classes.value}>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.headerTextSmall}
                >
                  Quality
                </Typography>
                <Typography variant="body1" className={classes.font}>
                  Adhere to raw material selection criteria and ensure all
                  production processes are strictly monitored and carried out
                  hygienically.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} className={classes.value}>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.headerTextSmall}
                >
                  Customer Centric
                </Typography>
                <Typography variant="body1" className={classes.font}>
                  Strive to give each customer a positive experience.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} className={classes.value}>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.headerTextSmall}
                >
                  Hygiene
                </Typography>
                <Typography variant="body1" className={classes.font}>
                  Ensure that every of our production process and staff meet the
                  highest standards of hygiene.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} className={classes.value}>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.headerTextSmall}
                >
                  Integrity
                </Typography>
                <Typography variant="body1" className={classes.font}>
                  Honesty and uprightness in our dealings with customers,
                  suppliers and employees.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} className={classes.value}>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.headerTextSmall}
                >
                  Education
                </Typography>
                <Typography variant="body1" className={classes.font}>
                  Constantly educate the public on the impact of food choices on
                  their health and encourage healthier alternatives.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} className={classes.value}>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.headerTextSmall}
                >
                  Corporate Values
                </Typography>
                <Typography variant="body1" className={classes.font}>
                  Teamwork, empathy, solidarity, honesty, openness,
                  self-responsibility and social-responsibility.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} className={classes.value}>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.headerTextSmall}
                >
                  Excellence
                </Typography>
                <Typography variant="body1" className={classes.font}>
                  We are committed to delivering the best healthy alternatives
                  and compromise-free products that we give to our own children
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} className={classes.value}>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.headerTextSmall}
                >
                  Creativity
                </Typography>
                <Typography variant="body1" className={classes.font}>
                  Innovate, develop and adapt to change drivers.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Grid item className={classes.item6}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.headerText}
          >
            About dates fruits
          </Typography>
          <Typography variant="body1" component="p" className={classes.font}>
            Dates are fruits of the dates palm tree, they are naturally sweet
            and referred to as nature’s candy. Apart from the delicious flavour,
            they are a massive powerhouse of vitamins, minerals, amino acids and
            healthy fibre. The fruits from the Dates Palm tree also have strong
            antioxidant, antiviral, anti-infective and anticancer properties.
          </Typography>
        </Grid>
        {/* ROW 2 */}
        <Grid item container className={classes.item2}>
          <Grid item xs={12} md={6}>
            <Box className={classes.box}>
              <Typography variant="h4" className={classes.subhead}>
                Benefits of our Product
              </Typography>

              <Box>
                <ul>
                  <li>Blood Pressure regulation</li>
                  <li>Great for heart</li>
                  <li>Relieves constipation</li>
                  <li>Great for eye health</li>
                  <li>Great for babies and children</li>
                  <li>Rich in antioxidants and electrolytes</li>
                  <li>
                    Prevents cancer and ease long term labour in pregnant women
                  </li>
                  <li>Diabetes control</li>
                  <li>Increases sexual stamina</li>
                  <li>Treatment of hangover</li>
                  <li>Great for pregnant women and foetus development</li>
                  <li>Reduces inflammation</li>
                  <li>Contains anti-ageing properties</li>
                </ul>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} className={classes.imgContainer}>
            <img
              src="./images/bag-of-dates-2.png"
              alt="bag of dates"
              className={classes.datesImg}
            />
          </Grid>
        </Grid>

        {/* ROW 4 */}
        <Grid item container direction="column" className={classes.item4}>
          <Grid item>
            <Typography variant="h4" className={classes.subhead}>
              Our Products in Numbers
            </Typography>
          </Grid>
          <Grid item container justifyContent="space-evenly">
            <Grid item xs={12} md={3} className={classes.value}>
              <Typography variant="h4" component="h3">
                1000
              </Typography>
              <Typography variant="h6" component="p">
                Products Supplied
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={classes.value}>
              <Typography variant="h4" component="h3">
                97
              </Typography>
              <Typography variant="h6" component="p">
                Distributors
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={classes.value}>
              <Typography variant="h4" component="h3">
                100%
              </Typography>
              <Typography variant="h6" component="p">
                Satisfied Customers
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={classes.value}>
              <Typography variant="h4" component="h3">
                2
              </Typography>
              <Typography variant="h6" component="p">
                States
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* ROW 5 */}
        <Grid item container className={classes.item5}>
          <Grid item xs={6} md={3} className={classes.value}>
            <img
              src="./images/next.png"
              alt="next cash and carry"
              className={classes.clientImg}
            />
          </Grid>
          <Grid item xs={6} md={3} className={classes.value}>
            <img
              src="./images/tonia.png"
              alt="tonia pharmacy"
              className={classes.clientImg}
            />
          </Grid>
          <Grid item xs={6} md={3} className={classes.value}>
            <img
              src="./images/pyramid.png"
              alt="pyramid pharmacy"
              className={classes.clientImg}
            />
          </Grid>
          <Grid item xs={6} md={3} className={classes.value}>
            <img
              src="./images/mcray.png"
              alt="mcray supermarket"
              className={classes.clientImg}
            />
          </Grid>
          <Grid item xs={6} md={3} className={classes.value}>
            <img
              src="./images/bakan-gizo.png"
              alt="bakan gizo"
              className={classes.clientImg}
            />
          </Grid>
          <Grid item xs={6} md={3} className={classes.value}>
            <img
              src="./images/dunes.png"
              alt="dunes center"
              className={classes.clientImg}
            />
          </Grid>
          <Grid item xs={6} md={3} className={classes.value}>
            <img
              src="./images/maple.png"
              alt="maple"
              className={classes.clientImg}
            />
          </Grid>
          <Grid item xs={6} md={3} className={classes.value}>
            <img
              src="./images/tefcon.png"
              alt="tefcon"
              className={classes.clientImg}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUs;
