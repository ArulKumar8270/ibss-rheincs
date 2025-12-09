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
  <div className="main-baner-hight sup-1 retail-baner ">
    <div className="container bg-video-waber-content ">
      <div className="row section-row1 align-items-center builtsec">
        <div className="col-lg-5">
          <div className="pe-main-hadding-waber">
            <h2 className="main-hadding-1 text-white" data-cursor="-opaque">
              Distribution &amp; Supply Chain
            </h2>
            <p>
              Distribution businesses operate at the frontline of supply chain
              complexity. Balancing supply reliability, service level
              commitments, and operational costs in increasingly volatile
              markets requires agility, visibility, and intelligent
              decision-making. Fragmented systems, unpredictable demand, and
              rising logistics costs put further pressure on margins, making
              operational efficiency and digital integration essential for
              survival.
            </p>
            <div className="ser-btn m-0">
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
    </div>
    <div className="">
      <video src="/new/sp-08.mp4" autoPlay={true} muted={true} loop={true} playsInline={true} />
    </div>
  </div>
  <div className="py-100 pe-chellange-waber ">
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="pe-chellange-content-waber f-g32">
          <h2
            className="main-hadding-1 them-dark-text-color"
            data-cursor="-opaque"
          >
            Challenges in Distribution &amp; Supply Chain
          </h2>
          <div className="d-g24 flex-wrap">
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                Unpredictable demand patterns and supply disruptions affecting
                inventory and delivery performance
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                Manual, reactive inventory planning and replenishment processes
                leading to overstocking or stockouts
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                Stock imbalances and fulfilment delays impacting customer
                service and increasing working capital lock-up
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                Inefficient partner and customer collaboration workflows causing
                delays and service issues
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                Fragmented systems and siloed data across warehousing,
                transport, order management, and ERP platforms
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                Rising logistics and transport costs squeezing already-thin
                margins
              </p>
            </div>
            <div className="challenge-point-waber">
              <img src="/new/qs-2.svg" alt="" />
              <p>
                Limited real-time visibility into stock, order status, delivery
                schedules, and supplier performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="retail-chellange-bg-img">
      <img src="/new/sp-08.jpeg" alt="" />
    </div>
  </div>
  <div className="py-100 pe-matters-waber">
    <h2
      className="main-hadding-1 them-dark-text-color text-center mb-40"
      data-cursor="-opaque"
    >
      Why It Matters
    </h2>
    <div className="pe-matters-content-waber">
      <div className="pe-matters-content">
        <img src="/new/g501.svg" alt="" />
        <p>
          Poor inventory and order visibility leads to missed service level
          agreements (SLAs), penalties, and lost business
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad2.svg" alt="" />
        <p>
          Inefficient operations increase carrying costs, working capital
          exposure, and operational waste
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad3.svg" alt="" />
        <p>
          Slow response to disruptions weakens customer trust, competitiveness,
          and profitability
        </p>
      </div>
      <div className="pe-matters-content">
        <img src="/new/ad4.svg" alt="" />
        <p>
          Disconnected systems limit forecast accuracy, fulfilment agility, and
          operational control
        </p>
      </div>
    </div>
  </div>
  <section className="py-100  pe-help-waber sup-pre ">
    <div className="container">
      <h2 className="main-hadding-1 text-white  mb-40" data-cursor="-opaque">
        How We Help
      </h2>
      <div className="pe-help-content-waber">
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            Optimise inventory management using predictive analytics, demand
            forecasting, and automated replenishment
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            Deploy real-time stock, order, and delivery tracking solutions to
            improve fulfilment performance and SLA adherence
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            Integrate ERP, warehouse, transport, and order management systems
            for seamless, real-time operational visibility
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            Enable automated workflows for order management, dispatch, and
            logistics coordination{" "}
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            Implement centralised inventory and order tracking dashboards for
            improved control and customer communication
          </p>
        </div>
        <div className="pe-help-content">
          <img src="/new/Headset.svg" alt="" />
          <p>
            Improve supplier, partner, and customer collaboration through shared
            data access and alerts
          </p>
        </div>
      </div>
    </div>
    <div className="commen-help-bg-img">
      <video src="/new/sp008.mp4" autoPlay={true} loop={true} muted={true} playsInline={true} />
    </div>
  </section>
  <div className="benifites-waber">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 sc-b-h">
              <div>
                <h4 className="benifit-title"> Tangible Outcomes</h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    Improved inventory turnover and stock accuracy across
                    warehouses and delivery points
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    Enhanced service levels and customer satisfaction through
                    real-time fulfilment visibility
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    Reduced carrying costs, inventory wastage, and stockouts via
                    data-led demand planning
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    Greater operational agility and resilience in managing
                    supply disruptions and volatile demand{" "}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    Higher productivity and reduced operational costs through
                    automation and process optimisation{" "}
                  </p>
                </div>
              </div>
              <img src="/new/pf-6.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="benifet-content-waber">
            <div className="benifet-content benifet-content-2 sc-b-h">
              <div>
                <h4 className="benifit-title">Why Choose Us</h4>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    Proven transformation expertise across distribution, supply
                    chain, logistics, and fulfilment operations{" "}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    Practical focus on delivering operational outcomes,
                    measurable savings, and service improvements{" "}
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    Experienced in deploying integrated, real-time supply chain
                    platforms and operational control systems
                  </p>
                </div>
                <div className="bf-content">
                  <img src="/new/lp.svg" alt="" />
                  <p>
                    {" "}
                    Offshore delivery model ensuring high-quality, scalable, and
                    cost-efficient project execution
                  </p>
                </div>
              </div>
              <div className="text-center">
                <img src="/new/nodr.svg" style={{ width: "70%" }} alt="" />
              </div>
            </div>
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
              <h2 data-cursor="-opaque">
                Ready to modernise your distribution operations and supply chain
                performance?
              </h2>
              <p>
                Contact us today to discover how we can help optimise your
                warehousing, inventory, and order management for a more
                resilient, agile business.
              </p>
              {/*<p>Talk to our enterprise solutions experts today.</p>*/}
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