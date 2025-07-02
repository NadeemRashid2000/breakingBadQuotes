// import React, { useEffect, useRef } from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import "./Documentation.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Document = ({ showNavbarFooter = true }) => {
//     const navbarRef = useRef(null);
//     const titleRef = useRef(null);
//     const footerRef = useRef(null);
//     const xRef = useRef(null);
//     const yRef = useRef(null);
//     const zRef = useRef(null);
//     const lRef = useRef(null);


//     useEffect(() => {
//         gsap.fromTo(
//             navbarRef.current,
//             { opacity: 0, y: -50 },

//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//                 ease: "power2.out",
//             }
//         );

//         gsap.fromTo(
//             titleRef.current,
//             { opacity: 0, y: 50 },

//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: titleRef.current,
//                     start: "top center",
//                     toggleActions: "play none none none",
//                 },
//             }
//         );

//         gsap.fromTo(
//             footerRef.current,
//             { opacity: 0, y: 50 },

//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: footerRef.current,
//                     start: "top bottom",
//                     toggleActions: "play none none none",
//                 },
//             }
//         );


//         gsap.fromTo(
//             [xRef.current, yRef.current, zRef.current, lRef.current],
//             { opacity: 0, y: 50 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//                 ease: "power2.out",
//                 stagger: 0.2,
//                 scrollTrigger: {
//                     trigger: [xRef.current, yRef.current, zRef.current, lRef.current],
//                     start: "top bottom",
//                     toggleActions: "play none none none",
//                 },

//             }

//         );

//     }, []);

//     return (
//         <div>
//             {showNavbarFooter && <Navbar forwardedRef={navbarRef} />}

//             <div>
//                 <div className="docu-title" ref={titleRef}>
//                     <h2>Documentation</h2>
//                 </div>

//                 <div className="x" ref={xRef}>
//                     <div className="notification">
//                         <div className="notiglow"></div>
//                         <div className="notiborderglow"></div>
//                         <div className="notititle">API Overview</div>
//                         <div className="notibody">
//                             The Breaking Bad Quotes API provides random quotes from the Breaking Bad series,
//                             perfect for adding a touch of Breaking Bad to your project.
//                         </div>
//                     </div>
//                 </div>

//                 <div className="y" ref={yRef}>
//                     <div className="notification">
//                         <div className="notiglow"></div>
//                         <div className="notiborderglow"></div>
//                         <div className="notititle">Base URL</div>
//                         <div className="notibody">
//                             <div className="link-container">
//                                 <a
//                                     href="https://api.breakingbadquotes.xyz/v1/quotes"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     id="api-link"
//                                 >
//                                     https://api.breakingbadquotes.xyz/v1/quotes
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="z" ref={zRef}>
//                     <div className="notification">
//                         <div className="notiglow"></div>
//                         <div className="notiborderglow"></div>
//                         <div className="notititle">Request</div>
//                         <div className="notibody">
//                             Use a simple GET request to fetch a random quote:
//                             <br />
//                             <a
//                                 href="https://api.breakingbadquotes.xyz/v1/quotes"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 id="api-link"
//                             >
//                                 GET https://api.breakingbadquotes.xyz/v1/quotes
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="l" ref={lRef}>
//                     <div className="notification">
//                         <div className="notiglow"></div>
//                         <div className="notiborderglow"></div>
//                         <div className="notititle">Usage</div>
//                         <div className="notibody">
//                             Simply make a GET request to the endpoint and retrieve the quote along
//                             with the author's name for use in your application.
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {showNavbarFooter && <Footer forwardedRef={footerRef} />}
//         </div>
//     );
      
// }

// export default Document;



import React, { useLayoutEffect, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Documentation.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Document = ({ showNavbarFooter = true }) => {
    const navbarRef = useRef(null);
    const titleRef = useRef(null);
    const footerRef = useRef(null);
    const xRef = useRef(null);
    const yRef = useRef(null);
    const zRef = useRef(null);
    const lRef = useRef(null);

    useLayoutEffect(() => {
        if (navbarRef.current) {
            gsap.fromTo(
                navbarRef.current,
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                }
            );
        }

        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top center",
                        toggleActions: "play none none none",
                    },
                }
            );
        }

        if (footerRef.current) {
            gsap.fromTo(
                footerRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top bottom",
                        toggleActions: "play none none none",
                    },
                }
            );
        }

        const items = [xRef.current, yRef.current, zRef.current, lRef.current].filter(Boolean);

        if (items.length > 0) {
            gsap.fromTo(
                items,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: items[0],
                        start: "top bottom",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <div>
            {showNavbarFooter && <Navbar forwardedRef={navbarRef} />}

            <div>
                <div className="docu-title" ref={titleRef}>
                    <h2>Documentation</h2>
                </div>

                <div className="x" ref={xRef}>
                    <div className="notification">
                        <div className="notiglow"></div>
                        <div className="notiborderglow"></div>
                        <div className="notititle">API Overview</div>
                        <div className="notibody">
                            The Breaking Bad Quotes API provides random quotes from the Breaking Bad series,
                            perfect for adding a touch of Breaking Bad to your project.
                        </div>
                    </div>
                </div>

                <div className="y" ref={yRef}>
                    <div className="notification">
                        <div className="notiglow"></div>
                        <div className="notiborderglow"></div>
                        <div className="notititle">Base URL</div>
                        <div className="notibody">
                            <div className="link-container">
                                <a
                                    href="https://api.breakingbadquotes.xyz/v1/quotes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="api-link"
                                >
                                    https://api.breakingbadquotes.xyz/v1/quotes
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="z" ref={zRef}>
                    <div className="notification">
                        <div className="notiglow"></div>
                        <div className="notiborderglow"></div>
                        <div className="notititle">Request</div>
                        <div className="notibody">
                            Use a simple GET request to fetch a random quote:
                            <br />
                            <a
                                href="https://api.breakingbadquotes.xyz/v1/quotes"
                                target="_blank"
                                rel="noopener noreferrer"
                                id="api-link"
                            >
                                GET https://api.breakingbadquotes.xyz/v1/quotes
                            </a>
                        </div>
                    </div>
                </div>

                <div className="l" ref={lRef}>
                    <div className="notification">
                        <div className="notiglow"></div>
                        <div className="notiborderglow"></div>
                        <div className="notititle">Usage</div>
                        <div className="notibody">
                            Simply make a GET request to the endpoint and retrieve the quote along
                            with the author's name for use in your application.
                        </div>
                    </div>
                </div>
            </div>

            {showNavbarFooter && <Footer forwardedRef={footerRef} />}
        </div>
    );
};

export default Document;
