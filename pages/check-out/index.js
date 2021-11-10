import React from "react";
import Link from "next/link"
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
            <form>
              <Box sx={{ my: 3 }}>
                {/* <Typography color="textPrimary" variant="h2">
                  Shipping information
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Shipping to a different location?
                </Typography> */}
                <h1>Shipping information</h1>
                <p style={{ fontSize: 18 }}>
                  Shipping to a different location?
                </p>
              </Box>
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

          <Box margin={3}>
            <Typography color="textPrimary" variant="subtitle2" component="div">
              Create an account?
            </Typography>
          </Box>

          <Box style={{ marginTop: 7 + "rem" }}>
            <form>
              <Box sx={{ my: 3 }}>
                {/* <Typography color="textPrimary" variant="h2">
                  Shipping information
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Shipping to a different location?
                </Typography> */}
                <h1>Billing Details</h1>
              </Box>
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

        <Grid item xs={5}>
          <Box style={{ border: 5 }}>
            <Card>
              <CardContent>
                <Box margin={5}>
                  <h1>Your Order</h1>

                  <Box style={{ marginBottom: 2 + "rem" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <p>Image</p>
                      </Grid>
                      <Grid item xs={8}>
                        <h3>Item Name (250g)</h3>
                        <Typography variant="subtitle2" component="div">
                          Quantity: 5
                        </Typography>

                        <h3>
                          <b>N10,000 x 5</b>
                        </h3>
                      </Grid>
                    </Grid>
                  </Box>

                  <Divider />

                  <Container>
                    <Box>
                      <Grid container spacing={2}>
                        <Grid item xs={5}>
                          <h3>Subtotal</h3>
                        </Grid>
                        <Grid item xs={7} style={{ textAlign: "right" }}>
                          <Box>
                            <h3>N 50,000</h3>
                          </Box>
                        </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <h3>Shipping(Flat rate)</h3>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                          <h3>N 2,000</h3>
                        </Grid>
                      </Grid>

                      <Box style={{ border: "block" }}>
                        <Grid container spacing={2}>
                          <Grid item xs={5}>
                            <h3>Total</h3>
                          </Grid>
                          <Grid item xs={7} style={{ textAlign: "right" }}>
                            <h3>N 52,000.00</h3>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Container>
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box style={{ marginTop: 10 + "rem" }}>
            <h1 style={{ fontSize: 33, lineHeight: 1 }}>
              PayStack Payment Gateway
            </h1>
            <p style={{ fontSize: 18, lineHeight: 0, fontWeight: 402 }}>
              Make Payment Using Your Credit Card
            </p>

            <p
              style={{
                marginTop: 3 + "rem",
                marginBottom: 5 + "rem",
                fontSize: 16,
              }}
            >
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </Box>

          <Box>
            <Link href="shop/2" underline="none">
              <button
                href="shop/2"
                style={{
                  backgroundColor: "green",
                  color: "white",
                  paddingTop: 18 + "px",
                  paddingBottom: 18 + "px",
                  paddingLeft: 40 + "px",
                  paddingRight: 40 + "px",
                  borderRadius: 50,
                  fontSize: 19,
                }}
              >
                Proceed to Payment
              </button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CheckOut;
