import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  IconButton,
  Badge,
  MenuItem,
  ListItem,
} from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { ShoppingCart } from "@material-ui/icons/";
import router from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import DrawerComponent from "./Drawer";
import { useSelector } from "react-redux";
// import classes from "./styles/Home.module.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    color: "#000",
    width: "100vw",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    // margin: "0 3em",

    "& .MuiIconButton-root": {
      padding: 0,
      paddingRight: "8px",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  headerlinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
  },
  navlinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1em 0",
  },
  logo: {
    maxWidth: "100%",
    height: "50px",
    width: "150px",
  },
  links: {
    fontFamily: "Poppins",
    fontWeight: "400",
    textDecoration: "none",
    color: "#000",
    fontSize: "16px",
    cursor: "pointer",
    transition: "200ms ease-in-out",
    "&:hover": {
      fontWeight: "600",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  account: {
    border: "1px solid #646464",
    borderRadius: "25px",
    padding: "6px 15px",
  },
}));

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const { cart } = useSelector((state) => state.products);
  // console.log(cart);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const closehandler = () => {
    setOpenDrawer(false);
  };
  const cartLength = cart.length;
  // useEffect(() => {
  //   let cartCount = 0;
  //   cart.forEach((item) => {
  //     console.log("header", item);
  //     cartCount += item.qty;
  //     setCartCount(cartCount);
  //   });
  // }, [cart, cartCount]);

  return (
    <>
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <CssBaseline />
        <Toolbar>
          <Grid
            container
            justifyContent={isMobile ? "space-between" : "center"}
            className={classes.container}
          >
            <Grid item sm={2}>
              <Link href="/" className={classes.logo}>
                <img
                  src="/images/Logo.png"
                  alt=" logo"
                  className={classes.logo}
                />
              </Link>
            </Grid>
            {isMobile ? (
              <DrawerComponent openDrawer={openDrawer} close={closehandler} />
            ) : (
              <Grid item sm={7}>
                <div className={classes.navlinks}>
                  <>
                    <Typography
                      variant="body1"
                      className={classes.links}
                      variant="body1"
                    >
                      <Link
                        href="/"
                        // style={{ textDecoration: "none" }}
                      >
                        <ListItem>Home</ListItem>
                      </Link>
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.links}
                      variant="body1"
                    >
                      <Link
                        href="/shop"
                        // style={{ textDecoration: "none" }}
                      >
                        <ListItem> Shop</ListItem>
                      </Link>
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.links}
                      variant="body1"
                    >
                      <Link
                        href="/distributors"
                        // style={{ textDecoration: "none" }}
                      >
                        <ListItem>Distributors</ListItem>
                      </Link>
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.links}
                      variant="body1"
                    >
                      <Link
                        href="/contact-us"
                        // style={{ textDecoration: "none" }}
                      >
                        <ListItem>Contact us</ListItem>
                      </Link>
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.links}
                      variant="body1"
                    >
                      <Link
                        className={`${classes.links} ${classes.account}`}
                        href="#"
                        // style={{ textDecoration: "none" }}
                      >
                        <ListItem>Account</ListItem>
                      </Link>
                    </Typography>
                    {/* <Typography
                      onClick={() => router.push("/contact-us")}
                      variant="body1"
                      className={classes.links}
                    >
                      Contact us
                    </Typography>
                    <Typography
                      variant="body1"
                      className={`${classes.links} ${classes.account}`}
                    >
                      <IconButton>
                        <PersonOutlineIcon />
                      </IconButton>
                      Account
                    </Typography> */}
                    <Typography
                      variant="body1"
                      className={`${classes.links} ${classes.account}`}
                      variant="body1"
                    >
                      <Link
                        href="#"
                        // style={{ textDecoration: "none" }}
                      >
                        <ListItem>Account</ListItem>
                      </Link>
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.links}
                      // onClick={() => router.push("/cart")}
                      variant="body1"
                      className={classes.links}
                    >
                      <IconButton>
                        <Badge badgeContent={`${cartLength}`} color="primary">
                          <ShoppingCart />
                        </Badge>
                      </IconButton>{" "}
                      <Link
                        className={classes.links}
                        href="/cart"
                        style={{ textDecoration: "none" }}
                      >
                        <ListItem style={{ display: "inline" }}>Cart</ListItem>
                      </Link>
                    </Typography>
                  </>
                </div>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
