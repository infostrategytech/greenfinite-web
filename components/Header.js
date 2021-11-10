import React from "react";
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
} from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { ShoppingCart } from "@material-ui/icons/";
import { makeStyles } from "@material-ui/core/styles";
import DrawerComponent from "./Drawer";
// import classes from "./styles/Home.module.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FFF1DA",
    color: "#000",
    width: "100vw",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& .MuiIconButton-root": {
      padding: 0,
      paddingRight: "8px",
    },
    [theme.breakpoints.down("md")]: {
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
    padding: "1.5em 0",
  },
  logo: {
    maxWidth: "100%",
    height: "50px",
    width: "150px",
  },
  links: {
    fontFamily: "Poppins",
    fontWeight: "300",
    textDecoration: "none",
    color: "#000",
    fontSize: "16px",
    cursor: "pointer",
  },
  account: {
    border: "1px solid #646464",
    borderRadius: "25px",
    padding: "8px 15px",
  },
}));

function Header() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const closehandler = () => {
    setOpenDrawer(false);
  };

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
            <Grid item sm={3}>
              <Typography variant="h4" className={classes.logo}>
                <img
                  src="./images/Logo.png"
                  alt="Greenfinite logo"
                  className={classes.logo}
                />
              </Typography>
            </Grid>
            <Grid item sm={7}>
              <div className={classes.navlinks}>
                {isMobile ? (
                  <DrawerComponent
                    openDrawer={openDrawer}
                    close={closehandler}
                  />
                ) : (
                  <>
                    <Typography variant="body1" className={classes.links}>
                      Home
                    </Typography>
                    <Typography variant="body1" className={classes.links}>
                      Shop
                    </Typography>
                    <Typography variant="body1" className={classes.links}>
                      Distributors
                    </Typography>
                    <Typography variant="body1" className={classes.links}>
                      About us
                    </Typography>
                    <Typography variant="body1" className={classes.links}>
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
                    </Typography>
                    <Typography variant="body1" className={classes.links}>
                      <IconButton>
                        <Badge badgeContent={3} color="secondary">
                          <ShoppingCart />
                        </Badge>
                      </IconButton>{" "}
                      Cart
                    </Typography>
                  </>
                )}
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
