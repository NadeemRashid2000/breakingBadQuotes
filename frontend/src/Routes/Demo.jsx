// import React, { useEffect, useRef, useState } from "react";
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import './Demo.css';

// gsap.registerPlugin(ScrollTrigger);

// const Demo = ({ showNavbarFooter = true }) => {
//     const titleRef = useRef(null);
//     const navbarRef = useRef(null);
//     const demoRef = useRef(null);
//     const footerRef = useRef(null);
//     const [apiData, setApiData] = useState('Click "Randomize" to fetch data');

//     useEffect(() => {
//         gsap.fromTo(
//             navbarRef.current,
//             { opacity: 0, y: -50 },

//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//                 ease: 'power2.out',
//             }
//         );

//         if (titleRef.current) {
//             gsap.fromTo(
//                 titleRef.current,
//                 { opacity: 0, y: 50 },

//                 {
//                     opacity: 1,
//                     y: 0,
//                     duration: 1,
//                     ease: 'power2.out',
//                     scrollTrigger: {
//                         trigger: titleRef.current,
//                         start: 'top center',
//                         toggleActions: 'play none none none',
//                     },

//                 }
//             );
//         }

//         if (demoRef.current) {
//             {
//                 gsap.fromTo(
//                     demoRef.current,
//                     { scale: 0, opacity: 0 },

//                     {
//                         scale: 1,
//                         opacity: 1,
//                         duration: 1,
//                         ease: 'elastic.out(1, 0.5)',
//                     }
//                 );
//             }
//         }

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
//     }, []);

//     const fetchRandomData = async () => {
//         try {
//             const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
//             const data = await response.json();
//             setApiData(JSON.stringify(data, null, 2));
//         } catch (error) {
//             setApiData("Error In Fetching Data");
//         }
        
//         // Animate the box on data fetch
//         gsap.fromTo(
//             demoRef.current,
//             { scale: 0.9, opacity: 0.8 },
//             {
//                 scale: 1,
//                 opacity: 1,
//                 duration: 0.6,
//                 ease: 'bounce.out',
//             }
//         );
        
//     };
    
//     return (
//         <div>
//             {showNavbarFooter && <Navbar forwardedRef={navbarRef} />}

//         <div>
//             <div className="demo-title" ref={titleRef}>
//                 <h2>Demo</h2>
//             </div>
//             <div className='wrap' ref={demoRef}>
//                 <div className="bgblue">
//                     <div className="card">
//                         <div className='random'>
//                             <button onClick={fetchRandomData}>Randomize</button>

//                         </div>
//                         <div className='cont'>
//                             <pre>{apiData}</pre>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         {/* Footer */}
//             {showNavbarFooter && <Footer forwardedRef={footerRef} />}
//         </div>
// );

// };

// export default Demo;

import React, { useLayoutEffect, useRef, useState } from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Demo.css';

gsap.registerPlugin(ScrollTrigger);

const Demo = ({ showNavbarFooter = true }) => {
    const titleRef = useRef(null);
    const navbarRef = useRef(null);
    const demoRef = useRef(null);
    const footerRef = useRef(null);
    const [apiData, setApiData] = useState('Click "Randomize" to fetch data');

    useLayoutEffect(() => {
        if (navbarRef.current) {
            gsap.fromTo(
                navbarRef.current,
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
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
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top center',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }

        if (demoRef.current) {
            gsap.fromTo(
                demoRef.current,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'elastic.out(1, 0.5)',
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
    }, []);

    const fetchRandomData = async () => {
        try {
            const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
            const data = await response.json();
            setApiData(JSON.stringify(data, null, 2));
        } catch (error) {
            setApiData("Error In Fetching Data");
        }

        // Animate the box on data fetch
        if (demoRef.current) {
            gsap.fromTo(
                demoRef.current,
                { scale: 0.9, opacity: 0.8 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'bounce.out',
                }
            );
        }
    };

    return (
        <div>
            {showNavbarFooter && <Navbar forwardedRef={navbarRef} />}

            <div>
                <div className="demo-title" ref={titleRef}>
                    <h2>Demo</h2>
                </div>
                <div className='wrap' ref={demoRef}>
                    <div className="bgblue">
                        <div className="card">
                            <div className='random'>
                                <button onClick={fetchRandomData}>Randomize</button>
                            </div>
                            <div className='cont'>
                                <pre>{apiData}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showNavbarFooter && <Footer forwardedRef={footerRef} />}
        </div>
    );
};

export default Demo;
