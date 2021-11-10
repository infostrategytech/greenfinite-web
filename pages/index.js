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
import styles from "../styles/Home.module.css";
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
    lineHeight: "50px",
  },
  content: {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "300",
    lineHeight: "30px",
    marginTop: ".8em",
    marginBottom: "1.5em",
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
  },

  products: {
    width: "80%",
    position: "relative",
    top: "-120px",
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.main}>
        <Box className={classes.wrapper}>
          <Grid container className={classes.container}>
            <Grid item xs={12} sm={12} md={5}>
              <Box>
                <Typography variant="h3" className={classes.title}>
                  Healthy sweateners <br /> made from Date fruits
                </Typography>
                <Typography variant="body1" className={classes.content}>
                  Your favourite alternative to refined sugar made with no
                  preservatives and additives.{" "}
                </Typography>
                <Button variat="contained" className={classes.button}>
                  Buy Now
                </Button>
              </Box>
            </Grid>
            <Grid item item xs={12} sm={12} md={5}>
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
