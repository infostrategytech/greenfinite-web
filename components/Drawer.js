import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  MenuItem,
  Badge,
  Button,
  ListItemIcon,
  Box,
} from "@material-ui/core";
import Link from "next/link";
import router from "next/router";
import { ShoppingCart, PersonOutline } from "@material-ui/icons/";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, Close } from "@material-ui/icons";
import { useSelector } from "react-redux";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FFF1DA",
    color: "#000",
    width: "100vw",
  },
  container: {
    // padding: "0 2em ",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .MuiIconButton-root": {
      padding: "30em",
      paddingRight: "0",
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
    justifyContent: "center",
  },
  logo: {
    maxWidth: "100%",
    height: "60px",
    // width: "120px",
  },
  links: {
    fontFamily: "Poppins",
    fontWeight: "300",
    textDecoration: "none",
    color: "#000",
    fontSize: "16px",
    cursor: "pointer",
    transition: "200ms ease-in-out",
    "&:hover": {
      fontWeight: "600",
    },
  },
  account: {
    marginRight: "10px",
  },
  listItems: {
    padding: "1em 2em",
  },
  nested: {
    paddingLeft: theme.spacing(7),
  },
  menuText: {
    "& .MuiTypography-body1": {
      fontSize: "14px",
    },
  },
  lists: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& .MuiIconButton-root": {
      padding: "0",
    },
  },
}));

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [Dropdw, setDropdw] = React.useState(false);
  const { cart } = useSelector((state) => state.products);

  const [openHome, setOpenHome] = useState(false);

  const handleClickHome = () => {
    setOpenHome(!openHome);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const distributorsItem = [
    {
      text: "Become A Distributor",
      path: "/distributors",
    },
    {
      text: "Buy From State Distributors",
      path: "/state-distributors",
    },
  ];

  const [cartCount, setCartCount] = useState(0);
  const classes = useStyles();
  // const { cart } = useSelector((state) => state.products);
  useEffect(() => {
    let cartCount = 0;
    cart.forEach((item) => {
      cartCount += item.qty;
    });
    setCartCount(cartCount);
  }, [cart, cartCount]);

  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className={classes.drawer}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List style={{ margin: "0", padding: "0" }} className={classes.lists}>
          <Box>
            <ListItemText>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginRight: "10px",
                }}
                onClick={() => setOpenDrawer(false)}
              >
                <IconButton>
                  <Close />
                </IconButton>
              </div>
              <Typography variant="h4" className={classes.logo}>
                <img
                  src="/images/Logo.png"
                  alt="Greenfinite logo"
                  className={classes.logo}
                />
              </Typography>
            </ListItemText>
          </Box>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              router.push("/");
            }}
            className={classes.listItems}
          >
            <ListItemText>
              <Typography variant="body1" className={classes.links}>
                Home
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              router.push("/about-us");
              setOpenDrawer(false);
            }}
            className={classes.listItems}
          >
            <ListItemText>
              <Typography variant="body1" className={classes.links}>
                About us
              </Typography>{" "}
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              router.push("/shop");
              setOpenDrawer(false);
            }}
            className={classes.listItems}
          >
            <ListItemText>
              <Typography variant="body1" className={classes.links}>
                Shop
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => handleClickHome()}
            className={classes.listItems}
          >
            <ListItemText>
              <Typography variant="body1" className={classes.links}>
                Distributors
              </Typography>
            </ListItemText>
            {openHome ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={openHome} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {distributorsItem.map((item, index) => (
                <ListItem
                  key={index}
                  button
                  className={classes.nested}
                  onClick={() => setOpenDrawer(false)}
                >
                  <Link href={item.path}>
                    <ListItemText
                      primary={item.text}
                      className={classes.menuText}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Collapse>

          <ListItem
            onClick={() => {
              router.push("/contact-us");
              setOpenDrawer(false);
            }}
            className={classes.listItems}
          >
            <ListItemText>
              <Typography variant="body1" className={`${classes.links} `}>
                Contact us
              </Typography>{" "}
            </ListItemText>
          </ListItem>
          {/* <ListItem
            onClick={() => setOpenDrawer(false)}
            className={classes.listItems}
          >
            <ListItemText>
              <Typography
                variant="body1"
                className={`${classes.links} ${classes.account}`}
              >
                <IconButton className={` ${classes.account}`}>
                  <PersonOutline />
                </IconButton>
                Account
              </Typography>{" "}
            </ListItemText>
          </ListItem> */}
          {/* <ListItem
            onClick={() => setOpenDrawer(false)}
            className={classes.listItems}
          >
            <ListItemText onClick={() => router.push("/cart")}>
              <Typography className={classes.links}>
                {" "}
                <IconButton className={` ${classes.account}`}>
                  <Badge badgeContent={cartCount} color="primary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>{" "}
                Cart
              </Typography>
            </ListItemText>
          </ListItem> */}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
