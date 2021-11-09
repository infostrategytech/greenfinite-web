import React from "react";
import Link from "next/link";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import classes from "./styles/Home.module.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FFF1DA",
    color: "#000",
  },
  headerlinks: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
  },
  navlinks: {
    // marginLeft: theme.spacing(10),
    display: "flex",

    justifyContent: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  links: {
    textDecoration: "none",
    color: "#000",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    cursor: "pointer",
  },
}));

function Header() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const closehandler = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <CssBaseline />
        <Toolbar>
          <div className={classes.headerlinks}>
            <Typography variant="h4" className={classes.logo}>
              Logo
            </Typography>
            <div className={classes.navlinks}>
              {isMobile ? (
                <DrawerComponent openDrawer={openDrawer} close={closehandler} />
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
                    Contact uss
                  </Typography>
                </>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
