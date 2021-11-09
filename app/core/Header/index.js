import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div>
      <Link href="/" underline="none" style={{ marginLeft: 2 }}>
        Home
      </Link>
      <Link href="/shop" underline="none">
        Shop
      </Link>
      <Link href="/distributors" underline="none">
        Distributors
      </Link>
      <Link href="/about-us" underline="none">
        About Us
      </Link>
      <Link href="/contact-us" underline="none">
        Contact Us
      </Link>
      <Link href="/cart" underline="none">
        Cart
      </Link>
    </div>
  );
}

export default Header;
