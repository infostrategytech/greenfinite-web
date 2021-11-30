import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Grid,
  Button,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/products";
import router from "next/router";
import Link from "next/link";
import { addToCart } from "../../redux/actions/cart";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    padding:'1em'
  },
  cards: {
    background:
      "linear-gradient(0deg, rgba(255,255,255,0.9), rgba(255,255,255,0.9))",
    padding: "0 4em",
    boxShadow: "0px -1px 29px 8px rgba(210,210,210,0.15)",
    [theme.breakpoints.down("md")]: {
      padding: "1em",
    },
  },
  fruitContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "4em",
    },
  },
  logo1: {
    maxWidth: "100%",
    // height: "240px",
    // width: "240px",
    objectFit: "center",

    [theme.breakpoints.down("md")]: {
      height: "140px",
      width: "140px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "140px",
      width: "220px",
    },
  },
  title1: {
    fontFamily: "Poppins",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "36px",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "20px",
    },
  },

  content1: {
    fontFamily: "Poppins",
    fontSize: "15px",
    fontWeight: "300",
    lineHeight: "22px",
    marginTop: ".2em",
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "18px",
      textAlign: "justify",
    },
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
    "&:hover": { color: "#3D8754" },
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
  progress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
  },
}));

const Products = () => {
  const { products } = useSelector((state) => state.products);

  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    if (products.length > 0) {
      setLoading(false);
    } else {
      dispatch(getAllProduct(() => setLoading(false)));
    }
  }, []);
  const addCart = (id) => {
    dispatch(addToCart(id));
  };
  return (
    // <Card elevation={0} className={classes.cards}>
    //   <Grid container className={classes.wrapper}>
    //     {loading ? (
    //       <div className={classes.progress}>
    //         {" "}
    //         <CircularProgress />
    //       </div>
    //     ) : (
    //       <>
    //         {products &&
    //           products.length &&
    //           products.map((product) => (
    //             <Grid item xs={12} md={6} className={classes.fruitContainer}>
    //               <Box>
    //                 <Link href={`/shop/${product.product_id}`}>
    //                   <img
    //                     src={product.image_url}
    //                     alt="powdered fruits"
    //                     className={classes.logo1}
    //                   />
    //                 </Link>
    //               </Box>
    //               <Box>
    //                 <Typography variant="h3" className={classes.title1}>
    //                   {product.name}
    //                 </Typography>
    //                 <Typography variant="body1" className={classes.content1}>
    //                   {product.description}
    //                   <small className={classes.grams}>
    //                     {product.net_weight}g{" "}
    //                   </small>
    //                 </Typography>
    //                 <Button
    //                   onClick={() => addCart(product.product_id)}
    //                   className={classes.button1}
    //                 >
    //                   Buy Now
    //                 </Button>
    //               </Box>
    //             </Grid>
    //           ))}
    //       </>
    //     )}
    //   </Grid>
    // </Card>
    <Card elevation={0} className={classes.cards}>
      <Grid container className={classes.wrapper}>
        {/* Dates powder */}
        <Grid item xs={12} md={6} className={classes.fruitContainer}>
          <Box>
            <Link href={`/shop`}>
              <img
                src={`./images/dates-powder.jpeg`}
                alt="powdered fruits"
                className={classes.logo1}
              />
            </Link>
          </Box>
          <Box>
            <Typography variant="h3" className={classes.title1}>
              Dates Powder
            </Typography>
            <Typography variant="body1" className={classes.content1}>
              Our Dates Powder is made from the flesh of Dates Fruit which have
              been dried and ground into fine powder.
              <small className={classes.grams}>200g and 500g </small>
            </Typography>

            <Link href={`/shop`}>
              <Button className={classes.button1}>Buy Now</Button>
            </Link>
          </Box>
        </Grid>
        {/* Dates Syrup */}
        <Grid item xs={12} md={6} className={classes.fruitContainer}>
          <Box>
            <Link href={`/shop`}>
              <img
                src={`./images/dates-syrup.jpeg`}
                alt="powdered fruits"
                className={classes.logo1}
              />
            </Link>
          </Box>
          <Box>
            <Typography variant="h3" className={classes.title1}>
              Dates Syrup
            </Typography>
            <Typography variant="body1" className={classes.content1}>
              Our Dates Syrup is made from the flesh of the Dates Palm Fruit and
              treated water.
              <small className={classes.grams}>350ml </small>
            </Typography>

            <Link href={`/shop`}>
              <Button className={classes.button1}>Buy Now</Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Products;
// <Grid container justifyContent="space-between">
// <Grid
//   item
//   container
//   xs={12}
//   sm={12}
//   md={6}
//   spacing={4}
//   className={classes.fruitContainer}
// >
//   <Grid item>
//     <img
//       src="./images/fruit.png"
//       alt="Powdered nuts"
//       className={classes.logo1}
//     />
//   </Grid>
//   <Grid item md>
//     <Typography variant="h3" className={classes.title1}>
//       Date Powder
//     </Typography>
//     <Typography variant="body1" className={classes.content1}>
//       flesh of Dates Fruit which have been dried and ground into fine
//       powder.
//       <small className={classes.grams}>200g and 500g </small>
//     </Typography>
//     <Button variat="contained" className={classes.button1}>
//       Buy Now
//     </Button>
//   </Grid>
// </Grid>
// <Grid
//   item
//   container
//   xs={12}
//   sm={12}
//   md={6}
//   spacing={4}
//   className={classes.fruitContainer}
// >
//   <Grid item>
//     <img
//       src="./images/fruit.png"
//       alt="Powdered nuts"
//       className={classes.logo1}
//     />
//   </Grid>
//   <Grid item md>
//     <Typography variant="h3" className={classes.title1}>
//       Date Syrup
//     </Typography>
//     <Typography variant="body1" className={classes.content1}>
//       flesh of Dates Fruit which have been dried and ground into fine
//       powder.
//       <small className={classes.grams}>200g and 5000g</small>
//     </Typography>
//     <Button variat="contained" className={classes.button1}>
//       Buy Now
//     </Button>
//   </Grid>
// </Grid>
// </Grid>
