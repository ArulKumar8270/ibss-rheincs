"use client";

import React from "react";
import CommomLayout from "../Components/CommomLayout";
import Link from "next/link";
import {useTranslation} from "../hooks/useTranslation";
export default function AlMl() {
  const { t, language } = useTranslation();
    return (
        <CommomLayout>
            <>
                {/*?php include "navbar.php" ?*/}
                {/* Hero Section Start*/}
                <div className="hero brainsec bluebg digi1 amlmobileindex ">
                    <div className="container">
                        <div className="row section-row align-items-center  digitalsec">
                            <div className="col-sm-5">
                                <div className="section-title wow fadeInUp">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        {t("AI/ML & Data Analytics")}
                                    </h2>
                                    <p>
                    {t("Harness the combined power of Google AI/ML, Azure Machine Learning, and advanced signature analytics to deliver predictive maintenance, intelligent automation, and real-time insights.")}
                                    </p>
                                    <p>
                        {t("We help organisations across industries transform data into intelligence-driving smarter decisions, greater efficiency, and measurable business impact.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="digiban ">
                                    {/*<img src="/images/digitalban.png" alt="">*/}
                                    <svg
                                        width={796}
                                        height={600}
                                        viewBox="0 0 796 600"
                                        fill="none"
                                        xmlns="http://www.w.org/2000/svg"
                                    >
                                        <defs>
                                            <path
                                                id="path-r178"
                                                d="M 398, 439 m -178, 0 a 178,178 0 1,1 356,0 a 178,178 0 1,1 -356,0"
                                                fill="none"
                                                stroke="none"
                                            />
                                            <path
                                                id="path-r225"
                                                d="M 398, 439 m -225, 0 a 225,225 0 1,1 450,0 a 225,225 0 1,1 -450,0"
                                                fill="none"
                                                stroke="none"
                                            />
                                            <path
                                                id="path-r265"
                                                d="M 398, 439 m -265, 0 a 265,265 0 1,1 530,0 a 265,265 0 1,1 -530,0"
                                                fill="none"
                                                stroke="none"
                                            />
                                            <path
                                                id="path-r309"
                                                d="M 398, 439 m -309, 0 a 309,309 0 1,1 618,0 a 309,309 0 1,1 -618,0"
                                                fill="none"
                                                stroke="none"
                                            />
                                            <path
                                                id="path-r353"
                                                d="M 398, 439 m -353, 0 a 353,353 0 1,1 706,0 a 353,353 0 1,1 -706,0"
                                                fill="none"
                                                stroke="none"
                                            />
                                            <path
                                                id="path-r397"
                                                d="M 398, 439 m -397, 0 a 397,397 0 1,1 794,0 a 397,397 0 1,1 -794,0"
                                                fill="none"
                                                stroke="none"
                                            />
                                            {/* Intha reverse paths ippo theva illa, aana irukkaradhunala problem illa */}
                                            <path
                                                id="path-r178-rev"
                                                d="M 398, 439 m 178, 0 a 178,178 0 1,0 -356,0 a 178,178 0 1,0 356,0"
                                                fill="none"
                                                stroke="none"
                                            />
                                            <path
                                                id="path-r225-rev"
                                                d="M 398, 439 m 225, 0 a 225,225 0 1,0 -450,0 a 225,225 0 1,0 450,0"
                                                fill="none"
                                                stroke="none"
                                            />
                                            <path
                                                id="path-r265-rev"
                                                d="M 398, 439 m 265, 0 a 265,265 0 1,0 -530,0 a 265,265 0 1,0 530,0"
                                                fill="none"
                                                stroke="none"
                                            />
                                            <path
                                                id="path-r309-rev"
                                                d="M 398, 439 m 309, 0 a 309,309 0 1,0 -618,0 a 309,309 0 1,0 618,0"
                                                fill="none"
                                                stroke="none"
                                            />
                                            <path
                                                id="path-r353-rev"
                                                d="M 398, 439 m 353, 0 a 353,353 0 1,0 -706,0 a 353,353 0 1,0 706,0"
                                                fill="none"
                                                stroke="none"
                                            />
                                            <path
                                                id="path-r397-rev"
                                                d="M 398, 439 m 397, 0 a 397,397 0 1,0 -794,0 a 397,397 0 1,0 794,0"
                                                fill="none"
                                                stroke="none"
                                            />
                                            <linearGradient
                                                id="fade-gradient"
                                                x1="0.5"
                                                y1={0}
                                                x2="0.5"
                                                y2={1}
                                            >
                                                <stop offset="60%" stopColor="white" stopOpacity={1} />
                                                <stop offset="80%" stopColor="white" stopOpacity={0} />
                                            </linearGradient>
                                            <mask id="fade-mask">
                                                <rect
                                                    x={0}
                                                    y={0}
                                                    width="100%"
                                                    height="100%"
                                                    fill="url(#fade-gradient)"
                                                />
                                            </mask>
                                            <filter
                                                id="filter0_d_1_125"
                                                x="98.625"
                                                y="374.625"
                                                width="188.75"
                                                height="188.75"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                ></feColorMatrix>
                                                <feMorphology
                                                    radius="9.375"
                                                    operator="dilate"
                                                    in="SourceAlpha"
                                                    result="effect1_dropShadow_1_125"
                                                />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="22.5" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0.286275 0 0 0 0 0.603922 0 0 0 0 0.603922 0 0 0 0.78 0"
                                                ></feColorMatrix>
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_1_125"
                                                ></feBlend>
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_1_125"
                                                    result="shape"
                                                ></feBlend>
                                            </filter>
                                            <filter
                                                id="filter1_f_1_125"
                                                x="176.65"
                                                y="434.646"
                                                width="52.9954"
                                                height={71}
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="BackgroundImageFix"
                                                    result="shape"
                                                ></feBlend>
                                                <feGaussianBlur
                                                    stdDeviation={4}
                                                    result="effect1_foregroundBlur_1_125"
                                                ></feGaussianBlur>
                                            </filter>
                                            <filter
                                                id="filter2_f_1_125"
                                                x="183.89"
                                                y="440.958"
                                                width="38.5154"
                                                height="56.52"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="BackgroundImageFix"
                                                    result="shape"
                                                ></feBlend>
                                                <feGaussianBlur
                                                    stdDeviation="0.38"
                                                    result="effect1_foregroundBlur_1_125"
                                                ></feGaussianBlur>
                                            </filter>
                                            <filter
                                                id="filter3_d_1_125"
                                                x="62.625"
                                                y="178.625"
                                                width="188.75"
                                                height="188.75"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                ></feColorMatrix>
                                                <feMorphology
                                                    radius="9.375"
                                                    operator="dilate"
                                                    in="SourceAlpha"
                                                    result="effect1_dropShadow_1_125"
                                                />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="22.5" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0.286275 0 0 0 0 0.603922 0 0 0 0 0.603922 0 0 0 0.78 0"
                                                ></feColorMatrix>
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_1_125"
                                                ></feBlend>
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_1_125"
                                                    result="shape"
                                                ></feBlend>
                                            </filter>
                                            <filter
                                                id="filter4_d_1_125"
                                                x="184.625"
                                                y="0.625"
                                                width="188.75"
                                                height="188.75"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                ></feColorMatrix>
                                                <feMorphology
                                                    radius="9.375"
                                                    operator="dilate"
                                                    in="SourceAlpha"
                                                    result="effect1_dropShadow_1_125"
                                                />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="22.5" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0.286275 0 0 0 0 0.603922 0 0 0 0 0.603922 0 0 0 0.78 0"
                                                ></feColorMatrix>
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_1_125"
                                                ></feBlend>
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_1_125"
                                                    result="shape"
                                                ></feBlend>
                                            </filter>
                                            <filter
                                                id="filter5_f_1_125"
                                                x="251.7"
                                                y="75.4"
                                                width="52.6"
                                                height="39.6"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="BackgroundImageFix"
                                                    result="shape"
                                                ></feBlend>
                                                <feGaussianBlur
                                                    stdDeviation="0.4"
                                                    result="effect1_foregroundBlur_1_125"
                                                ></feGaussianBlur>
                                            </filter>
                                            <filter
                                                id="filter6_f_1_125"
                                                x="244.5"
                                                y={69}
                                                width={67}
                                                height={54}
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="BackgroundImageFix"
                                                    result="shape"
                                                ></feBlend>
                                                <feGaussianBlur
                                                    stdDeviation={4}
                                                    result="effect1_foregroundBlur_1_125"
                                                ></feGaussianBlur>
                                            </filter>
                                            <filter
                                                id="filter7_d_1_125"
                                                x="427.625"
                                                y="184.625"
                                                width="188.75"
                                                height="188.75"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                ></feColorMatrix>
                                                <feMorphology
                                                    radius="9.375"
                                                    operator="dilate"
                                                    in="SourceAlpha"
                                                    result="effect1_dropShadow_1_125"
                                                />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="22.5" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0.286275 0 0 0 0 0.603922 0 0 0 0 0.603922 0 0 0 0.78 0"
                                                ></feColorMatrix>
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_1_125"
                                                ></feBlend>
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_1_125"
                                                    result="shape"
                                                ></feBlend>
                                            </filter>
                                            <filter
                                                id="filter8_d_1_125"
                                                x="547.625"
                                                y="49.625"
                                                width="188.75"
                                                height="188.75"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                ></feColorMatrix>
                                                <feMorphology
                                                    radius="9.375"
                                                    operator="dilate"
                                                    in="SourceAlpha"
                                                    result="effect1_dropShadow_1_125"
                                                />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="22.5" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0.286275 0 0 0 0 0.603922 0 0 0 0 0.603922 0 0 0 0.78 0"
                                                ></feColorMatrix>
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_1_125"
                                                ></feBlend>
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_1_125"
                                                    result="shape"
                                                ></feBlend>
                                            </filter>
                                            <filter
                                                id="filter9_d_1_125"
                                                x="568.625"
                                                y="322.625"
                                                width="188.75"
                                                height="188.75"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                ></feColorMatrix>
                                                <feMorphology
                                                    radius="9.375"
                                                    operator="dilate"
                                                    in="SourceAlpha"
                                                    result="effect1_dropShadow_1_125"
                                                />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="22.5" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0.286275 0 0 0 0 0.603922 0 0 0 0 0.603922 0 0 0 0.78 0"
                                                ></feColorMatrix>
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_1_125"
                                                ></feBlend>
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_1_125"
                                                    result="shape"
                                                ></feBlend>
                                            </filter>
                                            <linearGradient
                                                id="paint0_linear_1_125"
                                                x1={398}
                                                y1={261}
                                                x2={398}
                                                y2={617}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint1_linear_1_125"
                                                x1={398}
                                                y1={214}
                                                x2={398}
                                                y2={664}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint2_linear_1_125"
                                                x1={398}
                                                y1={174}
                                                x2={398}
                                                y2={704}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint3_linear_1_125"
                                                x1={398}
                                                y1={130}
                                                x2={398}
                                                y2={748}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint4_linear_1_125"
                                                x1="206.177"
                                                y1="496.5"
                                                x2="174.094"
                                                y2="418.011"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#742774" />
                                                <stop offset={1} stopColor="#BB35A4" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint5_linear_1_125"
                                                x1="183.833"
                                                y1="441.5"
                                                x2="210.188"
                                                y2="496.5"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#E48CC7" />
                                                <stop offset={1} stopColor="#D467B9" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint6_linear_1_125"
                                                x1="201.02"
                                                y1="458.115"
                                                x2="209.041"
                                                y2="482.75"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#E9A1CB" />
                                                <stop offset={1} stopColor="#E48CC7" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint7_linear_1_125"
                                                x1={398}
                                                y1={86}
                                                x2={398}
                                                y2={792}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint8_linear_1_125"
                                                x1={398}
                                                y1={42}
                                                x2={398}
                                                y2={836}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#499A9A" />
                                                <stop offset="0.74249" stopColor="#499A9A" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint9_linear_1_125"
                                                x1="155.777"
                                                y1="248.975"
                                                x2="176.588"
                                                y2="294.093"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#E6AD10" />
                                                <stop offset={1} stopColor="#C87E0E" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint10_linear_1_125"
                                                x1="147.914"
                                                y1="261.444"
                                                x2="165.438"
                                                y2="296.204"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#F6D751" />
                                                <stop offset={1} stopColor="#E6AD10" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint11_linear_1_125"
                                                x1="141.975"
                                                y1="271.828"
                                                x2="151.633"
                                                y2="295.24"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#F9E589" />
                                                <stop offset={1} stopColor="#F6D751" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint12_linear_1_125"
                                                x1="276.5"
                                                y1="98.5"
                                                x2="269.5"
                                                y2={76}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#0D36A5" />
                                                <stop offset={1} stopColor="#1152D4" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint13_linear_1_125"
                                                x1={278}
                                                y1={76}
                                                x2={278}
                                                y2={114}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#84CAFF" />
                                                <stop offset={1} stopColor="#61B1FB" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint14_linear_1_125"
                                                x1="273.75"
                                                y1={76}
                                                x2="273.75"
                                                y2={114}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#3B90F5" />
                                                <stop offset={1} stopColor="#2A78EE" />
                                            </linearGradient>
                                            <linearGradient
                                                id="paint15_linear_1_125"
                                                x1={398}
                                                y1={289}
                                                x2={398}
                                                y2={589}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#008080" />
                                                <stop offset="0.67478" stopColor="#082326" stopOpacity={0} />
                                            </linearGradient>
                                            <clipPath id="clip0_1_125">
                                                <rect
                                                    width={55}
                                                    height={55}
                                                    fill="white"
                                                    transform="translate(165.5 441.5)"
                                                />
                                            </clipPath>
                                            <clipPath id="clip1_1_125">
                                                <rect
                                                    width={48}
                                                    height={48}
                                                    fill="white"
                                                    transform="translate(255 71)"
                                                />
                                            </clipPath>
                                            <clipPath id="clip2_1_125">
                                                <rect
                                                    width={300}
                                                    height={269}
                                                    fill="white"
                                                    transform="translate(248 289)"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g mask="url(#fade-mask)">
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion dur="25s" repeatCount="indefinite" begin="0s">
                                                    <mpath href="#path-r353" />
                                                </animateMotion>
                                            </circle>
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion
                                                    dur="25s"
                                                    repeatCount="indefinite"
                                                    begin="-12.5s"
                                                >
                                                    <mpath href="#path-r353" />
                                                </animateMotion>
                                            </circle>
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion dur="18s" repeatCount="indefinite" begin="-2s">
                                                    <mpath href="#path-r265" />
                                                </animateMotion>
                                            </circle>
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion dur="15s" repeatCount="indefinite" begin="-5s">
                                                    <mpath href="#path-r225" />
                                                </animateMotion>
                                            </circle>
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion dur="22s" repeatCount="indefinite" begin="-1s">
                                                    <mpath href="#path-r309" />
                                                </animateMotion>
                                            </circle>
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion
                                                    dur="22s"
                                                    repeatCount="indefinite"
                                                    begin="-12s"
                                                >
                                                    <mpath href="#path-r309" />
                                                </animateMotion>
                                            </circle>
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion
                                                    dur="30s"
                                                    repeatCount="indefinite"
                                                    begin="-20s"
                                                >
                                                    <mpath href="#path-r397" />
                                                </animateMotion>
                                            </circle>
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion
                                                    dur="15s"
                                                    repeatCount="indefinite"
                                                    begin="-10s"
                                                >
                                                    <mpath href="#path-r225" />
                                                </animateMotion>
                                            </circle>
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion
                                                    dur="18s"
                                                    repeatCount="indefinite"
                                                    begin="-11s"
                                                >
                                                    <mpath href="#path-r265" />
                                                </animateMotion>
                                            </circle>
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion dur="12s" repeatCount="indefinite" begin="-3s">
                                                    <mpath href="#path-r178" />
                                                </animateMotion>
                                            </circle>
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion dur="12s" repeatCount="indefinite" begin="-9s">
                                                    <mpath href="#path-r178" />
                                                </animateMotion>
                                            </circle>
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion
                                                    dur="30s"
                                                    repeatCount="indefinite"
                                                    begin="-15s"
                                                >
                                                    <mpath href="#path-r397" />
                                                </animateMotion>
                                            </circle>
                                            <circle opacity="0.8" r="2.32653" fill="#28B67E">
                                                <animateMotion dur="20s" repeatCount="indefinite" begin="-7s">
                                                    <mpath href="#path-r309" />
                                                </animateMotion>
                                            </circle>
                                        </g>
                                        <circle
                                            opacity="0.7"
                                            cx={398}
                                            cy={439}
                                            r={178}
                                            stroke="url(#paint0_linear_1_125)"
                                            strokeWidth="1.5"
                                        />
                                        <circle
                                            opacity="0.7"
                                            cx={398}
                                            cy={439}
                                            r={225}
                                            stroke="url(#paint1_linear_1_125)"
                                            strokeWidth="1.5"
                                        />
                                        <circle
                                            opacity="0.6"
                                            cx={398}
                                            cy={439}
                                            r={265}
                                            stroke="url(#paint2_linear_1_125)"
                                            strokeWidth="1.5"
                                        />
                                        <circle
                                            opacity="0.4"
                                            cx={398}
                                            cy={439}
                                            r={309}
                                            stroke="url(#paint3_linear_1_125)"
                                            strokeWidth="1.5"
                                        />
                                        <circle
                                            opacity="0.3"
                                            cx={398}
                                            cy={439}
                                            r={353}
                                            stroke="url(#paint7_linear_1_125)"
                                            strokeWidth="1.5"
                                        />
                                        <circle
                                            opacity="0.2"
                                            cx={398}
                                            cy={439}
                                            r={397}
                                            stroke="url(#paint8_linear_1_125)"
                                            strokeWidth="1.5"
                                        />
                                        <g filter="url(#filter0_d_1_125)" className="blink-light">
                                            <circle cx={193} cy={469} r={40} fill="white" />
                                            <circle
                                                cx={193}
                                                cy={469}
                                                r="39.0625"
                                                stroke="#499A9A"
                                                strokeWidth="1.875"
                                            />
                                        </g>
                                        <g clipPath="url(#clip0_1_125)">
                                            <mask
                                                id="mask0_1_125"
                                                style={{ maskType: "luminance" }}
                                                maskUnits="userSpaceOnUse"
                                                x={165}
                                                y={441}
                                                width={56}
                                                height={56}
                                            >
                                                <path
                                                    d="M220.5 441.5H165.5V496.5H220.5V441.5Z"
                                                    fill="white"
                                                />
                                            </mask>
                                            <g mask="url(#mask0_1_125)">
                                                <mask
                                                    id="mask1_1_125"
                                                    style={{ maskType: "luminance" }}
                                                    maskUnits="userSpaceOnUse"
                                                    x={165}
                                                    y={441}
                                                    width={56}
                                                    height={56}
                                                >
                                                    <path
                                                        d="M220.5 441.5H165.5V496.5H220.5V441.5Z"
                                                        fill="white"
                                                    />
                                                </mask>
                                                <g mask="url(#mask1_1_125)">
                                                    <mask
                                                        id="mask2_1_125"
                                                        style={{ maskType: "luminance" }}
                                                        maskUnits="userSpaceOnUse"
                                                        x={165}
                                                        y={441}
                                                        width={56}
                                                        height={56}
                                                    >
                                                        <path
                                                            d="M220.5 441.5H165.5V496.5H220.5V441.5Z"
                                                            fill="white"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask2_1_125)">
                                                        <mask
                                                            id="mask3_1_125"
                                                            style={{ maskType: "alpha" }}
                                                            maskUnits="userSpaceOnUse"
                                                            x={165}
                                                            y={442}
                                                            width={56}
                                                            height={54}
                                                        >
                                                            <path
                                                                d="M166.335 466.736C165.201 468.032 165.201 469.968 166.335 471.264L186.692 494.529C187.605 495.572 189.228 495.572 190.141 494.529L192.333 492.024L194.747 494.657C195.656 495.648 197.218 495.648 198.126 494.657L219.516 471.323C220.721 470.009 220.721 467.991 219.516 466.677L198.126 443.343C197.218 442.352 195.656 442.352 194.747 443.343L192.333 445.976L190.141 443.471C189.228 442.428 187.605 442.428 186.692 443.471L166.335 466.736Z"
                                                                fill="white"
                                                            />
                                                        </mask>
                                                        <g mask="url(#mask3_1_125)">
                                                            <path
                                                                d="M188.417 496.5L164.354 469L188.417 441.5L212.479 469L188.417 496.5Z"
                                                                fill="url(#paint4_linear_1_125)"
                                                            />
                                                            <g filter="url(#filter1_f_1_125)">
                                                                <path
                                                                    d="M196.437 442.646L221.645 470.146L196.437 497.646L185.252 485.444C184.449 484.568 184.449 483.223 185.252 482.347L195.018 471.694C195.821 470.818 195.821 469.473 195.018 468.597L185.252 457.944C184.449 457.068 184.449 455.723 185.252 454.847L196.437 442.646Z"
                                                                    fill="black"
                                                                    fillOpacity="0.32"
                                                                />
                                                            </g>
                                                            <g filter="url(#filter2_f_1_125)">
                                                                <path
                                                                    d="M196.437 441.718L221.645 469.218L196.437 496.718L185.252 484.516C184.449 483.64 184.449 482.295 185.252 481.419L195.018 470.766C195.821 469.89 195.821 468.545 195.018 467.669L185.252 457.016C184.449 456.14 184.449 454.795 185.252 453.919L196.437 441.718Z"
                                                                    fill="black"
                                                                    fillOpacity="0.24"
                                                                />
                                                            </g>
                                                            <path
                                                                d="M196.437 441.5L221.645 469L196.437 496.5L185.252 484.299C184.449 483.422 184.449 482.078 185.252 481.201L195.018 470.549C195.821 469.672 195.821 468.328 195.018 467.451L185.252 456.799C184.449 455.922 184.449 454.578 185.252 453.701L196.437 441.5Z"
                                                                fill="url(#paint5_linear_1_125)"
                                                            />
                                                            <path
                                                                d="M207.352 457.093C208.26 456.102 209.822 456.102 210.731 457.093L221.645 469L210.731 480.907C209.822 481.898 208.26 481.898 207.352 480.907L198.566 471.323C197.362 470.009 197.362 467.992 198.566 466.677L207.352 457.093Z"
                                                                fill="url(#paint6_linear_1_125)"
                                                            />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                        <g filter="url(#filter3_d_1_125)" className="blink-light">
                                            <circle cx={157} cy={273} r={40} fill="white" />
                                            <circle
                                                cx={157}
                                                cy={273}
                                                r="39.0625"
                                                stroke="#499A9A"
                                                strokeWidth="1.875"
                                            />
                                        </g>
                                        <path
                                            d="M174.872 250.975V294.996C174.872 296.09 173.992 297.006 172.878 297.006H160.475C159.39 297.006 158.481 296.119 158.481 294.996V250.975C158.481 249.881 159.36 248.964 160.475 248.964H172.878C173.963 248.994 174.872 249.881 174.872 250.975Z"
                                            fill="url(#paint9_linear_1_125)"
                                        />
                                        <path
                                            d="M165.196 263.007V297.035H148.805V263.007C148.805 261.913 149.684 260.997 150.799 260.997H163.202C164.287 260.997 165.196 261.884 165.196 263.007Z"
                                            fill="url(#paint10_linear_1_125)"
                                        />
                                        <path
                                            d="M139.128 275.01V295.025C139.128 296.119 140.008 297.036 141.122 297.036H155.519V275.01C155.519 273.916 154.639 273 153.525 273H141.122C140.037 273 139.128 273.887 139.128 275.01Z"
                                            fill="url(#paint11_linear_1_125)"
                                        />
                                        <g filter="url(#filter4_d_1_125)" className="blink-light">
                                            <circle cx={279} cy={95} r={40} fill="white" />
                                            <circle
                                                cx={279}
                                                cy={95}
                                                r="39.0625"
                                                stroke="#499A9A"
                                                strokeWidth="1.875"
                                            />
                                        </g>
                                        <g clipPath="url(#clip1_1_125)">
                                            <mask
                                                id="mask4_1_125"
                                                style={{ maskType: "luminance" }}
                                                maskUnits="userSpaceOnUse"
                                                x={255}
                                                y={71}
                                                width={48}
                                                height={48}
                                            >
                                                <path d="M303 71H255V119H303V71Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask4_1_125)">
                                                <mask
                                                    id="mask5_1_125"
                                                    style={{ maskType: "luminance" }}
                                                    maskUnits="userSpaceOnUse"
                                                    x={255}
                                                    y={71}
                                                    width={48}
                                                    height={48}
                                                >
                                                    <path d="M303 71H255V119H303V71Z" fill="white" />
                                                </mask>
                                                <g mask="url(#mask5_1_125)">
                                                    <mask
                                                        id="mask6_1_125"
                                                        style={{ maskType: "alpha" }}
                                                        maskUnits="userSpaceOnUse"
                                                        x={254}
                                                        y={76}
                                                        width={49}
                                                        height={38}
                                                    >
                                                        <path
                                                            d="M285.606 76C286.175 76 286.717 76.2423 287.097 76.6664L302.307 93.6664C302.987 94.4257 302.987 95.5743 302.307 96.3336L287.097 113.334C286.717 113.758 286.175 114 285.606 114H256.974C255.245 114 254.33 111.955 255.483 110.666L269.5 95L255.483 79.3336C254.33 78.0453 255.245 76 256.974 76H285.606Z"
                                                            fill="white"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask6_1_125)">
                                                        <path
                                                            d="M286.5 76L269.5 95L252.5 76H286.5Z"
                                                            fill="url(#paint12_linear_1_125)"
                                                        ></path>
                                                        <g filter="url(#filter5_f_1_125)">
                                                            <path
                                                                d="M286.5 76.2L252.5 114.2H286.5L303.5 95.2L286.5 76.2Z"
                                                                fill="black"
                                                                fillOpacity="0.24"
                                                            />
                                                        </g>
                                                        <g filter="url(#filter6_f_1_125)">
                                                            <path
                                                                d="M286.5 77L252.5 115H286.5L303.5 96L286.5 77Z"
                                                                fill="black"
                                                                fillOpacity="0.32"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M252.5 114L286.5 76L303.5 95L286.5 114H252.5Z"
                                                            fill="url(#paint13_linear_1_125)"
                                                        />
                                                        <path
                                                            d="M252.5 114L286.5 76L295 85.5L269.5 114H252.5Z"
                                                            fill="url(#paint14_linear_1_125)"
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                        <g filter="url(#filter7_d_1_125)" className="blink-light">
                                            <circle cx={522} cy={279} r={40} fill="white" />
                                            <circle
                                                cx={522}
                                                cy={279}
                                                r="39.0625"
                                                stroke="#499A9A"
                                                strokeWidth="1.875"
                                            />
                                        </g>
                                        <path
                                            d="M507.561 292.978C508.639 293.65 510.431 294.397 512.325 294.397C514.05 294.397 515.653 293.897 516.981 293.044C516.981 293.044 516.984 293.044 516.986 293.042L522 289.908V301.222C521.206 301.222 520.406 301.006 519.711 300.572L507.561 292.978Z"
                                            fill="#225086"
                                        />
                                        <path
                                            d="M518.814 258.186L497.981 281.686C496.372 283.503 496.792 286.247 498.878 287.55C498.878 287.55 506.589 292.369 507.561 292.978C508.639 293.65 510.431 294.397 512.325 294.397C514.05 294.397 515.653 293.897 516.981 293.044C516.981 293.044 516.983 293.044 516.986 293.042L522 289.908L509.878 282.331L522.003 268.653V256.778C520.825 256.778 519.647 257.247 518.814 258.186Z"
                                            fill="#66DDFF"
                                        />
                                        <path
                                            d="M509.878 282.331L510.022 282.419L522 289.908H522.003V268.656L522 268.653L509.878 282.331Z"
                                            fill="#CBF8FF"
                                        />
                                        <path
                                            d="M545.122 287.55C547.208 286.247 547.627 283.503 546.019 281.686L532.35 266.267C531.247 265.753 530.011 265.458 528.703 265.458C526.133 265.458 523.836 266.567 522.308 268.308L522.005 268.65L534.128 282.328L522.003 289.906V301.219C522.8 301.219 523.594 301.003 524.289 300.569L545.122 287.547V287.55Z"
                                            fill="#074793"
                                        />
                                        <path
                                            d="M522.003 256.778V268.653L522.306 268.311C523.833 266.569 526.131 265.461 528.7 265.461C530.011 265.461 531.244 265.758 532.347 266.269L525.183 258.189C524.353 257.25 523.175 256.781 522 256.781L522.003 256.778Z"
                                            fill="#0294E4"
                                        />
                                        <path
                                            d="M534.125 282.33L522.003 268.655V289.905L534.125 282.33Z"
                                            fill="#96BCC2"
                                        />
                                        <g filter="url(#filter8_d_1_125)" className="blink-light">
                                            <circle cx={642} cy={144} r={40} fill="white" />
                                            <circle
                                                cx={642}
                                                cy={144}
                                                r="39.0625"
                                                stroke="#499A9A"
                                                strokeWidth="1.875"
                                            />
                                        </g>
                                        <path
                                            d="M664.8 134.046C664.8 136.191 664.747 138.336 664.811 140.478C664.941 144.9 663.598 148.87 661.259 152.554C658.229 157.326 654.214 161.17 649.819 164.653C647.436 166.542 644.917 168.237 642.346 169.856C642.12 169.998 641.953 170.072 641.679 169.901C635.793 166.218 630.323 162.031 625.794 156.718C623.307 153.801 621.247 150.624 620.062 146.938C619.465 145.081 619.188 143.178 619.192 141.227C619.201 135.898 619.204 130.569 619.18 125.24C619.178 124.687 619.39 124.589 619.859 124.567C621.856 124.47 623.843 124.284 625.806 123.882C628.474 123.336 630.948 122.313 633.123 120.685C636.539 118.129 640.402 117.733 644.463 118.135C646.537 118.341 648.457 119.012 650.123 120.252C654.068 123.188 658.566 124.348 663.387 124.546C664.8 124.604 664.8 124.61 664.8 125.99C664.8 128.676 664.8 131.361 664.8 134.046Z"
                                            fill="#0072C5"
                                        />
                                        <path
                                            d="M640.129 151.275C639.763 151.338 639.72 151.669 639.63 151.927C638.4 155.43 637.183 158.937 635.96 162.442C635.803 162.893 635.636 163.339 635.473 163.787C635.37 164.069 635.278 164.199 634.955 163.944C632.409 161.934 630.005 159.764 627.805 157.385C625.634 155.035 623.696 152.493 622.287 149.6C621.247 147.467 620.534 145.237 620.341 142.836C620.233 141.504 620.261 140.181 620.254 138.854C620.232 134.755 620.246 130.656 620.246 126.556C620.246 125.603 620.282 125.585 621.271 125.546C623.449 125.461 625.587 125.125 627.691 124.552C629.881 123.955 631.864 122.936 633.71 121.643C635.429 120.438 637.24 119.476 639.368 119.238C643.101 118.821 646.699 119.038 649.884 121.357C650.174 121.569 650.25 121.724 650.129 122.065C649.411 124.077 648.712 126.096 648.022 128.118C647.957 128.309 647.821 128.424 647.72 128.576C647.377 128.773 647.07 128.56 646.762 128.476C642.398 127.282 638.14 127.6 634.144 129.708C629.13 132.353 626.057 136.52 625.046 142.144C624.969 142.574 624.909 143.006 624.902 143.446C624.897 143.74 625.02 143.865 625.305 143.866C626.7 143.869 628.095 143.873 629.49 143.864C629.839 143.861 629.941 143.636 629.996 143.344C630.134 142.608 630.271 141.871 630.541 141.167C632.328 136.515 635.681 133.833 640.617 133.106C642.262 132.863 643.851 133.106 645.431 133.519C645.656 133.578 645.947 133.584 645.998 133.912C645.471 135.377 644.945 136.843 644.415 138.306C644.324 138.557 644.211 138.8 644.108 139.046C643.875 139.239 643.633 139.102 643.393 139.065C642.209 138.883 641.039 138.866 639.884 139.27C637.57 140.083 635.84 142.402 635.78 144.801C635.712 147.549 637.169 149.879 639.564 150.866C639.779 150.954 640.077 150.952 640.129 151.275Z"
                                            fill="#2686CD"
                                        />
                                        <path
                                            d="M645.998 133.912C642.633 132.707 639.356 132.954 636.246 134.673C632.743 136.61 630.735 139.637 630.14 143.59C630.089 143.93 629.993 144.046 629.647 144.043C628.128 144.027 626.609 144.024 625.09 144.044C624.7 144.049 624.677 143.907 624.7 143.569C625.193 136.174 630.867 129.624 638.124 128.057C641.375 127.355 644.567 127.549 647.72 128.576C651.564 130.011 654.621 132.421 656.779 135.928C658.218 138.266 659.046 140.809 659.273 143.551C659.305 143.942 659.236 144.05 658.837 144.044C657.34 144.021 655.842 144.022 654.345 144.044C653.958 144.049 653.885 143.904 653.829 143.551C653.105 139.022 650.617 135.857 646.412 134.036C646.281 133.979 646.136 133.953 645.998 133.912Z"
                                            fill="#FEFEFE"
                                        />
                                        <path
                                            d="M640.129 151.275C638.467 150.676 637.117 149.682 636.328 148.071C635.144 145.65 635.323 143.295 636.997 141.175C638.638 139.096 640.849 138.399 643.441 138.903C643.665 138.946 643.886 138.998 644.109 139.046C645.887 139.792 647.283 140.958 647.956 142.804C648.821 145.179 648.49 147.414 646.808 149.327C645.131 151.233 642.984 151.87 640.496 151.34C640.375 151.315 640.251 151.297 640.129 151.275Z"
                                            fill="#FEFEFE"
                                        />
                                        <g filter="url(#filter9_d_1_125)" className="blink-light">
                                            <circle cx={663} cy={417} r={40} fill="white" />
                                            <circle
                                                cx={663}
                                                cy={417}
                                                r="39.0625"
                                                stroke="#499A9A"
                                                strokeWidth="1.875"
                                            />
                                        </g>
                                        <path
                                            d="M663 444.5C662.241 444.5 661.625 443.884 661.625 443.125C661.625 442.366 662.241 441.75 663 441.75V444.5Z"
                                            fill="#0370C8"
                                        />
                                        <path
                                            d="M664.375 443.125C664.375 443.884 663.759 444.5 663 444.5V441.75C663.759 441.75 664.375 442.366 664.375 443.125Z"
                                            fill="#0F5094"
                                        />
                                        <path
                                            d="M687.75 400.5C688.509 400.5 689.125 399.884 689.125 399.125C689.125 398.366 688.509 397.75 687.75 397.75C686.99 397.75 686.375 398.366 686.375 399.125C686.375 399.884 686.99 400.5 687.75 400.5Z"
                                            fill="#0883D9"
                                        />
                                        <path
                                            d="M638.25 400.5C639.009 400.5 639.625 399.884 639.625 399.125C639.625 398.366 639.009 397.75 638.25 397.75C637.49 397.75 636.875 398.366 636.875 399.125C636.875 399.884 637.49 400.5 638.25 400.5Z"
                                            fill="#33BFF0"
                                        />
                                        <path
                                            d="M663 443.125L663.587 444.372C663.587 444.372 684.41 433.51 688.447 417H663V443.125Z"
                                            fill="#0F5094"
                                        />
                                        <path
                                            d="M689.125 399.125L687.75 397.75C672.457 397.75 672.243 389.5 663 389.5V417H688.447C688.88 415.229 689.125 413.395 689.125 411.5C689.125 407.177 689.125 399.125 689.125 399.125Z"
                                            fill="#0883D9"
                                        />
                                        <path
                                            d="M663 443.125L662.413 444.372C662.413 444.372 641.59 433.51 637.553 417H663V443.125Z"
                                            fill="#0370C8"
                                        />
                                        <path
                                            d="M636.875 399.125L638.25 397.75C653.543 397.75 653.757 389.5 663 389.5V417H637.553C637.12 415.229 636.875 413.395 636.875 411.5C636.875 407.177 636.875 399.125 636.875 399.125Z"
                                            fill="#33BFF0"
                                        />
                                        <g clipPath="url(#clip2_1_125)">
                                            <circle
                                                cx={398}
                                                cy={439}
                                                r={150}
                                                fill="url(#paint15_linear_1_125)"
                                            />
                                            <path
                                                d="M319.324 433.655H330.416C334.006 433.655 335.309 436.169 335.309 438.481C335.309 440.793 334.256 442.315 332.298 442.95V443.001C333.878 443.23 334.807 444.727 334.908 446.861C335.059 450.239 335.16 451.077 335.762 451.788H332.951C332.523 451.281 332.523 450.519 332.399 448.334C332.223 445.084 331.144 444.092 328.935 444.092H321.985V451.786H319.324V433.653V433.655ZM329.413 441.757C332.023 441.757 332.651 440.158 332.651 438.887C332.651 437.16 331.623 435.991 329.489 435.991H321.985V441.755H329.413V441.757Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M337.872 433.504H340.381V440.487H340.432C341.611 438.634 343.694 438.024 345.576 438.024C348.738 438.024 351.098 439.396 351.098 442.723V451.788H348.588V443.23C348.588 441.275 347.384 440.158 344.699 440.158C342.416 440.158 340.383 441.504 340.383 444.12V451.788H337.874V433.504H337.872Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M356.243 445.897C356.445 448.64 358.853 450.113 361.085 450.113C362.516 450.113 364.474 449.631 365.328 447.752H367.988C366.733 450.952 363.796 452.247 361.211 452.247C356.092 452.247 353.583 448.971 353.583 445.137C353.583 441.302 356.092 438.026 361.211 438.026C364.675 438.026 368.338 440.058 368.338 445.57V445.901H356.241L356.243 445.897ZM365.678 443.916C365.302 441.504 363.444 440.158 361.085 440.158C358.727 440.158 356.694 441.53 356.317 443.916H365.678Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M370.898 433.504H373.408V436.298H370.898V433.504ZM370.898 438.481H373.408V451.788H370.898V438.481Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M376.469 438.481H378.978V440.487H379.028C380.207 438.634 382.291 438.024 384.173 438.024C387.334 438.024 389.694 439.396 389.694 442.723V451.788H387.185V443.23C387.185 441.275 385.981 440.158 383.296 440.158C381.013 440.158 378.98 441.504 378.98 444.12V451.788H376.471V438.481H376.469Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M392.733 433.655H402.395C405.833 433.655 407.614 435.281 407.614 438.124C407.614 439.901 406.811 441.706 404.1 442.29V442.341C407.589 442.697 408.216 445.262 408.216 446.81C408.216 448.765 407.163 451.786 402.218 451.786H392.733V433.653V433.655ZM393.887 441.884H401.868C402.795 441.884 406.46 441.884 406.46 438.203C406.46 434.521 403.601 434.672 401.692 434.672H393.887V441.884ZM393.887 450.773H401.969C402.871 450.773 407.063 450.773 407.063 446.71C407.063 442.901 403.649 442.901 401.667 442.901H393.887V450.773Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M410.753 438.787H411.909V441.859H411.959C412.813 439.572 414.77 438.379 417.279 438.379C417.63 438.379 417.882 438.43 418.232 438.532V439.7C417.957 439.598 417.63 439.547 416.902 439.547C413.564 439.547 411.909 442.112 411.909 444.753V451.786H410.753V438.785V438.787Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M432.107 451.788H430.953V449.198H430.903C430.099 450.748 428.419 452.194 425.482 452.194C419.584 452.194 419.584 448.385 419.584 446.81V438.785H420.74V446.759C420.74 449.4 421.72 451.177 425.509 451.177C429.298 451.177 430.955 448.791 430.955 446.377V438.783H432.109V451.784L432.107 451.788ZM422.624 433.91H423.778V436.602H422.624V433.91ZM427.942 433.91H429.096V436.602H427.942V433.91Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M446.869 442.876C446.718 441.224 444.511 439.396 441.423 439.396C437.357 439.396 435.324 442.317 435.324 445.415C435.324 447.523 436.78 451.179 441.423 451.179C444.007 451.179 446.466 449.935 447.045 447.243H448.199C447.521 450.646 444.66 452.194 441.424 452.194C437.21 452.194 434.172 449.451 434.172 445.413C434.172 440.842 437.484 438.379 441.424 438.379C445.364 438.379 447.874 440.664 448.025 442.874H446.869V442.876Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M450.255 433.655H451.411V445.693L460.57 438.785H462.276L455.775 443.687L462.878 451.788H461.296L454.872 444.423L451.409 447.014V451.788H450.253V433.655H450.255Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M464.612 445.54C464.687 448.791 466.869 451.177 470.734 451.177C474.598 451.177 475.754 448.638 476.205 447.47H477.359C476.281 450.746 474.021 452.194 470.608 452.194C466.217 452.194 463.456 449.502 463.456 445.186C463.456 442.468 465.162 438.379 470.633 438.379C475.1 438.379 477.659 441.375 477.71 445.54H464.61H464.612ZM476.407 444.525C475.928 440.969 473.469 439.396 470.509 439.396C467.196 439.396 465.113 441.428 464.612 444.525H476.407Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M366.146 398.816C366.146 401.923 363.659 404.441 360.588 404.441C357.517 404.441 355.029 401.923 355.029 398.816C355.029 395.708 357.517 393.192 360.588 393.192C363.659 393.192 366.146 395.71 366.146 398.816Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M388.378 398.816C388.378 401.923 385.89 404.441 382.819 404.441C379.748 404.441 377.26 401.923 377.26 398.816C377.26 395.708 379.748 393.192 382.819 393.192C385.89 393.192 388.378 395.71 388.378 398.816Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M410.609 398.816C410.609 401.923 408.122 404.441 405.053 404.441C401.984 404.441 399.494 401.923 399.494 398.816C399.494 395.708 401.982 393.192 405.053 393.192C408.123 393.192 410.609 395.71 410.609 398.816Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M432.843 398.816C432.843 401.923 430.355 404.441 427.284 404.441C424.214 404.441 421.728 401.923 421.728 398.816C421.728 395.708 424.215 393.192 427.284 393.192C430.353 393.192 432.843 395.71 432.843 398.816Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M377.262 415.689C377.262 418.796 374.774 421.314 371.703 421.314C368.632 421.314 366.145 418.796 366.145 415.689C366.145 412.581 368.632 410.066 371.703 410.066C374.774 410.066 377.262 412.583 377.262 415.689Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M399.495 415.689C399.495 418.796 397.007 421.314 393.936 421.314C390.866 421.314 388.38 418.796 388.38 415.689C388.38 412.581 390.868 410.066 393.936 410.066C397.005 410.066 399.495 412.583 399.495 415.689Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M421.728 415.689C421.728 418.796 419.24 421.314 416.169 421.314C413.098 421.314 410.61 418.796 410.61 415.689C410.61 412.581 413.1 410.066 416.169 410.066C419.238 410.066 421.728 412.583 421.728 415.689Z"
                                                fill="white"
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
                <div className={`our-testimonial epiccompanion pd30 ${language === 'German' ? 'germanaiml' : ''}`}>
                    <div className="container">
                        <div className="row section-row align-items-center">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                            {t("AI/ML Use Cases by Industry")}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
<div className="container-fluid">
    <div className="row align-items-center">
        <div className="col-lg-12">
            {/* Testimonial Slider Start */}
            <div className="testimonial-slider enterslide epiccomp">
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
                                                <img src="/images/ss1.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="service-item-body  oa-para-waber">
                                            <h3>
                                                {t("Brand Owners & Vertical Retailers")}
                                                </h3>
                                            <p className="oa-para">
                                                {t("Personalised Recommendations, Dynamic pricing, Inventory optimisation, and Loss prevention.")}
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
                                                <img src="/images/ss2.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="service-item-body oa-para-waber">
                                            <h3>
                                                {t("Retail Industry")}
</h3>
                                            <p className="oa-para">
                                    
                                                {t("Customer segmentation, demand forecasting, fraud detection, and real-time analytics to improve in-store and online performance.")}
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
                                                <img src="/images/ss3.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="service-item-body oa-para-waber">
                                            <h3>
                                                {t("Distribution & Supply Chain")}
                                            </h3>

                                            <p className="oa-para">
                                                {t("Route optimisation, warehouse automation, predictive delivery times, and supply chain risk analytics.")}
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
                                                <img src="/images/ss10.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="service-item-body oa-para-waber">
                                            <h3>
                                                {t("Discrete Manufacturing")}
                                            </h3>

                                            <p className="oa-para">
                                                {t("Predictive maintenance, computer vision for quality control, production scheduling, and digital twins.")}
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
                                                <img src="/images/ss4.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="service-item-body oa-para-waber">
                                            <h3>
                                    {t("Automotive Industry")}
</h3>
                                            <p className="oa-para">
                                                {t("Smart manufacturing, connected vehicle analytics, predictive maintenance, and safety monitoring.")}
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
                                                <img src="/images/ss5.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="service-item-body oa-para-waber">
                                            <h3>
                                                {t("Engineering, Procurement & Construction (EPC)")}
                                            </h3>
                                            <p className="oa-para">
                                                {t("Project cost forecasting, risk modelling, resource optimisation, and contract intelligence.")}

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
                                                <img src="/images/ss6.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="service-item-body oa-para-waber">
                                            <h3>
                                                {t("Process Manufacturing")}
                                            </h3>

                                            <p className="oa-para">
                                                {t("Predictive process control, energy optimisation, waste reduction, and safety analytics.")}
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
                                                <img src="/images/ss6.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="service-item-body oa-para-waber">
                                            <h3>
                                                {t("Private Equity &amp; Funding-backed Ventures")}
                                            </h3>
                                            <p className="oa-para">
                                                {t("Portfolio performance analytics, risk scoring, market trend prediction, and value creation tracking.")}
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
                <div className=" buildsection mobilepdb40">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="hero-content buildsecont ">
                                    <div className="section-title">
                                        <div className="hero-video-content wow fadeInUp mt-4">
                                            <h2
                                                className="text-anime-style-2 text-center"
                                                data-cursor="-opaque"
                                            >
                                                {t("Why Choose Us?")}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-3 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/g501.svg" alt="" />
                                    <p>
                                        {t("Proven expertise in Google Cloud AI and Azure-based AI implementations.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad2.svg" alt="" />
                                    <p> 
                                        {t("Seamless integration with ERP, CRM, and custom applications.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad3.svg" alt="" />
                                    <p> 
                                        {t("End-to-end support - from design to deployment and optimisation.")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="dynamics-advantage-waber">
                                    <img src="/new/ad4.svg" alt="" />
                                    <p> 
                                        {t("Relentless focus on measurable outcomes.")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Start */}
                <footer className="main-footer pd0">
                    {/* Footer Main Start */}
                    <div className="footer-main">
                        <div className="container">
                            <div className="firstrow">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <h2>
                                            {t("Your data is more than numbers-it’s your next competitive edge.")}
                                        </h2>
                                        <p> 
                                            {t("Talk to our AI/ML experts today.")}
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