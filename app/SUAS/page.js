'use client'
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 55,
    initialSlide: 0,
    centeredSlides: true,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, // Delay between slides in milliseconds (3 seconds)
        disableOnInteraction: false, // Keeps autoplay running after interaction
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1500: {
            slidesPerView: 5.4,
            spaceBetween: 55,
        },
    },
}

export default function About1() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="EDHITHA X SUAS">
                <div>
                    <section className="tf-section tf-about">
                        <div className="tf-container">
                            <div className="row ">
                                <div className="col-md-12 ">
                                    <div className="icon">
                                        <svg width={208} height={208} viewBox="0 0 208 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_f_2337_5328)">
                                                <path d="M88.0594 196L88.0594 142.485L50.2119 180.333L27.6674 157.788L65.5149 119.941L12 119.941L12 88.0594L65.5149 88.0594L27.6674 50.2119L50.2119 27.6673L88.0594 65.5148L88.0594 12L119.941 12L119.941 65.5149L157.788 27.6673L180.333 50.2119L142.485 88.0594L196 88.0594L196 119.941L142.485 119.941L180.333 157.788L157.788 180.333L119.941 142.485L119.941 196L88.0594 196Z" fill="url(#paint0_linear_2337_5328)" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_f_2337_5328" x={0} y={0} width={208} height={208} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feGaussianBlur stdDeviation={6} result="effect1_foregroundBlur_2337_5328" />
                                                </filter>
                                                <linearGradient id="paint0_linear_2337_5328" x1={196} y1={104} x2={12} y2={104} gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="var(--primary-color35)" />
                                                    <stop offset={1} stopColor="var(--primary-color35)" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    {/* <div className="icon-2">
                                        <svg width={302} height={302} viewBox="0 0 302 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g filter="url(#filter0_f_2337_5282)">
                                                <path d="M234.678 38.4808L198.329 110.138L274.714 85.1672L289.589 130.668L213.203 155.638L284.86 191.988L263.205 234.677L191.548 198.328L216.518 274.713L171.018 289.588L146.047 213.202L109.698 284.859L67.0084 263.204L103.358 191.547L26.9721 216.517L12.0979 171.017L88.4837 146.046L16.8268 109.697L38.4818 67.0074L110.139 103.357L85.1682 26.9711L130.669 12.0969L155.639 88.4827L191.989 16.8258L234.678 38.4808Z" fill="url(#paint0_linear_2337_5282)" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_f_2337_5282" x="0.0976562" y="0.0966797" width="301.49" height="301.491" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feGaussianBlur stdDeviation={6} result="effect1_foregroundBlur_2337_5282" />
                                                </filter>
                                                <linearGradient id="paint0_linear_2337_5282" x1="27.6543" y1="88.352" x2="274.032" y2="213.333" gradientUnits="userSpaceOnUse">
                                                    <stop offset={0} stopColor="var(--primary-color35)" />
                                                    <stop offset={1} stopColor="var(--primary-color35)" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div> */}
                                    <div className="tf-heading">
                                        <h2 className="heading wow fadeInUp">SUAS?</h2>
                                        <p className="sub-heading wow fadeInUp">The competition requires students to design, integrate, report on, and demonstrate a UAS capable of autonomous flight and navigation, remote sensing via onboard payload sensors, and execution of a specific set of tasks. The competition has been held annually since 2002.</p>
                                    </div>
                                    <div className="tf-heading">
                                        <h2 className="heading wow fadeInUp">EDHITHA'S SUAS JOURNEY</h2>
                                        <p className="sub-heading wow fadeInUp">In the year 2011, a group of ambitious engineering students from M S RAMAIAH INSTITUTE OF TECHNOLOGY,fueled by a passion for aerospace and innovation, came together with a shared dream: to push the boundaries of unmanned aerial systems (UAS) technology. 
                                        Edhitha has been taking part in this competition held at St. Mary's County Regional Airport (2W6) in St. Mary's County, Maryland,USA since 2011. The team's performance made headlines and was commended by the entire UAV community.</p>
                                    </div>
                                    {/* <div className="counter-wrap">
                                        <div className="tf-counter wow fadeInUp">
                                            <h6>Flights</h6>
                                            <div className="content">
                                                <CounterUp count={2240} data-speed={2000}/>+
                                            </div>
                                        </div>
                                        <div className="tf-counter wow fadeInUp">
                                            <h6>Profiles Whitelisted</h6>
                                            <div className="content">
                                                <CounterUp count={1000} data-speed={2000}/>+
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className=" tf-section tf-partner-sec wow fadeInUp ">
                        {/* <div className="icon">
                            <svg width={126} height={308} viewBox="0 0 126 308" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_2679_13668)">
                                    <path d="M-15.1902 297.004L-36.5388 217.33L-77.7885 288.777L-120.347 264.205L-79.0973 192.759L-158.771 214.107L-171.49 166.642L-91.8156 145.293L-163.262 104.043L-138.691 61.485L-67.2445 102.735L-88.5931 23.0606L-41.1276 10.3423L-19.779 90.0164L21.4708 18.5697L64.0293 43.1409L22.7795 114.588L102.454 93.239L115.172 140.704L35.4978 162.053L106.945 203.303L82.3734 245.861L10.9267 204.612L32.2753 284.286L-15.1902 297.004Z" fill="url(#paint0_linear_2679_13668)" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_2679_13668" x="-181.49" y="0.342773" width="306.662" height="306.661" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation={5} result="effect1_foregroundBlur_2679_13668" />
                                    </filter>
                                    <linearGradient id="paint0_linear_2679_13668" x1="108.813" y1="116.972" x2="-165.131" y2="190.375" gradientUnits="userSpaceOnUse">
                                        <stop offset={0} stopColor="var(--primary-color35)" />
                                        <stop offset={1} stopColor="var(--primary-color35)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div> */}
                        
                    </section>
                <section className="tf-section section-bg-1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="tf-heading mb60 wow fadeInUp">
                            <h2 className="heading">ROAD MAP</h2>
                        </div>
                        <div className="col-md-12 wow fadeInUp">
                            <div className="tf-roadmap">
                                <div className="swiper-container swiper sl-roadmap">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#21a7e7" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#21a7e7" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                <h4 className="title">2011</h4>

                                                <div className="Suas-image-row">
                                                    <img
                                                    src="/assets/Suas_pics/2011.png"
                                                    alt="RMRC Air Titan Front"
                                                    className="Suas-content-image"
                                                    />
                                                    {/* Optional second image */}
                                                    <img
                                                    src="/assets/Suas_pics/2011_2 .png"
                                                    alt="RMRC Air Titan Side"
                                                    className="Suas-content-image"
                                                    />
                                                </div>

                                                <ul className="list-infor">
                                                    <li>Overall Rank: 15th</li>
                                                    <li>Mission Rank: 3rd</li>
                                                    <li>Fixed Wing: RMRC Air Titan</li>
                                                </ul>
                                                </div>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#21a7e7" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#21a7e7" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                <h4 className="title">2012</h4>

                                                <div className="Suas-image-row">
                                                    <img
                                                    src="/assets/Suas_pics/2012.png"
                                                    alt="RMRC Air Titan Front"
                                                    className="Suas-content-image"
                                                    />
                                                    {/* Optional second image */}
                                                    <img
                                                    src="/assets/Suas_pics/2012_2.png"
                                                    alt="RMRC Air Titan Side"
                                                    className="Suas-content-image"
                                                    />
                                                </div>

                                                <ul className="list-infor">
                                                    <li>Overall Rank: 14th</li>
                                                    <li>Mission Rank:</li>
                                                    <li>Fixed Wing: RMRC Air Titan</li>
                                                </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box ">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#21a7e7" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#21a7e7" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                <h4 className="title">2013</h4>

                                                <div className="Suas-image-row">
                                                    <img
                                                    src="/assets/Suas_pics/2013.png"
                                                    alt="Sky Walker X8 Front"
                                                    className="Suas-content-image"
                                                    />
                                                    {/* Optional second image */}
                                                    <img
                                                    src="/assets/Suas_pics/2013_2.png"
                                                    alt="Sky Walker X8 Side"
                                                    className="Suas-content-image"
                                                    />
                                                </div>

                                                <ul className="list-infor">
                                                    <li>Overall Rank: 10th</li>
                                                    <li>Mission Rank: 5th</li>
                                                    <li>Fixed Wing: Sky Walker X8</li>
                                                </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#767676" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#888B8E" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                <h4 className="title">2014</h4>

                                                <div className="Suas-image-row">
                                                    <img
                                                    src="/assets/Suas_pics/2014_1.png"
                                                    alt="Dawon Front"
                                                    className="Suas-content-image"
                                                    />
                                                    {/* Optional second image */}
                                                    <img
                                                    src="/assets/Suas_pics/2014_2.png"
                                                    alt="Dawon Side"
                                                    className="Suas-content-image"
                                                    />
                                                </div>

                                                <ul className="list-infor">
                                                    <li>Overall Rank: 25th</li>
                                                    <li>Mission Rank: 27th</li>
                                                    <li>Fixed wing: Dawon</li>
                                                </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#767676" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#888B8E" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                <h4 className="title">2015</h4>

                                                <div className="Suas-image-row">
                                                    <img
                                                    src="/assets/Suas_pics/2015_1.png"
                                                    alt="RMRC Anaconda Front"
                                                    className="Suas-content-image"
                                                    />
                                                    {/* Optional second image */}
                                                    <img
                                                    src="/assets/Suas_pics/2015_2.png"
                                                    alt="RMRC Anaconda Side"
                                                    className="Suas-content-image"
                                                    />
                                                </div>

                                                <ul className="list-infor">
                                                    <li>Overall Rank: 1st</li>
                                                    <li>Mission Rank: 1st</li>
                                                    <li>Fixed wing: RMRC Anaconda</li>
                                                </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#767676" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#888B8E" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                <h4 className="title">2016</h4>

                                                <div className="Suas-image-row">
                                                    <img
                                                    src="/assets/Suas_pics/2016.png"
                                                    alt="Aeritech I-soar one Front"
                                                    className="Suas-content-image"
                                                    />
                                                    {/* Optional second image */}
                                                    <img
                                                    src="/assets/Suas_pics/2016_22.png"
                                                    alt="Aeritech I-soar one Side"
                                                    className="Suas-content-image"
                                                    />
                                                </div>

                                                <ul className="list-infor">
                                                    <li>Overall Rank: 5th</li>
                                                    <li>Mission Rank: 3rd</li>
                                                    <li>Fixed wing: Aeritech I-soar one</li>
                                                </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#767676" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#888B8E" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                            <h4 className="title">2017</h4>

                                            <div className="Suas-image-row">
                                                <img
                                                src="/assets/Suas_pics/2017_1.png"
                                                alt="RMRC Anaconda Front"
                                                className="Suas-content-image"
                                                />
                                                {/* Optional second image */}
                                                <img
                                                src="/assets/Suas_pics/2017_2.png"
                                                alt="RMRC Anaconda Side"
                                                className="Suas-content-image"
                                                />
                                            </div>

                                            <ul className="list-infor">
                                                <li>Overall Rank: 15th</li>
                                                <li>Mission Rank: 14th</li>
                                                <li>Fixed wing: RMRC Anaconda</li>
                                            </ul>
                                            </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#767676" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#888B8E" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                 <h4 className="title">2018</h4>

                                                 <div className="Suas-image-row">
                                                 <img
                                                 src="/assets/Suas_pics/2018_1.png"
                                                 alt="RMRC Anaconda Front"
                                                 className="Suas-content-image"
                                                 />
                                                 {/* Optional second image */}
                                                 <img
                                                 src="/assets/Suas_pics/2018_2.png"
                                                 alt="RMRC Anaconda Side"
                                                 className="Suas-content-image"
                                                 />
                                                </div>

                                                <ul className="list-infor">
                                                <li>Overall Rank: 10th</li>
                                                <li>Mission Rank: 10th</li>
                                                <li>Fixed wing: RMRC Anaconda</li>
                                               </ul>
                                               </div>
                                               </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#767676" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#888B8E" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                <h4 className="title">2019</h4>

                                                <div className="Suas-image-row">
                                                    <img src="/assets/Suas_pics/2019.png" alt="FX61 Phantom Front" className="Suas-content-image" />
                                                    {/* Optional second image */}
                                                    {/*} <img src="/assets/Suas_pics/2019_2.png" alt="FX61 Phantom Side" className="Suas-content-image" /> */}
                                                </div>

                                                <ul className="list-infor">
                                                    <li>Overall Rank: 56th</li>
                                                    <li>Mission Rank: 48th</li>
                                                    <li>Fixed wing: FX61- phantom</li>
                                                </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#767676" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#888B8E" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content ">
                                                    <h4 className="title">2020</h4>
                                                    <ul className="list-infor">
                                                        
                                                        <li>
                                                            Corona
                                                        </li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#767676" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#888B8E" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content ">
                                                    <h4 className="title">2021</h4>
                                                    <ul className="list-infor">
                                                        
                                                        <li>
                                                            Corona 
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#767676" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#888B8E" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                <h4 className="title">2022</h4>

                                                <div className="Suas-image-row">
                                                    <img src="/assets/Suas_pics/2022_1.png" alt="RMRC Anaconda Front" className="Suas-content-image" />
                                                    {/* Optional second image */}
                                                    <img src="/assets/Suas_pics/2022_2.png" alt="RMRC Anaconda Side" className="Suas-content-image" />
                                                </div>

                                                <ul className="list-infor">
                                                    <li>Overall Rank: 28th</li>
                                                    <li>Mission Rank: 18th</li>
                                                    <li>Fixed wing: RMRC Anaconda</li>
                                                </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#767676" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#888B8E" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                <h4 className="title">2023</h4>

                                                <div className="Suas-image-row">
                                                    <img src="/assets/Suas_pics/2023_1.png" alt="Thanos Drone Front" className="Suas-content-image" />
                                                    {/* Optional second image */}
                                                    <img src="/assets/Suas_pics/2023_2.png" alt="Thanos Drone Side" className="Suas-content-image" /> 
                                                </div>

                                                <ul className="list-infor">
                                                    <li>Overall Rank: 15th</li>
                                                    <li>Mission Rank: 2nd</li>
                                                    <li>Multirotor: Thanos</li>
                                                </ul>
                                                </div>`
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="roadmap-box">
                                                <div className="shape-circle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={60} height={176} viewBox="0 0 60 176" fill="none">
                                                        <path opacity="0.7" d="M30 176L30 40" stroke="var(--primary-color13)" strokeWidth={2} strokeDasharray="6 6" />
                                                        <circle cx={30} cy={30} r={30} fill="#767676" className="fill-1" fillOpacity="0.2" />
                                                        <circle cx={30} cy={30} r={15} fill="#888B8E" className="fill-2" />
                                                    </svg>
                                                </div>
                                                <div className="content">
                                                <h4 className="title">2024</h4>

                                                <div className="Suas-image-row">
                                                    <img src="/assets/Suas_pics/2024_1.jpg" alt="Kira Drone Front" className="Suas-content-image" />
                                                    <img src="/assets/Suas_pics/2024_2.png" alt="Kira Drone Side" className="Suas-content-image" />
                                                </div>

                                                <ul className="list-infor">
                                                    <li>Overall Rank: 4th</li>
                                                    <li>Mission Rank: 4th</li>
                                                    <li>Multirotor: Kira</li>
                                                </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="pagination-roadmap">
                                        <div className="swiper-button-prev" />
                                        <div className="swiper-button-next" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                </div>

            </Layout>
        </>
    )
}