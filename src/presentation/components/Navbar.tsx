import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full absolute">
      <div className="mx-auto container flex items-center justify-between py-4 lg:py-10">
        <Link href="/" className="logo">
          <Image src="./images/logo.svg" width={60} height={60} alt="React" />
        </Link>
        <ul className="hidden lg:flex justify-center items-center gap-12 text-lg">
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">What We do</Link>
          </li>
          <li>
            <Link href="#">Our work</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Say hi</Link>
          </li>
        </ul>

        <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
          <path
            d="M4.55249 18H23.6578M4.55249 6H23.6578H4.55249ZM4.55249 12H23.6578H4.55249Z"
            stroke="#0A142F"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
