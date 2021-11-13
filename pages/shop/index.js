import React from "react";
import Link from "next/link";
import {
  Box,
  Divider,
  Grid,
  Container,
  Typography,
  Button,
  MenuItem,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { GET_ID } from "../../redux/actions/Contants";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    maxWidth: "100%",
    // height: "240px",
    // width: "280px",
    // objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      height: "140px",
      width: "140px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "140px",
      width: "220px",
    },
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "30px",
    fontWeight: "600",
    lineHeight: "36px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
      lineHeight: "20px",
    },
  },

  content: {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: "28px",
    marginTop: ".2em",
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "18px",
    },
  },
  button: {
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
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  container: {
    margin: "2em 0 5em 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiListItem-root ": {
      padding: 0,
      paddingBottom: "10px",
    },
  },
}));
function Shop() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { products } = useSelector((state) => state.products);
  const getId = (id) => {
    dispatch({
      type: GET_ID,
      payload: id,
    });
  };

  return (
    <Container style={{ marginTop: 10 + "rem" }}>
      {/* <Grid style={{ textAlign: 'center' }}></Grid> */}
      <Box style={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "Poppins",
            fontSize: 36,
            fontWeight: 600,
            lineHeight: 54 + "px",
          }}
        >
          Shop
        </h1>
        <p
          style={{
            fontFamily: "Avenir",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 30 + "px",
          }}
        >
          Our products contain no preservatives or additives and have been
          certified by the National <br /> Agency for Food and Drug
          Administration and Control (NAFDAC)
        </p>
      </Box>

      <Grid container justifyContent="center" className={classes.container}>
        {products &&
          products.length &&
          products.map((product) => (
            <Grid item container xs={12} md={5}>
              <Grid item className={classes.item}>
                <Box>
                  <img
                    src={product.image_url}
                    alt=""
                    className={classes.logo}
                  />
                </Box>
                <Box>
                  <Typography variant="h4">
                    <Link href="/shop/new">
                      <MenuItem
                        className={classes.title}
                        onClick={() => getId(product.product_id)}
                      >
                        {product.name} ({product.net_weight}g)
                      </MenuItem>
                    </Link>
                  </Typography>
                  <Typography variant="h4" className={classes.content}>
                    N{product.amount}
                  </Typography>
                  <Button variat="contained" className={classes.button}>
                    Buy Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Shop;
