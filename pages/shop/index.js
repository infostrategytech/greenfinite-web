import React from "react";
import Link from "next/link";
import { Box, Divider, Grid, Container } from "@material-ui/core";

function Shop() {
  return (
    <Container style={{ marginTop: 10 + "rem" }}>
      {/* <Grid style={{ textAlign: 'center' }}></Grid> */}
      <Box style={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "Poppins",
            fontSize: 36,
            fontWeight: 600,
            lineHeight: 54 + "px",
          }}
        >
          Shop
        </h1>
        <p
          style={{
            fontFamily: "Avenir",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 30 + "px",
          }}
        >
          Our products contain no preservatives or additives and have been
          certified by the National <br /> Agency for Food and Drug
          Administration and Control (NAFDAC)
        </p>
      </Box>

      <Container style={{ marginTop: 5 + "rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box>
                  <img src="" alt="product image" />
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Container>
                  <Box>
                    <h1
                      style={{
                        fontSize: 24,
                        fontWeight: 600,
                        lineHeight: 35 + "px",
                        fontFamily: "Poppins",
                        letterSpacing: 0.01 + "em",
                      }}
                    >
                      Dates Powdee{" "}
                      <span
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          lineHeight: 30 + "px",
                          fontFamily: "Poppins",
                          letterSpacing: 0.01 + "em",
                        }}
                      >
                        (500g)
                      </span>
                    </h1>
                  </Box>

                  <Box>
                    <h3
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        lineHeight: 40 + "px",
                        fontFamily: "Poppins",
                        letterSpacing: 0.01 + "em",
                      }}
                    >
                      N10,000
                    </h3>
                  </Box>
                </Container>

                <Box>
                  <Link href="shop/2" underline="none">
                    <button
                      href="shop/2"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: 24 + "px",
                        letterSpacing: 0.01 + "em",
                        backgroundColor: "#3D8754",
                        color: "white",
                        paddingTop: 15 + "px",
                        paddingBottom: 15 + "px",
                        border: "none",
                        paddingLeft: 25 + "px",
                        paddingRight: 25 + "px",
                        borderRadius: 50,
                        fontSize: 17,
                      }}
                    >
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
                  <img src="" alt="product image" />
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Container>
                  <Box>
                    <h1
                      style={{
                        fontSize: 24,
                        fontWeight: 600,
                        lineHeight: 35 + "px",
                        fontFamily: "Poppins",
                        letterSpacing: 0.01 + "em",
                      }}
                    >
                      Dates Powder{" "}
                      <span
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          lineHeight: 30 + "px",
                          fontFamily: "Poppins",
                          letterSpacing: 0.01 + "em",
                        }}
                      >
                        (500g)
                      </span>
                    </h1>
                  </Box>

                  <Box>
                    <h3
                      style={{
                        fontSize: 20,
                        fontWeight: 700,
                        lineHeight: 40 + "px",
                        fontFamily: "Poppins",
                        letterSpacing: 0.01 + "em",
                      }}
                    >
                      N10,000
                    </h3>
                  </Box>
                </Container>

                <Box>
                  <Link href="shop/2" underline="none">
                    <button
                      href="shop/2"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: 24 + "px",
                        letterSpacing: 0.01 + "em",
                        backgroundColor: "#3D8754",
                        color: "white",
                        paddingTop: 15 + "px",
                        paddingBottom: 15 + "px",
                        border: "none",
                        paddingLeft: 25 + "px",
                        paddingRight: 25 + "px",
                        borderRadius: 50,
                        fontSize: 17,
                      }}
                    >
                      Add to cart
                    </button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Shop;
