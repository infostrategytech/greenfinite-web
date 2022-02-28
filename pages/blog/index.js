import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BlogItem from "../../components/BlogItem";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
    background: "#ffff",
  },
  wrapper: {
    width: "80%",
    margin: "2em 0 5em 0",
    [theme.breakpoints.down("md")]: {
      margin: "1em 0 3em 0",
    },
  },
  blogBanner: {
    // display: 'flex',
    // justifyContent: 'center',
    background: "#C4C4C4",
    marginTop: "5rem",
    marginBottom: "4rem",
    padding: "10rem 0 6rem 16rem",
  },
  bannerTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "60px",
    letterSpacing: "0.01em",
    color: "#000000",
  },
  bannerText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "27px",
    letterSpacing: "0.01em",
    color: "#000000",
    width: "50%",
    marginBottom: "2rem",
  },
  readArticle: {
    background: "#3D8754",
    borderRadius: "50px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    textTransform: "none",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "27px",
    letterSpacing: "0.01em",
    color: "#FFFFFF",
    padding: "14px 32px",
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
  blogContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    margin: "1em 0",
    rowGap: "3rem",
    justifyItems: "center",
  },
}));

function Blog() {
  const classes = useStyles();
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Grid className={classes.blogBanner}>
        <Typography className={classes.bannerTitle}>
          Name of Blog Post
        </Typography>
        <Typography className={classes.bannerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          risus dui nisi eu hac sagittis, enim. Sit congue risus mauris quam
          phasellus urna, viverra. Cras auctor id habitant arcu.{" "}
        </Typography>
        <Button className={classes.readArticle}>Read Article</Button>
      </Grid>
      <Box className={classes.box}>
        <Grid container className={classes.wrapper}>
          <BlogItem posts={posts} />
        </Grid>
      </Box>
    </>
  );
}

export default Blog;
