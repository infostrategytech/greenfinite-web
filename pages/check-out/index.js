import React from "react";
import Link from "next/link";
import {
  Container,
  Grid,
  Box,
  TextField,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@material-ui/core";

function CheckOut() {
  return (
    <Container style={{ marginTop: 10 + "rem", marginBottom: 20 + "rem" }}>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <Box>
            <Box
              style={{
                fontFamily: "Poppins",
                fontSize: 30 + "px",
                fontWeight: 600,
                lineHeight: 45 + "px",
              }}
            >
              Shipping information
            </Box>
            <Box
              style={{
                fontFamily: "Poppins",
                fontSize: 18 + "px",
                fontWeight: "normal",
                lineHeight: 27 + "px",
                marginTop: 7 + "px",
              }}
            >
              Shipping to a different location?
            </Box>

            <Box style={{ marginTop: 52 + "px" }}>
              <form>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="First Name"
                      margin="normal"
                      name="firstName"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      margin="normal"
                      name="lastName"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Country/Region"
                      margin="normal"
                      name="country"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="State"
                      margin="normal"
                      name="state"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      label="Street Address"
                      margin="normal"
                      name="firstName"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      label="Location"
                      margin="normal"
                      name="location"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      id="outlined-multiline-static"
                      label="Order Note"
                      multiline
                      rows={4}
                      variant="outlined"
                      // defaultValue="Default Value"
                    />
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>

          <Box
            style={{
              marginTop: 25 + "px",
              fontFamily: "Poppins",
              fontSize: 16 + "px",
              fontWeight: "normal",
              lineHeight: 30 + "px",
            }}
          >
            Create an account?
          </Box>

          <Box style={{ marginTop: 100 + "px" }}>
            <Box
              style={{
                fontFamily: "Poppins",
                fontSize: 30 + "px",
                fontWeight: 600,
                lineHeight: 45 + "px",
                marginBottom: 33 + "px",
              }}
            >
              Billing Details
            </Box>
            <form>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="First Name"
                    margin="normal"
                    name="firstName"
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    margin="normal"
                    name="lastName"
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Country/Region"
                    margin="normal"
                    name="country"
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="State"
                    margin="normal"
                    name="state"
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Street Address"
                    margin="normal"
                    name="firstName"
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Location"
                    margin="normal"
                    name="location"
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    margin="normal"
                    name="phone"
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    margin="normal"
                    name="emailAddress"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box
            style={{
              border: "1px solid #A2A2A2",
              boxSizing: "border-box",
              borderRadius: 5 + "px",
              margin: 0,
              padding: 30 + "px",
            }}
          >
            {/* <Box> */}
            <Box>
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontSize: 24 + "px",
                  fontWeight: "bold",
                  lineHeight: 36 + "px",
                  paddingBottom: 40 + "px",
                }}
              >
                Your Order
              </h1>
            </Box>

            <Box style={{ marginBottom: 2 + "rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box>
                    <img src="../images/checkoutItem.png" alt="product image" />
                  </Box>
                </Grid>
                <Grid item xs={9}>
                  <Box>
                    <Box
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 20 + "px",
                        fontWeight: 600,
                        lineHeight: 30 + "px",
                        paddingBottom: 6 + "px",
                      }}
                    >
                      Item Name{" "}
                      <span
                        style={{
                          fontFamily: "Poppins",
                          fontSize: 16 + "px",
                          fontWeight: 500,
                          lineHeight: 24 + "px",
                        }}
                      >
                        (250g)
                      </span>
                    </Box>

                    <Box
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 16 + "px",
                        fontWeight: 500,
                        lineHeight: 24 + "px",
                      }}
                    >
                      Quantity: 5
                    </Box>

                    <Box
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 18 + "px",
                        fontWeight: 600,
                        lineHeight: 40 + "px",
                      }}
                    >
                      N10,000{" "}
                      <span
                        style={{
                          fontFamily: "Poppins",
                          fontSize: 18 + "px",
                          fontWeight: "normal",
                          lineHeight: 40 + "px",
                          paddingLeft: 5,
                        }}
                      >
                        x5
                      </span>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Divider style={{ border: "1px solid #A2A2A2" }} />

            <Box sx={{ paddingTop: 20 + "px" }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 18 + "px",
                      fontWeight: 600,
                      lineHeight: 27 + "px",
                      paddingTop: 16 + "px",
                      paddingLeft: 20 + "px",
                    }}
                  >
                    Subtotal
                  </Box>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "right" }}>
                  <Box
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 18 + "px",
                      fontWeight: 500,
                      lineHeight: 40 + "px",
                      paddingTop: 16 + "px",
                      paddingRight: 20 + "px",
                    }}
                  >
                    N 50,000
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 18 + "px",
                      fontWeight: 600,
                      lineHeight: 27 + "px",
                      paddingTop: 16 + "px",
                      paddingLeft: 20 + "px",
                    }}
                  >
                    Shipping{" "}
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 18 + "px",
                        fontWeight: 500,
                        lineHeight: 27 + "px",
                      }}
                    >
                      (Flate rate)
                    </span>
                  </Box>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "right" }}>
                  <Box
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 18 + "px",
                      fontWeight: 500,
                      lineHeight: 40 + "px",
                      paddingTop: 16 + "px",
                      paddingRight: 20 + "px",
                    }}
                  >
                    N 2,000
                  </Box>
                </Grid>
              </Grid>

              <Box
                style={{
                  padding: "30px 20px",
                  background: "#EFF8F2",
                  borderRadius: 5 + "px",
                }}
              >
                <Grid container spacing={2} sx={{ padding: "32px 20px" }}>
                  <Grid item xs={6}>
                    <Box
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 24 + "px",
                        fontWeight: "bold",
                        lineHeight: 36 + "px",
                      }}
                    >
                      Total
                    </Box>
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: "right" }}>
                    <Box
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 24 + "px",
                        fontWeight: 600,
                        lineHeight: 40 + "px",
                      }}
                    >
                      N 52,000.00
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>

          <Box style={{ marginTop: 48 + "px" }}>
            <Box>
              <img src="../images/paymentOptions.png" alt="payment options" />
            </Box>
            <Box
              style={{
                fontFamily: "Poppins",
                fontSize: 30 + "px",
                fontWeight: 600,
                lineHeight: 30 + "px",
                marginTop: 19 + "px",
                marginBottom: 10 + "px",
              }}
            >
              PayStack Payment Gateway
            </Box>
            <Box
              style={{
                fontFamily: "Poppins",
                fontSize: 18 + "px",
                fontWeight: 400,
                lineHeight: 30 + "px",
                marginBottom: 25 + "px",
              }}
            >
              Make Payment Using Your Credit Card
            </Box>

            <Box
              style={{
                fontFamily: "Avenir",
                fontSize: 16 + "px",
                fontWeight: "normal",
                lineHeight: 20 + "px",
                marginBottom: 60 + "px",
              }}
            >
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </Box>

            <Box>
              <Link href="shop/2" underline="none">
                <button
                  href="shop/2"
                  style={{
                    backgroundColor: "#3D8754",
                    color: "#ffff",
                    fontFamily: "Poppins",
                    fontSize: 18,
                    fontWeight: 500,
                    lineHeight: 27 + "px",
                    paddingTop: 18 + "px",
                    paddingBottom: 18 + "px",
                    paddingLeft: 40 + "px",
                    paddingRight: 40 + "px",
                    border: "none",
                    borderRadius: 50,
                  }}
                >
                  Proceed to Payment
                </button>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CheckOut;
