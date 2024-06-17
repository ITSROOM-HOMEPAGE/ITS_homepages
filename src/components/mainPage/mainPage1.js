import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Mainpage1() {
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
    <div className="container px-5 py-24 mb-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap w-full">
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, x: -100 }}
          animate={isImgVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6"
        >
          <p className="inline-block font-GiantsBold text-[56px] text-sky-100 leading-[80px] ">
            Technology
          </p>
          <p className="mt-3 text-[20px] mb-24">
            아이티공간과 함께 더 똑똑하고 안전하게 사용하세요!
          </p>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                사전대응
              </h2>
              <p className="leading-relaxed">
                위험수위가 발생하기 전에 대응합니다.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                편리한 운영
              </h2>
              <p className="leading-relaxed">
                일반 근로자도 손쉽게 해석하고 대응할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                합리적인 가격과 품질
              </h2>
              <p className="leading-relaxed">
                전류, 전압 뿐만 아니라 온습도, 진폭 등 통합적인 모니터링이
                가능합니다.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                유연한 적용
              </h2>
              <p className="leading-relaxed">
                석유화학, 기계, 식품 등 산업계의 어떤 설비에도 광범위하게 적용
                할 수 있습니다.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.img
          ref={imgRef}
          initial={{ opacity: 0, x: 100 }}
          animate={isImgVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-3/5 md:w-1/2  object-cover object-center rounded-lg md:mt-0 mt-12 "
          src="./images/test4.svg"
          alt="step"
        />
      </div>
    </div>
  );
}
