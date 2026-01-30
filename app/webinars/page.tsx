'use client'

import React, { useState, useMemo } from 'react'
import CommomLayout from '../Components/CommomLayout'
import Link from "next/link";
import TestimonialandAward from '../Components/TestimonialandAward';
import Awards from '../Components/Awards';

interface Webinar {
  id: number;
  title: string;
  date: string;
  dateObj: Date;
  videoUrl: string;
  image: string;
  categories: string[];
}

const page = () => {
  // Webinar data
  const allWebinars: Webinar[] = [
    {
      id: 1,
      title: "Webinar Title: Future of ERP Series – How to Choose the Right ERP for a Rapidly Changing Business Landscape",
      date: "06/November/2024",
      dateObj: new Date(2024, 10, 6),
      videoUrl: "https://youtu.be/09M-Mq4cNrs",
      image: "/images/1.jpg",
      categories: ["product", "popular"]
    },
    {
      id: 2,
      title: "Webinar Title: #Future-Proofing with ERP – Top Trends in Enterprise Software for 2024 and Beyond",
      date: "02/July/2024",
      dateObj: new Date(2024, 6, 2),
      videoUrl: "https://youtu.be/D_-8yEYVXAI",
      image: "/images/2.jpg",
      categories: ["product", "popular"]
    },
    {
      id: 3,
      title: "Webinar Title: Maximizing ROI with Field Service Automation for ERP",
      date: "23/August/2023",
      dateObj: new Date(2023, 7, 23),
      videoUrl: "https://youtu.be/NfyIuui1VwI",
      image: "/images/3.jpg",
      categories: ["1", "2"]
    },
    {
      id: 4,
      title: "Webinar Title: Webinar on Top ERP Extensions to improve Your IT ROI | ECM | Demand Planning| Data Analysis Solution",
      date: "08/March/2023",
      dateObj: new Date(2023, 2, 8),
      videoUrl: "https://youtu.be/W64fGZcwNCs",
      image: "/images/4.jpg",
      categories: ["3", "4"]
    },
    {
      id: 5,
      title: "Webinar Title: Why Manufacturing Industry Needs a Vertical Specific ERP Solution?",
      date: "05/October/2022",
      dateObj: new Date(2022, 9, 5),
      videoUrl: "https://youtu.be/EVC-oAYXURg",
      image: "/images/5.jpg",
      categories: ["2"]
    },
    {
      id: 6,
      title: "Webinar Title: Essential Strategies for ERP Project Success",
      date: "16/March/2022",
      dateObj: new Date(2022, 2, 16),
      videoUrl: "https://youtu.be/LAA3YcA49H0",
      image: "/images/6.jpg",
      categories: ["3"]
    },
    {
      id: 7,
      title: "Webinar Title: How ERP on the cloud can Improve Efficiency of your Interior Design Business",
      date: "10/November/2021",
      dateObj: new Date(2021, 10, 10),
      videoUrl: "https://youtu.be/D5uhU1W-k-0",
      image: "/images/7.jpg",
      categories: ["3"]
    },
    {
      id: 8,
      title: "Webinar Title: #Webinar Leveraging Effective Change Management for ERP Project Success",
      date: "27/January/2021",
      dateObj: new Date(2021, 0, 27),
      videoUrl: "https://youtu.be/miDuBj216ZQ",
      image: "/images/8.jpg",
      categories: ["solution", "popular"]
    },
    {
      id: 9,
      title: "Webinar Title: #Webinar Get your ERP Implemented Right",
      date: "25/November/2020",
      dateObj: new Date(2020, 10, 25),
      videoUrl: "https://youtu.be/nFjdgAf6rBI",
      image: "/images/9.jpg",
      categories: ["product", "popular"]
    },
    {
      id: 10,
      title: "Webinar Title: Post Pandemic: 5 Proven Reasons for Adopting Cloud ERP",
      date: "07/October/2020",
      dateObj: new Date(2020, 9, 7),
      videoUrl: "https://youtu.be/EVC-oAYXURg",
      image: "/images/10.jpg",
      categories: ["3"]
    },
    {
      id: 11,
      title: "Webinar Title: Panel Discussion - Rebooting your EPC Business for the New Normal",
      date: "30/September/2020",
      dateObj: new Date(2020, 8, 30),
      videoUrl: "https://youtu.be/uPZZ7SJwMPo",
      image: "/images/11.jpg",
      categories: ["product", "popular"]
    },
    {
      id: 12,
      title: "Webinar Title: Webinar Procurement Beyond 2020 Evolving Technology Trends and Priorities",
      date: "16/September/2020",
      dateObj: new Date(2020, 8, 16),
      videoUrl: "https://youtu.be/mMyLo1CjnlA",
      image: "/images/12.jpg",
      categories: ["product", "popular"]
    },
    {
      id: 13,
      title: "Webinar Title: [Panel Discussion] Growing Your Business Through Digital Transformation",
      date: "09/September/2020",
      dateObj: new Date(2020, 8, 9),
      videoUrl: "https://youtu.be/9w7FKUXH0gA",
      image: "/images/13.jpg",
      categories: ["product", "popular"]
    },
    {
      id: 14,
      title: "Webinar Title: Digitally Transform your Procurement Function with MeRLIN",
      date: "19/August/2020",
      dateObj: new Date(2020, 7, 19),
      videoUrl: "https://youtu.be/LMlV9rICS-s",
      image: "/images/14.jpg",
      categories: ["product", "popular"]
    },
    {
      id: 15,
      title: "Webinar Title: Webinar on Digitally Transform your Procurement Function with MeRLIN",
      date: "19/August/2020",
      dateObj: new Date(2020, 7, 19),
      videoUrl: "https://youtu.be/LMlV9rICS-s",
      image: "/images/15.jpg",
      categories: ["product", "popular"]
    },
    {
      id: 16,
      title: "Webinar Title: Improve the Strategic Quotient of Sourcing through Analytics",
      date: "15/July/2020",
      dateObj: new Date(2020, 6, 15),
      videoUrl: "https://youtu.be/xr1ygxE9w3E",
      image: "/images/16.jpg",
      categories: ["product", "popular"]
    },
    {
      id: 17,
      title: "Webinar Title: [Panel Discussion] Agile Procurement Processes to Manage a Dynamic Business Environment",
      date: "24/June/2020",
      dateObj: new Date(2020, 5, 24),
      videoUrl: "https://youtu.be/zxGuq3paQ1Y",
      image: "/images/17.jpg",
      categories: ["solution", "popular"]
    },
    {
      id: 18,
      title: "Webinar Title: Enhance and Extend your Epicor ERP's Value to Business with the right Ancillary Software",
      date: "10/June/2020",
      dateObj: new Date(2020, 5, 10),
      videoUrl: "https://youtu.be/-qMGaFuHPg8",
      image: "/images/18.jpg",
      categories: ["solution", "popular"]
    },
    {
      id: 19,
      title: "Webinar Title: Getting Your ERP Implemented Right - A Key to Successful Digital Transformation",
      date: "03/June/2020",
      dateObj: new Date(2020, 5, 3),
      videoUrl: "https://youtu.be/ZnKxMi93xKQ",
      image: "/images/19.jpg",
      categories: ["product", "popular"]
    },
    {
      id: 20,
      title: "Webinar Title: Enabling a Virtual Workplace with Document Management System",
      date: "14/May/2020",
      dateObj: new Date(2020, 4, 14),
      videoUrl: "https://youtu.be/48x_V8JzDqI",
      image: "/images/20.jpg",
      categories: ["solution", "popular"]
    },
    {
      id: 21,
      title: "Webinar Title: How COVID-19 will change the design, planning and operation of global supply chains",
      date: "07/May/2020",
      dateObj: new Date(2020, 4, 7),
      videoUrl: "https://youtu.be/vJWwRzzSU60",
      image: "/images/21.jpg",
      categories: ["product", "popular"]
    },
    {
      id: 22,
      title: "Webinar Title: Epicor ERP Performance Management – Approach, Tools and Techniques",
      date: "06/May/2020",
      dateObj: new Date(2020, 4, 6),
      videoUrl: "https://youtu.be/NEWSDI_DFKE",
      image: "/images/22.jpg",
      categories: ["product", "popular"]
    },
    {
      id: 23,
      title: "Webinar Title: Calculate ROI for your ERP to save Money during this Economic Crisis",
      date: "29/April/2020",
      dateObj: new Date(2020, 3, 29),
      videoUrl: "https://youtu.be/h9ICNH2xVKI",
      image: "/images/23.jpg",
      categories: ["solution", "popular"]
    }
  ];

  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    product: false,
    solution: false,
    popular: false,
    recent: false
  });
  const [sortByDate, setSortByDate] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter and sort webinars
  const filteredWebinars = useMemo(() => {
    let result = [...allWebinars];

    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(webinar =>
        webinar.title.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filters
    const activeFilters: string[] = [];
    if (filters.product) activeFilters.push('product');
    if (filters.solution) activeFilters.push('solution');
    if (filters.popular) activeFilters.push('popular');

    if (activeFilters.length > 0) {
      result = result.filter(webinar =>
        activeFilters.some(filter => webinar.categories.includes(filter))
      );
    }

    // "Recent" = sort by date (newest first), don't hide older webinars
    // Sort by date when either "Recent" or "Sort by Release Date" is checked
    if (sortByDate || filters.recent) {
      result.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());
    }

    return result;
  }, [searchTerm, filters, sortByDate]);

  // Handle filter checkbox changes
  const handleFilterChange = (filterName: keyof typeof filters) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // Toggle mobile filter
  const toggleMobileFilter = () => {
    setMobileFilterOpen(!mobileFilterOpen);
  };

  return (
    <CommomLayout>
      <>
        {/* Header Start */}
        {/*?php include "navbar.php" ?*/}
        {/* Header End */}
        {/* Hero Section Start*/}
        <div className="hero89 success-main1 webhero systemview pdb0">
          {/* <div class="parent2 retailparent2">
  <video src="/videos/equity.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
          <div className="baner-img1 ssbimg webinarimg">
            <img src="/images/webinar.jpg" alt="" />
          </div>
          <div className="container">
            <div className="row section-row1 align-items-center builtsec">
              <div className="col-sm-5">
                <div className="section-title">
                  <h2 className="text-anime-style-21" data-cursor="-opaque">
                    Webinars
                  </h2>
                </div>
              </div>
              <div className="col-sm-7"></div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        {/* Hero Section Start*/}
        <div className="hero89 success-main1 webhero webinarhero mobileview pdb0">
          {/* <div class="parent2 retailparent2">
  <video src="/videos/equity.mp4" autoplay muted loop playsinline class="bg-image1"></video>
    </div> */}
          <div className="container">
            <div className="row section-row1 align-items-center builtsec">
              <div className="col-sm-5">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Webinars
                  </h2>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="baner-img1 ssbimg webinarimg1">
                  <img src="/images/webinar.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section End*/}
        {/* Page Video Gallery Start */}
        <div className="page-video-gallery pt40">
          <div className="container">
            <div className="col-sm-12">
              <div className="bolg-filter-waber webinarbtn webvideo">
                <div className="row">
                  <div className="col-sm-9">
                    <div className="mobileview">
                      <div className="mobile-blog-top ">
                        <div className="filtermbl search-row">
                          <input
                            type="text"
                            placeholder="Search webinars"
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          <button 
                            className="filter-btn1" 
                            id="openFilterBtn"
                            onClick={toggleMobileFilter}
                            type="button"
                          >
                            <svg
                              width={20}
                              height={23}
                              viewBox="0 0 20 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.87667 0.75H16.9383C18.1117 0.75 19.065 1.70333 19.065 2.87667V5.22333C19.065 6.085 18.5333 7.14833 18.0017 7.68L13.4183 11.7317C12.7767 12.2633 12.355 13.3267 12.355 14.1883V18.7717C12.355 19.4133 11.9333 20.2567 11.4017 20.5867L9.91667 21.5217C8.52333 22.3833 6.61667 21.4117 6.61667 19.7067V14.06C6.61667 13.3083 6.195 12.355 5.755 11.8233L1.70333 7.55167C1.17167 7.03833 0.75 6.06667 0.75 5.425V2.98667C0.75 1.70333 1.70333 0.75 2.87667 0.75Z"
                                stroke="#499A9A"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      {/* Filter Content */}
                      <div className={`mobile-filter ${mobileFilterOpen ? 'show' : ''}`} id="mobileFilter">
                        <Link href="#demo3"
                          data-bs-toggle="collapse"
                          className="arrow-toggle"
                          aria-expanded={mobileFilterOpen}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleMobileFilter();
                          }}
                        ></Link>
                        <div
                          id="demo3"
                          className={`collapse content-box ${mobileFilterOpen ? 'show' : ''}`}
                        >
                          <div className="col-sm-12 width100">
                            <h6 className="fome-filter-title">Webinars</h6>
                            <div className="filter-check-box-waber">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  checked={filters.product}
                                  onChange={() => handleFilterChange('product')}
                                  id="mobileFilterProduct"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="mobileFilterProduct"
                                >
                                  Product Based
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  checked={filters.solution}
                                  onChange={() => handleFilterChange('solution')}
                                  id="mobileFilterSolution"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="mobileFilterSolution"
                                >
                                  Solution based
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  checked={filters.popular}
                                  onChange={() => handleFilterChange('popular')}
                                  id="mobileFilterPopular"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="mobileFilterPopular"
                                >
                                  Popular
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  checked={filters.recent}
                                  onChange={() => handleFilterChange('recent')}
                                  id="mobileFilterRecent"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="mobileFilterRecent"
                                >
                                  Recent
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  checked={sortByDate}
                                  onChange={() => setSortByDate(!sortByDate)}
                                  id="mobileFilterSort"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="mobileFilterSort"
                                >
                                  Sort by Release Date
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {filteredWebinars.length > 0 ? (
                        filteredWebinars.map((webinar) => (
                      <div
                            key={webinar.id}
                        className="col-sm-4 mb-4 item"
                            data-category={webinar.categories.join(' ')}
                      >
                        <div className="video-gallery-image wow fadeInUp">
                              <Link
                                href={webinar.videoUrl}
                                className="popup-video"
                            data-cursor-text="Play"
                          >
                            <figure>
                                  <img src={webinar.image} alt={webinar.title} />
                            </figure>
                          </Link>
                              <h4>{webinar.title}</h4>
                          <p>
                                <b>Webinar Date:</b> {webinar.date}
                          </p>
                        </div>
                      </div>
                        ))
                      ) : (
                        <div className="col-sm-12">
                          <p className="text-center" style={{ padding: '2rem', color: '#000' }}>
                            No webinars found matching your search criteria.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-3 systemview">
                    <form action="" method="post" onSubmit={handleSearch}>
                      <div className="blog-serch">
                        <input 
                          type="text" 
                          placeholder="Search webinars" 
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">
                          <img src="/new/ser-blog.svg" alt="" />
                        </button>
                      </div>
                    </form>
                    <h6 className="fome-filter-title">Webinars</h6>
                    <div className="filter-check-box-waber">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={filters.product}
                          onChange={() => handleFilterChange('product')}
                          id="desktopFilterProduct"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="desktopFilterProduct"
                        >
                          Product Based
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={filters.solution}
                          onChange={() => handleFilterChange('solution')}
                          id="desktopFilterSolution"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="desktopFilterSolution"
                        >
                          Solution based
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={filters.popular}
                          onChange={() => handleFilterChange('popular')}
                          id="desktopFilterPopular"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="desktopFilterPopular"
                        >
                          Popular
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={filters.recent}
                          onChange={() => handleFilterChange('recent')}
                          id="desktopFilterRecent"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="desktopFilterRecent"
                        >
                          Recent
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={sortByDate}
                          onChange={() => setSortByDate(!sortByDate)}
                          id="desktopFilterSort"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="desktopFilterSort"
                        >
                          Sort by Release Date
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Video Gallery End */}
        <div className="container">
          <p className="lines" />
        </div>
        <TestimonialandAward />

        <Awards />
        {/* Footer Start */}
        <footer className="main-footer pd0">
          {/* Footer Main Start */}
          <div className="footer-main">
            <div className="container">
              <div className="firstrow">
                <div className="row">
                  <div className="col-sm-8">
                    <h2>Ready to accelerate value creation across your portfolio?</h2>
                    <p>
                      Contact us today to learn how we can help modernise operations,
                      de-risk integrations, and improve commercial outcomes.
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <div className="ser-btn text-right">
                      <Link href="/contact-us" className="animated-svg-link">
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