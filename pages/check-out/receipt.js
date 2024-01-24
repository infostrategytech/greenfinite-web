import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { formatMoney } from "../../UtilityService/Helpers";
import Link from "next/link";
import { useRouter } from "next/router";
import { updateOrderStatus, orderReceipt } from "../../redux/actions/checkout";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    backgroundColor: "#fff",
  },
  parentContainer: {
    [theme.breakpoints.up("md")]: {
      padding: 100,
      paddingTop: 50,
      paddingBottom: 300,
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

function Receipt() {
  const classes = useStyles();
  const { orderDetails, address, updatedOrder } = useSelector(
    (state) => state.checkout,
  );
  const [paymentDetails, setPaymentDetails] = useState();
  const { products, product } = useSelector((state) => state.products);
  const [receiptDate, setReceiptDate] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter();
  const { transId } = router.query;

  useEffect(() => {
    if (transId) {
      dispatch(
        updateOrderStatus(transId, (res) => {
          console.log("update res :", res);
          if (res.status === "success") {
            setReceiptDate(res.data[0].paid_at);
            Swal.fire({
              icon: "success",
              title: res.message,
              html: `
                <div>
                  <p><strong>Order id</strong>: ${res.data[0].order_id}</p>
                  <p><strong>Reference</strong>: ${res.data[0].payment_reference}</p>
                  <p><strong>Description</strong>: ${res.data[0].info}</p>
                  <p><strong>Status</strong>: ${res.data[0].payment_status}</p>
                  <p><strong>Total</strong>: ${res.data[0].total}</p>
                  <p><strong>Paid at</strong>: ${res.data[0].paid_at}</p>
                </div>
              `,
              showCloseButton: false,
              showCancelButton: false,
            });
            dispatch(
              orderReceipt(transId, (res) => {
                if (res.status === "success") {
                  setPaymentDetails(res.data);
                }
              }),
            );
          }
        }),
      );
    }
  }, [transId]);

  return (
    <div className={classes.root}>
      <Head>
        <title>Greenfinite - Receipt</title>
        <meta name="description" content="" />
      </Head>
      <Grid container direction="column" className={classes.parentContainer}>
        <Grid item container justifyContent="space-between">
          <Grid item>
            <Typography variant="body1" component="h5" className={classes.bold}>
              Your Order is Confirmed
            </Typography>
            {/* <Typography variant="body2" component="p">
              Delivery Date:
            </Typography>
            <Typography variant="body2" className={classes.date}>
              {orderDetails?.delivery_date}
            </Typography> */}
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
              <Typography variant="body1">{orderDetails?.order_id}</Typography>
            </Grid>
          </Grid>
          <Grid
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
          </Grid>
        </Grid>

        {/* ORDER ITEMS TABLE */}
        {/* <Grid item className={classes.tableRow}>
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
            </Table>
          </TableContainer>
        </Grid> */}

        {/* NOTES AND TOTAL */}
        {/* <Grid
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
                {`${formatMoney(orderDetails.total)}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid> */}

        {/* ADDRESS */}
        <Grid item>
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
        </Grid>

        {/* DIVIDER */}
        <Grid item className={classes.bottomDividerBox}>
          <hr className={classes.divider} />
        </Grid>
        <Grid item className={classes.dev}>
          <Typography variant="caption" className={classes.lightText}>
            Invoice powered by Greenfinite Ltd.
          </Typography>
        </Grid>
      </Grid>

      {/* <Link
        href="/"
       className={classes.link}
      >
        Back Home
      </Link> */}
    </div>
  );
}

export default Receipt;
