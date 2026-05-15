"use client";

import React from "react";
import CommomLayout from "../../../../Components/CommomLayout";
import Link from "next/link";
import {useTranslation} from "../../../../hooks/useTranslation";
export default function SapAms() {
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
          <div className="section-title">
          <h2 className="text-anime-style-21" data-cursor="-opaque">
              {t("SAP Analytics Cloud")}
            </h2>
            <p>
              {t("SAP Analytics Cloud Implementation and Data Intelligence")}
            </p>
            <p>
              {t("Turn enterprise data into real-time, actionable insights. RheinBrücke supports organisations in implementing SAP Analytics Cloud and enterprise analytics architecture, enabling data-driven decision-making across finance, supply chain and operations in both SAP and non-SAP environments.")}
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="digiban text-center">
            {/*<img src="/images/digitalban.png" alt="">*/}
      <svg width="300" height="597" viewBox="0 0 300 597" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_68_85)">
<circle cx="150" cy="477.191" r="150" fill="url(#paint0_linear_68_85)"/>
<path d="M71.3242 471.847H82.4163C86.0058 471.847 87.3088 474.36 87.3088 476.672C87.3088 478.984 86.2556 480.507 84.2982 481.141V481.192C85.878 481.422 86.8074 482.919 86.908 485.052C87.0591 488.43 87.1597 489.269 87.7619 489.98H84.9506C84.5227 489.472 84.5227 488.71 84.3988 486.526C84.2226 483.275 83.1442 482.284 80.9351 482.284H73.9844V489.978H71.3242V471.845V471.847ZM81.4133 479.948C84.0232 479.948 84.6505 478.35 84.6505 477.078C84.6505 475.352 83.6225 474.182 81.4888 474.182H73.9844V479.946H81.4133V479.948Z" fill="white"/>
<path d="M89.8711 471.696H92.3803V478.679H92.4306C93.6097 476.825 95.693 476.216 97.5749 476.216C100.737 476.216 103.097 477.587 103.097 480.914V489.98H100.588V481.422C100.588 479.466 99.3832 478.349 96.6979 478.349C94.4152 478.349 92.3822 479.696 92.3822 482.311V489.98H89.873V471.696H89.8711Z" fill="white"/>
<path d="M108.242 484.088C108.444 486.831 110.852 488.305 113.084 488.305C114.515 488.305 116.473 487.823 117.327 485.944H119.987C118.732 489.143 115.795 490.438 113.21 490.438C108.091 490.438 105.582 487.162 105.582 483.328C105.582 479.494 108.091 476.218 113.21 476.218C116.674 476.218 120.337 478.25 120.337 483.761V484.092H108.24L108.242 484.088ZM117.677 482.107C117.301 479.695 115.443 478.349 113.084 478.349C110.726 478.349 108.693 479.721 108.316 482.107H117.677Z" fill="white"/>
<path d="M122.898 471.696H125.408V474.49H122.898V471.696ZM122.898 476.672H125.408V489.98H122.898V476.672Z" fill="white"/>
<path d="M128.469 476.672H130.978V478.679H131.028C132.207 476.825 134.291 476.216 136.173 476.216C139.334 476.216 141.694 477.587 141.694 480.914V489.98H139.185V481.422C139.185 479.466 137.981 478.349 135.296 478.349C133.013 478.349 130.98 479.695 130.98 482.311V489.98H128.471V476.672H128.469Z" fill="white"/>
<path d="M144.732 471.847H154.394C157.832 471.847 159.613 473.473 159.613 476.316C159.613 478.093 158.81 479.897 156.099 480.481V480.532C159.588 480.889 160.216 483.453 160.216 485.001C160.216 486.957 159.162 489.978 154.217 489.978H144.732V471.845V471.847ZM145.886 480.076H153.867C154.794 480.076 158.46 480.076 158.46 476.394C158.46 472.713 155.6 472.864 153.691 472.864H145.886V480.076ZM145.886 488.965H153.968C154.87 488.965 159.062 488.965 159.062 484.901C159.062 481.092 155.648 481.092 153.666 481.092H145.886V488.965Z" fill="white"/>
<path d="M162.752 476.978H163.908V480.05H163.958C164.812 477.764 166.769 476.571 169.279 476.571C169.629 476.571 169.881 476.621 170.231 476.723V477.891C169.956 477.789 169.629 477.738 168.901 477.738C165.563 477.738 163.908 480.303 163.908 482.944V489.978H162.752V476.976V476.978Z" fill="white"/>
<path d="M184.107 489.98H182.953V487.39H182.903C182.099 488.939 180.419 490.385 177.482 490.385C171.584 490.385 171.584 486.577 171.584 485.001V476.976H172.74V484.95C172.74 487.591 173.72 489.368 177.509 489.368C181.298 489.368 182.955 486.982 182.955 484.568V476.974H184.109V489.976L184.107 489.98ZM174.624 472.101H175.778V474.793H174.624V472.101ZM179.942 472.101H181.096V474.793H179.942V472.101Z" fill="white"/>
<path d="M198.869 481.067C198.718 479.415 196.511 477.587 193.423 477.587C189.357 477.587 187.324 480.509 187.324 483.606C187.324 485.714 188.78 489.37 193.423 489.37C196.007 489.37 198.466 488.126 199.045 485.434H200.199C199.521 488.838 196.66 490.385 193.425 490.385C189.21 490.385 186.172 487.642 186.172 483.604C186.172 479.033 189.485 476.571 193.425 476.571C197.365 476.571 199.874 478.855 200.025 481.065H198.869V481.067Z" fill="white"/>
<path d="M202.254 471.847H203.41V483.884L212.57 476.976H214.275L207.774 481.878L214.877 489.98H213.296L206.872 482.615L203.408 485.205V489.98H202.252V471.847H202.254Z" fill="white"/>
<path d="M216.611 483.732C216.686 486.982 218.868 489.369 222.733 489.369C226.597 489.369 227.753 486.829 228.204 485.662H229.358C228.28 488.937 226.02 490.385 222.607 490.385C218.216 490.385 215.455 487.693 215.455 483.377C215.455 480.66 217.161 476.571 222.632 476.571C227.099 476.571 229.658 479.566 229.709 483.732H216.609H216.611ZM228.406 482.717C227.928 479.161 225.469 477.587 222.508 477.587C219.196 477.587 217.112 479.619 216.611 482.717H228.406Z" fill="white"/>
<path d="M118.146 437.007C118.146 440.114 115.659 442.632 112.588 442.632C109.517 442.632 107.029 440.114 107.029 437.007C107.029 433.899 109.517 431.384 112.588 431.384C115.659 431.384 118.146 433.901 118.146 437.007Z" fill="white"/>
<path d="M140.377 437.007C140.377 440.114 137.889 442.632 134.818 442.632C131.748 442.632 129.26 440.114 129.26 437.007C129.26 433.899 131.748 431.384 134.818 431.384C137.889 431.384 140.377 433.901 140.377 437.007Z" fill="white"/>
<path d="M162.609 437.007C162.609 440.114 160.121 442.632 157.053 442.632C153.984 442.632 151.494 440.114 151.494 437.007C151.494 433.899 153.982 431.384 157.053 431.384C160.123 431.384 162.609 433.901 162.609 437.007Z" fill="white"/>
<path d="M184.842 437.007C184.842 440.114 182.354 442.632 179.283 442.632C176.213 442.632 173.727 440.114 173.727 437.007C173.727 433.899 176.214 431.384 179.283 431.384C182.352 431.384 184.842 433.901 184.842 437.007Z" fill="white"/>
<path d="M129.262 453.88C129.262 456.988 126.774 459.505 123.703 459.505C120.632 459.505 118.145 456.988 118.145 453.88C118.145 450.773 120.632 448.257 123.703 448.257C126.774 448.257 129.262 450.775 129.262 453.88Z" fill="white"/>
<path d="M151.494 453.88C151.494 456.988 149.006 459.505 145.936 459.505C142.865 459.505 140.379 456.988 140.379 453.88C140.379 450.773 142.867 448.257 145.936 448.257C149.004 448.257 151.494 450.775 151.494 453.88Z" fill="white"/>
<path d="M173.727 453.88C173.727 456.988 171.239 459.505 168.168 459.505C165.097 459.505 162.609 456.988 162.609 453.88C162.609 450.773 165.099 448.257 168.168 448.257C171.237 448.257 173.727 450.775 173.727 453.88Z" fill="white"/>
</g>
<path d="M149.998 0.191406V342.191" stroke="url(#paint1_linear_68_85)" stroke-width="1.5"/>
<path d="M89.5078 0.191406L90.6677 4.5852C98.3927 33.8483 102.304 63.9869 102.304 94.2525V342.191" stroke="url(#paint2_linear_68_85)" stroke-width="1.5"/>
<circle opacity="0.8" cx="96.4867" cy="28.1097" r="2.32653" fill="#28B67E"/>
<circle cx="116.262" cy="61.8445" r="2.32653" fill="#28B67E"/>
<circle cx="149.998" cy="38.5792" r="2.32653" fill="#28B67E"/>
<circle cx="182.569" cy="296.824" r="2.32653" fill="#28B67E"/>
<circle opacity="0.5" cx="190.711" cy="21.1302" r="2.32653" fill="#28B67E"/>
<circle cx="197.692" cy="254.947" r="2.32653" fill="#28B67E"/>
<circle cx="132.549" cy="254.947" r="2.32653" fill="#28B67E"/>
<path d="M210.486 0.191406L209.326 4.5852C201.601 33.8483 197.69 63.9869 197.69 94.2525V342.191" stroke="url(#paint3_linear_68_85)" stroke-width="1.5"/>
<path d="M104.631 0.191406L105.791 4.58521C113.516 33.8483 117.427 63.9869 117.427 94.2525V342.191" stroke="url(#paint4_linear_68_85)" stroke-width="1.5"/>
<path d="M195.365 0.191406L194.205 4.5852C186.48 33.8483 182.569 63.9869 182.569 94.2525V342.191" stroke="url(#paint5_linear_68_85)" stroke-width="1.5"/>
<path d="M119.752 0.191406L120.912 4.5852C128.637 33.8483 132.548 63.9869 132.548 94.2525V342.191" stroke="url(#paint6_linear_68_85)" stroke-width="1.5"/>
<path d="M180.242 0.191406L179.082 4.5852C171.357 33.8483 167.446 63.9869 167.446 94.2525V342.191" stroke="url(#paint7_linear_68_85)" stroke-width="1.5"/>
<g filter="url(#filter0_d_68_85)">
<circle cx="150" cy="167.191" r="75" fill="white"/>
<circle cx="150" cy="167.191" r="74.0625" stroke="#499A9A" stroke-width="1.875"/>
</g>
<path d="M129.142 171.429C127.397 171.429 125.833 171.146 124.45 170.579C123.068 170.013 121.957 169.174 121.118 168.063C120.302 166.953 119.872 165.615 119.826 164.051H126.014C126.105 164.935 126.411 165.615 126.932 166.091C127.454 166.545 128.134 166.771 128.972 166.771C129.834 166.771 130.514 166.579 131.012 166.193C131.511 165.785 131.76 165.23 131.76 164.527C131.76 163.938 131.556 163.451 131.148 163.065C130.763 162.68 130.276 162.363 129.686 162.113C129.12 161.864 128.304 161.581 127.238 161.263C125.697 160.787 124.439 160.311 123.464 159.835C122.49 159.359 121.651 158.657 120.948 157.727C120.246 156.798 119.894 155.585 119.894 154.089C119.894 151.868 120.699 150.134 122.308 148.887C123.918 147.618 126.014 146.983 128.598 146.983C131.228 146.983 133.347 147.618 134.956 148.887C136.566 150.134 137.427 151.879 137.54 154.123H131.25C131.205 153.353 130.922 152.752 130.4 152.321C129.879 151.868 129.21 151.641 128.394 151.641C127.692 151.641 127.125 151.834 126.694 152.219C126.264 152.582 126.048 153.115 126.048 153.817C126.048 154.588 126.411 155.189 127.136 155.619C127.862 156.05 128.995 156.515 130.536 157.013C132.078 157.535 133.324 158.033 134.276 158.509C135.251 158.985 136.09 159.677 136.792 160.583C137.495 161.49 137.846 162.657 137.846 164.085C137.846 165.445 137.495 166.681 136.792 167.791C136.112 168.902 135.115 169.786 133.8 170.443C132.486 171.101 130.933 171.429 129.142 171.429ZM156.282 166.975H147.374L145.946 171.191H139.86L148.496 147.323H155.228L163.864 171.191H157.71L156.282 166.975ZM154.786 162.487L151.828 153.749L148.904 162.487H154.786ZM184.683 155.007C184.683 156.39 184.365 157.659 183.731 158.815C183.096 159.949 182.121 160.867 180.807 161.569C179.492 162.272 177.86 162.623 175.911 162.623H172.307V171.191H166.493V147.323H175.911C177.815 147.323 179.424 147.652 180.739 148.309C182.053 148.967 183.039 149.873 183.697 151.029C184.354 152.185 184.683 153.511 184.683 155.007ZM175.469 157.999C176.579 157.999 177.407 157.739 177.951 157.217C178.495 156.696 178.767 155.959 178.767 155.007C178.767 154.055 178.495 153.319 177.951 152.797C177.407 152.276 176.579 152.015 175.469 152.015H172.307V157.999H175.469Z" fill="#025064"/>
<path d="M113.39 192.207H109.198L108.526 194.191H105.662L109.726 182.959H112.894L116.958 194.191H114.062L113.39 192.207ZM112.686 190.095L111.294 185.983L109.918 190.095H112.686ZM128.243 194.191H125.507L120.931 187.263V194.191H118.195V182.959H120.931L125.507 189.919V182.959H128.243V194.191ZM137.218 192.207H133.026L132.354 194.191H129.49L133.554 182.959H136.722L140.786 194.191H137.89L137.218 192.207ZM136.514 190.095L135.122 185.983L133.746 190.095H136.514ZM144.759 192.079H148.343V194.191H142.023V182.959H144.759V192.079ZM159.28 182.959L155.392 190.479V194.191H152.656V190.479L148.768 182.959H151.872L154.048 187.663L156.208 182.959H159.28ZM168.463 182.959V185.151H165.487V194.191H162.751V185.151H159.775V182.959H168.463ZM172.572 182.959V194.191H169.836V182.959H172.572ZM174.09 188.559C174.09 187.45 174.331 186.463 174.811 185.599C175.291 184.725 175.957 184.047 176.811 183.567C177.675 183.077 178.651 182.831 179.739 182.831C181.072 182.831 182.213 183.183 183.163 183.887C184.112 184.591 184.747 185.551 185.067 186.767H182.059C181.835 186.298 181.515 185.941 181.099 185.695C180.693 185.45 180.229 185.327 179.707 185.327C178.864 185.327 178.181 185.621 177.659 186.207C177.136 186.794 176.875 187.578 176.875 188.559C176.875 189.541 177.136 190.325 177.659 190.911C178.181 191.498 178.864 191.791 179.707 191.791C180.229 191.791 180.693 191.669 181.099 191.423C181.515 191.178 181.835 190.821 182.059 190.351H185.067C184.747 191.567 184.112 192.527 183.163 193.231C182.213 193.925 181.072 194.271 179.739 194.271C178.651 194.271 177.675 194.031 176.811 193.551C175.957 193.061 175.291 192.383 174.811 191.519C174.331 190.655 174.09 189.669 174.09 188.559ZM190.806 194.303C189.985 194.303 189.249 194.17 188.598 193.903C187.947 193.637 187.425 193.242 187.03 192.719C186.646 192.197 186.443 191.567 186.422 190.831H189.334C189.377 191.247 189.521 191.567 189.766 191.791C190.011 192.005 190.331 192.111 190.726 192.111C191.131 192.111 191.451 192.021 191.686 191.839C191.921 191.647 192.038 191.386 192.038 191.055C192.038 190.778 191.942 190.549 191.75 190.367C191.569 190.186 191.339 190.037 191.062 189.919C190.795 189.802 190.411 189.669 189.91 189.519C189.185 189.295 188.593 189.071 188.134 188.847C187.675 188.623 187.281 188.293 186.95 187.855C186.619 187.418 186.454 186.847 186.454 186.143C186.454 185.098 186.833 184.282 187.59 183.695C188.347 183.098 189.334 182.799 190.55 182.799C191.787 182.799 192.785 183.098 193.542 183.695C194.299 184.282 194.705 185.103 194.758 186.159H191.798C191.777 185.797 191.643 185.514 191.398 185.311C191.153 185.098 190.838 184.991 190.454 184.991C190.123 184.991 189.857 185.082 189.654 185.263C189.451 185.434 189.35 185.685 189.35 186.015C189.35 186.378 189.521 186.661 189.862 186.863C190.203 187.066 190.737 187.285 191.462 187.519C192.187 187.765 192.774 187.999 193.222 188.223C193.681 188.447 194.075 188.773 194.406 189.199C194.737 189.626 194.902 190.175 194.902 190.847C194.902 191.487 194.737 192.069 194.406 192.591C194.086 193.114 193.617 193.53 192.998 193.839C192.379 194.149 191.649 194.303 190.806 194.303Z" fill="#025064"/>
<defs>
<filter id="filter0_d_68_85" x="20.625" y="37.8164" width="258.75" height="258.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="9.375" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_68_85"/>
<feOffset/>
<feGaussianBlur stdDeviation="22.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.603922 0 0 0 0 0.603922 0 0 0 0.78 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_68_85"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_68_85" result="shape"/>
</filter>
<linearGradient id="paint0_linear_68_85" x1="150" y1="327.191" x2="150" y2="627.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#008080"/>
<stop offset="0.67478" stop-color="#082326" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_68_85" x1="150.498" y1="0.191406" x2="150.498" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_68_85" x1="95.9058" y1="0.191406" x2="95.9058" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_68_85" x1="204.088" y1="0.191406" x2="204.088" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_68_85" x1="111.029" y1="0.191406" x2="111.029" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_68_85" x1="188.967" y1="0.191406" x2="188.967" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_68_85" x1="126.15" y1="0.191406" x2="126.15" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_68_85" x1="173.844" y1="0.191406" x2="173.844" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0_68_85">
<rect width="300" height="269" fill="white" transform="translate(0 327.191)"/>
</clipPath>
</defs>
</svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End*/}
  <div className="aboutretail retail-baner1 retail-baner-11 kineticsecana approachh systemview pd60">
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-5">
          <div className="section-title">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Our Capabilities")}
            </h2>
          </div>
          <div className="pill-points appro">
            <div className="challenge-point-waber self-service">
              <img src="/images/Automate.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("SAP Analytics Cloud (SAC) - dashboards, planning and predictive analytics")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Enhance.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("SAP Business Warehouse (BW) and BI architecture design and optimisation")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Optimize.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Financial analytics, profitability reporting and faster close cycles")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Enable.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Supply chain performance monitoring and operational demand analysis")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Embed.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Migration from legacy reporting environments to SAP Analytics Cloud")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Integrate.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Integration of SAP analytics with non-SAP and third-party data sources")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End*/}
  <div className="aboutretail  mobileturn mobileview dnone pd60">
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-12">
          <div className="section-title">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Our Capabilities")}
            </h2>
          </div>
          <div className="pill-points appro">
            <div className="challenge-point-waber self-service">
              <img src="/images/ss1.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("SAP Analytics Cloud (SAC) - dashboards, planning and predictive analytics")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss2.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("SAP Business Warehouse (BW) and BI architecture design and optimisation")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss3.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Financial analytics, profitability reporting and faster close cycles")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss7.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Supply chain performance monitoring and operational demand analysis")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss8.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Migration from legacy reporting environments to SAP Analytics Cloud")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss9.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Integration of SAP analytics with non-SAP and third-party data sources")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End*/}
  <div className="advantage additional1 epicadv pd-50">
    <div className="container">
      <div className="row section-row1 align-items-center">
        <div className="col-sm-12">
          <div className="section-title text-center text-black">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Why Choose RheinBrücke")}
            </h2>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-item-body1 firstmobilebox sapsub1 w80">
                <h3>
                  {t("Consolidated enterprise data replacing fragmented spreadsheet-based reporting")}
                </h3>
                <div className="text-center">
                  <img src="/images/sap1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-item-body1 epicright1  w80">
                <h3>
                  {t("Real-time visibility across finance, operations, supply chain and procurement")}
                </h3>
                <img src="/images/sap2.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-item-body1 epicright sap3 w80">
                <h3>{t("Predictive analytics and forecasting to support faster business decisions")} </h3>
                <img src="/images/sap3.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-item-body1 epicright w80">
                <h3>
                  {t("Scalable analytics architecture designed for SAP and hybrid landscapes")}
                </h3>
                <div className="text-center">
                  <img src="/images/advant4.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-item-body1 epicleft w80">
                <h3>
                  {t("End-to-end service from architecture design through dashboard delivery")}
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
                            {t("What is SAP Analytics Cloud?")}
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
                              {t("SAP Analytics Cloud (SAC) is SAP's cloud analytics platform combining business intelligence, planning and predictive analytics to support enterprise reporting and decision-making.")}
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
                            {t("What is the difference between SAP Analytics Cloud and SAP BW?")}
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
                              {t("SAP BW provides enterprise data warehousing and structured reporting, while SAP Analytics Cloud focuses on cloud-based analytics, visualisation and planning.")}
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
                           {t("What are the benefits of SAP Analytics Cloud?")}
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
                              {t("SAP Analytics Cloud enables organisations to consolidate enterprise data, build interactive dashboards, perform predictive analysis and support integrated planning across business functions")}
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
                           {t("Can SAP Analytics integrate with non-SAP systems?")}
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
                              {t("Yes. SAP analytics platforms integrate data from both SAP and non-SAP systems, enabling organisations to build comprehensive unified analytics environments.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.8s"
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
                           {t("Does RheinBrücke implement SAP Analytics Cloud?")}
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
                              {t("Yes. RheinBrücke supports SAP Analytics Cloud implementation, dashboard development and analytics architecture across finance, supply chain and operations.")}
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
              <h2>{t("Ready to Build a Data-Driven Enterprise?")}</h2>

              <p>{t("Talk to our SAP analytics team about your reporting environment.")}</p>
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
