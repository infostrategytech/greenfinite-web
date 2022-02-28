import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    display: "grid",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
      rowGap: "3rem",
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      rowGap: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      // justifyItems: "none",
      rowGap: "1rem",
    },
    margin: "1em 0",
    justifyItems: "center",
  },
  blogItem: {
    width: "387px",
    [theme.breakpoints.down("sm")]: {
      width: "330px",
    },
  },
  blogDate: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "-0.02em",
    color: "#000000",
    marginTop: "2rem",
  },
  blogTitle: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "21px",
    lineHeight: "29px",
    letterSpacing: "-0.02em",
    color: "#265C37",
  },
  blogPost: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "24px",
    color: "rgba(0, 0, 0, 0.6)",
    marginTop: "1rem",
  },
  readMore: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "15px",
    lineHeight: "20px",
    letterSpacing: "-0.02em",
    color: "#000000",
    textDecoration: "none",
  },
}));

function BlogItem({ posts }) {
  const classes = useStyles();
  return (
    <>
      <Grid item container className={classes.blogContainer}>
        {posts?.map((post, index) => (
          <Box key={index} className={classes.blogItem}>
            <img src="/images/blog-card.png" style={{ width: '100%' }} />
            <Typography className={classes.blogDate}>May 23, 2021</Typography>
            <Typography className={classes.blogTitle}>
              Blog Post Title
            </Typography>
            <Typography className={classes.blogPost}>
              Lorem ipsum dolor sit amet, consectetur et vel tristique ulla
              platea praesent morbi eros consectetur dolor sit...
            </Typography>

            <Box style={{ marginTop: "1rem" }}>
              <a
                className={classes.readMore}
                href="/blog/1"
              >{`READ MORE >>`}</a>
            </Box>
          </Box>
        ))}
      </Grid>
    </>
  );
}

export default BlogItem;
