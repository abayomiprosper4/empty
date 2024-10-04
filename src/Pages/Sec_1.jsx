import React, { useState, useEffect } from "react";
import { FiFile, FiArrowDown } from "react-icons/fi";

function Sec_1() {
  const [animationStage, setAnimationStage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationStage(1), 2400),
      setTimeout(() => setAnimationStage(2), 2800),
      setTimeout(() => setAnimationStage(3), 3000),
      setTimeout(() => setAnimationStage(4), 4000),
    ];

    const hideOverlayTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearTimeout(hideOverlayTimer);
    };
  }, []);

  return (
    <div className="relative h-auto">
      {isLoading && (
        <div className="fixed inset-0 z-20 bg-white transition-opacity duration-700 opacity-100"></div>
      )}
      <div className="inset-0 h-auto bg-black bg-opacity-40 absolute"></div>

      <video
        className=" inset-0 h-full w-full fixed object-cover -z-10"
        src="/src/assets/bg_video - Made with Clipchamp.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <section
        id="home"
        className=" relative z-10 flex items-center text-gray-100 h-auto"
      >
        <div className="relative z-10 flex flex-col justify-center h-full">
          <div className="p-20 text-left">
            <div className="topic my-24">
              <div>
                <span className="title font-semibold">
                  <div
                    className={`txt01 mb-2 text-7xl lg:text-8xl font-bold  text-red-600 transition-all duration-1000 ${
                      animationStage >= 1
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <span className="text-8xl">HI !</span>
                  </div>
                  <div
                    className={`mb-5 text-7xl lg:text-8xl transition-all duration-1000 ${
                      animationStage >= 2
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    I'M ABAYOMI PROSPER
                  </div>
                </span>
              </div>
              <p
                className={`subtitle text-md my-12 font-mono tracking-wide transition-all duration-1000 ${
                  animationStage >= 3
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                WEB DEVELOPER | UI/UX DESIGNER | SOCIAL MEDIA MANAGER.
              </p>
              <div
                className={`resume block text-center lg:flex items-center transition-all duration-1000 ${
                  animationStage >= 4
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <a
                  href="#"
                  className="flex items-center text-white border mr-5 lg:mb-0 mb-5 border-white px-10 py-3 rounded-[10px] transition-all hover:bg-red-600 ease-in-out duration-200"
                >
                  Resume <FiFile className="inline text-lg ml-1" />
                </a>
                <a
                  href="#about"
                  className="text-white scroll-smooth flex items-center border border-white px-10 py-3 rounded-[10px] transition-all hover:bg-red-600 ease-in-out duration-200"
                >
                  View Portfolio <FiArrowDown className="inline ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sec_1;