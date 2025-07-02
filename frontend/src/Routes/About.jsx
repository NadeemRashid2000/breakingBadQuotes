// import React, { useEffect, useRef } from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./About.css";

// // register GSAP plugin
// gsap.registerPlugin(ScrollTrigger);

// const About = ({ showNavbarFooter = true }) => {
//     const navbarRef = useRef(null);
//     const titleRef = useRef(null);
//     const footerRef = useRef(null);
//     const boxRefs = useRef([]);

//     useEffect(() => {
//         // Animate Navbar on mount
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

//         // Animate Titele on scroll
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

//         // Animate Footer on scroll
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

//         // Animate Boxes on scroll
//         const boxes = boxRefs.current;
//         if (boxes.length > 0) {
//             gsap.fromTo(
//                 boxes,
//                 { scale: 0.8, opacity: 0.6 },
//                 {
//                     scale: 1,
//                     opacity: 1,
//                     duration: 1,
//                     ease: "elastic.out(1, 0.5)",
//                     scrollTrigger: {
//                         trigger: boxes[0],
//                         start: "top center",
//                         toggleActions: "play none none none",
//                     },
//                 }
//             );
//         }
//     }, []);

//     return (
//         <div>
//             {showNavbarFooter && <Navbar forwardedRef={navbarRef} />}
            
//             <div className="about-title" ref={titleRef}>
//                 <h2>About</h2>

//             </div>

//             <div
//                 className="notification newx"
//                 ref={(el) => (boxRefs.current[0] = el)}
//             >
//                 <div className="notibody1">
//                     Welcome to the Breaking Bad Quotes API, your go-to source for iconic
//                     quotes from one of the greatest television series of all time! If
//                     you're a fan of Walter White, Jesse Pinkman, Saul Goodman, and the
//                     rest of the crew, this API has got you covered. Whether you're
//                     looking for intense moments, clever comebacks, or philosophical
//                     reflections, our API delivers random quotes along with the character
//                     names—straight from the show. It's a simple yet powerful tool for
//                     developers, Breaking Bad fans, or anyone who appreciates unforgettable
//                     dialogue and drama.
//                 </div>
//             </div>

//             {showNavbarFooter && <Footer forwardedRef={footerRef} />}
//         </div>
//     );

// };

// export default About;



import React, { useLayoutEffect, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const About = ({ showNavbarFooter = true }) => {
    const navbarRef = useRef(null);
    const titleRef = useRef(null);
    const footerRef = useRef(null);
    const boxRefs = useRef([]);

    useLayoutEffect(() => {
        // Animate Navbar
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

        // Animate Title
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

        // Animate Footer
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

        // Animate Boxes
        const boxes = boxRefs.current;
        if (boxes.length > 0 && boxes[0]) {
            gsap.fromTo(
                boxes,
                { scale: 0.8, opacity: 0.6 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "elastic.out(1, 0.5)",
                    scrollTrigger: {
                        trigger: boxes[0],
                        start: "top center",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <div>
            {showNavbarFooter && <Navbar forwardedRef={navbarRef} />}

            <div className="about-title" ref={titleRef}>
                <h2>About</h2>
            </div>

            <div
                className="notification newx"
                ref={(el) => (boxRefs.current[0] = el)}
            >
                <div className="notibody1">
                    Welcome to the Breaking Bad Quotes API, your go-to source for iconic
                    quotes from one of the greatest television series of all time! If
                    you're a fan of Walter White, Jesse Pinkman, Saul Goodman, and the
                    rest of the crew, this API has got you covered. Whether you're
                    looking for intense moments, clever comebacks, or philosophical
                    reflections, our API delivers random quotes along with the character
                    names—straight from the show. It's a simple yet powerful tool for
                    developers, Breaking Bad fans, or anyone who appreciates unforgettable
                    dialogue and drama.
                </div>
            </div>

            {showNavbarFooter && <Footer forwardedRef={footerRef} />}
        </div>
    );
};

export default About;
