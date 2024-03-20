import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary py-[40px] sm:py-[70px]">
      <div className="container flex flex-col items-center">
        <Image
          className="h-8 w-32 sm:h-12 sm:w-44"
          src="/images/logo-white.png"
          height={48}
          width={175}
          alt="logo"
        />
        <div className="pt-16 flex items-center justify-center gap-8">
          <Link href="#">
            <Image
              src="/images/twitter.png"
              height={24}
              width={24}
              alt="social icon"
            />
          </Link>

          <Link href="#">
            <Image
              src="/images/linkedin.png"
              height={24}
              width={24}
              alt="social icon"
            />
          </Link>

          <Link href="#">
            <Image
              src="/images/fb.png"
              height={24}
              width={24}
              alt="social icon"
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/dribble.png"
              height={24}
              width={24}
              alt="social icon"
            />
          </Link>
        </div>

        <p className="mt-6 text-white">© 2023 . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
