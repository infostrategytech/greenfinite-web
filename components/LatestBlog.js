import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import BlogItem from "./BlogItem";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
  wrapper: {
    width: "80%",
    margin: "2em 0 5em 0",
    [theme.breakpoints.down("md")]: {
      margin: "1em 0 3em 0",
    },
  },
  blogSection: {},
  blogSectionTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "35px",
    lineHeight: "45px",
    color: "#265C37",
    marginBottom: "2rem",
  },
}));

function LatestBlog() {
  const classes = useStyles();
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Box className={classes.box}>
        <Grid container className={classes.wrapper}>
          <Grid item md={6}>
            <Typography variant="h2" className={classes.blogSectionTitle}>
              Recent Blog Posts
            </Typography>
          </Grid>
          {/* <Grid item container className={classes.blogContainer}> */}

          <BlogItem posts={posts?.slice(0,3)} />
          {/* </Grid> */}
        </Grid>
      </Box>
    </>
  );
}

export default LatestBlog;
