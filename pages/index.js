import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";
import styles from "../styles/Home.module.css";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: "#FFF1DA",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: ".5em",
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
}));
export default function Home() {
  const classes = useStyles();
  return (
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
  );
}
