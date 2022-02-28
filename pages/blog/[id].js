import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "12rem",
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
  blogTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "50px",
    lineHeight: "75px",
    letterSpacing: "0.01em",
  },
  categorySection: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "center",
  },
  blogCategory: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "16px",
    lineHeight: "22px",
    textAlign: "center",
    letterSpacing: "0.2em",
    color: "rgba(0, 0, 0, 0.95)",
    paddingRight: "0.5rem",
  },
  blogDate: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "13px",
    lineHeight: "28px",
    textAlign: "center",
    letterSpacing: "0.2em",
    color: "rgba(0, 0, 0, 0.95)",
    paddingLeft: "0.5rem",
  },
  lineRule: {
    margin: "2rem 0",
  },
  blogText: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "30px",
    color: "#000000",
    marginTop: "1rem",
  },
  socialShareContainer: {
    display: "flex",
    justifyContent: "right",
  },
  shareText: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "30px",
    color: "#000000",
  },
  socialImageContainer: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
  },
  socialImage: {
    width: "1rem",
    height: "1rem",
  },
}));

function BlogDetail() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Grid container className={classes.wrapper}>
          <Grid xs={12} lg={12}>
            <Typography className={classes.blogTitle}>
              Name of Blog Post
            </Typography>
            <Grid className={classes.categorySection}>
              <Typography className={classes.blogCategory}>
                CATEGORY NAME
              </Typography>{" "}
              __
              <Typography className={classes.blogDate}>May 23, 2021</Typography>
            </Grid>
            <hr className={classes.lineRule} />

            <Box>
              <img width="100%" src="/images/post-detail-card.png" />
            </Box>

            <Typography className={classes.blogText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              enim at nunc, amet. Dolor magna quam nibh tristique curabitur sit
              in. Faucibus dui, posuere cursus cras sagittis, adipiscing dolor
              faucibus lacus. Ligula vitae, aliquet at sit. Sed nunc felis quam
              sit egestas. Sed arcu mollis massa sed ut sit sed et ac. Viverra
              non fermentum, est gravida aliquet. Nisi, non, ut mattis convallis
              mi eget enim feugiat. Fermentum felis condimentum diam, vel nisl
              egestas vel. In pretium semper sed tempus volutpat iaculis odio
              in. Sit pellentesque non integer urna.
            </Typography>

            <Typography className={classes.blogText}>
              Orci, turpis et mi bibendum nisi, quisque nec lorem. Sem
              condimentum maecenas sodales non sed dignissim. Elementum sed
              dolor consectetur platea gravida. Sagittis a viverra aliquet
              volutpat, ac pharetra. Diam convallis velit vulputate auctor id
              nibh faucibus eu. Aenean at nisl in orci, ultricies libero tortor
              sed. Risus id tristique amet, sed. Mi lectus aliquet id at.
              Placerat nulla lobortis dignissim leo dui. Sed massa, ornare
              vestibulum in ipsum. Eu sapien, libero, quis dignissim. Donec mi
              in posuere vivamus ultrices sit sapien sed maecenas. Vivamus erat
              aliquam senectus donec nulla. Ac suspendisse a nam nunc. Volutpat
              feugiat ridiculus ornare at netus platea.
            </Typography>

            <Typography className={classes.blogText}>
              Adipiscing ut et, imperdiet tortor pharetra lobortis cursus sed
              leo. Aliquet rhoncus mauris egestas mi ut sit dui lacinia. Nisl
              sed mauris, facilisi cursus. Nullam tortor est leo scelerisque
              blandit. Enim posuere amet eget lacus amet. Ut turpis integer eget
              lacinia ullamcorper integer sit facilisis donec. Amet porttitor
              sagittis, eu platea amet vitae, ultrices. Dui vel vitae aliquam
              integer mattis facilisis ultricies neque in. Sapien eu libero
              faucibus nulla nulla proin tristique. Gravida malesuada turpis
              erat eget hac risus, quis. Scelerisque gravida quam in integer nec
              ligula. Diam tristique iaculis sodales eleifend enim justo,
              pellentesque. At tellus quis consectetur quam aliquam gravida
              scelerisque. Purus, aliquam facilisi diam magna malesuada neque.
              Aliquam ac sem diam blandit a. Platea diam tristique at lorem
              etiam mauris sed sem sed. Sit sit ipsum vel arcu, in curabitur sed
              gravida sem.
            </Typography>

            <Typography className={classes.blogText}>
              Rhoncus gravida suspendisse adipiscing diam massa vel dictum
              risus. Sit amet, eu consequat donec. Egestas nulla ullamcorper est
              quam convallis orci lectus neque. Egestas ut morbi et interdum
              phasellus iaculis mi. Lectus cursus porttitor amet tellus
              tincidunt ac donec cursus egestas.
            </Typography>

            <Typography className={classes.blogText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              enim at nunc, amet. Dolor magna quam nibh tristique curabitur sit
              in. Faucibus dui, posuere cursus cras sagittis, adipiscing dolor
              faucibus lacus. Ligula vitae, aliquet at sit. Sed nunc felis quam
              sit egestas. Sed arcu mollis massa sed ut sit sed et ac. Viverra
              non fermentum, est gravida aliquet. Nisi, non, ut mattis convallis
              mi eget enim feugiat. Fermentum felis condimentum diam, vel nisl
              egestas vel. In pretium semper sed tempus volutpat iaculis odio
              in. Sit pellentesque non integer urna.
            </Typography>

            <Typography className={classes.blogText}>
              Orci, turpis et mi bibendum nisi, quisque nec lorem. Sem
              condimentum maecenas sodales non sed dignissim. Elementum sed
              dolor consectetur platea gravida. Sagittis a viverra aliquet
              volutpat, ac pharetra. Diam convallis velit vulputate auctor id
              nibh faucibus eu. Aenean at nisl in orci, ultricies libero tortor
              sed. Risus id tristique amet, sed. Mi lectus aliquet id at.
              Placerat nulla lobortis dignissim leo dui. Sed massa, ornare
              vestibulum in ipsum. Eu sapien, libero, quis dignissim. Donec mi
              in posuere vivamus ultrices sit sapien sed maecenas. Vivamus erat
              aliquam senectus donec nulla. Ac suspendisse a nam nunc. Volutpat
              feugiat ridiculus ornare at netus platea.
            </Typography>

            <hr className={classes.lineRule} />
            <Grid className={classes.socialShareContainer}>
              <Typography className={classes.shareText}>
                Share this on:
              </Typography>
              <Grid className={classes.socialImageContainer}>
                <Box style={{ padding: "0.5rem" }}>
                  <img
                    className={classes.socialImage}
                    src="/images/social/facebook.png"
                  />
                </Box>
                <Box style={{ padding: "0.5rem" }}>
                  <img
                    className={classes.socialImage}
                    src="/images/social/instagram.png"
                  />
                </Box>
                <Box style={{ padding: "0.5rem" }}>
                  <img
                    className={classes.socialImage}
                    src="/images/social/twitter.png"
                  />
                </Box>
                <Box style={{ padding: "0.5rem" }}>
                  <img
                    className={classes.socialImage}
                    src="/images/social/whatsapp.png"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default BlogDetail;
