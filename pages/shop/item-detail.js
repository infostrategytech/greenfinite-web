import React from "react";
import Link from "next/link";
import { Box, Container, Grid } from "@material-ui/core";

function Item() {
  return (
    <Container style={{ marginTop: 12 + "rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box>
            <img
              src="../../public/images/product1.png"
              alt="product image"
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Grid xs={8}>
              <Box>
                <h1 style={{ fontSize: 30, fontWeight: 700, lineHeight: 50 + 'px', fontFamily: "Poppins", letterSpacing: 0.01 + 'em', padding: 5 }}>
                  Dates Powder{" "}
                  <span style={{ fontSize: 20, fontWeight: 600, lineHeight: 30 + 'px', fontFamily: "Poppins", letterSpacing: 0.01 + 'em', padding: 5 }}>(500g)</span>
                </h1>
              </Box>
              <Box>
                <p style={{ fontSize: 18 + "px", fontFamily: "Avenir", fontStyle: "normal", fontWeight: "normal", lineHeight: 30 + "px", letterSpacing: 0.01 + "em"  }}>
                  Our Dates powder is made from the flesh of Dates Fruit which
                  have been dried and ground into fine powder. We pride
                  ourselves as being the manufacturers of the finest and purest
                  Dates Powder. Our Dates powder is the nutrient-dense, perfect
                  alternative to refined sugar, loaded with antioxidants,
                  vitamins and minerals. Considered very healthy for babies,
                  toddlers, young children and adults.
                </p>
              </Box>
            </Grid>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box
                style={{ marginTop: 2 + "rem", fontSize: 36, fontWeight: 500, lineHeight: 40 + 'px', fontFamily: "Poppins", letterSpacing: 0.01 + 'em' }}
              >
                N 10,000
              </Box>

              <Box style={{ marginTop: 2 + "rem" }}>
                <button>Add</button>{" "}
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 750,
                    marginLeft: 15,
                    marginRight: 15,
                  }}
                >
                  2
                </span>{" "}
                <button>Remove</button>
              </Box>

              <Box style={{ fontSize: 16,
                    fontWeight: 450,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: 24 + "px", marginTop: 2 + "rem"}}>
                <p>
                  <span style={{ fontWeight: 600, }}>2 items</span> added to cart
                </p>
              </Box>

              <Box>
                <p style={{ 
                    fontSize: 18,
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: 27 + "px", 
                    cursor: "pointer",
                    color: "#3D8754",
                    letterSpacing: 0.01 + "em"
                    }}>
                  <b>View Cart</b>
                </p>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Grid>
                <Box style={{ textAlign: "left", marginTop: 27 + "%" }}>
                  <Link href="shop/2" underline="none">
                    <button
                      href="shop/2"
                      style={{
                        backgroundColor: "#3D8754",
                        color: "white",
                        paddingTop: 20 + "px",
                        paddingBottom: 20 + "px",
                        paddingLeft: 35 + "px",
                        paddingRight: 35 + "px",
                        borderRadius: 50,
                        fontSize: 18,
                        fontWeight: "Poppins",
                        fontWeight: 500,
                        lineHeight: 24 + "px",
                        border: 'none',
                        cursor: "pointer"
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
      </Grid>
    </Container>
  );
}

export default Item;
