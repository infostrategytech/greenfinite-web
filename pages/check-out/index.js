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
  Checkbox,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 10 + "rem",
    marginBottom: 20 + "rem",
    [theme.breakpoints.down("md")]: {
      marginTop: 5 + "rem",
      marginBottom: 10 + "rem",
    }
  },
  mainHeader: {
    fontFamily: "Poppins",
    fontSize: 30 + "px",
    fontWeight: 600,
    lineHeight: 45 + "px",
  },
  subHeader: {
    fontFamily: "Poppins",
    fontSize: 18 + "px",
    fontWeight: "normal",
    lineHeight: 27 + "px",
    marginTop: 7 + "px",
  },
  shippingInfo: {
    marginTop: 52 + "px",
    [theme.breakpoints.down("md")]: {
      marginTop: 10 + "px",
    },
  },
  createAccount: {
    marginTop: 25 + "px",
    fontFamily: "Poppins",
    fontSize: 16 + "px",
    fontWeight: "normal",
    lineHeight: 30 + "px",
  },
  billingDetail: {
    marginTop: 100 + "px",
    [theme.breakpoints.down("md")]: {
      marginTop: 45 + "px",
    }
  },
  billingDetailHeader: {
    fontFamily: "Poppins",
    fontSize: 30 + "px",
    fontWeight: 600,
    lineHeight: 45 + "px",
    marginBottom: 33 + "px",
  },
  orderBox: {
    border: "1px solid #A2A2A2",
    boxSizing: "border-box",
    borderRadius: 5 + "px",
    margin: 0,
    padding: 30 + "px",
  },
  orderHeader: {
    fontFamily: "Poppins",
    fontSize: 24 + "px",
    fontWeight: "bold",
    lineHeight: 36 + "px",
    paddingBottom: 40 + "px",
  },
  orderDetailBox: {
    marginBottom: 2 + "rem",
  },
  itemNameHeader: {
    fontFamily: "Poppins",
    fontSize: 20 + "px",
    fontWeight: 600,
    lineHeight: 30 + "px",
    paddingBottom: 6 + "px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
    },
  },
  itemNameSubHeader: {
    fontFamily: "Poppins",
    fontSize: 16 + "px",
    fontWeight: 500,
    lineHeight: 24 + "px",
  },
  quantityHeader: {
    fontFamily: "Poppins",
    fontSize: 16 + "px",
    fontWeight: 500,
    lineHeight: 24 + "px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
    },
  },
  unitPrice: {
    fontFamily: "Poppins",
    fontSize: 18 + "px",
    fontWeight: 600,
    lineHeight: 40 + "px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
    },
  },
  unitPriceSpan: {
    fontFamily: "Poppins",
    fontSize: 18 + "px",
    fontWeight: "normal",
    lineHeight: 40 + "px",
    paddingLeft: 5,
  },
  divider: {
    border: "1px solid #A2A2A2",
  },
  priceSectoin: {
    [theme.breakpoints.up("md")]: {
      paddingTop: 20 + "px",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: 10 + "px",
    },
  },
  priceKey: {
    fontFamily: "Poppins",
    fontSize: 18 + "px",
    fontWeight: 600,
    lineHeight: 27 + "px",
    paddingTop: 16 + "px",
    paddingLeft: 20 + "px",
    [theme.breakpoints.down("md")]: {
      fontSize: 18 + "px",
      lineHeight: 17 + "px",
      paddingTop: 10 + "px",
      paddingLeft: 10 + "px",
    },
  },
  priceKeySpan: {
    fontFamily: "Poppins",
    fontSize: 18 + "px",
    fontWeight: 500,
    lineHeight: 27 + "px",
    [theme.breakpoints.down("md")]: {
      fontSize: 14 + "px",
      fontWeight: 400,
      lineHeight: 17 + "px",
      marginTop: 10 + "px"
    },
  },
  priceValueAlign: {
    textAlign: "right",
  },
  priceValue: {
    fontFamily: "Poppins",
    fontSize: 18 + "px",
    fontWeight: 500,
    lineHeight: 40 + "px",
    paddingTop: 16 + "px",
    paddingRight: 20 + "px",
    [theme.breakpoints.down("md")]: {
      fontSize: 18 + "px",
      lineHeight: 17 + "px",
      paddingTop: 10 + "px",
      paddingRight: 10 + "px",
    },
  },
  priceTotalBox: {
    padding: "30px 20px",
    background: "#EFF8F2",
    borderRadius: 5 + "px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 10px",
    }
  },
  priceTotalBoxPadding: {
    padding: "32px 20px",
    [theme.breakpoints.down("md")]: {
      padding: "10px 5px",
    }
  },
  totalKey: {
    fontFamily: "Poppins",
    fontSize: 24 + "px",
    fontWeight: "bold",
    lineHeight: 36 + "px",
    [theme.breakpoints.down("md")]: {
      fontSize: 18 + "px",
      fontWeight: "bold",
      lineHeight: 30 + "px",
    }
  },
  totalValue: {
    fontFamily: "Poppins",
    fontSize: 24 + "px",
    fontWeight: 600,
    lineHeight: 40 + "px",
    [theme.breakpoints.down("md")]: {
      fontSize: 18 + "px",
      fontWeight: 600,
      lineHeight: 35 + "px",
    }
  },
  paymentBox: {
    marginTop: 48 + "px",
  },
  paymentImage: {},
  paymentOptionHeader: {
    fontFamily: "Poppins",
    fontSize: 30 + "px",
    fontWeight: 600,
    lineHeight: 30 + "px",
    marginTop: 19 + "px",
    marginBottom: 10 + "px",
  },
  paymentOptionSub: {
    fontFamily: "Poppins",
    fontSize: 18 + "px",
    fontWeight: 400,
    lineHeight: 30 + "px",
    marginBottom: 25 + "px",
  },
  paymentOptionText: {
    fontFamily: "Avenir",
    fontSize: 16 + "px",
    fontWeight: "normal",
    lineHeight: 20 + "px",
    marginBottom: 60 + "px",
  },
  btnAlign: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  },
  paymentButton: {
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
  },
}));

function CheckOut() {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box>
            <Box className={classes.mainHeader}>Shipping information</Box>
            <Box className={classes.subHeader}>
              <Checkbox defaultChecked /> Shipping to a different location?
            </Box>

            <Box className={classes.shippingInfo}>
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

          <Box className={classes.createAccount}>
            <Checkbox /> Create an account?
          </Box>

          <Box className={classes.billingDetail}>
            <Box className={classes.billingDetailHeader}>Billing Details</Box>
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

        <Grid item xs={12} md={6}>
          <Box className={classes.orderBox}>
            <Typography className={classes.orderHeader}>Your Order</Typography>

            <Box className={classes.orderDetailBox}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box>
                    <img src="../images/checkoutItem.png" alt="product image" />
                  </Box>
                </Grid>
                <Grid item xs={9}>
                  <Box>
                    <Typography className={classes.itemNameHeader}>
                      Item Name{" "}
                      <span className={classes.itemNameSubHeader}>(250g)</span>
                    </Typography>

                    <Typography className={classes.quantityHeader}>
                      Quantity: 5
                    </Typography>

                    <Typography className={classes.unitPrice}>
                      N10,000 <span className={classes.unitPriceSpan}>x5</span>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Divider className={classes.divider} />

            <Box className={classes.priceSectoin}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography className={classes.priceKey}>Subtotal</Typography>
                </Grid>
                <Grid item xs={6} className={classes.priceValueAlign}>
                  <Typography className={classes.priceValue}>
                    N 50,000
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography className={classes.priceKey}>
                    Shipping{" "}
                    <span className={classes.priceKeySpan}>(Flate rate)</span>
                  </Typography>
                </Grid>
                <Grid item xs={6} className={classes.priceValueAlign}>
                  <Typography className={classes.priceValue}>
                    N 2,000
                  </Typography>
                </Grid>
              </Grid>

              <Box className={classes.priceTotalBox}>
                <Grid
                  container
                  spacing={2}
                  className={classes.priceTotalBoxPadding}
                >
                  <Grid item xs={6}>
                    <Typography className={classes.totalKey}>Total</Typography>
                  </Grid>
                  <Grid item xs={6} className={classes.priceValueAlign}>
                    <Typography className={classes.totalValue}>
                      N 52,000.00
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>

          <Box className={classes.paymentBox}>
            <Box>
              <img
                className={classes.paymentImage}
                src="../images/paymentOptions.png"
                alt="payment options"
              />
            </Box>
            <Box className={classes.paymentOptionHeader}>
              PayStack Payment Gateway
            </Box>
            <Box className={classes.paymentOptionSub}>
              Make Payment Using Your Credit Card
            </Box>

            <Box className={classes.paymentOptionText}>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </Box>

            <Box className={classes.btnAlign}>
              <Link href="shop/2" underline="none">
                <button href="shop/2" className={classes.paymentButton}>
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
