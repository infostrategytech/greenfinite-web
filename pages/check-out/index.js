import React,{useState,useEffect} from "react";
import Link from "next/link";
import {
  Container,
  Grid,
  Box,
  TextField,
  Typography,
  Divider,
  Checkbox,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import { createOrder, updateOrder } from "../../redux/actions/checkout";
import Swal from "sweetalert2";
import { usePaystackPayment } from 'react-paystack';
import { useRouter } from 'next/router';
import { CLEAR_CART, SET_ADDRESS, SET_ORDER_ID } from "../../redux/actions/Contants";
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
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
  },
  unitPrice: {
    fontFamily: "Poppins",
    fontSize: 18 + "px",
    fontWeight: 600,
    lineHeight: 40 + "px",
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
    paddingTop: 20 + "px",
  },
  priceKey: {
    fontFamily: "Poppins",
    fontSize: 18 + "px",
    fontWeight: 600,
    lineHeight: 27 + "px",
    paddingTop: 16 + "px",
    paddingLeft: 20 + "px",
  },
  priceKeySpan: {
    fontFamily: "Poppins",
    fontSize: 18 + "px",
    fontWeight: 500,
    lineHeight: 27 + "px",
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
  },
  priceTotalBox: {
    padding: "30px 20px",
    background: "#EFF8F2",
    borderRadius: 5 + "px",
  },
  priceTotalBoxPadding: {
    padding: "32px 20px",
  },
  totalKey: {
    fontFamily: "Poppins",
    fontSize: 24 + "px",
    fontWeight: "bold",
    lineHeight: 36 + "px",
  },
  totalValue: {
    fontFamily: "Poppins",
    fontSize: 24 + "px",
    fontWeight: 600,
    lineHeight: 40 + "px",
  },
  paymentBox: {
    marginTop: 48 + "px",
  },
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
    cursor: 'pointer'
  },
  spinner:{
    color: '#fff'
  },
  productImg:{
    maxWidth: '100%',
  }
}));

function CheckOut() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const router = useRouter()
  const {cart} = useSelector(state=>state.products)
  const {orderId}= useSelector(state=>state.checkout)
  const [loading, setLoading] = useState(false)
  const [totalPrice,setTotalPrice] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [isUpdate,setIsUpdate]= useState(false)
  const [orderData,setOrderData] = useState({})
  const [error,setError] = useState(false)
  const [address,setAddress] = useState({
    country:'',
    state: '',
    location: '',
    street: ''
  })

  let paystackEmail= Math.floor(Math.random()*12903678)

  const config = {
    reference: new Date().getTime(),
    email: `${paystackEmail}@greenfinite.ng`,
    amount: totalPayment * 100,
    publicKey: `${process.env.NEXT_PUBLIC_PAYSTACK_KEY}`,
  };

  useEffect(()=>{
    setId(orderId)
  },[orderId])

  useEffect(()=>{
    if(id){
      dispatch(updateOrder(orderData,id,()=>{
        setLoading(false)
        setOrderData({})
        setId('')
        dispatch({
          type: SET_ADDRESS,
          payload: address
        })
        dispatch({
          type: CLEAR_CART
        })
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Order Placed Succesfully'
        }).then((result) => {
          if (result.isConfirmed) {
            router.push('/check-out/receipt')
          }
        })
      }))
    }
  },[isUpdate])

  const updatePayment = (data)=>{
    setLoading(true)
    setOrderData(data)
    setIsUpdate(!isUpdate)
  }
  const onSuccess = (reference) => {
    if (reference.status === 'success') {
      let data = {}
      data.payment_status = 'fulfilled'
      data.payment_reference = reference.reference
      updatePayment(data)
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Your payment could not be completed'
      })
    }
  };


  const onClose = () => {
    setLoading(false);
  };


  useEffect(() => {
    let price = 0;
    cart.length>0 && cart.forEach(item => {
      price += (item.qty * item.amount);
    });
    setTotalPrice(price);
    price && setTotalPayment(price+2000)
    
    return ()=> dispatch({
      type: SET_ORDER_ID,
      payload: ''
    });

  }, []);

  const placeOrder = ()=>{
    if(!address.country || !address.state || !address.street){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please provide all your billing information'
      })
      return
    }
    if(!email){
      setError(true)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please provide your email'
      })
      return
    }
    setError(false)
    let itemArray = []
    if(cart.length>0){
      cart.map(item=>{
        let details ={
          product_id : item.product_id,
          quantity: item.qty
        }
        itemArray.push(details)
      })
    }
    if(itemArray.length>0){
      setLoading(true)
      let data = {
        products: itemArray,
        recipient_email : email
      }
      dispatch(createOrder(data,successful=>{
        if(successful){
          setLoading(false)
          initializePayment(onSuccess, onClose)
        }else{
          setLoading(false)
        }
      }))
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No products in order'
      })
    }
  }

  const handleEmail = e=>{
    email && setError(false)
    !email && setError(true)
    setEmail(e.target.value)
  }

  const handleAddress = e => {
    const {name,value} = e.target
    setAddress(prevAddress=>({
      ...prevAddress,
      [name]: value
    }))
  }

  const initializePayment = usePaystackPayment(config);

  return (
    <Container style={{ marginTop: 10 + "rem", marginBottom: 20 + "rem" }}>
      <Head>
          <title>
              Greenfinite - Checkout
          </title>
          <meta
          name="description"
          content=""
          />
      </Head>
      <Grid container spacing={10}>
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
                      onChange={handleAddress}

                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="State"
                      margin="normal"
                      name="state"
                      variant="outlined"
                      onChange={handleAddress}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      label="Street Address"
                      margin="normal"
                      name="street"
                      variant="outlined"
                      onChange={handleAddress}
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
                      onChange={handleAddress}
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
                    onChange={handleAddress}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="State"
                    margin="normal"
                    name="state"
                    variant="outlined"
                    onChange={handleAddress}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    label="Street Address"
                    margin="normal"
                    name="street"
                    variant="outlined"
                    onChange={handleAddress}
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
                    onChange={handleAddress}
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
                    required
                    label="Email Address"
                    margin="normal"
                    name="emailAddress"
                    variant="outlined"
                    // onChange={e=>setEmail(e.target.value)}
                    onChange={handleEmail}
                    error={error}
                  />
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box className={classes.orderBox}>
            <Typography className={classes.orderHeader}>Your Order</Typography>

            {cart && cart.length > 0 &&
              cart.map(item=>(
                <Box className={classes.orderDetailBox} key={item.name}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Box>
                        <img src={item?.image_url} alt="product image" className={classes.productImg}/>
                      </Box>
                    </Grid>
                    <Grid item xs={9}>
                      <Box>
                        <Typography className={classes.itemNameHeader}>
                        {item.name} {" "}
                          <span className={classes.itemNameSubHeader}>({item.net_weight}g)</span>
                        </Typography>

                        <Typography className={classes.quantityHeader}>
                          Quantity: {item.qty}
                        </Typography>

                        <Typography className={classes.unitPrice}>
                        ₦{item.amount}<span className={classes.unitPriceSpan}>{`x${item.qty}`}</span>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              ))
            }
            {
              cart.length === 0 && <Typography variant="body1">No items in cart</Typography>
            }

            <Divider className={classes.divider} />

            <Box className={classes.priceSectoin}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography className={classes.priceKey}>Subtotal</Typography>
                </Grid>
                <Grid item xs={6} className={classes.priceValueAlign}>
                  <Typography className={classes.priceValue}>
                   {totalPrice?`₦${totalPrice}`: ''}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography className={classes.priceKey}>
                    Shipping{" "}
                    <span className={classes.priceKeySpan}>(Flat rate)</span>
                  </Typography>
                </Grid>
                <Grid item xs={6} className={classes.priceValueAlign}>
                  <Typography className={classes.priceValue}>
                    ₦2,000
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
                      {totalPayment ?`₦${totalPayment}`: ''}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>

          <Box className={classes.paymentBox}>
            <Box>
              <img src="../images/paymentOptions.png" alt="payment options" />
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

            <Box>
              {/* <Link href="shop/2" underline="none"> */}
                <button 
                  // href="shop/2" 
                  className={classes.paymentButton}
                  onClick={placeOrder}
                  // onClick={() => initializePayment(onSuccess, onClose)}
                  disabled={loading}
                >
                  {loading?<CircularProgress className={classes.spinner} /> :'Proceed to Payment'}
                 
                </button>
              {/* </Link> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CheckOut;
