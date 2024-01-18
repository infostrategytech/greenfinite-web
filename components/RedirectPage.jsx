import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const RedirectPage = () => {
  const { orderId } = useSelector((state) => state.checkout);

  useEffect(() => {}, [orderId]);

  return <div>RedirectPage</div>;
};

export default RedirectPage;
