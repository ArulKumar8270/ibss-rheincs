import React from 'react'
import CommomLayout from '../Components/CommomLayout'
import Link from "next/link";
const page = () => {
    return (
        <CommomLayout>
           <>
  {/* Header Start */}
  {/*?php include "navbar.php" ?*/}
  {/* Header End */}
  <div className="hero brainsec enter  retailsection1 mobileuiux">
    <div className="parent2 retailparent2 rechange-baner mobilevideo">
      <img src="/images/UX.png" alt="" />
      {/* <video src="/videos/uiux.mp4" autoplay muted loop playsinline class="bg-image1"></video> */}
    </div>
    <div className="container">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-sm-5">
          <div className="section-title">
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              User Experience (UX/UI)
            </h2>
            <p>
              In today’s digital-first world, great design is more than
              looks—it’s about creating seamless, intuitive experiences that
              drive engagement, satisfaction, and loyalty.{" "}
            </p>
            <p>
              We design responsive, accessible, and future-ready interfaces that
              empower users and deliver exceptional experiences across web,
              mobile, and immersive platforms.
            </p>
          </div>
        </div>
        <div className="col-sm-7 pd0">
          <div className="corusimg mobileview">
            <img src="/images/UX.png" alt="" />
          </div>
          {/* <div class="parent2 retailparent2 mobileview">
              <video src="/videos/uiux.mp4" autoplay muted loop playsinline class="bg-image1"></video>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section Start*/}
  <div className=" buildsection">
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
                  Why Choose Us?{" "}
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
              Human-Centred Design – clarity, simplicity, and impact at the
              core.
            </p>
          </div>
        </div>
        <div className="col-sm-3 col-6">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad2.svg" alt="" />
            <p>
              Experience across industries delivering modern, digital-first
              interfaces.
            </p>
          </div>
        </div>
        <div className="col-sm-3 col-6">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad3.svg" alt="" />
            <p>
              Proven ability to blend creativity with technology for scalable
              solutions.
            </p>
          </div>
        </div>
        <div className="col-sm-3 col-6">
          <div className="dynamics-advantage-waber">
            <img src="/new/ad4.svg" alt="" />
            <p>
              A track record of future-ready, engaging, and accessible designs
              that deliver results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End*/}
  {/* Hero Section Start*/}
  <div className="hero digi2 self1 mobileself1">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 order2 systemview">
          <div className="hero-bg-video buildsec mobileux">
            {/*<video autoplay muted loop id="myVideo" height="800">*/}
            {/*    <source src="/videos/uicap.mp4" type="video/mp4">*/}
            {/*</video>*/}
            <img src="/new/ux-9.jpg" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hero-content buildsecont pd50">
            <div className="section-title mobileh2">
              <div className="hero-video-content wow fadeInUp mt-4">
                <h2
                  className="text-anime-style-2 text-dark"
                  data-cursor="-opaque"
                >
                  Our Capabilities
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss1.svg" alt="" />
                  <p>
                    <b>UX/UI Design</b> – crafted with industry-leading tools
                    like Figma, Webflow, Anima, and Adobe XD.
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss2.svg" alt="" />
                  <p>
                    <b>Responsive &amp; Inclusive Design</b> – accessible
                    experiences for all platforms and users.
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss3.svg" alt="" />
                  <p>
                    <b>Immersive Experiences</b> – AR/VR-enabled journeys for
                    next-generation engagement.
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss4.svg" alt="" />
                  <p>
                    <b>Design Systems &amp; Prototyping</b> – accelerating
                    time-to-market and consistency.
                  </p>
                </div>
                <div className="challenge-point-waber self-service">
                  <img src="/images/ss5.svg" alt="" />
                  <p>
                    <b>Continuous Optimisation</b> – improving engagement,
                    conversion, and user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mobileview">
        <div className="corusimg-5 ">
          <img src="/new/ux-9.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section End*/}
  {/* Footer Start */}
  <footer className="main-footer pd0">
    {/* Footer Main Start */}
    <div className="footer-main">
      <div className="container">
        <div className="firstrow">
          <div className="row">
            <div className="col-sm-8">
              <h2>Design Experiences Users Love </h2>
              <p>
                Ready to create interfaces that connect, engage, and inspire?{" "}
              </p>
              <p>Talk to our UX experts today. </p>
            </div>
            <div className="col-sm-4">
              <div className="ser-btn text-right">
                <Link href="/contact" className="animated-svg-link">
                  Contact Us
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

export default page