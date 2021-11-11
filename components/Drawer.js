import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Badge,
  Box,
} from "@material-ui/core";
import router from "next/router";
import { ShoppingCart, PersonOutline } from "@material-ui/icons/";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, Close } from "@material-ui/icons";

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
  const classes = useStyles();

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
                  src="./images/Logo.png"
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
            onClick={() => {
              router.push("/distributors");
              setOpenDrawer(false);
            }}
            className={classes.listItems}
          >
            <ListItemText>
              <Typography variant="body1" className={classes.links}>
                Distributors
              </Typography>{" "}
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
          <ListItem
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
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            className={classes.listItems}
          >
            <ListItemText>
              <Typography className={classes.links}>
                {" "}
                <IconButton className={` ${classes.account}`}>
                  <Badge badgeContent={3} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>{" "}
                Cart
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
