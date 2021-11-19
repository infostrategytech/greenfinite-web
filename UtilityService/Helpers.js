import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/actions/cart";
import { useDispatch } from "react-redux";
toast.configure();
export const formatMoney = (money) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(money);
};

export const AbujaOffices = [
  "IC World Center, Gwarimpa",
  "Bakangizo Supermarket,Gwarimpa",
  "Grand Square Central Businees District",
  "Next Cash and Carry, Kado",
  "Tonia Pharmacy, Capital Hub",
  "Wholesome Health Stores,Nawa Complex,Banex-Gwarimpa expressway",
  "Pyramid Pharmacy, Garki",
  "Dunes Center, Maitama",
  "Baobab Kitchen, Garki",
  "Dunes Center, Maitama",
  "Exclusive Supermarket, Wuse 2",
  "4U Supermarket, Wuse 2",
  "Mcray Supermarket, Wuse 2",
  "@satapremiummart,Old Garki Market",
  "Maitama Stores,Maitama Shopping Complex",
  "Wuse Within, Lokogoma",
  "Tefcon Supermarket, Lokogoma",
  "Cherries Hypermarket,CityCenter,Gimbiya Strret, Garki",
  "Garki Supermarket, Garki",
  "Maple Supermarket, Gudu",
  "Dollar Pharmacy, Asokoro",
  "Day Spa, Wuse 2",
  "Faxx Supermarket, Apo",
];

export const KanoOffices = ["Kano mart", "Sheshi stores"];

export const OyoOffices = [
  "Mosh Pharmacy",
  "Wimpy supermarket",
  "glory to glory supermarket ",
];

export const LagosOffices = [
  "Victory drugs",
  "Shop on click",
  "Goodness supermarket",
  "Koli supermarket",
  "Confirm supermarket",
  "New cruise home store",
  "Baykins pharmacy and mart",
  "Everybright stores",
  "Wmart pharmacy",
];

export const KwaraOffices = [
  "Martrite superstores",
  "Liyagold stores",
  "Mamtess shopping mall",
];
