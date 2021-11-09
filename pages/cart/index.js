import React from "react";
import Link from "next/link";

function Cart() {
  return (
    <div>
      <h2>this is the Cart page</h2>
      <p>
        Proceed to{" "}
        <Link href="check-out" underline="none">
          <b>Check out</b>
        </Link>
      </p>
    </div>
  );
}

export default Cart;
