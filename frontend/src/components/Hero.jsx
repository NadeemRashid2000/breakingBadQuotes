// import React, { useEffect, useRef, useState } from "react";
// import "./Hero.css";
// import { gsap } from "gsap";

// const Hero = () => {

//     // isLoading` manages whether the loading screen is shown
//     const [isLoading, setIsLoading] = useState(true);

//     // Ref to directly acess the loading screen DOM element for animation
//     const loadingRef = useRef(null);


//     // This useEffect triggers when the components mounts (only once)
//     // It sets a 2-second timer to hide the loading screen 
//     useEffect(() => {
//         const timer = setTimeout(() => {

//             setIsLoading(false);  // Hide loading after 2 seconds
        
//         }, 2000);

//         // Cleanup the timer in case component unmounts before timeout
//         return () => clearTimeout(timer);
//     }, []);


//     // This useEffect watches changes in `isLoading`
//     // When loading become false, animate the loading screen fade out using GSAP
//     useEffect(() => {
//         if (!isLoading) {
//             gsap.fromTo(
//                 loadingRef.current,
//                 { opacity: 1, scale: 1 },    //Start: fully visible

//                 {
//                     opacity: 0,             // End: fully transparent
//                     scale: 1.5,             //  Zoon out slightly  
//                     duration: 1.5,
//                     ease: "power2.out",


//                 }
//             );
//         }
//     }, [isLoading]);


//     return (

//         <div className="hero">
//             {/* Loading screen shown only if `isLoading` is true */}
//             {isLoading && (

//                 <div className={`loading ${isLoading ? "visible" : "hidden"}`} ref={loadingRef}>
//                     <img src="images/loading.jpg" alt="loading Image" className="load-img" />
//                 </div>

//             )}

//             {/* Background image section */}
//             <div className="back">
//                 <img className="bg-gif" src="images/background.gif" alt="backgroungGif" />
//             </div>

//             {/* Main Content: Title and description */}
//             <div className="content">
//                 <h1 className="title"> Breaking Bad</h1>
//                 <p>Generate random quotes from Breaking Bad and use them in project</p>
//             </div>


//         </div>

//     );




// };

// export default Hero;

import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import { gsap } from "gsap";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loadingRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && loadingRef.current) {
      gsap.fromTo(
        loadingRef.current,
        { opacity: 1, scale: 1 },
        {
          opacity: 0,
          scale: 1.2,
          duration: 1,
          ease: "power2.out",
        }
      );
    }
  }, [isLoading]);

  return (
    <div className="hero">
      {/* Always render loading, just toggle visibility */}
      <div
        className={`loading ${!isLoading ? "hidden" : ""}`}
        ref={loadingRef}
      >
        <img
        //   src="images/official.gif"
          src="images/background.gif"
          alt="Loading"
          className="load-img"
        />
      </div>

      <div className="back">
        <img
          className="bg-gif"
          src="images/background.gif"
          alt="Background GIF"
        />
      </div>

      <div className="content">
        <h1 className="title">Breaking Bad</h1>
        <p>Generate random quotes from Breaking Bad and use them in project</p>
      </div>
    </div>
  );
};

export default Hero;
