import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { getSingleProduct } from "../../redux/actions/products";

function ItemDetails() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { product } = useSelector((state) => state.products);
  useEffect(() => {
    const productID = router.query.itemId;
    console.log(productID);
    setLoading(true);
    dispatch(
      getSingleProduct(productID, () => {
        setLoading(false);
      })
    );
  }, []);
  return (
    <Container style={{ marginTop: 10 + "rem", marginBottom: 115 + "px" }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={12}>
          {loading && <CircularProgress />}
          <Box>
            <img
              src={product && product.image_url}
              alt="product "
              style={{ maxWidth: "100%", width: "400px", height: "400px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={8} md={12}>
          <Box style={{ marginLeft: 57 + "px" }}>
            <Grid xs={8}>
              <Box>
                <Typography
                  style={{
                    fontSize: 30,
                    fontWeight: 700,
                    lineHeight: 50 + "px",
                    fontFamily: "Poppins",
                    letterSpacing: 0.01 + "em",
                    padding: 5,
                  }}
                >
                  {product && product.name}
                  <Typography
                    component="span"
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      lineHeight: 30 + "px",
                      fontFamily: "Poppins",
                      letterSpacing: 0.01 + "em",
                      padding: 5,
                    }}
                  >
                    {product && product.net_weight}
                  </Typography>
                </Typography>
                <Typography
                  component="p"
                  style={{
                    fontSize: 18 + "px",
                    fontFamily: "Avenir",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    lineHeight: 30 + "px",
                    letterSpacing: 0.01 + "em",
                    marginBottom: 40 + "px",
                  }}
                >
                  {product && product.description}
                </Typography>
                <Box>
                  <Box
                    style={{
                      marginTop: 2 + "rem",
                      fontSize: 36,
                      fontWeight: 500,
                      lineHeight: 40 + "px",
                      fontFamily: "Poppins",
                      letterSpacing: 0.01 + "em",
                      marginBottom: 20 + "px",
                    }}
                  >
                    {product && product.amount}
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Box style={{ margin: "17px 0" }}>
                        <button
                          style={{
                            border: "1px solid #3D8754",
                            borderRadius: 100 + "%",
                            fontSize: 24,
                            cursor: "pointer",
                            width: 32 + "px",
                            height: 32 + "px",
                          }}
                        >
                          -
                        </button>{" "}
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
                        <button
                          style={{
                            border: "none",
                            borderRadius: 100,
                            backgroundColor: "#3D8754",
                            color: "#ffff",
                            fontSize: 24,
                            cursor: "pointer",
                            width: 32 + "px",
                            height: 32 + "px",
                          }}
                        >
                          +
                        </button>
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                      <Grid>
                        <Box style={{ textAlign: "right" }}>
                          <Link href="/cart" underline="none">
                            <button
                              href="/cart"
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
                                border: "none",
                                cursor: "pointer",
                              }}
                            >
                              Add to cart
                            </button>
                          </Link>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>

                <Typography
                  component="p"
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    lineHeight: 24 + "px",
                    marginTop: 10 + "px",
                  }}
                >
                  2 items
                  <Typography
                    component="span"
                    style={{
                      fontSize: 16,
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      lineHeight: 24 + "px",
                      marginLeft: 5 + "px",
                    }}
                  >
                    added to cart
                  </Typography>
                </Typography>

                <Typography
                  component="p"
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    lineHeight: 27 + "px",
                    cursor: "pointer",
                    color: "#3D8754",
                    letterSpacing: 0.01 + "em",
                    textDecoration: "underline",
                    marginTop: 5 + "px",
                  }}
                >
                  View Cart
                </Typography>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ItemDetails;
