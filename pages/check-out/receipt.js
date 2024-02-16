import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
  Box,
} from "@material-ui/core";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { formatMoney } from "../../UtilityService/Helpers";
import Link from "next/link";
import { useRouter } from "next/router";
import { updateOrderStatus, orderReceipt } from "../../redux/actions/checkout";
import Swal from "sweetalert2";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CLEAR_CART } from "../../redux/actions/Contants";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    backgroundColor: "#fff",
  },
  parentContainer: {
    [theme.breakpoints.up("md")]: {
      padding: 100,
      paddingTop: 50,
      paddingBottom: 100,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 16,
      paddingBottom: 100,
    },
  },
  logo: {
    width: 90,
    height: 45,
  },
  particulars: {
    [theme.breakpoints.up("md")]: {
      maxWidth: 400,
    },
  },
  particulars2: {
    [theme.breakpoints.up("md")]: {
      maxWidth: 300,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 8,
    },
    backgroundColor: "#DCDCDC",
    padding: 12,
  },
  tableHead: {
    backgroundColor: "#DCDCDC",
    color: "#000",
  },
  tableRow: {
    maxWidth: "100%",
  },
  dev: {
    textAlign: "center",
  },
  bold: {
    fontWeight: 700,
  },
  date: {
    color: "#039C40",
    fontWeight: 500,
  },
  topDividerBox: {
    marginTop: 20,
    marginBottom: 30,
  },
  divider: {
    opacity: 0.3,
  },
  section3: {
    marginBottom: 50,
  },
  section5: {
    marginTop: 50,
    marginBottom: 20,
  },
  bottomDividerBox: {
    marginTop: 50,
    marginBottom: 30,
  },
  lightText: {
    color: "#A1A1A1",
  },
  link: {
    color: "green",
    marginLeft: "30px",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function Receipt() {
  const classes = useStyles();
  const { orderDetails, address, paymentId } = useSelector(
    (state) => state.checkout,
  );

  const pdfRef = useRef();

  console.log("paymentId :", paymentId);

  console.log("orderDetails :", orderDetails);
  const [paymentDetails, setPaymentDetails] = useState();
  const { products, product } = useSelector((state) => state.products);
  const [receiptDate, setReceiptDate] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter();
  // const { transId } = router.query;

  useEffect(() => {
    if (paymentId) {
      dispatch(
        updateOrderStatus(paymentId, (res) => {
          console.log("update res :", res);
          if (res.status === "success") {
            setReceiptDate(res.data[0].paid_at);
            Swal.fire({
              icon: "success",
              title: res.message,
              html:
                typeof res.data === "object"
                  ? `
                <div>
                  <p><strong>Order id</strong>: ${res?.data[0].order_id}</p>
                  <p><strong>Reference</strong>: ${res?.data[0].payment_reference}</p>
                  <p><strong>Description</strong>: ${res?.data[0].info}</p>
                  <p><strong>Status</strong>: ${res?.data[0].payment_status}</p>
                  <p><strong>Total</strong>: ${res?.data[0].total}</p>
                  <p><strong>Paid at</strong>: ${res?.data[0].paid_at}</p>
                </div>
              `
                  : res.data,
              showCloseButton: false,
              showCancelButton: false,
            });
            dispatch(
              orderReceipt(paymentId, (res) => {
                if (res.status === "success") {
                  console.log("payment data", res.data);
                  setPaymentDetails(res.data);
                }
              }),
            );
            dispatch({
              type: CLEAR_CART,
            });
          } else {
            Swal.fire({
              icon: "error",
              // title: "Transaction not successful",
              html: `
                <div>
                  <p>Transaction not successful</p>
                </div>
              `,
              showCloseButton: false,
              showCancelButton: false,
            });
            router.push("/check-out");
          }
        }),
      );
    }
  }, [paymentId]);

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio,
      );
      pdf.save("receipt.pdf");
    });
  };

  return (
    <div className={classes.root}>
      <Head>
        <title>Greenfinite - Receipt</title>
        <meta name="description" content="" />
      </Head>
      <Grid
        container
        direction="column"
        className={classes.parentContainer}
        ref={pdfRef}
      >
        <Grid item container justifyContent="space-between">
          <Grid item>
            <Typography variant="body1" component="h5" className={classes.bold}>
              Your Order is Confirmed
            </Typography>
          </Grid>
          <Grid item>
            <img
              alt="greenfinite-logo"
              src="../images/footerLogo.png"
              className={classes.logo}
            />
          </Grid>
        </Grid>
        {/* DIVIDER */}
        <Grid item className={classes.topDividerBox}>
          <hr className={classes.divider} />
        </Grid>
        {/* RECEIPT NUMBER AND DATE */}
        <Grid
          item
          container
          direction="column"
          alignItems="flex-end"
          className={classes.section3}
        >
          <Grid
            item
            container
            justifyContent="space-between"
            className={classes.particulars}
          >
            <Grid item>
              <Typography variant="body2" className={classes.bold}>
                RECEIPT #
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                {paymentDetails?.order_id}
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid
            item
            container
            justifyContent="space-between"
            className={classes.particulars}
          >
            <Grid item>
              <Typography variant="body2" className={classes.bold}>
                RECEIPT DATE
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{receiptDate}</Typography>
            </Grid>
          </Grid> */}
        </Grid>

        {/* ORDER ITEMS TABLE */}
        <Grid item className={classes.tableRow}>
          <TableContainer component={"div"}>
            <Table aria-label="order details table">
              <TableHead className={classes.tableHead}>
                <TableRow>
                  <TableCell className={classes.bold}>Item</TableCell>
                  <TableCell align="right" className={classes.bold}>
                    Quantity
                  </TableCell>
                  <TableCell align="right" className={classes.bold}>
                    Unit Cost
                  </TableCell>
                  <TableCell align="right" className={classes.bold}>
                    Subtotal
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paymentDetails?.body.map((product) => (
                  <StyledTableRow key={product.product_id}>
                    <StyledTableCell component="th" scope="row">
                      {product.product_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {product.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {product.unit_cost}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {product.sub_total}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* NOTES AND TOTAL */}
        <Grid
          item
          container
          justifyContent="space-between"
          className={classes.section5}
        >
          <Grid item>
            <Typography variant="body1" component="p" className={classes.bold}>
              Notes
            </Typography>
            <Typography variant="caption" component="p">
              Shipping fee is a flat rate of {formatMoney(2000)}
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="space-between"
            className={classes.particulars2}
          >
            <Grid item>
              <Typography variant="h6" className={classes.bold}>
                Total
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.bold}>
                {`${formatMoney(paymentDetails?.total)}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* ADDRESS */}
        {/* <Grid item>
          <Typography variant="body1" component="p" className={classes.bold}>
            Delivery Address
          </Typography>
          <Typography variant="body1" component="p">
            {address.street}
          </Typography>
          <Typography variant="body1" component="p">
            {address.state}
          </Typography>
          <Typography variant="body1" component="p">
            {address.country}
          </Typography>
        </Grid> */}

        {/* DIVIDER */}
        <Grid item className={classes.bottomDividerBox}>
          <hr className={classes.divider} />
        </Grid>
        <Grid
          item
          className={classes.dev}
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Typography variant="caption" className={classes.lightText}>
            Invoice powered by Greenfinite Ltd.
          </Typography>
          <br />
        </Grid>
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "50px" }}
      >
        <Button
          onClick={downloadPDF}
          variant="outlined"
          sx={{
            color: "#3C8753",
            border: "none",
            marginTop: "10px",
          }}
        >
          Download Receipt
        </Button>
      </Box>
    </div>
  );
}

export default Receipt;
