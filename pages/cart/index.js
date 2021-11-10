import React from "react";
import Link from "next/link";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Container,
  Box,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    td: {
      border: "1px solid black",
    },
  },
}));

function Cart() {
  const classes = useStyles();
  return (
    // <Container style={{ marginTop: 5 + "rem", marginLeft: 10 + "rem" }}>
    <Container style={{ marginTop: 7 + "rem" }}>
      <Grid xs={12}>
        <Box>
          <h1
            style={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 30,
              lineHeight: 45 + "px",
              letterSpacing: 0.01 + "em",
            }}
          >
            Cart (1 item)
          </h1>
        </Box>

        <Box style={{ marginTop: 3 + "rem", marginBottom: 3 + "rem" }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              style={{ border: "none" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h3>Product</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3>Quantity</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3>Unit Price</h3>
                  </TableCell>
                  <TableCell align="right">
                    <h3>Subtotal</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map((row) => ( */}
                <TableRow
                  style={{ border: "solid 3px red" }}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: "solid 3px red",
                      borderCollapse: "collapse",
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    Item
                  </TableCell>
                  <TableCell align="right">gfhgg</TableCell>
                  <TableCell align="right">ttyrgfhg</TableCell>
                  <TableCell align="right">jhfgfdf</TableCell>
                </TableRow>
                {/* // ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box style={{ paddingRight: 2 + "rem" }}>
          <Grid xs={12} style={{ textAlign: "right" }}>
            <h1
              style={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: 24 + "px",
                lineHeight: 36 + "px",
              }}
            >
              Total:{" "}
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: 30 + "px",
                  lineHeight: 40 + "px",
                  marginLeft: 10,
                }}
              >
                N10,000
              </span>
            </h1>
          </Grid>
        </Box>

        <Box style={{ marginTop: 10 + "rem" }}>
          <Grid xs={12} style={{ textAlign: "right" }}>
            <Link href="/shop" underline="none">
              <button
                style={{
                  fontFamily: "Poppins",
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: 24 + "px",
                  backgroundColor: "white",
                  color: "#3F6A0F",
                  paddingTop: 16 + "px",
                  paddingBottom: 16 + "px",
                  paddingLeft: 45 + "px",
                  paddingRight: 45 + "px",
                  border: 1 + "px" + "solid" + "#3F6A0F",
                  borderRadius: 50,
                  marginRight: 3 + "rem",
                }}
              >
                Buy More
              </button>
            </Link>

            <Link href="/check-out" underline="none">
              <button
                style={{
                  fontFamily: "Poppins",
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: 27 + "px",
                  backgroundColor: "#3F6A0F",
                  color: "white",
                  paddingTop: 16 + "px",
                  paddingBottom: 16 + "px",
                  paddingLeft: 60 + "px",
                  paddingRight: 60 + "px",
                  border: "none",
                  borderRadius: 50,
                }}
              >
                Checkout
              </button>
            </Link>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}

export default Cart;
