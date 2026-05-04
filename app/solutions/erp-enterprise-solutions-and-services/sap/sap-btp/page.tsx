"use client";

import React from "react";
import CommomLayout from "../../../../Components/CommomLayout";
import Link from "next/link";
import {useTranslation} from "../../../../hooks/useTranslation";
export default function SapTransformation() {
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
              {t("SAP Business Technology Platform (BTP)")}
            </h2>
            <p>
              {t("SAP BTP Integration and Extension Services")}
            </p>
            <p>
              {t("Extend and connect your SAP landscape without touching the ERP core. RheinBrücke delivers SAP BTP integration, application development and extension services that enable workflow automation, advanced analytics and enterprise application innovation while maintaining clean core compliance.")}
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="digiban text-center">
            {/*<img src="/images/digitalban.png" alt="">*/}
        <svg width="300" height="597" viewBox="0 0 300 597" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_68_44)">
<circle cx="150" cy="477.191" r="150" fill="url(#paint0_linear_68_44)"/>
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
<path d="M149.998 0.191406V342.191" stroke="url(#paint1_linear_68_44)" stroke-width="1.5"/>
<path d="M89.5078 0.191406L90.6677 4.5852C98.3927 33.8483 102.304 63.9869 102.304 94.2525V342.191" stroke="url(#paint2_linear_68_44)" stroke-width="1.5"/>
<circle opacity="0.8" cx="96.4867" cy="28.1097" r="2.32653" fill="#28B67E"/>
<circle cx="116.262" cy="61.8445" r="2.32653" fill="#28B67E"/>
<circle cx="149.998" cy="38.5792" r="2.32653" fill="#28B67E"/>
<circle cx="182.569" cy="296.824" r="2.32653" fill="#28B67E"/>
<circle opacity="0.5" cx="190.711" cy="21.1302" r="2.32653" fill="#28B67E"/>
<circle cx="197.692" cy="254.947" r="2.32653" fill="#28B67E"/>
<circle cx="132.549" cy="254.947" r="2.32653" fill="#28B67E"/>
<path d="M210.486 0.191406L209.326 4.5852C201.601 33.8483 197.69 63.9869 197.69 94.2525V342.191" stroke="url(#paint3_linear_68_44)" stroke-width="1.5"/>
<path d="M104.631 0.191406L105.791 4.58521C113.516 33.8483 117.427 63.9869 117.427 94.2525V342.191" stroke="url(#paint4_linear_68_44)" stroke-width="1.5"/>
<path d="M195.365 0.191406L194.205 4.5852C186.48 33.8483 182.569 63.9869 182.569 94.2525V342.191" stroke="url(#paint5_linear_68_44)" stroke-width="1.5"/>
<path d="M119.752 0.191406L120.912 4.5852C128.637 33.8483 132.548 63.9869 132.548 94.2525V342.191" stroke="url(#paint6_linear_68_44)" stroke-width="1.5"/>
<path d="M180.242 0.191406L179.082 4.5852C171.357 33.8483 167.446 63.9869 167.446 94.2525V342.191" stroke="url(#paint7_linear_68_44)" stroke-width="1.5"/>
<g filter="url(#filter0_d_68_44)">
<circle cx="150" cy="167.191" r="75" fill="white"/>
<circle cx="150" cy="167.191" r="74.0625" stroke="#499A9A" stroke-width="1.875"/>
</g>
<path d="M129.142 171.429C127.397 171.429 125.833 171.146 124.45 170.579C123.068 170.013 121.957 169.174 121.118 168.063C120.302 166.953 119.872 165.615 119.826 164.051H126.014C126.105 164.935 126.411 165.615 126.932 166.091C127.454 166.545 128.134 166.771 128.972 166.771C129.834 166.771 130.514 166.579 131.012 166.193C131.511 165.785 131.76 165.23 131.76 164.527C131.76 163.938 131.556 163.451 131.148 163.065C130.763 162.68 130.276 162.363 129.686 162.113C129.12 161.864 128.304 161.581 127.238 161.263C125.697 160.787 124.439 160.311 123.464 159.835C122.49 159.359 121.651 158.657 120.948 157.727C120.246 156.798 119.894 155.585 119.894 154.089C119.894 151.868 120.699 150.134 122.308 148.887C123.918 147.618 126.014 146.983 128.598 146.983C131.228 146.983 133.347 147.618 134.956 148.887C136.566 150.134 137.427 151.879 137.54 154.123H131.25C131.205 153.353 130.922 152.752 130.4 152.321C129.879 151.868 129.21 151.641 128.394 151.641C127.692 151.641 127.125 151.834 126.694 152.219C126.264 152.582 126.048 153.115 126.048 153.817C126.048 154.588 126.411 155.189 127.136 155.619C127.862 156.05 128.995 156.515 130.536 157.013C132.078 157.535 133.324 158.033 134.276 158.509C135.251 158.985 136.09 159.677 136.792 160.583C137.495 161.49 137.846 162.657 137.846 164.085C137.846 165.445 137.495 166.681 136.792 167.791C136.112 168.902 135.115 169.786 133.8 170.443C132.486 171.101 130.933 171.429 129.142 171.429ZM156.282 166.975H147.374L145.946 171.191H139.86L148.496 147.323H155.228L163.864 171.191H157.71L156.282 166.975ZM154.786 162.487L151.828 153.749L148.904 162.487H154.786ZM184.683 155.007C184.683 156.39 184.365 157.659 183.731 158.815C183.096 159.949 182.121 160.867 180.807 161.569C179.492 162.272 177.86 162.623 175.911 162.623H172.307V171.191H166.493V147.323H175.911C177.815 147.323 179.424 147.652 180.739 148.309C182.053 148.967 183.039 149.873 183.697 151.029C184.354 152.185 184.683 153.511 184.683 155.007ZM175.469 157.999C176.579 157.999 177.407 157.739 177.951 157.217C178.495 156.696 178.767 155.959 178.767 155.007C178.767 154.055 178.495 153.319 177.951 152.797C177.407 152.276 176.579 152.015 175.469 152.015H172.307V157.999H175.469Z" fill="#025064"/>
<path d="M142.8 188.431C143.45 188.57 143.973 188.895 144.368 189.407C144.762 189.909 144.96 190.485 144.96 191.135C144.96 192.074 144.629 192.821 143.968 193.375C143.317 193.919 142.405 194.191 141.232 194.191H136V182.959H141.056C142.197 182.959 143.088 183.221 143.728 183.743C144.378 184.266 144.704 184.975 144.704 185.871C144.704 186.533 144.528 187.082 144.176 187.519C143.834 187.957 143.376 188.261 142.8 188.431ZM138.736 187.503H140.528C140.976 187.503 141.317 187.407 141.552 187.215C141.797 187.013 141.92 186.719 141.92 186.335C141.92 185.951 141.797 185.658 141.552 185.455C141.317 185.253 140.976 185.151 140.528 185.151H138.736V187.503ZM140.752 191.983C141.21 191.983 141.562 191.882 141.808 191.679C142.064 191.466 142.192 191.162 142.192 190.767C142.192 190.373 142.058 190.063 141.792 189.839C141.536 189.615 141.178 189.503 140.72 189.503H138.736V191.983H140.752ZM154.627 182.959V185.151H151.651V194.191H148.915V185.151H145.939V182.959H154.627ZM164.56 186.575C164.56 187.226 164.41 187.823 164.112 188.367C163.813 188.901 163.354 189.333 162.736 189.663C162.117 189.994 161.349 190.159 160.432 190.159H158.736V194.191H156V182.959H160.432C161.328 182.959 162.085 183.114 162.704 183.423C163.322 183.733 163.786 184.159 164.096 184.703C164.405 185.247 164.56 185.871 164.56 186.575ZM160.224 187.983C160.746 187.983 161.136 187.861 161.392 187.615C161.648 187.37 161.776 187.023 161.776 186.575C161.776 186.127 161.648 185.781 161.392 185.535C161.136 185.29 160.746 185.167 160.224 185.167H158.736V187.983H160.224Z" fill="#025064"/>
<defs>
<filter id="filter0_d_68_44" x="20.625" y="37.8164" width="258.75" height="258.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="9.375" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_68_44"/>
<feOffset/>
<feGaussianBlur stdDeviation="22.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.603922 0 0 0 0 0.603922 0 0 0 0.78 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_68_44"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_68_44" result="shape"/>
</filter>
<linearGradient id="paint0_linear_68_44" x1="150" y1="327.191" x2="150" y2="627.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#008080"/>
<stop offset="0.67478" stop-color="#082326" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_68_44" x1="150.498" y1="0.191406" x2="150.498" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_68_44" x1="95.9058" y1="0.191406" x2="95.9058" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_68_44" x1="204.088" y1="0.191406" x2="204.088" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_68_44" x1="111.029" y1="0.191406" x2="111.029" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_68_44" x1="188.967" y1="0.191406" x2="188.967" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_68_44" x1="126.15" y1="0.191406" x2="126.15" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_68_44" x1="173.844" y1="0.191406" x2="173.844" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0_68_44">
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
  <div className="aboutretail retail-baner1 retail-baner-11 sapbtp approachh systemview pd60">
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
                  {t("SAP BTP integration and API architecture across SAP and non-SAP systems")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Enhance.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Application development and side-by-side extensions using SAP BTP")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Optimize.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Workflow automation and business process orchestration")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Enable.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Data integration and analytics enablement across enterprise platforms")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Embed.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("SAP BTP governance, platform optimisation and clean-core compliance")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Integrate.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("AI and machine learning service enablement via SAP BTP")}
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
                  {t("SAP BTP integration and API architecture across SAP and non-SAP systems")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss2.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Application development and side-by-side extensions using SAP BTP")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss3.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Workflow automation and business process orchestration")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss7.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Data integration and analytics enablement across enterprise platforms")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss8.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("SAP BTP governance, platform optimisation and clean-core compliance")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss9.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("AI and machine learning service enablement via SAP BTP")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 mobileapproach">
          <img src="/images/sap-btp.jpg" alt="" />
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
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-item-body1 firstmobilebox sapsub1 w80">
                <h3>
                  {t("Extend SAP capabilities without modifying the ERP core, clean core maintained")}
                </h3>
                <div className="text-center">
                  <img src="/images/sap1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-item-body1 epicright1  w80">
                <h3>
                  {t("Faster automation and digital innovation across enterprise workflows")}
                </h3>
                <img src="/images/sap2.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-item-body1 epicright sap3 w80">
                <h3>{t("Unified integration architecture connecting SAP and third-party systems")} </h3>
                <img src="/images/sap3.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-item-body1 epicright w80">
                <h3>
                  {t("Scalable platform designed to support long-term ERP transformation strategies")}
                </h3>
                <div className="text-center">
                  <img src="/images/advant4.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-item-body1 epicleft w80">
                <h3>
                  {t("Delivered by consultants with deep SAP S/4HANA and BTP expertise")}
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
                            {t("What is SAP Business Technology Platform (SAP BTP)?")}
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
                              {t("SAP BTP is SAP's platform for integration, application development, data management and analytics. It enables organisations to extend SAP applications and integrate enterprise systems without modifying core ERP.")}
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
                            {t("How does SAP BTP work with SAP S/4HANA?")}
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
                              {t("SAP BTP works alongside SAP S/4HANA by enabling integrations, application extensions and analytics without impacting the core ERP environment, preserving clean core architecture.")}
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
                           {t("What are the main capabilities of SAP BTP?")}
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
                              {t("SAP BTP supports several core capabilities, including:")}
                            </p>
                            <ul>
                              <li>{t("Application development and extensions")}</li>
                              <li>{t("Integration between SAP and third-party systems")}</li>
                              <li>{t("Data management and analytics")}</li>
                              <li>{t("Workflow automation and business process orchestration")}</li>
                              <li>{t("Artificial intelligence and machine learning services")}</li>
                            </ul>
                            <p>
                              {t("These capabilities allow organisations to build modern digital solutions on top of SAP environments.")}
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
                           {t("Can SAP BTP integrate with non-SAP systems?")}
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
                              {t("Yes. SAP BTP provides integration capabilities connecting SAP applications with non-SAP systems, cloud platforms and enterprise data sources to build unified enterprise architectures.")}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.7s"
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
                           {t("Why do organisations use SAP BTP?")}
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
                              {t("Organisations use SAP BTP to extend and integrate enterprise applications while maintaining stable ERP systems. SAP BTP enables organisations to accelerate innovation, automate business processes and build scalable digital solutions across enterprise environments.")}
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
                        <h2 className="accordion-header" id="heading6">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                           {t("Does RheinBrücke provide SAP BTP implementation services?")}
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading6"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("Yes. RheinBrücke supports SAP BTP implementation, application development, system integration and enterprise platform architecture across SAP environments.")}
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
              <h2>{t("Ready to Extend Your SAP Core with BTP?")}</h2>

              <p>{t("Speak to our SAP BTP integration specialists today.")}</p>
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