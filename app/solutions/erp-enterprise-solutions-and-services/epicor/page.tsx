"use client";

import React from "react";
import CommomLayout from "../../../Components/CommomLayout";
import Link from "next/link";
import TestimonialandAward from "../../../Components/TestimonialandAward";
import {useTranslation} from "../../../hooks/useTranslation";

export default function EnterpriseSolutions() {
  const { t, language } = useTranslation();
  return (
    <CommomLayout>
      <>
        {/* Header Start */}
        {/*?php include "navbar.php" ?*/}
        {/* Header End */}
        {/* Hero Section Start*/}
        <div className="hero brainsec bluebg digi1 mobilepd40 pdb0">
          <div className="container">
            <div className="row section-row align-items-center  digitalsec">
              <div className="col-sm-6">
                <div className="section-title wow fadeInUp">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Drive operational excellence with Epicor ERP")}
                  </h2>
                  <p className="epic16">
                    {t("Scalable, industry-specific solutions that empower growth and efficiency.")}
                  </p>
                  <p>
                    {t("RheinBrücke delivers industry-specific Epicor ERP solutions that streamline business processes, provide real-time insights, and scale with your organisation. From manufacturing to distribution, our proven delivery approach enables smoother operations, faster decision-making, and measurable impact across your enterprise.")}
                  </p>
                  <div className="ser-btn mt-5">
                    <Link href="/contact-us" className="animated-svg-link">
                      {t("Request an Epicor ERP Consultation")}
                      <span className="svg-container ">
                        <span className=" right">
                          <svg
                            width={24}
                            height={23}
                            viewBox="0 0 24 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="4.79995"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="12.7992"
                              cy="1.6"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="22.4008"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="1.6"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="6.40078"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="11.1996"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="19.1996"
                              cy="14.4"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="17.6"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="12.7992"
                              cy="20.8"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="19.1996"
                              cy="8.00002"
                              r="1.6"
                              fill="#535353"
                            />
                          </svg>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="digiban text-center">
                  {/*<img src="/images/digitalban.png" alt="">*/}
                  <svg
                    width={300}
                    height={597}
                    viewBox="0 0 300 597"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <filter
                        id="filter0_d_1699_17987"
                        x="20.625"
                        y="37.8164"
                        width="258.75"
                        height="258.75"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="9.375"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect1_dropShadow_1699_17987"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="22.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.286275 0 0 0 0 0.603922 0 0 0 0 0.603922 0 0 0 0.78 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1699_17987"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1699_17987"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1699_17987"
                        x1={150}
                        y1="327.191"
                        x2={150}
                        y2="627.191"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#008080" />
                        <stop offset="0.67478" stopColor="#082326" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1699_17987"
                        x1="150.5"
                        y1="0.191437"
                        x2="150.5"
                        y2="342.191"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#499A9A" stopOpacity={0} />
                        <stop offset="0.5" stopColor="#499A9A" />
                        <stop offset={1} stopColor="#499A9A" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_1699_17987"
                        x1="95.9077"
                        y1="0.191437"
                        x2="95.9077"
                        y2="342.191"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#499A9A" stopOpacity={0} />
                        <stop offset="0.5" stopColor="#499A9A" />
                        <stop offset={1} stopColor="#499A9A" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_1699_17987"
                        x1="204.09"
                        y1="0.191437"
                        x2="204.09"
                        y2="342.191"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#499A9A" stopOpacity={0} />
                        <stop offset="0.5" stopColor="#499A9A" />
                        <stop offset={1} stopColor="#499A9A" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_1699_17987"
                        x1="111.031"
                        y1="0.191437"
                        x2="111.031"
                        y2="342.191"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#499A9A" stopOpacity={0} />
                        <stop offset="0.5" stopColor="#499A9A" />
                        <stop offset={1} stopColor="#499A9A" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_1699_17987"
                        x1="188.969"
                        y1="0.191437"
                        x2="188.969"
                        y2="342.191"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#499A9A" stopOpacity={0} />
                        <stop offset="0.5" stopColor="#499A9A" />
                        <stop offset={1} stopColor="#499A9A" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient
                        id="paint6_linear_1699_17987"
                        x1="126.152"
                        y1="0.191437"
                        x2="126.152"
                        y2="342.191"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#499A9A" stopOpacity={0} />
                        <stop offset="0.5" stopColor="#499A9A" />
                        <stop offset={1} stopColor="#499A9A" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient
                        id="paint7_linear_1699_17987"
                        x1="173.846"
                        y1="0.191437"
                        x2="173.846"
                        y2="342.191"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#499A9A" stopOpacity={0} />
                        <stop offset="0.5" stopColor="#499A9A" />
                        <stop offset={1} stopColor="#499A9A" stopOpacity={0} />
                      </linearGradient>
                      <clipPath id="clip0_1699_17987">
                        <rect
                          width={300}
                          height={269}
                          fill="white"
                          transform="translate(0 327.191)"
                        />
                      </clipPath>
                      <clipPath id="clip1_1699_17987">
                        <rect
                          width={119}
                          height={16}
                          fill="white"
                          transform="translate(91 159.191)"
                        />
                      </clipPath>
                    </defs>
                    {/* Bottom Graphic */}
                    <g clipPath="url(#clip0_1699_17987)">
                      <circle
                        cx={150}
                        cy="477.191"
                        r={150}
                        fill="url(#paint0_linear_1699_17987)"
                      />
                      <path
                        d="M71.3242 471.847H82.4163C86.0058 471.847 87.3088 474.36 87.3088 476.672C87.3088 478.984 86.2556 480.507 84.2982 481.141V481.192C85.878 481.422 86.8074 482.919 86.908 485.052C87.0591 488.43 87.1597 489.269 87.7619 489.98H84.9506C84.5227 489.472 84.5227 488.71 84.3988 486.526C84.2226 483.275 83.1442 482.284 80.9351 482.284H73.9844V489.978H71.3242V471.845V471.847ZM81.4133 479.948C84.0232 479.948 84.6505 478.35 84.6505 477.078C84.6505 475.352 83.6225 474.182 81.4888 474.182H73.9844V479.946H81.4133V479.948Z"
                        fill="white"
                      />
                      <path
                        d="M89.8711 471.696H92.3803V478.679H92.4306C93.6097 476.825 95.693 476.216 97.5749 476.216C100.737 476.216 103.097 477.587 103.097 480.914V489.98H100.588V481.422C100.588 479.466 99.3833 478.35 96.6979 478.35C94.4152 478.35 92.3822 479.696 92.3822 482.311V489.98H89.873V471.696H89.8711Z"
                        fill="white"
                      />
                      <path
                        d="M108.242 484.088C108.444 486.831 110.852 488.305 113.084 488.305C114.515 488.305 116.473 487.823 117.327 485.944H119.987C118.732 489.143 115.795 490.438 113.21 490.438C108.091 490.438 105.582 487.162 105.582 483.328C105.582 479.494 108.091 476.218 113.21 476.218C116.674 476.218 120.337 478.25 120.337 483.761V484.092H108.24L108.242 484.088ZM117.677 482.107C117.301 479.696 115.443 478.35 113.084 478.35C110.726 478.35 108.693 479.721 108.316 482.107H117.677Z"
                        fill="white"
                      />
                      <path
                        d="M122.898 471.696H125.408V474.49H122.898V471.696ZM122.898 476.672H125.408V489.98H122.898V476.672Z"
                        fill="white"
                      />
                      <path
                        d="M128.469 476.672H130.978V478.679H131.028C132.207 476.825 134.291 476.216 136.173 476.216C139.334 476.216 141.694 477.587 141.694 480.914V489.98H139.185V481.422C139.185 479.466 137.981 478.349 135.296 478.349C133.013 478.349 130.98 479.696 130.98 482.311V489.98H128.471V476.672H128.469Z"
                        fill="white"
                      />
                      <path
                        d="M144.732 471.847H154.394C157.832 471.847 159.613 473.473 159.613 476.316C159.613 478.093 158.81 479.897 156.099 480.481V480.532C159.588 480.889 160.216 483.453 160.216 485.001C160.216 486.957 159.162 489.978 154.217 489.978H144.732V471.845V471.847ZM145.886 480.076H153.867C154.794 480.076 158.46 480.076 158.46 476.394C158.46 472.713 155.6 472.864 153.691 472.864H145.886V480.076ZM145.886 488.965H153.968C154.87 488.965 159.062 488.965 159.062 484.901C159.062 481.093 155.648 481.093 153.666 481.093H145.886V488.965Z"
                        fill="white"
                      />
                      <path
                        d="M162.752 476.978H163.908V480.05H163.958C164.812 477.764 166.769 476.571 169.279 476.571C169.629 476.571 169.881 476.621 170.231 476.723V477.891C169.956 477.789 169.629 477.738 168.901 477.738C165.563 477.738 163.908 480.303 163.908 482.944V489.978H162.752V476.976V476.978Z"
                        fill="white"
                      />
                      <path
                        d="M184.107 489.98H182.953V487.39H182.903C182.099 488.939 180.419 490.385 177.481 490.385C171.584 490.385 171.584 486.577 171.584 485.001V476.976H172.74V484.95C172.74 487.591 173.72 489.368 177.509 489.368C181.298 489.368 182.955 486.982 182.955 484.568V476.974H184.109V489.976L184.107 489.98ZM174.624 472.101H175.778V474.793H174.624V472.101ZM179.942 472.101H181.096V474.793H179.942V472.101Z"
                        fill="white"
                      />
                      <path
                        d="M198.869 481.067C198.718 479.415 196.511 477.587 193.423 477.587C189.357 477.587 187.324 480.509 187.324 483.606C187.324 485.714 188.78 489.37 193.423 489.37C196.007 489.37 198.466 488.126 199.045 485.434H200.199C199.521 488.838 196.66 490.385 193.425 490.385C189.21 490.385 186.172 487.642 186.172 483.604C186.172 479.033 189.485 476.571 193.425 476.571C197.365 476.571 199.874 478.855 200.025 481.065H198.869V481.067Z"
                        fill="white"
                      />
                      <path
                        d="M202.254 471.847H203.41V483.885L212.57 476.976H214.275L207.774 481.878L214.877 489.98H213.296L206.872 482.615L203.408 485.205V489.98H202.252V471.847H202.254Z"
                        fill="white"
                      />
                      <path
                        d="M216.611 483.732C216.686 486.982 218.868 489.368 222.733 489.368C226.597 489.368 227.753 486.829 228.204 485.662H229.358C228.28 488.937 226.02 490.385 222.607 490.385C218.216 490.385 215.455 487.693 215.455 483.377C215.455 480.66 217.161 476.571 222.632 476.571C227.099 476.571 229.658 479.566 229.709 483.732H216.609H216.611ZM228.406 482.717C227.928 479.161 225.469 477.587 222.508 477.587C219.196 477.587 217.112 479.619 216.611 482.717H228.406Z"
                        fill="white"
                      />
                      <path
                        d="M118.146 437.007C118.146 440.114 115.659 442.632 112.588 442.632C109.517 442.632 107.029 440.114 107.029 437.007C107.029 433.9 109.517 431.384 112.588 431.384C115.659 431.384 118.146 433.902 118.146 437.007Z"
                        fill="white"
                      />
                      <path
                        d="M140.377 437.007C140.377 440.114 137.889 442.632 134.818 442.632C131.748 442.632 129.26 440.114 129.26 437.007C129.26 433.9 131.748 431.384 134.818 431.384C137.889 431.384 140.377 433.902 140.377 437.007Z"
                        fill="white"
                      />
                      <path
                        d="M162.609 437.007C162.609 440.114 160.121 442.632 157.053 442.632C153.984 442.632 151.494 440.114 151.494 437.007C151.494 433.9 153.982 431.384 157.053 431.384C160.123 431.384 162.609 433.902 162.609 437.007Z"
                        fill="white"
                      />
                      <path
                        d="M184.842 437.007C184.842 440.114 182.354 442.632 179.283 442.632C176.213 442.632 173.727 440.114 173.727 437.007C173.727 433.9 176.214 431.384 179.283 431.384C182.352 431.384 184.842 433.902 184.842 437.007Z"
                        fill="white"
                      />
                      <path
                        d="M129.262 453.88C129.262 456.988 126.774 459.505 123.703 459.505C120.632 459.505 118.145 456.988 118.145 453.88C118.145 450.773 120.632 448.257 123.703 448.257C126.774 448.257 129.262 450.775 129.262 453.88Z"
                        fill="white"
                      />
                      <path
                        d="M151.494 453.88C151.494 456.988 149.006 459.505 145.936 459.505C142.865 459.505 140.379 456.988 140.379 453.88C140.379 450.773 142.867 448.257 145.936 448.257C149.004 448.257 151.494 450.775 151.494 453.88Z"
                        fill="white"
                      />
                      <path
                        d="M173.727 453.88C173.727 456.988 171.239 459.505 168.168 459.505C165.097 459.505 162.609 456.988 162.609 453.88C162.609 450.773 165.099 448.257 168.168 448.257C171.237 448.257 173.727 450.775 173.727 453.88Z"
                        fill="white"
                      />
                    </g>
                    {/* PATHS (Lines) with IDs for animation reference */}
                    <path
                      id="path_center_1699"
                      d="M150 0.191437V342.191"
                      stroke="url(#paint1_linear_1699_17987)"
                      strokeWidth="1.5"
                    />
                    <path
                      id="path_left_outer_1699"
                      d="M89.5098 0.191437L90.6697 4.58523C98.3946 33.8483 102.306 63.987 102.306 94.2525V342.191"
                      stroke="url(#paint2_linear_1699_17987)"
                      strokeWidth="1.5"
                    />
                    <path
                      id="path_right_outer_1699"
                      d="M210.488 0.191437L209.328 4.58523C201.603 33.8483 197.692 63.987 197.692 94.2525V342.191"
                      stroke="url(#paint3_linear_1699_17987)"
                      strokeWidth="1.5"
                    />
                    <path
                      id="path_left_mid_1699"
                      d="M104.633 0.191437L105.793 4.58524C113.518 33.8483 117.429 63.987 117.429 94.2525V342.191"
                      stroke="url(#paint4_linear_1699_17987)"
                      strokeWidth="1.5"
                    />
                    <path
                      id="path_right_mid_1699"
                      d="M195.367 0.191437L194.207 4.58523C186.482 33.8483 182.571 63.987 182.571 94.2525V342.191"
                      stroke="url(#paint5_linear_1699_17987)"
                      strokeWidth="1.5"
                    />
                    <path
                      id="path_left_inner_1699"
                      d="M119.754 0.191437L120.914 4.58523C128.639 33.8483 132.55 63.987 132.55 94.2525V342.191"
                      stroke="url(#paint6_linear_1699_17987)"
                      strokeWidth="1.5"
                    />
                    <path
                      id="path_right_inner_1699"
                      d="M180.244 0.191437L179.084 4.58523C171.359 33.8483 167.448 63.987 167.448 94.2525V342.191"
                      stroke="url(#paint7_linear_1699_17987)"
                      strokeWidth="1.5"
                    />
                    {/* DOTS (Animated) */}
                    {/* Left Outer: Down (Start to End) */}
                    <circle r="2.32653" fill="#28B67E">
                      <animateMotion dur="4.5s" repeatCount="indefinite" begin="0.2s">
                        <mpath href="#path_left_outer_1699" />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;0"
                        keyTimes="0;0.5;1"
                        dur="4.5s"
                        repeatCount="indefinite"
                        begin="0.2s"
                      />
                    </circle>
                    {/* Left Mid: Up (End to Start) */}
                    <circle r="2.32653" fill="#28B67E">
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        begin="1.2s"
                        keyPoints="1;0"
                        keyTimes="0;1"
                      >
                        <mpath href="#path_left_mid_1699" />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;0"
                        keyTimes="0;0.5;1"
                        dur="4s"
                        repeatCount="indefinite"
                        begin="1.2s"
                      />
                    </circle>
                    {/* Left Inner: Up (End to Start) */}
                    <circle r="2.32653" fill="#28B67E">
                      <animateMotion
                        dur="3.5s"
                        repeatCount="indefinite"
                        begin="0.5s"
                        keyPoints="1;0"
                        keyTimes="0;1"
                      >
                        <mpath href="#path_left_inner_1699" />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;0"
                        keyTimes="0;0.5;1"
                        dur="3.5s"
                        repeatCount="indefinite"
                        begin="0.5s"
                      />
                    </circle>
                    {/* Center: Down (Start to End) */}
                    <circle r="2.32653" fill="#28B67E">
                      <animateMotion dur="3s" repeatCount="indefinite" begin="0s">
                        <mpath href="#path_center_1699" />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;0"
                        keyTimes="0;0.5;1"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="0s"
                      />
                    </circle>
                    {/* Right Inner: Down (Start to End) */}
                    <circle r="2.32653" fill="#28B67E">
                      <animateMotion dur="3.6s" repeatCount="indefinite" begin="0.7s">
                        <mpath href="#path_right_inner_1699" />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;0"
                        keyTimes="0;0.5;1"
                        dur="3.6s"
                        repeatCount="indefinite"
                        begin="0.7s"
                      />
                    </circle>
                    {/* Right Mid: Up (End to Start) */}
                    <circle r="2.32653" fill="#28B67E">
                      <animateMotion
                        dur="4.1s"
                        repeatCount="indefinite"
                        begin="1.5s"
                        keyPoints="1;0"
                        keyTimes="0;1"
                      >
                        <mpath href="#path_right_mid_1699" />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;0"
                        keyTimes="0;0.5;1"
                        dur="4.1s"
                        repeatCount="indefinite"
                        begin="1.5s"
                      />
                    </circle>
                    {/* Right Outer: Down (Start to End) */}
                    <circle r="2.32653" fill="#28B67E">
                      <animateMotion dur="4.6s" repeatCount="indefinite" begin="0.3s">
                        <mpath href="#path_right_outer_1699" />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;0"
                        keyTimes="0;0.5;1"
                        dur="4.6s"
                        repeatCount="indefinite"
                        begin="0.3s"
                      />
                    </circle>
                    {/* Top Icon Group */}
                    <g filter="url(#filter0_d_1699_17987)">
                      <circle cx={150} cy="167.191" r={75} fill="white" />
                      <circle
                        cx={150}
                        cy="167.191"
                        r="74.0625"
                        stroke="#499A9A"
                        strokeWidth="1.875"
                      />
                    </g>
                    <g clipPath="url(#clip1_1699_17987)">
                      <path
                        d="M181.806 170.411C181.812 170.525 181.793 170.638 181.753 170.744C181.713 170.85 181.651 170.947 181.572 171.027C181.492 171.107 181.398 171.17 181.294 171.211C181.189 171.252 181.078 171.27 180.966 171.265H171.105C170.889 171.255 170.685 171.161 170.535 171.002C170.386 170.843 170.302 170.631 170.303 170.411V163.618C170.303 163.511 170.323 163.405 170.364 163.306C170.404 163.207 170.463 163.117 170.538 163.041C170.612 162.965 170.701 162.905 170.798 162.864C170.895 162.823 171 162.802 171.105 162.802H180.966C181.074 162.797 181.183 162.814 181.284 162.853C181.386 162.892 181.479 162.951 181.558 163.027C181.636 163.103 181.699 163.195 181.742 163.296C181.784 163.398 181.806 163.507 181.806 163.618V170.411ZM205.574 170.139C207.6 169.828 208.593 168.431 208.593 166.295V163.074C208.593 160.589 207.179 159.191 204.772 159.191H189.717V174.837H193.5V162.802H203.973C204.081 162.797 204.187 162.814 204.287 162.853C204.387 162.892 204.477 162.952 204.553 163.029C204.628 163.106 204.688 163.198 204.726 163.299C204.764 163.401 204.781 163.509 204.776 163.618V165.753C204.781 165.861 204.764 165.97 204.726 166.071C204.688 166.173 204.628 166.265 204.553 166.342C204.477 166.419 204.387 166.478 204.287 166.517C204.187 166.556 204.081 166.574 203.973 166.568H195.067V170.179H201.182L204.391 174.838H209.016L205.574 170.139ZM170.341 159.191C167.896 159.191 166.52 160.628 166.52 163.074V170.916C166.52 173.4 167.934 174.798 170.341 174.798H181.768C184.175 174.798 185.589 173.362 185.589 170.916V163.074C185.589 160.589 184.175 159.191 181.768 159.191H170.341ZM145.462 170.916C145.462 173.4 146.876 174.798 149.284 174.798H162.583V171.226H150.086C149.977 171.226 149.87 171.204 149.77 171.161C149.67 171.117 149.58 171.054 149.505 170.974C149.43 170.894 149.371 170.8 149.333 170.696C149.295 170.593 149.278 170.483 149.284 170.372V163.618C149.284 163.401 149.368 163.194 149.519 163.041C149.669 162.888 149.873 162.802 150.086 162.802H162.621V159.191H149.284C146.838 159.191 145.462 160.628 145.462 163.074V170.916ZM141.331 159.191H137.513V174.837H141.331V159.191ZM114.656 159.191V174.837H118.477V162.802H128.874C128.984 162.791 129.095 162.804 129.2 162.84C129.304 162.877 129.4 162.936 129.479 163.013C129.559 163.091 129.622 163.185 129.662 163.289C129.703 163.394 129.721 163.506 129.715 163.618V165.753C129.721 165.865 129.703 165.977 129.662 166.081C129.622 166.186 129.559 166.28 129.479 166.357C129.4 166.435 129.304 166.494 129.2 166.53C129.095 166.566 128.984 166.579 128.874 166.568H120.277V170.179H129.678C132.124 170.179 133.5 168.743 133.5 166.297V163.074C133.5 160.589 132.086 159.191 129.678 159.191H114.656ZM94.8215 159.191C92.376 159.191 91 160.628 91 163.074V170.916C91 173.4 92.4139 174.798 94.8215 174.798H109.653V171.498H95.589C95.4835 171.498 95.3791 171.477 95.2817 171.436C95.1843 171.395 95.0958 171.335 95.0212 171.259C94.9467 171.184 94.8876 171.094 94.8473 170.995C94.807 170.896 94.7864 170.789 94.7864 170.682V163.307C94.7813 163.197 94.7983 163.087 94.8363 162.983C94.8743 162.88 94.9326 162.785 95.0077 162.706C95.0827 162.626 95.1729 162.562 95.2728 162.519C95.3728 162.475 95.4803 162.453 95.589 162.453H105.448C105.56 162.448 105.672 162.466 105.776 162.507C105.881 162.548 105.976 162.611 106.055 162.691C106.134 162.771 106.196 162.868 106.236 162.974C106.276 163.08 106.294 163.193 106.289 163.307V164.743C106.289 164.852 106.267 164.96 106.224 165.059C106.181 165.159 106.118 165.248 106.038 165.321C105.959 165.394 105.866 165.449 105.764 165.483C105.662 165.517 105.555 165.529 105.448 165.519H96.3564V168.818H106.252C108.697 168.818 110.073 167.343 110.073 164.936V163.074C110.073 160.589 108.659 159.191 106.252 159.191H94.8215Z"
                        fill="#025064"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        {/* Hero Section Start*/}
        <div className="hero buildsection epicormobile">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 videopd0 order2">
                <div className="hero-bg-video buildsec">
                  <video autoPlay={true} muted={true} loop={true} id="myVideo" height={800}>
                    <source src="/videos/epicor.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-content buildsecont epicorfst">
                  <div className="section-title">
                    <div className="hero-video-content wow fadeInUp mt-4">
                      <h2 className="text-anime-style-2" data-cursor="-opaque">
                        {t("Epicor Kinetic ERP")}
                      </h2>
                      <p>
                        {t("Epicor Kinetic ERP delivers industry-focused functionality that simplifies complex processes, improves operational visibility, and drives efficiency across manufacturing, distribution, and retail businesses. Built on a modern, cloud-ready architecture, it enables agility, scalability, and continuous innovation.")}
                      </p>
                      <p>
                        {t("Empower your business with agile, industry-ready ERP from Epicor.")}
                      </p>
                      <p>
                        {t("As an Epicor Premium Partner, RheinBrücke brings over a decade of proven expertise in Epicor implementation, migration, rollouts, and support across 45+ countries, with a strong focus on the EMEA region.")}
                      </p>
                      <p>
                        {t("Epicor ERP empowers your business with agile, industry-tailored solutions that streamline operations, reduce costs, and enhance performance. At RheinBrücke, we combine the power of Epicor Kinetic with our SCALE methodology, delivering industry-wide experience, deep domain knowledge across manufacturing, distribution, construction, retail, and more, and a commitment to timely, high-quality project delivery.")}
                      </p>
                      <p>
                        {t("RheinBrücke’s SCALE methodology delivers predictable outcomes, deep industry alignment, and high-quality project execution across the globe.")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        <section className="grid-section systemview pd50">
          <div className="grid-overlay" />
          <div className="container">
            <div className="content gridsec">
              <div className="section-title">
                <div className="hero-video-content wow fadeInUp mt-4">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("The Epicor Advantage")}
                  </h2>
                  <p>
                    {t("Empowering businesses to accelerate growth and enhance efficiency through:")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="skew-carousel owl-carousel systemview">
            <div className="item">
              <div className="inner">
                <img src="/images/g1.png" alt="Automate ERP process icon" />
                <p>
                  {t("Streamlined and automated business processes using a unified ERP platform")}
                </p>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <img src="/images/g2.png" alt="ERP support and growth icon" />
                <p>{t("Scalable architecture to support business growth and cost efficiency")}</p>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <img src="/images/g3.png" alt="Supply chain and inventory management in ERP icon" />
                <p>
                  {t("Optimized supply chain and inventory management for better control")}
                </p>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <img src="/images/g4.png" alt="ERP support icon" />
                <p>{t("Built-in compliance and regulatory support across regions")}</p>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <img src="/images/g5.png" alt="ERP data insights icon" />
                <p>{t("Real-time insights enabling faster, data-driven decision-making")}</p>
              </div>
            </div>
            {/* Duplicate for seamless marquee */}
            <div className="item">
              <div className="inner">
                <img src="/images/g1.png" alt="Automate ERP process icon" />
                <p>
                  {t("Streamlined and automated business processes using a unified ERP platform")}
                </p>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <img src="/images/g2.png" alt="ERP support and growth icon" />
                <p>{t("Scalable architecture to support business growth and cost efficiency")}</p>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <img src="/images/g3.png" alt="Supply chain and inventory management in ERP icon" />
                <p>
                  {t("Optimized supply chain and inventory management for better control")}
                </p>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <img src="/images/g4.png" alt="ERP support icon" />
                <p>{t("Built-in compliance and regulatory support across regions")}</p>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <img src="/images/g5.png" alt="ERP data insights icon" />
                <p>{t("Real-time insights enabling faster, data-driven decision-making")}</p>
              </div>
            </div>
          </div>
          {/* your content */}
          <div className="container">
            <div className="content text-left">
              <div className="section-title ">
                <div className="hero-video-content1 wow fadeInUp mt-4">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Epicor ERP Solutions")}
                  </h2>
                  <p>
                    {t("Epicor ERP addresses business complexities with modern, cloud-enabled solutions built for industry. With embedded AI, automation, analytics, and deep functionality, Epicor helps organizations streamline operations, scale globally, and stay competitive")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid-section1 mobileview pd50">
          {/* <div class="grid-overlay"></div> */}
          <div className="container">
            <div className="content gridsec">
              <div className="section-title">
                <div className="hero-video-content wow fadeInUp mt-4">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("The Epicor Advantage")}
                  </h2>
                  <p>
                    {t("Modern enterprises need agile, connected systems to stay competitive, improve productivity, and make data-driven decisions. Many organisations struggle with:")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="testimonial-slider-marquee enterslide gridmobilsec">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="MeRLIN-service">
                      <div className="inner">
                        <img src="/images/g1.png" alt="Automate ERP process icon" />
                        <p>
                          {t("Streamlined and automated business processes using a unified ERP platform")}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="MeRLIN-service">
                      <div className="inner">
                        <img src="/images/g2.png" alt="ERP support and growth icon" />
                        <p>
                          {t("Scalable architecture to support business growth and cost efficiency")}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="MeRLIN-service">
                      <div className="inner">
                        <img src="/images/g3.png" alt="Supply chain and inventory management in ERP icon" />
                        <p>
                  {t("Optimized supply chain and inventory management for better control")}
                </p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="MeRLIN-service">
                      <div className="inner">
                        <img src="/images/g4.png" alt="ERP support icon" />
                        <p>
                          {t("Built-in compliance and regulatory support across regions")}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="MeRLIN-service">
                      <div className="inner">
                        <img src="/images/g5.png" alt="ERP data insights icon" />
                        <p>
                          {t("Real-time insights enabling faster, data-driven decision-making")}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                </div>
                <div className="testimonial-btn">
                  <div className="testimonial-button-prev">
                    <div className="animated-svg-link1 btn-style-3">
                      <span className="svg-container ">
                        <span className=" left">
                          <svg
                            width={24}
                            height={23}
                            viewBox="0 0 24 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="4.79995"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="12.7992"
                              cy="1.6"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="22.4008"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="1.6"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="6.40078"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="11.1996"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="19.1996"
                              cy="14.4"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="17.6"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="12.7992"
                              cy="20.8"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="19.1996"
                              cy="8.00002"
                              r="1.6"
                              fill="#535353"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                  <span className="testspace">1/6</span>
                  <div className="testimonial-button-next">
                    <div className="animated-svg-link1 btn-style-3">
                      <span className="svg-container ">
                        <span className=" left">
                          <svg
                            width={24}
                            height={23}
                            viewBox="0 0 24 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="4.79995"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="12.7992"
                              cy="1.6"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="22.4008"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="1.6"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="6.40078"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="11.1996"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="19.1996"
                              cy="14.4"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="17.6"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="12.7992"
                              cy="20.8"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="19.1996"
                              cy="8.00002"
                              r="1.6"
                              fill="#535353"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="content text-left">
              <div className="section-title ">
                <div className="hero-video-content1 wow fadeInUp mt-4">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Epicor ERP Solutions")}
                  </h2>
                  <p>
                    {t("Epicor ERP addresses business complexities with modern, cloud-enabled solutions built for industry. With embedded AI, automation, analytics, and deep functionality, Epicor helps organizations streamline operations, scale globally, and stay competitive")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section Start*/}
        <div className="hero1  mobilescale">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content buildsecont pd50">
                  <div className="section-title">
                    <div className="hero-video-content wow fadeInUp mt-4">
                      <h2
                        className="text-anime-style-2 text-dark"
                        data-cursor="-opaque"
                      >
                        {t("RheinBrücke SCALE Methodology – The 4 Service Pillars")}
                      </h2>
                      <p>
                      {t("RheinBrücke’s proprietary SCALE methodology ensures structured, risk-mitigated Epicor ERP implementations.")}

                      </p>
                      <p>
                        {t("The methodology’s five key stages-Prepare, Plan, Design, Validate, and Deploy-enable structured execution.")}
                      </p>
                      <p>
                        {t("SCALE integrates the strengths of Waterfall and Agile delivery models to optimize performance, quality, and timelines.")}
                      </p>
                      <p>
                        {t("RheinBrücke delivers Epicor ERP through four key service pillars, ensuring maximum value and successful outcomes")}

                      </p>
                    </div>
                  </div>
                  <div className="pill-points">
                    <div className="challenge-point-waber self-service">
                      <img src="/images/pill1.svg" alt="" />
                      <div className="pill-cont">
                        <h5>{t("Solution Architecture")}</h5>

                        <p>
                          {t("Design and configure the ERP system to fit your business needs, processes, and industry requirements.")}
                        </p>
                      </div>
                    </div>
                    <div className="challenge-point-waber self-service">
                      <img src="/images/pill2.svg" alt="" />
                      <div className="pill-cont">
                        <h5> 
                          {t("Project Management")}</h5>
                        <p>
                          {t("End-to-end oversight of implementation, migration, and rollouts, ensuring timelines, budgets, and quality standards are met.")}
                        </p>
                      </div>
                    </div>
                    <div className="challenge-point-waber self-service">
                      <img src="/images/pill3.svg" alt="" />
                      <div className="pill-cont">
                      <h5> 
                        {t("Consulting")}
                        </h5>
                        <p>
                          {t("Expert guidance on process optimization, industry best practices, and aligning ERP functionality with business strategy.")}

                        </p>
                      </div>
                    </div>
                    <div className="challenge-point-waber self-service">
                      <img src="/images/pill4.svg" alt="" />
                      <div className="pill-cont">
                        <h5>{t("Customer Excellence")}</h5>
                        <p>{t("Ongoing support, training, and service to ensure adoption, performance, and ROI from your Epicor investment.")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pillers">
                  <img src="/images/pillers.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        {/* Our Testimonial Section Start */}
        <div className="our-testimonial bluebg epicoroffer">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-6">
                <div className="section-title ">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Our Epicor Service Offerings")}

                  </h2>
                  <p>
                    {t("We provide end-to-end Epicor ERP services to maximize your investment and transform your operations")}

                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-12">
                {/* Testimonial Slider Start */}
                <div className=" testslide1  testianimdot systemview">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item flip-card ">
                          <div className="flip-card-inner">
                            {/* Front Side */}
                            <div className="flip-card-front">
                              {/* Your current service content */}
                              <div className="service-item-header ">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.3"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="white"
                                      />
                                      <line
                                        opacity="0.3"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="white"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="#fff"
                                      />
                                      <g clipPath="url(#clip0_3834_6912)">
                                        <path
                                          d="M104.162 42.3279L102.451 44.0393C101.9 44.5906 101.794 45.4464 102.195 46.115L104.868 50.5691C104.249 51.7527 103.731 52.9971 103.325 54.2911L98.287 55.5504C97.5306 55.7395 97 56.4192 97 57.1989V65.1019C97 65.8816 97.5306 66.5613 98.2871 66.7503L103.325 68.0097C103.731 69.3037 104.249 70.5481 104.868 71.7317L102.195 76.1858C101.794 76.8543 101.9 77.7102 102.451 78.2615L108.039 83.8498C108.591 84.4011 109.446 84.5065 110.115 84.1054L114.569 81.4329C115.753 82.0517 116.997 82.5698 118.291 82.9761L119.551 88.0137C119.74 88.7701 120.419 89.3008 121.199 89.3008H129.102C129.882 89.3008 130.561 88.7702 130.75 88.0137L132.01 82.9761C133.304 82.5698 134.548 82.0517 135.732 81.4329L140.186 84.1054C140.854 84.5065 141.71 84.4011 142.262 83.8498L147.85 78.2615C148.401 77.7102 148.507 76.8543 148.105 76.1858L145.433 71.7317C146.052 70.5481 146.57 69.3037 146.976 68.0097L152.014 66.7503C152.77 66.5613 153.301 65.8816 153.301 65.1019V57.1989C153.301 56.4192 152.77 55.7395 152.014 55.5504L146.976 54.2911C146.57 52.9971 146.052 51.7527 145.433 50.5691L148.105 46.115C148.507 45.4464 148.401 44.5906 147.85 44.0393L142.262 38.451C141.71 37.8996 140.854 37.7943 140.186 38.1954L135.732 40.8678C134.548 40.2491 133.304 39.7309 132.01 39.3247L130.75 34.2871C130.561 33.5306 129.882 33 129.102 33H121.199C120.419 33 119.74 33.5306 119.55 34.2871L118.291 39.3247C116.997 39.7309 115.753 40.2491 114.569 40.8678L110.115 38.1954C109.446 37.7943 108.59 37.8996 108.039 38.451L106.982 39.5079"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M147.824 64.1705C147.955 63.1824 148.022 62.1743 148.022 61.1504C148.022 60.1266 147.955 59.1185 147.824 58.1304"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M139.047 79.3185C140.652 78.089 142.089 76.6518 143.318 75.0469"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M122.131 83.825C123.119 83.9553 124.127 84.0226 125.151 84.0226C126.175 84.0226 127.183 83.9552 128.171 83.825"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M106.982 75.0469C108.212 76.6517 109.649 78.089 111.254 79.3185"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M102.475 58.1304C102.345 59.1185 102.277 60.1266 102.277 61.1504C102.277 62.1743 102.345 63.1824 102.475 64.1705"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M111.254 42.9824C109.649 44.2119 108.212 45.6491 106.982 47.254"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M128.171 38.476C127.183 38.3456 126.175 38.2783 125.151 38.2783C124.127 38.2783 123.119 38.3456 122.131 38.476"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M143.318 47.254C142.089 45.6492 140.652 44.2119 139.047 42.9824"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M136.444 54.9355C136.538 55.5271 136.587 56.1338 136.587 56.752C136.587 63.068 131.467 68.1881 125.151 68.1881C118.835 68.1881 113.715 63.068 113.715 56.752C113.715 50.436 118.835 45.3159 125.151 45.3159C129.433 45.3159 133.165 47.6694 135.125 51.1535"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M125.151 68.1881C128.066 68.1881 130.429 63.068 130.429 56.752C130.429 50.436 128.066 45.3159 125.151 45.3159C122.236 45.3159 119.873 50.436 119.873 56.752C119.873 63.068 122.236 68.1881 125.151 68.1881Z"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M115.512 50.594H134.788"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M115.512 62.9097H134.788"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M127.341 76.9849H127.819C128.288 76.9849 128.668 76.6045 128.668 76.1353V74.3158C128.668 73.8466 128.288 73.4662 127.819 73.4662H126.909V72.5564C126.909 72.0872 126.529 71.7068 126.059 71.7068H124.24C123.771 71.7068 123.39 72.0872 123.39 72.5564V73.4662H122.48C122.011 73.4662 121.631 73.8466 121.631 74.3158V76.1353C121.631 76.6045 122.011 76.9849 122.48 76.9849H123.376"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M125.15 71.7068V68.188"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M121.631 75.2256H114.594"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M135.938 75.2256H128.9"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M125.15 45.3159V68.1881"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M136.587 56.752H113.715"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_3834_6912">
                                          <rect
                                            width={58}
                                            height={58}
                                            fill="#082326"
                                            transform="translate(97 32)"
                                          />
                                        </clipPath>
                                      </defs>
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>{t("Epicor Kinetic (Epicor ERP)")}</h3>
                                <p>
                                  {t("Next-gen ERP to automate workflows, improve supply chain visibility, and optimize production.")}
                                </p>
                                <div className="ser-btn1">
                                  <Link href="/Epicor-kinetic"
                                    className="animated-svg-link1 btn-style-3"
                                  >
                                    {t("Know More")}
                                    <span className="svg-container ">
                                      <span className=" left">
                                        <svg
                                          width={24}
                                          height={23}
                                          viewBox="0 0 24 23"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="4.79995"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="1.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="22.4008"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="1.6"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="6.40078"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="11.1996"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="14.4"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="17.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="20.8"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="8.00002"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item flip-card">
                          <div className="flip-card-inner">
                            {/* Front Side */}
                            <div className="flip-card-front">
                              {/* Your current service content */}
                              <div className="service-item-header">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.3"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="white"
                                      />
                                      <line
                                        opacity="0.3"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="white"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="white"
                                      />
                                      <path
                                        d="M113.396 73.2805H102.684V50.0188H113.193"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M136.748 50.0188H147.316V73.2805H136.604"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M113.191 39.3176H107.643V49.6749"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M142.355 49.6749V39.3176H136.748"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M116.243 73.2806H113.395V32.1001H136.603V73.2806H133.814"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M121.352 69.3361V62.666H128.648V69.3751"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M128.646 55.4907V57.7586"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M121.352 57.7586V55.4907"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M128.646 48.1772V50.4451"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M121.352 50.4451V48.1772"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M142.039 62.8042V65.0721"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M142.039 55.4907V57.7586"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M107.959 62.8042V65.0721"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M107.959 55.4907V57.7586"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M125 36.772V42.7976"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M121.986 39.7847H128.012"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M125 89.9002C130.785 89.9002 135.475 85.2105 135.475 79.4253C135.475 73.6402 130.785 68.9504 125 68.9504C119.215 68.9504 114.525 73.6402 114.525 79.4253C114.525 85.2105 119.215 89.9002 125 89.9002Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M120.9 79.7224L123.896 82.8773L129.569 76.6218"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>{t("Epicor iScala")}</h3>
                                <p>
                                   {t("Flexible ERP for mid-sized companies in regulated industries like pharma, hospitality, and global trade.")}
                                </p>
                                <div className="ser-btn1">
                                  <Link href="/Epicor-iscala"
                                    className="animated-svg-link1 btn-style-3"
                                  >
                                    {t("Know More")}
                                    <span className="svg-container ">
                                      <span className=" left">
                                        <svg
                                          width={24}
                                          height={23}
                                          viewBox="0 0 24 23"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="4.79995"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="1.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="22.4008"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="1.6"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="6.40078"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="11.1996"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="14.4"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="17.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="20.8"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="8.00002"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item flip-card">
                          <div className="flip-card-inner">
                            {/* Front Side */}
                            <div className="flip-card-front ">
                              {/* Your current service content */}
                              <div className="service-item-header">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.3"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="white"
                                      />
                                      <line
                                        opacity="0.3"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="white"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="white"
                                      />
                                      <path
                                        d="M124.749 40.3833C126.574 40.3833 128.054 38.9039 128.054 37.0791C128.054 35.2542 126.574 33.7749 124.749 33.7749C122.925 33.7749 121.445 35.2542 121.445 37.0791C121.445 38.9039 122.925 40.3833 124.749 40.3833Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M130.71 46.4813H118.791V44.4951C118.791 42.2243 120.632 40.3835 122.903 40.3835H126.599C128.87 40.3835 130.71 42.2243 130.71 44.4951V46.4813H130.71Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M107.21 40.3833C109.035 40.3833 110.515 38.9039 110.515 37.0791C110.515 35.2542 109.035 33.7749 107.21 33.7749C105.386 33.7749 103.906 35.2542 103.906 37.0791C103.906 38.9039 105.386 40.3833 107.21 40.3833Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M113.171 46.4813V44.4951C113.171 42.2243 111.33 40.3835 109.06 40.3835H105.363C103.093 40.3835 101.252 42.2243 101.252 44.4951V46.4813H103.459"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M142.789 40.3833C144.613 40.3833 146.093 38.9039 146.093 37.0791C146.093 35.2542 144.613 33.7749 142.789 33.7749C140.964 33.7749 139.484 35.2542 139.484 37.0791C139.484 38.9039 140.964 40.3833 142.789 40.3833Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M148.747 46.4813H136.828V44.4951C136.828 42.2243 138.669 40.3835 140.94 40.3835H144.636C146.907 40.3835 148.747 42.2243 148.747 44.4951V46.4813H148.747Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M124.889 52.0513V66.0314"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M106.691 52.0513V57.779C106.691 59.3959 108.002 60.7066 109.619 60.7066H124.889"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M143.086 52.0513V57.779C143.086 59.3959 141.775 60.7066 140.159 60.7066H124.889"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M109.854 55.2153L106.69 52.0513L103.525 55.2153"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M128.051 55.2153L124.887 52.0513L121.723 55.2153"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M146.25 55.2153L143.086 52.0513L139.922 55.2153"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M141.464 70.6787H108.537V88.2249H141.464V70.6787Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M127.844 81.3092C128.869 79.7385 128.426 77.6346 126.855 76.6101C125.284 75.5856 123.18 76.0284 122.156 77.5992C121.131 79.17 121.574 81.2739 123.145 82.2984C124.716 83.3229 126.82 82.88 127.844 81.3092Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M114.56 88.225H108.537V82.2024C111.863 82.2024 114.56 84.899 114.56 88.225Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M108.537 76.7013V70.6787H114.56C114.56 74.0046 111.863 76.7012 108.537 76.7013Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M135.441 70.6787H141.464V76.7013C138.138 76.7013 135.441 74.0047 135.441 70.6787Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M141.464 82.2024V88.225H135.441C135.441 84.899 138.138 82.2024 141.464 82.2024Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <circle
                                        cx="108.536"
                                        cy="46.4807"
                                        r="1.10671"
                                        fill="#499A9A"
                                      />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>{t("Epicor Companion Products")}</h3>
                                <p>
                                {t("Extend ERP with integrated solutions for payroll (EpicPay), MES, ECM, FP&A, IP&O, WMS, Data Analytics, and more.")}

                                </p>
                                <div className="ser-btn1">
                                  <Link href="/Epicor-companion"
                                    className="animated-svg-link1 btn-style-3"
                                  >
                                    {t("Know More")}
                                    <span className="svg-container ">
                                      <span className=" left">
                                        <svg
                                          width={24}
                                          height={23}
                                          viewBox="0 0 24 23"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="4.79995"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="1.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="22.4008"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="1.6"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="6.40078"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="11.1996"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="14.4"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="17.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="20.8"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="8.00002"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item flip-card">
                          <div className="flip-card-inner">
                            {/* Front Side */}
                            <div className="flip-card-front">
                              {/* Your current service content */}
                              <div className="service-item-header">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.3"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="white"
                                      />
                                      <line
                                        opacity="0.3"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="white"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="white"
                                      />
                                      <mask
                                        id="mask0_3834_7001"
                                        style={{ maskType: "luminance" }}
                                        maskUnits="userSpaceOnUse"
                                        x={99}
                                        y={35}
                                        width={52}
                                        height={52}
                                      >
                                        <path
                                          d="M99.625 35.625H150.375V86.375H99.625V35.625Z"
                                          fill="white"
                                        />
                                      </mask>
                                      <g mask="url(#mask0_3834_7001)">
                                        <path
                                          d="M127.973 63.9736V58.0264L119.052 63.9736V58.0264L110.131 63.9736V58.0264L101.111 63.9736V84.8882H136.894V63.9736H127.973Z"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M139.868 54.9534C134.949 54.9534 130.947 50.9518 130.947 46.0325C130.947 41.1132 134.949 37.1116 139.868 37.1116C144.787 37.1116 148.888 41.1132 148.888 46.0325C148.888 50.9518 144.787 54.9534 139.868 54.9534Z"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M136.15 46.7759L138.381 49.0061L142.841 44.5457"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M136.895 72.9937H145.915C147.557 72.9937 148.888 74.3249 148.888 75.9673C148.888 77.6096 147.557 78.9409 145.915 78.9409H136.895"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M145.914 78.9409V84.8882"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M145.914 84.8882H148.888"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M116.079 78.9409H107.158V72.9937H116.079V78.9409Z"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M122.025 84.8882V72.9936H127.973V84.8882"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M104.184 61.991V49.0061H110.131V58.0261"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M107.158 43.0588C107.158 41.4165 108.49 40.0852 110.132 40.0852H116.079C117.721 40.0852 119.053 38.7539 119.053 37.1116"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>{t("Industry Verticals Solutions for Epicor ERP")}</h3>
                                <p>
                                  {t("Manufacturing, Oil & Gas, EPC & Construction, Architecture and Interior Design, Retail, and Distribution. Each solution addresses the unique workflows and compliance needs of its industry.")}
                                </p>
                                <div className="ser-btn1">
                                  <Link href="/Epicor-epicpay"
                                    className="animated-svg-link1 btn-style-3"
                                  >
                                    {t("Know More")}
                                    <span className="svg-container ">
                                      <span className=" right">
                                        <svg
                                          width={24}
                                          height={23}
                                          viewBox="0 0 24 23"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="4.79995"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="1.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="22.4008"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="1.6"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="6.40078"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="11.1996"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="14.4"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="17.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="20.8"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="8.00002"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                    </div>
                  </div>
                </div>
                {/* Testimonial Slider End */}
                {/* Testimonial Slider Start */}
                <div className=" testslide1  testianimdot mobileview mobileanimation">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item flip-card ">
                          <div className="flip-card-inner">
                            {/* Front Side */}
                            <div className="flip-card-front">
                              {/* Your current service content */}
                              <div className="service-item-header ">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.3"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="white"
                                      />
                                      <line
                                        opacity="0.3"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="white"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="#fff"
                                      />
                                      <g clipPath="url(#clip0_3834_6912)">
                                        <path
                                          d="M104.162 42.3279L102.451 44.0393C101.9 44.5906 101.794 45.4464 102.195 46.115L104.868 50.5691C104.249 51.7527 103.731 52.9971 103.325 54.2911L98.287 55.5504C97.5306 55.7395 97 56.4192 97 57.1989V65.1019C97 65.8816 97.5306 66.5613 98.2871 66.7503L103.325 68.0097C103.731 69.3037 104.249 70.5481 104.868 71.7317L102.195 76.1858C101.794 76.8543 101.9 77.7102 102.451 78.2615L108.039 83.8498C108.591 84.4011 109.446 84.5065 110.115 84.1054L114.569 81.4329C115.753 82.0517 116.997 82.5698 118.291 82.9761L119.551 88.0137C119.74 88.7701 120.419 89.3008 121.199 89.3008H129.102C129.882 89.3008 130.561 88.7702 130.75 88.0137L132.01 82.9761C133.304 82.5698 134.548 82.0517 135.732 81.4329L140.186 84.1054C140.854 84.5065 141.71 84.4011 142.262 83.8498L147.85 78.2615C148.401 77.7102 148.507 76.8543 148.105 76.1858L145.433 71.7317C146.052 70.5481 146.57 69.3037 146.976 68.0097L152.014 66.7503C152.77 66.5613 153.301 65.8816 153.301 65.1019V57.1989C153.301 56.4192 152.77 55.7395 152.014 55.5504L146.976 54.2911C146.57 52.9971 146.052 51.7527 145.433 50.5691L148.105 46.115C148.507 45.4464 148.401 44.5906 147.85 44.0393L142.262 38.451C141.71 37.8996 140.854 37.7943 140.186 38.1954L135.732 40.8678C134.548 40.2491 133.304 39.7309 132.01 39.3247L130.75 34.2871C130.561 33.5306 129.882 33 129.102 33H121.199C120.419 33 119.74 33.5306 119.55 34.2871L118.291 39.3247C116.997 39.7309 115.753 40.2491 114.569 40.8678L110.115 38.1954C109.446 37.7943 108.59 37.8996 108.039 38.451L106.982 39.5079"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M147.824 64.1705C147.955 63.1824 148.022 62.1743 148.022 61.1504C148.022 60.1266 147.955 59.1185 147.824 58.1304"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M139.047 79.3185C140.652 78.089 142.089 76.6518 143.318 75.0469"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M122.131 83.825C123.119 83.9553 124.127 84.0226 125.151 84.0226C126.175 84.0226 127.183 83.9552 128.171 83.825"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M106.982 75.0469C108.212 76.6517 109.649 78.089 111.254 79.3185"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M102.475 58.1304C102.345 59.1185 102.277 60.1266 102.277 61.1504C102.277 62.1743 102.345 63.1824 102.475 64.1705"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M111.254 42.9824C109.649 44.2119 108.212 45.6491 106.982 47.254"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M128.171 38.476C127.183 38.3456 126.175 38.2783 125.151 38.2783C124.127 38.2783 123.119 38.3456 122.131 38.476"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M143.318 47.254C142.089 45.6492 140.652 44.2119 139.047 42.9824"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M136.444 54.9355C136.538 55.5271 136.587 56.1338 136.587 56.752C136.587 63.068 131.467 68.1881 125.151 68.1881C118.835 68.1881 113.715 63.068 113.715 56.752C113.715 50.436 118.835 45.3159 125.151 45.3159C129.433 45.3159 133.165 47.6694 135.125 51.1535"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M125.151 68.1881C128.066 68.1881 130.429 63.068 130.429 56.752C130.429 50.436 128.066 45.3159 125.151 45.3159C122.236 45.3159 119.873 50.436 119.873 56.752C119.873 63.068 122.236 68.1881 125.151 68.1881Z"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M115.512 50.594H134.788"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M115.512 62.9097H134.788"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M127.341 76.9849H127.819C128.288 76.9849 128.668 76.6045 128.668 76.1353V74.3158C128.668 73.8466 128.288 73.4662 127.819 73.4662H126.909V72.5564C126.909 72.0872 126.529 71.7068 126.059 71.7068H124.24C123.771 71.7068 123.39 72.0872 123.39 72.5564V73.4662H122.48C122.011 73.4662 121.631 73.8466 121.631 74.3158V76.1353C121.631 76.6045 122.011 76.9849 122.48 76.9849H123.376"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M125.15 71.7068V68.188"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M121.631 75.2256H114.594"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M135.938 75.2256H128.9"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M125.15 45.3159V68.1881"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M136.587 56.752H113.715"
                                          stroke="#082326"
                                          strokeWidth="1.5"
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_3834_6912">
                                          <rect
                                            width={58}
                                            height={58}
                                            fill="#082326"
                                            transform="translate(97 32)"
                                          />
                                        </clipPath>
                                      </defs>
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>{t("Epicor Kinetic (Epicor ERP)")}</h3>
                                <p>
                                  {t("Next-gen ERP to automate workflows, improve supply chain visibility, and optimize production.")}

                                </p>
                                <div className="ser-btn1">
                                  <Link href="#"
                                    className="animated-svg-link1 btn-style-3"
                                  >
                                    {t("Know More")}
                                    <span className="svg-container ">
                                      <span className=" left">
                                        <svg
                                          width={24}
                                          height={23}
                                          viewBox="0 0 24 23"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="4.79995"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="1.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="22.4008"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="1.6"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="6.40078"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="11.1996"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="14.4"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="17.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="20.8"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="8.00002"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item flip-card">
                          <div className="flip-card-inner">
                            {/* Front Side */}
                            <div className="flip-card-front">
                              {/* Your current service content */}
                              <div className="service-item-header">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.3"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="white"
                                      />
                                      <line
                                        opacity="0.3"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="white"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="white"
                                      />
                                      <path
                                        d="M113.396 73.2805H102.684V50.0188H113.193"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M136.748 50.0188H147.316V73.2805H136.604"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M113.191 39.3176H107.643V49.6749"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M142.355 49.6749V39.3176H136.748"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M116.243 73.2806H113.395V32.1001H136.603V73.2806H133.814"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M121.352 69.3361V62.666H128.648V69.3751"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M128.646 55.4907V57.7586"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M121.352 57.7586V55.4907"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M128.646 48.1772V50.4451"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M121.352 50.4451V48.1772"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M142.039 62.8042V65.0721"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M142.039 55.4907V57.7586"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M107.959 62.8042V65.0721"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M107.959 55.4907V57.7586"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M125 36.772V42.7976"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M121.986 39.7847H128.012"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M125 89.9002C130.785 89.9002 135.475 85.2105 135.475 79.4253C135.475 73.6402 130.785 68.9504 125 68.9504C119.215 68.9504 114.525 73.6402 114.525 79.4253C114.525 85.2105 119.215 89.9002 125 89.9002Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M120.9 79.7224L123.896 82.8773L129.569 76.6218"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>{t("Epicor iScala")}</h3>
                                <p>
                                    {t("Flexible ERP for mid-sized companies in regulated industries like pharma, hospitality, and global trade.")}
                                </p>
                                <div className="ser-btn1">
                                  <Link href="#"
                                    className="animated-svg-link1 btn-style-3"
                                  >
                                    {t("Know More")}
                                    <span className="svg-container ">
                                      <span className=" left">
                                        <svg
                                          width={24}
                                          height={23}
                                          viewBox="0 0 24 23"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="4.79995"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="1.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="22.4008"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="1.6"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="6.40078"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="11.1996"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="14.4"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="17.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="20.8"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="8.00002"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item flip-card">
                          <div className="flip-card-inner">
                            {/* Front Side */}
                            <div className="flip-card-front ">
                              {/* Your current service content */}
                              <div className="service-item-header">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.3"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="white"
                                      />
                                      <line
                                        opacity="0.3"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="white"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="white"
                                      />
                                      <path
                                        d="M124.749 40.3833C126.574 40.3833 128.054 38.9039 128.054 37.0791C128.054 35.2542 126.574 33.7749 124.749 33.7749C122.925 33.7749 121.445 35.2542 121.445 37.0791C121.445 38.9039 122.925 40.3833 124.749 40.3833Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M130.71 46.4813H118.791V44.4951C118.791 42.2243 120.632 40.3835 122.903 40.3835H126.599C128.87 40.3835 130.71 42.2243 130.71 44.4951V46.4813H130.71Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M107.21 40.3833C109.035 40.3833 110.515 38.9039 110.515 37.0791C110.515 35.2542 109.035 33.7749 107.21 33.7749C105.386 33.7749 103.906 35.2542 103.906 37.0791C103.906 38.9039 105.386 40.3833 107.21 40.3833Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M113.171 46.4813V44.4951C113.171 42.2243 111.33 40.3835 109.06 40.3835H105.363C103.093 40.3835 101.252 42.2243 101.252 44.4951V46.4813H103.459"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M142.789 40.3833C144.613 40.3833 146.093 38.9039 146.093 37.0791C146.093 35.2542 144.613 33.7749 142.789 33.7749C140.964 33.7749 139.484 35.2542 139.484 37.0791C139.484 38.9039 140.964 40.3833 142.789 40.3833Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M148.747 46.4813H136.828V44.4951C136.828 42.2243 138.669 40.3835 140.94 40.3835H144.636C146.907 40.3835 148.747 42.2243 148.747 44.4951V46.4813H148.747Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M124.889 52.0513V66.0314"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M106.691 52.0513V57.779C106.691 59.3959 108.002 60.7066 109.619 60.7066H124.889"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M143.086 52.0513V57.779C143.086 59.3959 141.775 60.7066 140.159 60.7066H124.889"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M109.854 55.2153L106.69 52.0513L103.525 55.2153"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M128.051 55.2153L124.887 52.0513L121.723 55.2153"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M146.25 55.2153L143.086 52.0513L139.922 55.2153"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M141.464 70.6787H108.537V88.2249H141.464V70.6787Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M127.844 81.3092C128.869 79.7385 128.426 77.6346 126.855 76.6101C125.284 75.5856 123.18 76.0284 122.156 77.5992C121.131 79.17 121.574 81.2739 123.145 82.2984C124.716 83.3229 126.82 82.88 127.844 81.3092Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M114.56 88.225H108.537V82.2024C111.863 82.2024 114.56 84.899 114.56 88.225Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M108.537 76.7013V70.6787H114.56C114.56 74.0046 111.863 76.7012 108.537 76.7013Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M135.441 70.6787H141.464V76.7013C138.138 76.7013 135.441 74.0047 135.441 70.6787Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M141.464 82.2024V88.225H135.441C135.441 84.899 138.138 82.2024 141.464 82.2024Z"
                                        stroke="#499A9A"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <circle
                                        cx="108.536"
                                        cy="46.4807"
                                        r="1.10671"
                                        fill="#499A9A"
                                      />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>{t("Epicor Companion Products")}</h3>
                                <p>
                                    {t("Extend ERP with integrated solutions for payroll (EpicPay), MES, ECM, FP&A, IP&O, WMS, Data Analytics, and more.")}
                                </p>
                                <div className="ser-btn1">
                                  <Link href="#"
                                    className="animated-svg-link1 btn-style-3"
                                  >
                                    {t("Know More")}
                                    <span className="svg-container ">
                                      <span className=" left">
                                        <svg
                                          width={24}
                                          height={23}
                                          viewBox="0 0 24 23"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="4.79995"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="1.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="22.4008"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="1.6"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="6.40078"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="11.1996"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="14.4"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="17.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="20.8"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="8.00002"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item flip-card">
                          <div className="flip-card-inner">
                            {/* Front Side */}
                            <div className="flip-card-front">
                              {/* Your current service content */}
                              <div className="service-item-header">
                                <div className="service-card">
                                  <div className="card-top-border" />
                                  <div className="card-graphic-container">
                                    <svg
                                      width={252}
                                      height={121}
                                      viewBox="0 0 252 121"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <line
                                        opacity="0.3"
                                        x1="84.4395"
                                        y1="60.6538"
                                        x2="1.00132"
                                        y2="60.6538"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 2L34.7831 2C46.3811 2 55.7831 11.402 55.7831 23V39.5752C55.7831 51.1732 65.1851 60.5752 76.7831 60.5752H84.86"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M1.42188 119.15L34.7831 119.15C46.3811 119.15 55.7831 109.748 55.7831 98.1504V81.5752C55.7831 69.9772 65.1851 60.5751 76.7831 60.5751H84.86"
                                        stroke="white"
                                      />
                                      <line
                                        opacity="0.3"
                                        y1="-0.5"
                                        x2="83.4381"
                                        y2="-0.5"
                                        transform="matrix(1 -8.74227e-08 -8.74227e-08 -1 166.561 60.1538)"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 2L216.217 2C204.619 2 195.217 11.402 195.217 23V39.5752C195.217 51.1732 185.815 60.5752 174.217 60.5752H166.14"
                                        stroke="white"
                                      />
                                      <path
                                        opacity="0.3"
                                        d="M249.578 119.15L216.217 119.15C204.619 119.15 195.217 109.748 195.217 98.1504V81.5752C195.217 69.9772 185.815 60.5751 174.217 60.5751H166.14"
                                        stroke="white"
                                      />
                                      <ellipse
                                        cx="125.303"
                                        cy="60.7679"
                                        rx="41.768"
                                        ry="41.7679"
                                        fill="white"
                                      />
                                      <mask
                                        id="mask0_3834_7001"
                                        style={{ maskType: "luminance" }}
                                        maskUnits="userSpaceOnUse"
                                        x={99}
                                        y={35}
                                        width={52}
                                        height={52}
                                      >
                                        <path
                                          d="M99.625 35.625H150.375V86.375H99.625V35.625Z"
                                          fill="white"
                                        />
                                      </mask>
                                      <g mask="url(#mask0_3834_7001)">
                                        <path
                                          d="M127.973 63.9736V58.0264L119.052 63.9736V58.0264L110.131 63.9736V58.0264L101.111 63.9736V84.8882H136.894V63.9736H127.973Z"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M139.868 54.9534C134.949 54.9534 130.947 50.9518 130.947 46.0325C130.947 41.1132 134.949 37.1116 139.868 37.1116C144.787 37.1116 148.888 41.1132 148.888 46.0325C148.888 50.9518 144.787 54.9534 139.868 54.9534Z"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M136.15 46.7759L138.381 49.0061L142.841 44.5457"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M136.895 72.9937H145.915C147.557 72.9937 148.888 74.3249 148.888 75.9673C148.888 77.6096 147.557 78.9409 145.915 78.9409H136.895"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M145.914 78.9409V84.8882"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M145.914 84.8882H148.888"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M116.079 78.9409H107.158V72.9937H116.079V78.9409Z"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M122.025 84.8882V72.9936H127.973V84.8882"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M104.184 61.991V49.0061H110.131V58.0261"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M107.158 43.0588C107.158 41.4165 108.49 40.0852 110.132 40.0852H116.079C117.721 40.0852 119.053 38.7539 119.053 37.1116"
                                          stroke="#499A9A"
                                          strokeWidth={2}
                                          strokeMiterlimit={10}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                      <circle className="anim-dot" r="1.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="service-item-body">
                                <h3>{t("Industry Verticals Solutions for Epicor ERP")}</h3>
                                <p>
                                    {t("Manufacturing, Oil & Gas, EPC & Construction, Architecture and Interior Design, Retail, and Distribution. Each solution addresses the unique workflows and compliance needs of its industry.")}
                                </p>
                                <div className="ser-btn1">
                                  <Link href="#"
                                    className="animated-svg-link1 btn-style-3"
                                  >
                                      {t("Know More")}
                                    <span className="svg-container ">
                                      <span className=" right">
                                        <svg
                                          width={24}
                                          height={23}
                                          viewBox="0 0 24 23"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="4.79995"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="1.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="22.4008"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="1.6"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="6.40078"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="11.1996"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="11.2"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="14.4"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="16.0004"
                                            cy="17.6"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="12.7992"
                                            cy="20.8"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                          <circle
                                            className="dot"
                                            opacity="0.5"
                                            cx="19.1996"
                                            cy="8.00002"
                                            r="1.6"
                                            fill="#535353"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                    </div>
                  </div>
                  <div className="testimonial-btn">
                    <div
                      className="testimonial-button-prev"
                      tabIndex={0}
                      role="button"
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-6a6ab3382a3bb2b8"
                    >
                      <div className="animated-svg-link1 btn-style-3">
                        <span className="svg-container ">
                          <span className=" left">
                            <svg
                              width={24}
                              height={23}
                              viewBox="0 0 24 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="4.79995"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="12.7992"
                                cy="1.6"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="22.4008"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="1.6"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="6.40078"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="11.1996"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="19.1996"
                                cy="14.4"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="17.6"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="12.7992"
                                cy="20.8"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="19.1996"
                                cy="8.00002"
                                r="1.6"
                                fill="#535353"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                    <span className="testspace">1/5</span>
                    <div
                      className="testimonial-button-next"
                      tabIndex={0}
                      role="button"
                      aria-label="Next slide"
                      aria-controls="swiper-wrapper-6a6ab3382a3bb2b8"
                    >
                      <div className="animated-svg-link1 btn-style-3">
                        <span className="svg-container ">
                          <span className=" left">
                            <svg
                              width={24}
                              height={23}
                              viewBox="0 0 24 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="4.79995"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="12.7992"
                                cy="1.6"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="22.4008"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="1.6"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="6.40078"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="11.1996"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="19.1996"
                                cy="14.4"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="17.6"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="12.7992"
                                cy="20.8"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="19.1996"
                                cy="8.00002"
                                r="1.6"
                                fill="#535353"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Slider End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Testimonial Section End */}
        {/* Hero Section Start*/}
        <div className="aboutretail retail-baner1 retail-baner-11 approachh systemview pd60">
          <div className="container">
            <div className="row section-row1 align-items-center builtsec">
              <div className="col-sm-5">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Our Approach")}
                  </h2>
                  <p>
                    {t("We align Epicor ERP with your business goals using RheinBrücke’s proven SCALE methodology:")}

                  </p>
                </div>
                <div className="pill-points appro">
                  <div className="challenge-point-waber self-service">
                    <img src="/images/app1.svg" alt="Scale methodology icon" />
                    <div className="pill-cont">
                      {/* <h5>Solution Architecture</h5> */}
                      <p>
                        {" "}
                        {t("RheinBruke’s proprietary SCALE methodology helps ensure successful project implementation.")}
                      </p>
                    </div>
                  </div>
                  <div className="challenge-point-waber self-service">
                    <img src="/images/app2.svg" alt="ERP five stage methodology icon" />
                    <div className="pill-cont">
                      {/* <h5>Project Management</h5> */}
                      <p>
                         {t("The methodology’s five key stages - Prepare, Plan, Design,Validate, and Deploy - enable structured execution.")}
                      </p>
                    </div>
                  </div>
                  <div className="challenge-point-waber self-service">
                    <img src="/images/app3.svg" alt="ERP best practices icon" />
                    <div className="pill-cont">
                      {/* <h5>Consulting</h5> */}
                      <p>
                         {t("It integrates the best practices of Waterfall and Agile practices to optimize performance and delivery outcomes.")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                {/* <img src="/new/retail-baner.jpg" alt=""> */}
              </div>
            </div>
          </div>
        </div>
        <div className="aboutretail  mobileturn mobileview dnone pdb0 pd60">
          <div className="container">
            <div className="row section-row1 align-items-center builtsec">
              <div className="col-sm-12">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Our Approach")}
                  </h2>
                  <p>
                    {t("We align Epicor ERP with your business goals using RheinBrücke’s proven SCALE methodology:")}

                  </p>
                </div>
                <div className="pill-points appro">
                  <div className="challenge-point-waber self-service">
                    <img src="/images/app1.svg" alt="Scale methodology icon" />
                    <div className="pill-cont">
                      {/* <h5>Solution Architecture</h5> */}
                      <p>
                        {" "}
                        {t("RheinBruke’s proprietary SCALE methodology helps ensure successful project implementation.")}

                      </p>
                    </div>
                  </div>
                  <div className="challenge-point-waber self-service">
                    <img src="/images/app2.svg" alt="ERP five stage methodology icon " />
                    <div className="pill-cont">
                      {/* <h5>Project Management</h5> */}
                      <p>
                        {" "}
                        {t("The methodology’s five key stages - Prepare, Plan, Design,Validate, and Deploy - enable structured execution.")}
                      </p>
                    </div>
                  </div>
                  <div className="challenge-point-waber self-service">
                    <img src="/images/app3.svg" alt="ERP best practices icon" />
                    <div className="pill-cont">
                      {/* <h5>Consulting</h5> */}
                      <p>
                         {t("It integrates the best practices of Waterfall and Agile practices to optimize performance and delivery outcomes.")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 mobileapproach">
                <img src="/images/approach.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        <div className="advantage additional1 bluebg1 epicadv2  pd50 pt50">
          <div className="container">
            <div className="row section-row1 align-items-center">
              <div className="col-sm-12">
                <div className="section-title text-center text-black">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("The RheinBrücke Advantage")}
                  </h2>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="service-item-body1 firstmobilebox w80">
                      {/* <h3>Seamless Integration</h3> */}
                      <h3>
                        {t("Epicor Premium Partner with 12 years of ERP delivery excellence")}
                      </h3>
                      <div className="text-center">
                        <img src="/images/advant1.svg" alt="Epicor premium partner " />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="service-item-body1 epicright1  w80">
                      {/* <h3>Configurable</h3> */}
                      <h3>
                        {t("One of the largest pools of Epicor certified and trained consultants")}
                      </h3>
                      <img src="/images/advant2.svg" alt="Epicor certified consultant " />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="service-item-body1 epicright">
                      {/* <h3>Reporting and Analytics</h3> */}
                      <h3>
                        {t("Expertise across the complete ERP lifecycle: implementation, upgrades, migrations, roll-outs, optimization, and managed support")}
                      </h3>
                      <img src="/images/advant3.svg" alt="ERP lifecycle implementation" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="service-item-body1 epicright">
                      {/* <h3>Mobile Accessibility</h3> */}
                      <h3>
                        {t("Deep industry-specific knowledge in manufacturing, oil & gas, retail, construction, and more")}
                      </h3>
                      <div className="text-center">
                        <img src="/images/advant4.svg" alt="Industry specific ERP solutions" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="service-item-body1 epicleft">
                      {/* <h3>Effective Data Management</h3> */}
                      <h3>
                        {t("Outcome-focused delivery ensuring resilience, efficiency, and sustainable business growth")}
                      </h3>
                      <img src="/images/advant5.svg" alt="ERP implementation and delivery services" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Testimonial Section Start */}
        <div className="our-testimonial pd30">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-12">
                <div className="section-title text-center headingss">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Industries We Serve")}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-12">
                {/* Testimonial Slider Start */}
                <div className=" industries enterintsec">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body ein1">
                          <h3>
                            <span>{t("Interior Design and Architecture")}</span>

                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body in4">
                          <h3>
                            <span>{t("Discrete & Process Manufacturing")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body ein3">
                          <h3>
                            <span>
                              {" "}
                              {t("Automotive (Components & Vehicle Manufacturing)")}
                            </span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body ein4">
                          <h3>
                          <span>{t("Construction & EPC")}</span>

                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body ein5">
                          <h3>
                          <span>{t("Oil & Gas")}</span>
                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                      {/* Testimonial Slide Start */}
                      <div className="swiper-slide">
                        <div className="service-item-body in2">
                          <h3>
                            <span>{t("Retail & Distribution")}</span>

                          </h3>
                        </div>
                      </div>
                      {/* Testimonial Slide End */}
                    </div>
                  </div>
                  <div className="testimonial-btn9 ">
                    <div
                      className="testimonial-button-prev"
                      tabIndex={0}
                      role="button"
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-458e8c1080a2f710c9"
                    >
                      <div className="animated-svg-link">
                        <span className="svg-container ">
                          <span className=" right">
                            <svg
                              width={24}
                              height={23}
                              viewBox="0 0 24 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="4.79995"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="12.7992"
                                cy="1.6"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="22.4008"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="1.6"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              ></circle>
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="6.40078"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="11.1996"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="19.1996"
                                cy="14.4"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="17.6"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="12.7992"
                                cy="20.8"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="19.1996"
                                cy="8.00002"
                                r="1.6"
                                fill="#535353"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                    <span className="testspace" style={{ color: "#000" }}>
                      1/8
                    </span>
                    <div
                      className="testimonial-button-next"
                      tabIndex={0}
                      role="button"
                      aria-label="Next slide"
                      aria-controls="swiper-wrapper-458e8c1080a2f710c9"
                    >
                      <div className="animated-svg-link">
                        <span className="svg-container ">
                          <span className=" right">
                            <svg
                              width={24}
                              height={23}
                              viewBox="0 0 24 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="4.79995"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="12.7992"
                                cy="1.6"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="22.4008"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="1.6"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              ></circle>
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="6.40078"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="11.1996"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="19.1996"
                                cy="14.4"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="17.6"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="12.7992"
                                cy="20.8"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="19.1996"
                                cy="8.00002"
                                r="1.6"
                                fill="#535353"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Slider End */}
              </div>
            </div>
          </div>
        </div>
        {/* Our Testimonial Section End */}
        <section className="mds-section capabilities mobilecabsec pd50">
          <div className="container">
            <div className="content width50">
              <div className="section-title ">
                <div className="hero-video-content1 wow fadeInUp mt-4">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t("Explore Our ERP Capabilities")}
                  </h2>
                </div>
              </div>
            </div>
            {/* Testimonial Slider Start */}
          </div>
          <div className="container-fluid">
            <div className="epicsecslide">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap1.svg" alt="Epicor ERP implementation icon" />
                      {/*<h6> Dynamics 365 ERP & CRM Solutions</h6> */}
                      <p>
                        {t("ERP Implementation through onsite, offshore, hybrid model as per project needs")}

                      </p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap2.svg" alt="Epicor ERP customer excellence icon" />
                      <p>
                        {t("Customer Excellence (Support, Premium Support, Training) that enhance ERP adoption and performance")}

                      </p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap3.svg" alt="Epicor kinetic icon" />
                      <p>
                        {t("Upgrade legacy Epicor versions to Kinetic UI")}
                      </p>

                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap4.svg" alt="ERP migration services icon" />
                      <p>
                        {t("Migrate on-premises ERP versions to Kinetic UI version for seamless transition")}
                      </p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide">
                      <img src="/images/cap5.svg" alt="ERP performance enhancement icon" />
                      <p>
                        {t("Performance Optimization to enhance ERP performance and reliability")}
                      </p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide epicicn">
                      {/*<img src="/images/cap1.svg" alt="">*/}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Icon"
                        viewBox="0 0 74 79"
                        role="img"
  aria-label="ERP companion product icon"
                      >
                        <path
                          d="m60.64014 32.45654-4.78271-7.97119c-.14757-.23124-.37926-.39552-.64502-.4624l-12.71735-2.76483c.02704-.0871.065-.17029.0899-.25812h1.41504c1.10303 0 2-.89697 2-2v-2c0-1.10303-.89697-2-2-2h-1.41504c-.23291-.82178-.56104-1.61133-.98145-2.36084l1.00244-1.00293c.77679-.74377.77661-2.08411.00049-2.82861l-1.41406-1.41406c-.78027-.78125-2.05029-.78027-2.82861 0l-1.00293 1.00293c-.74951-.42041-1.53955-.74854-2.36084-.98145v-1.41504c0-1.10303-.89697-2-2-2h-2c-1.10303 0-2 .89697-2 2v1.41504c-.82178.23291-1.61133.56104-2.36084.98145l-1.00293-1.00244c-.75488-.75635-2.07275-.75684-2.82861-.00049l-1.41406 1.41406c-.776.74408-.77618 2.0849 0 2.82812l1.00293 1.00342c-.42041.74951-.74854 1.53906-.98145 2.36084h-1.41504c-1.10303 0-2 .89697-2 2v2c0 1.10303.89697 2 2 2h1.41504c.0249.08789.06281.17114.0899.2583l-12.71735 2.76465c-.26601.06606-.49739.23161-.64502.4624l-4.78271 7.97119c-.96466 1.52264-.2146 3.72156 1.47949 4.33691l3.16064 1.23682v10.60449c0 1.24365.74805 2.34033 1.90674 2.79395l21.729 8.50244c.23438.0918.49414.0918.72852 0l21.72949-8.50244c1.1582-.45361 1.90625-1.55029 1.90625-2.79395v-10.60449l3.16064-1.23682c1.69415-.61536 2.44415-2.81427 1.47949-4.33691zm-40.64014-13.45654v-2h2.20068c.47559 0 .88525-.33496.97998-.80078.22852-1.12598.67041-2.18848 1.31299-3.15869.26221-.39648.20947-.92285-.12695-1.25928l-1.55908-1.55957 1.41406-1.41406 1.55957 1.55908c.33643.33643.86182.38916 1.25928.12695.97021-.64258 2.03271-1.08447 3.15869-1.31299.46582-.09473.80078-.50439.80078-.97998v-2.20068h2v2.20068c0 .47559.33496.88525.80078.97998 1.12598.22852 2.18848.67041 3.15869 1.31299.39795.26221.92334.20947 1.25928-.12695l1.55957-1.55908 1.41406 1.41406-1.55908 1.55957c-.33643.33643-.38916.86279-.12695 1.25928.64258.97021 1.08447 2.03271 1.31299 3.15869.09473.46582.50439.80078.97998.80078h2.20068v2h-2.20068c-.47559 0-.88525.33496-.97998.80078-.22852 1.12598-.67041 2.18848-1.31299 3.15869-.26221.39648-.20947.92285.12695 1.25928l1.55908 1.55957-1.41455 1.41406-1.55908-1.55908c-.33594-.33594-.86133-.38867-1.25928-.12695-.97021.64258-2.03271 1.08447-3.15869 1.31299-.46582.09473-.80078.50439-.80078.97998v2.20068h-2v-2.20068c0-.47559-.33496-.88525-.80078-.97998-1.12598-.22852-2.18848-.67041-3.15869-1.31299-.3949-.26099-.92169-.21075-1.25928.12695l-1.55957 1.55908-1.41406-1.41406 1.55908-1.55957c.33643-.33643.38916-.86279.12695-1.25928-.64258-.97021-1.08447-2.03271-1.31299-3.15869-.09473-.46582-.50439-.80078-.97998-.80078zm2.28662 4.13501c.03937.07416.06873.15247.10986.22583l-1.00244 1.00293c-.77679.74377-.77661 2.08411-.00049 2.82861l1.41406 1.41406c.75586.75635 2.07422.75537 2.82812 0l1.00342-1.00293c.74951.42041 1.53906.74854 2.36084.98145v1.41504c0 1.10303.89697 2 2 2h2c1.10303 0 2-.89697 2-2v-1.41504c.82129-.23291 1.61133-.56104 2.36084-.98145l1.00293 1.00293c.7793.78027 2.04932.78125 2.82861 0l1.41406-1.41406c.776-.74408.77618-2.0849 0-2.82812l-1.00293-1.00342c.0412-.07343.0705-.15179.10992-.22595l9.84125 2.13953-19.55469 7.65186-19.55469-7.65186 9.84131-2.1394zm-17.21191 10.35034 4.34814-7.24609 21.11084 8.26074-4.52148 7.53613c-.25195.41992-.76514.59424-1.22217.41699l-19.22217-7.52197c-.56372-.20355-.81714-.93823-.49316-1.4458zm4.92529 15.14941v-9.82184l14.06152 5.5025c1.3396.53125 2.9082.02014 3.66553-1.25l3.27295-5.45502v19.92456l-20.36426-7.96857c-.38623-.15137-.63574-.51709-.63574-.93164zm44 0c0 .41455-.24951.78027-.63525.93164l-20.36475 7.96857v-19.92456l3.27295 5.45502c.75732 1.27014 2.32593 1.78125 3.66553 1.25l14.06152-5.5025v9.82184zm4.43213-13.70361-19.22217 7.52197c-.45703.17725-.97021.00293-1.22217-.41699l-4.52148-7.53613 21.11084-8.26074 4.34814 7.24609c.32404.50757.07062 1.24225-.49316 1.4458zm-26.43213-10.93115c3.30859 0 6-2.69141 6-6s-2.69141-6-6-6-6 2.69141-6 6 2.69141 6 6 6zm0-10c2.20557 0 4 1.79443 4 4s-1.79443 4-4 4-4-1.79443-4-4 1.79443-4 4-4z"
                          fill="#499a9a"
                        />
                      </svg>
                      <p>
                        Companion Products to enhance ERP functionality and business process efficiency
                      </p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                  {/* Testimonial Slide Start */}
                  <div className="swiper-slide">
                    <div className="valueslide epicicn1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="456pt"
                        viewBox="0 0 456 456"
                        width="456pt"
                        role="img"
  aria-label="ERP Consulting & Advisory icon"
                      >
                        <path
                          d="m248 129.078125 58.894531-49.078125h77.105469v-80h-192v80h56zm-40-65.078125v-48h160v48h-66.894531l-37.105469 30.921875v-30.921875zm0 0"
                          fill="#499a9a"
                        />
                        <path d="m224 32h16v16h-16zm0 0" fill="#499a9a" />
                        <path d="m256 32h64v16h-64zm0 0" fill="#499a9a" />
                        <path d="m336 32h16v16h-16zm0 0" fill="#499a9a" />
                        <path
                          d="m407.238281 480-6.46875-64.761719c26.710938-4.222656 47.230469-27.351562 47.230469-55.238281v-104h-32v-11.054688c0-10.875-5.976562-20.640624-15.585938-25.648437 9.554688-8.777344 15.585938-21.328125 15.585938-35.296875v-16c0-26.472656-21.527344-48-48-48s-48 21.527344-48 48v16c0 20.710938 13.207031 38.34375 31.625 45.0625l-42.9375 42.9375h-44.863281c-.894531-13.335938-10.054688-24.960938-23.03125-28.671875l-32.792969-9.359375v-14.289062c9.792969-8.792969 16-21.503907 16-35.679688v-16c0-26.472656-21.527344-48-48-48s-48 21.527344-48 48v16c0 14.167969 6.207031 26.878906 16 35.679688v14.296874l-32.792969 9.359376c-13.664062 3.894531-23.207031 16.550781-23.207031 30.769531v29.894531h-32v48h16v128h-72v16h496v-16zm-71.238281-128v-36.6875l56.6875-56.6875c4.097656-4.097656 6.535156-9.601562 7.082031-15.34375.070313.558594.230469 1.085938.230469 1.664062v99.054688c0 13.230469-10.769531 24-24 24h-64v-16zm-24 64h40.761719l6.398437 64h-47.160156zm56.839844 0h15.921875l6.398437 64h-15.921875zm47.160156-72v-72h16v88c0 22.054688-17.945312 40-40 40h-80v-16h64c22.054688 0 40-17.945312 40-40zm-80-160v-16c0-17.648438 14.351562-32 32-32s32 14.351562 32 32v16c0 17.648438-14.351562 32-32 32s-32-14.351562-32-32zm-20.6875 104 53.375-53.375c1.671875-1.671875 3.984375-2.625 6.34375-2.625 4.945312 0 8.96875 4.023438 8.96875 8.96875 0 2.359375-.953125 4.671875-2.625 6.34375l-56.6875 56.6875h-84.6875c-4.414062 0-8-3.585938-8-8s3.585938-8 8-8zm-171.3125-120c0-17.648438 14.351562-32 32-32s32 14.351562 32 32v16c0 17.648438-14.351562 32-32 32s-32-14.351562-32-32zm32 64c5.617188 0 10.984375-1.023438 16-2.800781v8.59375c-1.984375 3.0625-7.496094 10.207031-16 10.207031s-14.015625-7.144531-16-10.207031v-8.59375c5.015625 1.777343 10.382812 2.800781 16 2.800781zm-72 42.105469c0-7.113281 4.777344-13.433594 11.601562-15.386719l32.957032-9.414062c4.640625 6.046874 13.671875 14.695312 27.441406 14.695312s22.800781-8.648438 27.441406-14.703125l32.957032 9.414063c6.128906 1.753906 10.402343 7.082031 11.257812 13.28125h-7.65625c-13.230469 0-24 10.769531-24 24 0 2.816406.574219 5.488281 1.472656 8h-113.472656zm-32 45.894531h248v16h-248zm16 64h24v-16h-24v-16h208v16h-168v16h168v96h-19.054688l-16-32h-137.890624l-16 32h-19.054688zm171.054688 96h-134.109376l8-16h118.109376zm0 0"
                          fill="#499a9a"
                        />
                      </svg>
                      <p>
                        ERP Consulting & Advisory aligned with business priorities
                      </p>
                    </div>
                  </div>
                  {/* Testimonial Slide End */}
                </div>
                <div className="testimonial-btn   rtyElement">
                  <div className="testimonial-button-prev">
                    <div className="animated-svg-link1 btn-style-3">
                      <span className="svg-container ">
                        <span className=" left">
                          <svg
                            width={24}
                            height={23}
                            viewBox="0 0 24 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="4.79995"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="12.7992"
                              cy="1.6"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="22.4008"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="1.6"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="6.40078"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="11.1996"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="19.1996"
                              cy="14.4"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="17.6"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="12.7992"
                              cy="20.8"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="19.1996"
                              cy="8.00002"
                              r="1.6"
                              fill="#535353"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                  <span className="testspace">1/6</span>
                  <div className="testimonial-button-next">
                    <div className="animated-svg-link1 btn-style-3">
                      <span className="svg-container ">
                        <span className=" left">
                          <svg
                            width={24}
                            height={23}
                            viewBox="0 0 24 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="4.79995"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="12.7992"
                              cy="1.6"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="22.4008"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="1.6"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="6.40078"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="11.1996"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="11.2"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="19.1996"
                              cy="14.4"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="16.0004"
                              cy="17.6"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="12.7992"
                              cy="20.8"
                              r="1.6"
                              fill="#535353"
                            />
                            <circle
                              className="dot"
                              opacity="0.5"
                              cx="19.1996"
                              cy="8.00002"
                              r="1.6"
                              fill="#535353"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Slider End */}
          </div>
        </section>
        <TestimonialandAward />
        {/* Page Faqs Start */}
        <div className="page-faqs bggray pd60">
          <div className="container">
            <div className="row">
              <div className="col-sm-2" />
              <div className="col-lg-8">
                {/* Page FAQs Category Start */}
                <div className="page-faqs-catagery">
                  {/* FAQs section start */}
                  <div
                    className="our-faq-section page-faq-accordion"
                    id="general_information"
                  >
                    <div className="section-title text-center">
                      <h2 className="text-anime-style-2" data-cursor="-opaque">
                        {t("Wondering Why? We’re Here to Answer")}
                      </h2>
                    </div>
                    {/* FAQ Accordion Start */}
                    <div className="faq-accordion" id="accordion">
                      {/* FAQ Item Start */}
                      <div className="accordion-item wow fadeInUp">
                        <h2 className="accordion-header" id="heading1">
                          <button
                            className="accordion-button collapsein"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse1"
                            aria-expanded="true"
                            aria-controls="collapse1"
                          >
                            {t("What services does RheinBrücke offer for Epicor ERP?")}
                          </button>
                        </h2>
                        <div
                          id="collapse1"
                          className="accordion-collapse collapse show"
                          aria-labelledby="heading1"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("RheinBrücke offers comprehensive, end-to-end services for Epicor Kinetic ERP and older platforms. This includes end-to-end implementation, Cloud migration services, customization (e.g., integrations, API development), version upgrades (e.g., 10.2 or lower versions to current Epicor version), Kinetic UI upgrades, global roll-outs, and continuous Epicor Managed Services and support.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <h2 className="accordion-header" id="heading2">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse2"
                            aria-expanded="false"
                            aria-controls="collapse2"
                          >
                            {t("Why choose Epicor ERP?")}
                          </button>
                        </h2>
                        <div
                          id="collapse2"
                          className="accordion-collapse collapse "
                          aria-labelledby="heading2"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("Epicor Kinetic is the ideal solution for growth and digital transformation, providing robust, industry-specific functionality for discrete and process manufacturing, distribution, and services. It enables operational excellence, global scalability, and includes modern features like AI, IoT integration, and a Cloud-first architecture designed for agile business management.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <h2 className="accordion-header" id="heading3">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse3"
                            aria-expanded="false"
                            aria-controls="collapse3"
                          >
                            {t("How does RheinBrücke differentiate its Epicor services?")}
                          </button>
                        </h2>
                        <div
                          id="collapse3"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading3"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("Our key differentiators are deep technical and global implementation expertise. Our certified consultants bring extensive domain knowledge and have successfully executed complex Epicor projects across more than 45+ countries, including extensive experience with multi-company and multi-currency rollouts. We focus on achieving maximum, sustainable ROI. We are a Epicor Premium partner and a two times winner of the Epicor International Partner of the Year award with deep knowledge of Epicor including developing products and templates on top of Epicor.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <h2 className="accordion-header" id="heading4">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            {t("Does RheinBrücke offer post-implementation Epicor support?")}
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading4"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("Yes. Our dedicated Customer Excellence team provides flexible post-implementation Epicor support and Managed Services. We offer customized support plans, including SLA-driven maintenance, system optimization, 24/7 monitoring, and technical assistance to ensure continuous ERP performance, reliability, and security compliance.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <h2 className="accordion-header" id="heading5">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            {t("Can RheinBrücke support global and multi-country Epicor ERP roll-outs?")}
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading5"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("Yes. RheinBrücke has extensive experience delivering Epicor ERP roll-outs across 45 countries, supporting multi-currency, multi-language, and region-specific compliance requirements.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                    </div>
                    {/* FAQ Accordion End */}
                  </div>
                  {/* FAQs section End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Faq End */}
        {/* Footer Start */}
        <footer className="main-footer pd0">
          {/* Footer Main Start */}
          <div className="footer-main">
            <div className="container">
              <div className="firstrow">
                <div className="row">
                  <div className="col-sm-8">
                    <h2>
                      {t("Transform with Epicor ERP")}
                    </h2>

                    <p>
                      {t("Discover how RheinBrücke can help you unlock efficiency, streamline operations, and scale globally with Epicor.")}
                    </p>
                    <p>
                      {t("Talk to our Epicor experts today.")}
                    </p>

                  </div>
                  <div className="col-sm-4">
                    <div className="ser-btn text-right">
                      <Link href="/contact-us" className="animated-svg-link">
                        {t("Contact Us")}
                        <span className="svg-container ">
                          <span className=" right">
                            <svg
                              width={24}
                              height={23}
                              viewBox="0 0 24 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="4.79995"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="12.7992"
                                cy="1.6"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="22.4008"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="1.6"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="6.40078"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="11.1996"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="11.2"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="19.1996"
                                cy="14.4"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="16.0004"
                                cy="17.6"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="12.7992"
                                cy="20.8"
                                r="1.6"
                                fill="#535353"
                              />
                              <circle
                                className="dot"
                                opacity="0.5"
                                cx="19.1996"
                                cy="8.00002"
                                r="1.6"
                                fill="#535353"
                              />
                            </svg>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*?php include "footer.php" ?*/}
            </div>
          </div>
        </footer>
      </>

    </CommomLayout>

  )
}