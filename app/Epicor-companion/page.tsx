"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import {useTranslation} from "../hooks/useTranslation";
export default function EnterpriseSolutions() {
  const { t, language } = useTranslation();
    return (
        <CommomLayout>
<>
  {/* Header Start */}
  {/*?php include "navbar.php" ?*/}
  {/* Header End */}
  {/* Hero Section Start*/}
  <div className="hero brainsec bluebg digi1  pdb0">
    <div className="container">
      <div className="row section-row align-items-center  digitalsec">
        <div className="col-sm-6">
          <div className="section-title wow fadeInUp">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Extend ERP with integrated solutions for payroll (EpicPay), MES, ECM, FP&A, IP&O, WMS, Data Analytics, and more")}
            </h2>
            <p>
              {t("Epicor Companion Products enhance your core ERP system, enabling end-to-end operational control and insights. They are designed to integrate seamlessly with Epicor ERP for complete business management.")}

            </p>
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
  {/* Our Testimonial Section Start */}
  <div className={`our-testimonial epiccompanion  pd30 ${language === 'German' ? 'gercompcab' : ''}`}>
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-lg-6">
          <div className="section-title">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Our Companion Products Capabilities")}
            </h2>
            {/*<p>We align Microsoft Dynamics capabilities with*/}
            {/*    your strategic objectives using our Analyse–Integrate–Transform (AIT) methodology</p>*/}
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-12">
          {/* Testimonial Slider Start */}
          <div className="testimonial-slider enterslide epiccomp epichgt">
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
                            <img src="/images/epicpay.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body  oa-para-waber">
                          <h3>{t("EpicPay")}</h3>
                          <p className="oa-para">
                            {t("Simplify payroll management and compliance.")}
                          </p>
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
                            <img
                              src="/images/manufacturingexecution.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("MES (Manufacturing Execution)")}</h3>

                          <p className="oa-para">
                            {t("Optimize shop-floor operations and production tracking.")}

                          </p>
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
                            <img src="/images/contentmanagement.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("ECM (Enterprise Content Management)")}</h3>

                          <p className="oa-para">
                            {t("Centralize documents and workflows.")}
                          </p>
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
                            <img
                              src="/images/financeplanninganalysis.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("FP&A (Financial Planning & Analysis)")}</h3>

                          <p className="oa-para">
                            {t("Improve budgeting, forecasting, and reporting.")}
                          </p>
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
                            <img src="/images/inventoryplanning.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>
                            {t("IP&O (Inventory Planning & Optimization)")}

                          </h3>
                          <p className="oa-para">
                            {t("Maximize inventory efficiency and reduce costs.")}
                          </p>
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
                            <img src="/images/warehousemanagement.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("WMS (Warehouse Management System)")}</h3>
                          <p className="oa-para">
                            {t("Streamline warehouse operations and logistics.")}
                          </p>
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
                            <img src="/images/dataanalytics.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("Data Analytics (Phocas)")}</h3>
                          <p className="oa-para">
                            {t("Drive data-driven decisions with advanced analytics and visualizations.")}
                          </p>
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
                            <img src="/images/ecommerce.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("Epicor eCommerce")} </h3>
                          <p className="oa-para">
                            {t("Provide a connected, self-service online storefront for manufacturers, distributors, and wholesalers to drive customer loyalty and profitability.")}

                          </p>
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
                            <img src="/images/epicorgrow.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("Epicor Grow")} </h3>
                          <p className="oa-para">
                            {t("Cloud-based business intelligence solution to harness data for better decision-making and operational efficiency.")}

                          </p>
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
                            <img src="/images/datadiscovery.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("Epicor Data Discovery")}</h3>

                          <p className="oa-para">
                            {t("Visualize and interact with ERP data through intuitive dashboards and charts.")}

                          </p>
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
                            <img src="/images/spreadsheetserver.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("Epicor Spreadsheet Server")}</h3>

                          <p className="oa-para">
                            {t("Connect ERP data directly to Excel for real-time reporting, drill-down analysis, and planning.")}
                          </p>
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
                            <img src="/images/kineticwarehouse.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("Epicor Kinetic Warehouse")}</h3>

                          <p className="oa-para">
                            {t("Mobile-first scanning solution to optimize warehouse and shop-floor transactions.")}

                          </p>
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
                            <img src="/images/automationstudio.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("Automation Studio")}</h3>

                          <p className="oa-para">
                            {t("Connect applications and automate workflows with low-code/no-code integration.")}

                          </p>
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
                            <img src="/images/serviceconnect.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("Service Connect")}</h3>

                          <p className="oa-para">
                            {t("Simplify system integrations and process automation across Epicor solutions.")}

                          </p>
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
                            <img src="/images/quickship.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("QuickShip")}</h3>

                          <p className="oa-para">
                            {t("Optimize shipping operations with real-time carrier integration and tracking.")}
                          </p>
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
                            <img src="/images/bartender.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("Epicor BarTender")}</h3>
                          <p className="oa-para">
                            {t("Barcode labeling solution to create, manage, and print labels across warehouses and manufacturing operations.")}
                          </p>
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
                            <img src="/images/smartsensor.svg" alt="" />
                          </div>
                        </div>
                        <div className="service-item-body oa-para-waber">
                          <h3>{t("Sensors with ERP")}</h3>
                          <p className="oa-para">
                            {t("Integrate smart sensors with ERP for real-time data on monitoring, pre-emptive maintenance, and process optimization.")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Slide End */}
              </div>
              <div className="testimonial-btn rtyElement">
                <div className="testimonial-button-prev">
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
                <span className="testspace" style={{ color: "#000" }}>
                  1/6
                </span>
                <div className="testimonial-button-next">
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
      </div>
    </div>
  </div>
  {/* Our Testimonial Section End */}
  <div className="advantage additional1 epicadv pd-50">
    <div className="container">
      <div className="row section-row1 align-items-center">
        <div className="col-sm-12">
          <div className="section-title text-center text-black">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Why Choose Epicor Companion Products?")}
            </h2>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-item-body1  w80">
                {/* <h3>Seamless Integration</h3> */}
                <h3>
                  {t("Seamless integration with Epicor ERP for a unified platform.")}

                </h3>
                <div className="text-center">
                  <img src="/images/advant1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-item-body1 epicright1  w80">
                {/* <h3>Configurable</h3> */}
                <h3>
                  {t("Enhance operational efficiency and visibility across all business functions.")}

                </h3>
                <img src="/images/advant2.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="service-item-body1 epicright">
                {/* <h3>Reporting and Analytics</h3> */}
                <h3>
                  {t("Scalable solutions to grow with your business needs.")}
                </h3>

                <img src="/images/advant3.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="service-item-body1 epicright">
                {/* <h3>Mobile Accessibility</h3> */}
                <h3>
                  {t("End-to-end support, including deployment, training, and optimization.")}

                </h3>
                <div className="text-center">
                  <img src="/images/advant4.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="service-item-body1 epicleft">
                {/* <h3>Effective Data Management</h3> */}
                <h3>
                  {t("Deliver measurable business impact with smarter operations and insights.")}

                </h3>
                <img src="/images/advant5.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




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
                            {t("What are Epicor Companion Products?")} 
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
                              {t("Epicor Companion Products are a RheinBrücke’s suite of tools and add-ons that extend Epicor’s core functionality with specific business solutions and enhance business efficiency. These solutions enhance business efficiency, fill specific operational gaps, and are designed to maximize your return on investment (ROI) in the Epicor platform.")}  
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
                             {t("What are some examples of Companion Products?")}
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
                              {t("Examples include EpicPay for MEA Payroll, MES (Manufacturing Execution System), ECM (Enterprise Content Management), FP&A (Financial Planning & Analysis), IP&O (Inventory Planning & Optimisation), WMS (Warehouse Management System), and Data Analytics, which integrate with Epicor to streamline operations.")} 
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
                            {t("Do these products work with both on-premises and cloud Epicor versions?")} 
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
                              {t("Yes. Companion Products are engineered for high compatibility across deployment environments. They are verified to work with both on-premises and Cloud versions of Epicor, including Epicor Kinetic. This ensures a smooth path for users planning future Cloud migration or version upgrades.")} 
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
                          {t("Can Companion Products be customised for specific business needs?")} 
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
                              {t("Yes. RheinBrücke supports in-depth customization and configuration of Companion Products. Our certified Epicor experts tailor the solutions to align precisely with your unique organizational process requirements, especially those specific to global regulatory needs or complex multi-company structures.")} 
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
          {t("Ready to extend your ERP with Epicor Companion Products?")}
              </h2>
            <p>
    {t("Talk to Our ERP Experts.")} </p>

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