import React from "react";
import Link from "next/link";

function Shop() {
  return (
    <div>
      <h1>this is the Shop page</h1>
      <ul>
        <li>
          This is an item{" "}
          <Link href="shop/2" underline="none">
            <b>View</b>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Shop;
