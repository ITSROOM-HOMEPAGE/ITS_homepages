import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Mainpage3() {
  const imgRef = useRef(null);
  const [isImgVisible, setIsImgVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "0px 0px -200px 0px",
    };

    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsImgVisible(true);
          imgObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (imgRef.current) {
      imgObserver.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        imgObserver.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div class="container mx-auto flex flex-col px-5 py-24 lg:flex-row mt-24  md: flex-col items-center">
      <motion.img
        ref={imgRef}
        initial={{ opacity: 0, x: -100 }}
        animate={isImgVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:w-3/5 md:object-cover object-center rounded-lg mt-0 mt-12 "
        src="./images/test02.png"
        alt="model"
      />
      <motion.div
        ref={imgRef}
        initial={{ opacity: 0, x: 100 }}
        animate={isImgVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="items-center text-center pl-0 lg:flex-grow lg:pl-24 md:flex flex-col mt-10 md:items-start md:text-left"
      >
        <p className="inline-block font-GiantsBold text-[56px] text-sky-100 leading-[80px] ">
          LUDA & UYeG
        </p>
        <p className="mt-3 text-[20px] mb-14">
          하드웨어, 소프트웨어 솔루션을 동시에 경험해보세요!
        </p>
        <div class="flex w-full mb-4">
          <div class="w-full ">
            <div class="flex items-center border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col hover:bg-custom-gradient hover:text-white">
              <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="linear-gradienttext-gray-900 text-lg font-bold mb-3">
                  LUDA (Software)
                </h2>
                <p class="leading-relaxed text-base">
                  전류 BIG DATA 분석 기반의 설비 예지보전 및 안전 융합 SOLUTION
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full">
          <div class="w-full">
            <div class="flex items-center border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col hover:bg-custom-gradient hover:text-white">
              <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg font-bold mb-3">
                  UYeG(Hardware)
                </h2>
                <p class="leading-relaxed text-base">
                  Smart-IoT sensor (SAMRT EOCR®)을 적용하여 설비의 전류,전압
                  Data를 수집
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
