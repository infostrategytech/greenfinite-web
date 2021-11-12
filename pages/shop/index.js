import React from "react";
import Link from "next/link";
import { Box, Divider, Grid, Container, Typography } from "@material-ui/core";

function Shop() {
    return (
        <Container style={{ marginTop: 10 + 'rem', marginBottom: 115 + "px" }}>
            <Box style={{ textAlign: "center" }}>
                <Typography style={{ fontFamily: "Poppins", fontSize: 36, fontWeight: 600, lineHeight: 54 + "px", marginBottom: 5 + "px" }}>
                    <span style={{ marginRight: 5 + "px" }}><img src="./images/shopIcon.png" alt="product image" /></span>Shop
                </Typography>

                <Typography component="p" style={{ fontFamily: "Avenir", fontSize: 16, fontWeight: 400, lineHeight: 30 + "px" }}>
                Our products contain no preservatives or additives and have been certified by the National <br /> Agency for Food and Drug Administration and Control (NAFDAC)
                </Typography>
            </Box>

            <Grid container spacing={2} style={{ marginTop: 5 + 'rem' }}>
                <Grid item xs={5}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box>
                                <img src="./images/productShop.png" alt="product image" />
                            </Box>
                        </Grid>
                        <Grid item xs={8} >
                            <Box style={{ marginLeft: 35 + "px", marginTop: 60 + "px" }}>
                                <Typography style={{ fontSize: 24, fontWeight: 600, lineHeight: 35 + 'px', fontFamily: "Poppins", letterSpacing: 0.01 + 'em', marginBottom: 25 + "px" }}>
                                    Dates Powder{" "}
                                    <Typography component="span" style={{ fontSize: 16, fontWeight: 600, lineHeight: 30 + 'px', fontFamily: "Poppins", letterSpacing: 0.01 + 'em' }}>
                                        (500g)
                                    </Typography>
                                </Typography>

                                <Typography style={{ fontSize: 20, fontWeight: 400, lineHeight: 40 + 'px', fontFamily: "Poppins", letterSpacing: 0.01 + 'em', marginBottom: 15 + "px" }}>
                                    N10,000
                                </Typography>

                                <Link href="shop/2" underline="none">
                                    <button href="shop/2" style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: 16, lineHeight: 24 + "px", letterSpacing: 0.01 + "em", backgroundColor: '#3D8754', color: 'white', paddingTop: 15 + 'px', paddingBottom: 15 + 'px', border: "none", paddingLeft: 25 + 'px', paddingRight: 25 + 'px', borderRadius: 50, fontSize: 17 }}>
                                        Add to cart
                                    </button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider orientation="vertical" variant="middle" flexItem />

                <Grid item xs={5}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box>
                                <img src="./images/productShop.png" alt="product image" />
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box style={{ marginLeft: 35 + "px", marginTop: 60 + "px" }}>
                                <Typography style={{ fontSize: 24, fontWeight: 600, lineHeight: 35 + 'px', fontFamily: "Poppins", letterSpacing: 0.01 + 'em', marginBottom: 25 + "px" }}>
                                    Dates Powder{" "}
                                    <Typography component="span" style={{ fontSize: 16, fontWeight: 600, lineHeight: 30 + 'px', fontFamily: "Poppins", letterSpacing: 0.01 + 'em' }}>
                                        (500g)
                                    </Typography>
                                </Typography>

                                <Typography style={{ fontSize: 20, fontWeight: 400, lineHeight: 40 + 'px', fontFamily: "Poppins", letterSpacing: 0.01 + 'em', marginBottom: 15 + "px" }}>
                                    N10,000
                                </Typography>

                                <Link href="shop/2" underline="none">
                                    <button href="shop/2" style={{ fontFamily: "Poppins", fontWeight: 500, fontSize: 16, lineHeight: 24 + "px", letterSpacing: 0.01 + "em", backgroundColor: '#3D8754', color: 'white', paddingTop: 15 + 'px', paddingBottom: 15 + 'px', border: "none", paddingLeft: 25 + 'px', paddingRight: 25 + 'px', borderRadius: 50, fontSize: 17 }}>
                                        Add to cart
                                    </button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Shop;
