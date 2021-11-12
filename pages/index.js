import {
  Box,
  Button,
  Grid,
  Typography,
  makeStyles,
  Card,
} from "@material-ui/core";
import Distributor from "../components/Distributor";
import Footer from "../components/Footer";
import HowToUse from "../components/HowToUse";
import ProductBenefits from "../components/products/ProductBenefits";
import Products from "../components/products/Products";
import ProductSection from "../components/products/ProductSection";

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
                  Healthy sweateners <br /> made from Date fruits
                </Typography>
                <Typography variant="body1" className={classes.content}>
                  Your favourite alternative to refined sugar <br /> made with
                  no preservatives and additives.{" "}
                </Typography>
                <Button variat="contained" className={classes.button}>
                  Buy Now
                </Button>
              </Box>
            </Grid>
            <Grid item item xs={12} sm={12} md={5} className={classes.order1}>
              <img
                src="./images/bowl.png"
                alt="Powdered nuts"
                className={classes.logo}
              />
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.products}>
          <Products />
        </Box>
        <Box>
          <ProductBenefits />
          <ProductSection />
          <HowToUse />
          <Distributor />
        </Box>
      </div>
    </>
  );
}
