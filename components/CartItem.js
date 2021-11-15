import React, { useEffect, useState } from "react";
import { Grid, Button, Typography, IconButton, Box } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { adjustQuantity, removeFromCart } from "../redux/actions/cart";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    backgroundColor: "#fff",
  },
  cell: {
    border: "solid 1px black",
  },
  table: {
    border: "solid green",
    width: "80%",
  },
  cell: {
    border: "solid 1px black",
    borderRight: "none",
    // minHeight: 50,
    padding: 16,
  },
  quantityCell: {
    border: "solid 1px black",
    borderRight: "none",
    minHeight: 50,
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  lastCell: {
    border: "solid 1px black",
    minHeight: 50,
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  parentContainer: {
    [theme.breakpoints.up("md")]: {
      padding: 100,
      paddingBottom: 300,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 16,
      paddingBottom: 100,
    },
  },
  row3: {
    display: "flex",
    justifyContent: "right",
    marginTop: 32,
    marginBottom: 100,
  },
  row4: {
    display: "flex",
    justifyContent: "right",
  },
  total: {
    [theme.breakpoints.up("md")]: {
      fontSize: 28,
    },
    marginLeft: 32,
    fontWeight: 600,
  },
  totalText: {
    [theme.breakpoints.up("md")]: {
      fontSize: 28,
    },
    fontWeight: 700,
  },
  btn: {
    [theme.breakpoints.up("md")]: {
      height: 59,
      width: 200,
      fontSize: 16,
    },
    borderRadius: 25,
    marginLeft: 32,
    textTransform: "none",
  },
  btn2: {
    [theme.breakpoints.up("md")]: {
      height: 59,
      width: 200,
      fontSize: 16,
    },
    borderRadius: 25,
    marginLeft: 32,
    textTransform: "none",
    border: "1px solid black",
  },
  powderImg: {
    [theme.breakpoints.up("md")]: {
      height: 109,
      width: 87,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      height: 50,
    },
  },
  productName: {
    fontWeight: 700,
    marginBottom: 12,
  },
  remove: {
    color: "red",
    fontWeight: 500,
    fontSize: 16,
  },
  quantityValue: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 16,
      marginRight: 16,
    },
    color: "#000",
  },
  money: {
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
  },
  row1: {
    marginBottom: 40,
  },
  bold: {
    fontWeight: 700,
  },
  heading: {
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
    fontWeight: 500,
    marginBottom: 8,
  },
  iconBtn: {
    color: "#000",
  },
  bagIcon: {
    fontSize: 40,
    marginRight: 16,
  },
}));
const CartItem = ({ item }) => {
  //   console.log(item);
  const dispatch = useDispatch();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = useSelector((state) => state.products);
  const [input, setInput] = useState(item?.qty);
  const classes = useStyles();
  useEffect(() => {
    let quantity = 0;
    let price = 0;
    cart.forEach((item) => {
      quantity += item.qty;
      price += item.qty * item.amount;
    });
    setTotalQuantity(totalQuantity);
    setTotalPrice(price);
  }, [totalQuantity, totalPrice]);
  const removeItems = (id) => {
    dispatch(removeFromCart(id));
  };

  const onAddHandler = (e) => {
    // setInput((prevState) => prevState + 1);
    dispatch(adjustQuantity(item.product_id, input));
    // console.log(item.product_id);
  };
  const onReduceHandler = () => {
    setInput((prevState) => prevState - 1);
  };
  return (
    <Grid item container>
      <Grid item container xs={6} className={classes.cell}>
        <Grid item xs={4}>
          <img
            src={item?.image_url}
            alt="dates powder"
            className={classes.powderImg}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography
            variant="h5"
            component="h6"
            className={classes.productName}
          >
            {item.name} ({item.net_weight}g)
          </Typography>
          <IconButton
            aria-label="delete"
            className={classes.remove}
            onClick={() => removeItems(item.product_id)}
          >
            <DeleteForeverIcon /> Remove
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={2} className={classes.quantityCell}>
        <IconButton className={classes.iconBtn} onClick={onReduceHandler}>
          <RemoveRoundedIcon />
        </IconButton>
        <Typography variant="h5" className={classes.quantityValue}>
          {input}
        </Typography>
        <IconButton className={classes.iconBtn} onClick={onAddHandler}>
          <AddIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2} className={classes.quantityCell}>
        <Typography variant="caption" className={classes.money}>
          ₦{item.amount}
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.lastCell}>
        <Typography variant="caption" className={classes.money}>
          ₦{totalPrice}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CartItem;