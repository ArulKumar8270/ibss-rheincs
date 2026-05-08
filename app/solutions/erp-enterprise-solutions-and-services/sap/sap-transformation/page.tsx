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
              {t("SAP S/4HANA Implementation, Migration and Cloud Transformation")}
            </h2>
            <p>
              {t("Modernise your ERP landscape with SAP S/4HANA. As an experienced SAP implementation partner, RheinBrücke supports enterprises across Europe and the Middle East in planning and executing SAP S/4HANA implementation, migration, and RISE with SAP cloud transformation initiatives, maintaining operational continuity throughout.")}
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="digiban text-center">
            {/*<img src="/images/digitalban.png" alt="">*/}
            <svg width="300" height="597" viewBox="0 0 300 597" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_63_2)">
<circle cx="150" cy="477.191" r="150" fill="url(#paint0_linear_63_2)"/>
<path d="M71.3243 471.847H82.4164C86.0059 471.847 87.3089 474.36 87.3089 476.672C87.3089 478.984 86.2557 480.507 84.2983 481.141V481.192C85.8782 481.422 86.8075 482.919 86.9082 485.052C87.0592 488.43 87.1599 489.269 87.762 489.98H84.9508C84.5229 489.472 84.5229 488.71 84.399 486.526C84.2228 483.275 83.1444 482.284 80.9352 482.284H73.9846V489.978H71.3243V471.845V471.847ZM81.4135 479.948C84.0234 479.948 84.6507 478.35 84.6507 477.078C84.6507 475.352 83.6226 474.182 81.489 474.182H73.9846V479.946H81.4135V479.948Z" fill="white"/>
<path d="M89.8711 471.696H92.3803V478.679H92.4306C93.6097 476.825 95.693 476.216 97.5749 476.216C100.737 476.216 103.097 477.587 103.097 480.914V489.98H100.588V481.422C100.588 479.466 99.3832 478.349 96.6979 478.349C94.4152 478.349 92.3822 479.696 92.3822 482.311V489.98H89.873V471.696H89.8711Z" fill="white"/>
<path d="M108.242 484.088C108.444 486.831 110.852 488.305 113.084 488.305C114.515 488.305 116.473 487.823 117.327 485.944H119.987C118.732 489.143 115.795 490.438 113.21 490.438C108.091 490.438 105.582 487.162 105.582 483.328C105.582 479.494 108.091 476.218 113.21 476.218C116.674 476.218 120.337 478.25 120.337 483.761V484.092H108.24L108.242 484.088ZM117.677 482.107C117.301 479.695 115.443 478.349 113.084 478.349C110.726 478.349 108.693 479.721 108.316 482.107H117.677Z" fill="white"/>
<path d="M122.899 471.696H125.408V474.49H122.899V471.696ZM122.899 476.672H125.408V489.98H122.899V476.672Z" fill="white"/>
<path d="M128.469 476.672H130.978V478.679H131.028C132.207 476.825 134.291 476.216 136.173 476.216C139.334 476.216 141.694 477.587 141.694 480.914V489.98H139.185V481.422C139.185 479.466 137.981 478.349 135.296 478.349C133.013 478.349 130.98 479.695 130.98 482.311V489.98H128.471V476.672H128.469Z" fill="white"/>
<path d="M144.732 471.847H154.394C157.832 471.847 159.613 473.473 159.613 476.316C159.613 478.093 158.81 479.897 156.099 480.481V480.532C159.588 480.889 160.216 483.453 160.216 485.001C160.216 486.957 159.162 489.978 154.217 489.978H144.732V471.845V471.847ZM145.886 480.076H153.867C154.794 480.076 158.46 480.076 158.46 476.394C158.46 472.713 155.6 472.864 153.691 472.864H145.886V480.076ZM145.886 488.965H153.968C154.87 488.965 159.062 488.965 159.062 484.901C159.062 481.092 155.648 481.092 153.666 481.092H145.886V488.965Z" fill="white"/>
<path d="M162.752 476.978H163.908V480.05H163.958C164.812 477.764 166.769 476.571 169.279 476.571C169.629 476.571 169.881 476.621 170.231 476.723V477.891C169.956 477.789 169.629 477.738 168.901 477.738C165.563 477.738 163.908 480.303 163.908 482.944V489.978H162.752V476.976V476.978Z" fill="white"/>
<path d="M184.107 489.98H182.953V487.39H182.903C182.099 488.939 180.419 490.385 177.482 490.385C171.584 490.385 171.584 486.577 171.584 485.001V476.976H172.74V484.95C172.74 487.591 173.72 489.368 177.509 489.368C181.298 489.368 182.955 486.982 182.955 484.568V476.974H184.109V489.976L184.107 489.98ZM174.624 472.101H175.778V474.793H174.624V472.101ZM179.942 472.101H181.096V474.793H179.942V472.101Z" fill="white"/>
<path d="M198.869 481.067C198.718 479.415 196.511 477.587 193.423 477.587C189.357 477.587 187.324 480.509 187.324 483.606C187.324 485.714 188.78 489.37 193.423 489.37C196.007 489.37 198.466 488.126 199.045 485.434H200.199C199.521 488.838 196.66 490.385 193.424 490.385C189.21 490.385 186.172 487.642 186.172 483.604C186.172 479.033 189.484 476.571 193.424 476.571C197.364 476.571 199.874 478.855 200.025 481.065H198.869V481.067Z" fill="white"/>
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
<path d="M149.998 0.191406V342.191" stroke="url(#paint1_linear_63_2)" stroke-width="1.5"/>
<path d="M89.5079 0.191406L90.6678 4.5852C98.3928 33.8483 102.304 63.9869 102.304 94.2525V342.191" stroke="url(#paint2_linear_63_2)" stroke-width="1.5"/>
<circle opacity="0.8" cx="96.4867" cy="28.1097" r="2.32653" fill="#28B67E"/>
<circle cx="116.262" cy="61.8445" r="2.32653" fill="#28B67E"/>
<circle cx="149.998" cy="38.5792" r="2.32653" fill="#28B67E"/>
<circle cx="182.569" cy="296.824" r="2.32653" fill="#28B67E"/>
<circle opacity="0.5" cx="190.711" cy="21.1302" r="2.32653" fill="#28B67E"/>
<circle cx="197.692" cy="254.947" r="2.32653" fill="#28B67E"/>
<circle cx="132.549" cy="254.947" r="2.32653" fill="#28B67E"/>
<path d="M210.486 0.191406L209.326 4.5852C201.601 33.8483 197.69 63.9869 197.69 94.2525V342.191" stroke="url(#paint3_linear_63_2)" stroke-width="1.5"/>
<path d="M104.631 0.191406L105.791 4.58521C113.516 33.8483 117.427 63.9869 117.427 94.2525V342.191" stroke="url(#paint4_linear_63_2)" stroke-width="1.5"/>
<path d="M195.365 0.191406L194.205 4.5852C186.48 33.8483 182.569 63.9869 182.569 94.2525V342.191" stroke="url(#paint5_linear_63_2)" stroke-width="1.5"/>
<path d="M119.752 0.191406L120.912 4.5852C128.637 33.8483 132.548 63.9869 132.548 94.2525V342.191" stroke="url(#paint6_linear_63_2)" stroke-width="1.5"/>
<path d="M180.242 0.191406L179.082 4.5852C171.357 33.8483 167.446 63.9869 167.446 94.2525V342.191" stroke="url(#paint7_linear_63_2)" stroke-width="1.5"/>
<g filter="url(#filter0_d_63_2)">
<circle cx="150" cy="167.191" r="75" fill="white"/>
<circle cx="150" cy="167.191" r="74.0625" stroke="#499A9A" stroke-width="1.875"/>
</g>
<path d="M94.7285 167.314C93.8302 167.314 93.0252 167.168 92.3135 166.876C91.6018 166.585 91.0302 166.153 90.5985 165.581C90.1785 165.01 89.9568 164.321 89.9335 163.516H93.1185C93.1652 163.971 93.3227 164.321 93.591 164.566C93.8593 164.8 94.2093 164.916 94.641 164.916C95.0843 164.916 95.4343 164.817 95.691 164.619C95.9477 164.409 96.076 164.123 96.076 163.761C96.076 163.458 95.971 163.207 95.761 163.009C95.5627 162.811 95.3118 162.647 95.0085 162.519C94.7168 162.391 94.2968 162.245 93.7485 162.081C92.9552 161.836 92.3077 161.591 91.806 161.346C91.3043 161.101 90.8727 160.74 90.511 160.261C90.1493 159.783 89.9685 159.159 89.9685 158.389C89.9685 157.246 90.3827 156.353 91.211 155.711C92.0393 155.058 93.1185 154.731 94.4485 154.731C95.8018 154.731 96.8927 155.058 97.721 155.711C98.5493 156.353 98.9927 157.251 99.051 158.406H95.8135C95.7902 158.01 95.6443 157.701 95.376 157.479C95.1077 157.246 94.7635 157.129 94.3435 157.129C93.9818 157.129 93.6902 157.228 93.4685 157.426C93.2468 157.613 93.136 157.887 93.136 158.249C93.136 158.646 93.3227 158.955 93.696 159.176C94.0693 159.398 94.6527 159.637 95.446 159.894C96.2393 160.162 96.881 160.419 97.371 160.664C97.8727 160.909 98.3043 161.265 98.666 161.731C99.0277 162.198 99.2085 162.799 99.2085 163.534C99.2085 164.234 99.0277 164.87 98.666 165.441C98.316 166.013 97.8027 166.468 97.126 166.806C96.4493 167.145 95.6502 167.314 94.7285 167.314ZM108.698 165.021H104.113L103.378 167.191H100.245L104.69 154.906H108.155L112.6 167.191H109.433L108.698 165.021ZM107.928 162.711L106.405 158.214L104.9 162.711H107.928ZM123.315 158.861C123.315 159.573 123.152 160.226 122.825 160.821C122.499 161.405 121.997 161.877 121.32 162.239C120.644 162.601 119.804 162.781 118.8 162.781H116.945V167.191H113.953V154.906H118.8C119.78 154.906 120.609 155.076 121.285 155.414C121.962 155.752 122.47 156.219 122.808 156.814C123.146 157.409 123.315 158.091 123.315 158.861ZM118.573 160.401C119.145 160.401 119.57 160.267 119.85 159.999C120.13 159.731 120.27 159.351 120.27 158.861C120.27 158.371 120.13 157.992 119.85 157.724C119.57 157.456 119.145 157.321 118.573 157.321H116.945V160.401H118.573ZM133.027 167.314C132.128 167.314 131.323 167.168 130.612 166.876C129.9 166.585 129.328 166.153 128.897 165.581C128.477 165.01 128.255 164.321 128.232 163.516H131.417C131.463 163.971 131.621 164.321 131.889 164.566C132.158 164.8 132.508 164.916 132.939 164.916C133.383 164.916 133.733 164.817 133.989 164.619C134.246 164.409 134.374 164.123 134.374 163.761C134.374 163.458 134.269 163.207 134.059 163.009C133.861 162.811 133.61 162.647 133.307 162.519C133.015 162.391 132.595 162.245 132.047 162.081C131.253 161.836 130.606 161.591 130.104 161.346C129.603 161.101 129.171 160.74 128.809 160.261C128.448 159.783 128.267 159.159 128.267 158.389C128.267 157.246 128.681 156.353 129.509 155.711C130.338 155.058 131.417 154.731 132.747 154.731C134.1 154.731 135.191 155.058 136.019 155.711C136.848 156.353 137.291 157.251 137.349 158.406H134.112C134.088 158.01 133.943 157.701 133.674 157.479C133.406 157.246 133.062 157.129 132.642 157.129C132.28 157.129 131.988 157.228 131.767 157.426C131.545 157.613 131.434 157.887 131.434 158.249C131.434 158.646 131.621 158.955 131.994 159.176C132.368 159.398 132.951 159.637 133.744 159.894C134.538 160.162 135.179 160.419 135.669 160.664C136.171 160.909 136.603 161.265 136.964 161.731C137.326 162.198 137.507 162.799 137.507 163.534C137.507 164.234 137.326 164.87 136.964 165.441C136.614 166.013 136.101 166.468 135.424 166.806C134.748 167.145 133.948 167.314 133.027 167.314ZM146.016 150.566L141.326 170.464H138.438L143.128 150.566H146.016ZM147.051 164.916V162.501L152.581 154.591H155.923V162.326H157.358V164.916H155.923V167.191H152.931V164.916H147.051ZM153.141 157.881L150.201 162.326H153.141V157.881ZM169.761 154.906V167.191H166.769V162.134H162.114V167.191H159.121V154.906H162.114V159.719H166.769V154.906H169.761ZM179.569 165.021H174.984L174.249 167.191H171.117L175.562 154.906H179.027L183.472 167.191H180.304L179.569 165.021ZM178.799 162.711L177.277 158.214L175.772 162.711H178.799ZM195.815 167.191H192.822L187.817 159.614V167.191H184.825V154.906H187.817L192.822 162.519V154.906H195.815V167.191ZM205.631 165.021H201.046L200.311 167.191H197.179L201.624 154.906H205.089L209.534 167.191H206.366L205.631 165.021ZM204.861 162.711L203.339 158.214L201.834 162.711H204.861Z" fill="#025064"/>
<path d="M96.6923 176.065V177.846H94.2743V185.191H92.0513V177.846H89.6333V176.065H96.6923ZM102.462 185.191L100.564 181.746H100.031V185.191H97.808V176.065H101.539C102.258 176.065 102.869 176.191 103.372 176.442C103.883 176.694 104.265 177.04 104.516 177.482C104.767 177.916 104.893 178.401 104.893 178.938C104.893 179.545 104.72 180.087 104.373 180.563C104.035 181.04 103.532 181.378 102.865 181.577L104.971 185.191H102.462ZM100.031 180.173H101.409C101.816 180.173 102.12 180.074 102.319 179.874C102.527 179.675 102.631 179.393 102.631 179.029C102.631 178.683 102.527 178.41 102.319 178.21C102.12 178.011 101.816 177.911 101.409 177.911H100.031V180.173ZM111.969 183.579H108.563L108.017 185.191H105.69L108.992 176.065H111.566L114.868 185.191H112.515L111.969 183.579ZM111.397 181.863L110.266 178.522L109.148 181.863H111.397ZM124.037 185.191H121.814L118.096 179.562V185.191H115.873V176.065H118.096L121.814 181.72V176.065H124.037V185.191ZM128.951 185.282C128.283 185.282 127.685 185.174 127.157 184.957C126.628 184.741 126.203 184.42 125.883 183.995C125.571 183.571 125.406 183.059 125.389 182.461H127.755C127.789 182.799 127.906 183.059 128.106 183.241C128.305 183.415 128.565 183.501 128.886 183.501C129.215 183.501 129.475 183.428 129.666 183.28C129.856 183.124 129.952 182.912 129.952 182.643C129.952 182.418 129.874 182.232 129.718 182.084C129.57 181.937 129.384 181.816 129.159 181.72C128.942 181.625 128.63 181.517 128.223 181.395C127.633 181.213 127.152 181.031 126.78 180.849C126.407 180.667 126.086 180.399 125.818 180.043C125.549 179.688 125.415 179.224 125.415 178.652C125.415 177.803 125.722 177.14 126.338 176.663C126.953 176.178 127.755 175.935 128.743 175.935C129.748 175.935 130.558 176.178 131.174 176.663C131.789 177.14 132.118 177.807 132.162 178.665H129.757C129.739 178.371 129.631 178.141 129.432 177.976C129.232 177.803 128.977 177.716 128.665 177.716C128.396 177.716 128.179 177.79 128.015 177.937C127.85 178.076 127.768 178.28 127.768 178.548C127.768 178.843 127.906 179.073 128.184 179.237C128.461 179.402 128.894 179.58 129.484 179.77C130.073 179.97 130.55 180.16 130.914 180.342C131.286 180.524 131.607 180.789 131.876 181.135C132.144 181.482 132.279 181.928 132.279 182.474C132.279 182.994 132.144 183.467 131.876 183.891C131.616 184.316 131.234 184.654 130.732 184.905C130.229 185.157 129.635 185.282 128.951 185.282ZM139.588 176.065V177.846H135.87V179.77H138.652V181.499H135.87V185.191H133.647V176.065H139.588ZM145.072 185.282C144.214 185.282 143.426 185.083 142.706 184.684C141.996 184.286 141.428 183.731 141.003 183.02C140.587 182.301 140.379 181.495 140.379 180.602C140.379 179.71 140.587 178.908 141.003 178.197C141.428 177.487 141.996 176.932 142.706 176.533C143.426 176.135 144.214 175.935 145.072 175.935C145.93 175.935 146.715 176.135 147.425 176.533C148.145 176.932 148.708 177.487 149.115 178.197C149.531 178.908 149.739 179.71 149.739 180.602C149.739 181.495 149.531 182.301 149.115 183.02C148.699 183.731 148.136 184.286 147.425 184.684C146.715 185.083 145.93 185.282 145.072 185.282ZM145.072 183.254C145.8 183.254 146.381 183.012 146.814 182.526C147.256 182.041 147.477 181.4 147.477 180.602C147.477 179.796 147.256 179.155 146.814 178.678C146.381 178.193 145.8 177.95 145.072 177.95C144.336 177.95 143.746 178.189 143.304 178.665C142.871 179.142 142.654 179.788 142.654 180.602C142.654 181.408 142.871 182.054 143.304 182.539C143.746 183.016 144.336 183.254 145.072 183.254ZM155.63 185.191L153.732 181.746H153.199V185.191H150.976V176.065H154.707C155.426 176.065 156.037 176.191 156.54 176.442C157.051 176.694 157.433 177.04 157.684 177.482C157.935 177.916 158.061 178.401 158.061 178.938C158.061 179.545 157.888 180.087 157.541 180.563C157.203 181.04 156.7 181.378 156.033 181.577L158.139 185.191H155.63ZM153.199 180.173H154.577C154.984 180.173 155.288 180.074 155.487 179.874C155.695 179.675 155.799 179.393 155.799 179.029C155.799 178.683 155.695 178.41 155.487 178.21C155.288 178.011 154.984 177.911 154.577 177.911H153.199V180.173ZM169.791 176.065V185.191H167.568V179.718L165.527 185.191H163.733L161.679 179.705V185.191H159.456V176.065H162.082L164.643 182.383L167.178 176.065H169.791ZM177.071 183.579H173.665L173.119 185.191H170.792L174.094 176.065H176.668L179.97 185.191H177.617L177.071 183.579ZM176.499 181.863L175.368 178.522L174.25 181.863H176.499ZM187.54 176.065V177.846H185.122V185.191H182.899V177.846H180.481V176.065H187.54ZM190.879 176.065V185.191H188.656V176.065H190.879ZM196.806 185.282C195.948 185.282 195.159 185.083 194.44 184.684C193.729 184.286 193.161 183.731 192.737 183.02C192.321 182.301 192.113 181.495 192.113 180.602C192.113 179.71 192.321 178.908 192.737 178.197C193.161 177.487 193.729 176.932 194.44 176.533C195.159 176.135 195.948 175.935 196.806 175.935C197.664 175.935 198.448 176.135 199.159 176.533C199.878 176.932 200.441 177.487 200.849 178.197C201.265 178.908 201.473 179.71 201.473 180.602C201.473 181.495 201.265 182.301 200.849 183.02C200.433 183.731 199.869 184.286 199.159 184.684C198.448 185.083 197.664 185.282 196.806 185.282ZM196.806 183.254C197.534 183.254 198.114 183.012 198.548 182.526C198.99 182.041 199.211 181.4 199.211 180.602C199.211 179.796 198.99 179.155 198.548 178.678C198.114 178.193 197.534 177.95 196.806 177.95C196.069 177.95 195.48 178.189 195.038 178.665C194.604 179.142 194.388 179.788 194.388 180.602C194.388 181.408 194.604 182.054 195.038 182.539C195.48 183.016 196.069 183.254 196.806 183.254ZM210.873 185.191H208.65L204.932 179.562V185.191H202.709V176.065H204.932L208.65 181.72V176.065H210.873V185.191Z" fill="#025064"/>
<defs>
<filter id="filter0_d_63_2" x="20.625" y="37.8164" width="258.75" height="258.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="9.375" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_63_2"/>
<feOffset/>
<feGaussianBlur stdDeviation="22.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.603922 0 0 0 0 0.603922 0 0 0 0.78 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_63_2"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_63_2" result="shape"/>
</filter>
<linearGradient id="paint0_linear_63_2" x1="150" y1="327.191" x2="150" y2="627.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#008080"/>
<stop offset="0.67478" stop-color="#082326" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_63_2" x1="150.498" y1="0.191406" x2="150.498" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_63_2" x1="95.9059" y1="0.191406" x2="95.9059" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_63_2" x1="204.088" y1="0.191406" x2="204.088" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_63_2" x1="111.029" y1="0.191406" x2="111.029" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint5_linear_63_2" x1="188.967" y1="0.191406" x2="188.967" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint6_linear_63_2" x1="126.15" y1="0.191406" x2="126.15" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_63_2" x1="173.844" y1="0.191406" x2="173.844" y2="342.191" gradientUnits="userSpaceOnUse">
<stop stop-color="#499A9A" stop-opacity="0"/>
<stop offset="0.5" stop-color="#499A9A"/>
<stop offset="1" stop-color="#499A9A" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0_63_2">
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
  <div className="aboutretail retail-baner1 retail-baner-11 kineticsec approachh systemview pd60">
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
                  {t("System Conversion (Brownfield) – retain data and config while upgrading to S/4HANA")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Enhance.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("New Implementation (Greenfield) – deploy S/4HANA using SAP best-practice frameworks")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Optimize.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Landscape Transformation – consolidate multiple SAP systems during migration")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Enable.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("RISE with SAP (Private Cloud) – migrate ERP to managed cloud with SAP's unified programme")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Embed.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("GROW with SAP (Public Cloud) – rapid public cloud ERP adoption for standardised environments")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/Integrate.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Post-implementation optimisation, data migration, and go-live support")}
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
                  {t("System Conversion (Brownfield) – retain data and config while upgrading to S/4HANA")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss2.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("New Implementation (Greenfield) – deploy S/4HANA using SAP best-practice frameworks")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss3.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Landscape Transformation – consolidate multiple SAP systems during migration")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss7.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("RISE with SAP (Private Cloud) – migrate ERP to managed cloud with SAP's unified programme")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss8.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("GROW with SAP (Public Cloud) – rapid public cloud ERP adoption for standardised environments")}
                </p>
              </div>
            </div>
            <div className="challenge-point-waber self-service">
              <img src="/images/ss9.svg" alt="" />
              <div className="pill-cont">
                <p>
                  {t("Post-implementation optimisation, data migration, and go-live support")}
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
  <div className="advantage additional1 epicadv pd-50">
    <div className="container">
      <div className="row section-row1 align-items-center">
        <div className="col-sm-12">
          <div className="section-title text-center text-black">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              {t("Why Choose RheinBrücke?")}
            </h2>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-item-body1 firstmobilebox sapsub1 w80">
                {/* <h3>Seamless Integration</h3> */}
                <h3>
                  {t("Real-time financial visibility and faster close cycles through embedded analytics")}
                </h3>
                <div className="text-center">
                  <img src="/images/sap1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="service-item-body1 epicright1  w80">
                {/* <h3>Configurable</h3> */}
                <h3>
                  {t("Improved supply chain planning with simplified S/4HANA data models")}
                </h3>
                <img src="/images/sap2.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="service-item-body1 epicright sap3">
                {/* <h3>Reporting and Analytics</h3> */}
                <h3>{t("Scalable cloud-based SAP environments via RISE and GROW pathways")} </h3>
                <img src="/images/sap3.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="service-item-body1 epicright">
                {/* <h3>Mobile Accessibility</h3> */}
                <h3>
                  {t("Certified SAP partner with proven migration frameworks and accelerators across Europe and the Middle East")}
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
                  {t("End-to-end support from readiness assessment through to stabilisation")}
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
                            {t("What is SAP S/4HANA?")}  
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
                              {t("SAP S/4HANA is SAP's next-generation ERP platform designed to support real-time enterprise operations using in-memory database technology.")}   
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
                            {t("What is RISE with SAP?")} 
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
                              {t("RISE with SAP combines SAP S/4HANA Cloud, infrastructure services, and migration tools to help organisations migrate legacy SAP environments to cloud-based ERP platforms.")}  
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
                           {t("How long does an SAP S/4HANA migration take?")}  
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
                              {t("Most projects range from 6 to 18 months, depending on whether organisations adopt a brownfield conversion, greenfield implementation, or landscape transformation.")}  
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
                           {t("Does RheinBrücke support SAP ECC to SAP S/4HANA migration?")}   
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
                              {t("Yes. RheinBrücke supports enterprises across the full SAP transformation lifecycle, including readiness assessments, migration planning, implementation and cloud transformation through RISE with SAP. We work with organisations in manufacturing, life sciences and distribution across Europe and the Middle East.")} 
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
                           {t("What is the difference between Brownfield and Greenfield migration?")}   
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
                              {t("A brownfield conversion migrates your existing SAP ECC system directly to S/4HANA, retaining historical data and configuration. A greenfield implementation builds a new S/4HANA system from SAP best practices. Brownfield is faster but carries forward existing processes and customisations. Greenfield takes longer but delivers a cleaner, more standardised system.")} 
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
                        <h2 className="accordion-header" id="heading6">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                           {t("What happens to existing customisations in a brownfield conversion?")}   
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
                              {t("All custom ABAP code and enhancements must be reviewed for S/4HANA compatibility. Some classic customisations are no longer needed because S/4HANA handles the same requirements natively. Others require adaptation or replacement with SAP BTP side-by-side extensions to preserve clean-core principles. RheinBrücke performs a full custom code assessment during the readiness phase to catalogue, prioritise and resolve each item.")} 
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
                        <h2 className="accordion-header" id="heading7">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse7"
                            aria-expanded="false"
                            aria-controls="collapse7"
                          >
                           {t("What is a landscape transformation and when is it needed?")}   
                          </button>
                        </h2>
                        <div
                          id="collapse7"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading7"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("A landscape transformation restructures multiple SAP systems during migration, for example consolidating three regional SAP ECC instances into a single S/4HANA environment. It is typically used in merger and acquisition scenarios, global template rollout programmes, or where an organisation wants to reduce the number of SAP systems it operates.")} 
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="0.9s"
                      >
                        <h2 className="accordion-header" id="heading8">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse8"
                            aria-expanded="false"
                            aria-controls="collapse8"
                          >
                           {t("What is the difference between SAP S/4HANA and RISE with SAP?")}   
                          </button>
                        </h2>
                        <div
                          id="collapse8"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading8"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("SAP S/4HANA is the ERP platform that modernises enterprise systems, while RISE with SAP is the cloud transformation framework that enables organisations to migrate and operate SAP S/4HANA in cloud environments.")} 
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="1.0s"
                      >
                        <h2 className="accordion-header" id="heading9">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse9"
                            aria-expanded="false"
                            aria-controls="collapse9"
                          >
                           {t("What is GROW with SAP and how is it different from RISE with SAP?")}   
                          </button>
                        </h2>
                        <div
                          id="collapse9"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading9"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("GROW with SAP is designed for organisations adopting a standardised public cloud ERP environment, combining SAP S/4HANA Public Cloud with best-practice business processes and rapid implementation frameworks. RISE with SAP is the private cloud pathway, suited to organisations migrating existing SAP environments with greater configuration control. See the GROW with SAP sub-page for full detail.")} 
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="1.1s"
                      >
                        <h2 className="accordion-header" id="heading10">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse10"
                            aria-expanded="false"
                            aria-controls="collapse10"
                          >
                           {t("When should organisations move from SAP ECC to SAP S/4HANA?")}   
                          </button>
                        </h2>
                        <div
                          id="collapse10"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading10"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("With SAP ending mainstream maintenance for SAP ECC in 2027, organisations are accelerating their move to S/4HANA. Migration becomes urgent when legacy ECC systems limit scalability, reporting speed, and innovation adoption. Moving to SAP S/4HANA enables real-time analytics, simplified data models, and improved operational visibility before the deadline.")} 
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FAQ Item End */}
                      {/* FAQ Item Start */}
                      <div
                        className="accordion-item wow fadeInUp"
                        data-wow-delay="1.2s"
                      >
                        <h2 className="accordion-header" id="heading11">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse11"
                            aria-expanded="false"
                            aria-controls="collapse11"
                          >
                           {t("What are the benefits of RISE with SAP cloud transformation?")}   
                          </button>
                        </h2>
                        <div
                          id="collapse11"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading11"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            <p>
                              {t("RISE with SAP helps organisations:")} 
                            </p>
                            <ul>
                              <li>{t("Simplify ERP infrastructure management")}</li>
                              <li>{t("Reduce on-premise data centre costs")}</li>
                              <li>{t("Improve scalability and resilience of SAP environments")}</li>
                              <li>{t("Accelerate adoption of SAP innovations and cloud services")}</li>
                            </ul>
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
              <h2>{t("Ready to Modernise with SAP S/4HANA?")}</h2>

              <p>{t("Talk to our SAP experts to plan your transformation journey.")}</p>
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