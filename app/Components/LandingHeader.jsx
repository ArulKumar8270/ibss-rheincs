"use client";

import Link from "next/link";

export default function LandingHeader() {
  return (
    <div className="topheader ebook-landing-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <Link href="/" className="ebook-landing-header__logo">
              <img src="/images/rlogo.png"
                alt="RheinBrücke"
                className="ebook-landing-header__img" loading="lazy" />
            </Link>
          </div>

          <div className="col" />

          <div className="col-auto">
            <div className="ebook-landing-header__mail top-icon-gap">
              <span className="fa fa-envelope1" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <Link href="mailto:info@rheincs.com"> info@rheincs.com</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

