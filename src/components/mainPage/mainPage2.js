import { Card } from "antd";

export default function Mainpage2() {
  return (
    <div className="w-full flex flex-col items-center mt-[-30vh] bg-mainPage2_bg bg-no-repeat lg:bg-cover bg-contain ">
      <div className="pt-[13vh] inline-block text-center text-white ">
        <p className="inline-block font-bold text-[56px] leading-[80px] ">
          UYeG Solution
        </p>
        <p className="mt-[24px] text-[20px] ">UYeG Solution의 차별화된 방식</p>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div class="h-full bg-gray-100  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img
                className="mb-[5vh] lg:w-[30%] md:w-[20%] w-[20%]  m-auto"
                src="./images/proactive response.png"
              />
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                사전대응
              </h1>
              <p class="leading-relaxed mb-3">
                위험 수위가 발생하기 전에 대응 가능
              </p>
            </div>
          </div>
          <div class="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div class="h-full bg-gray-100  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img
                className="mb-[5vh] lg:w-[30%] md:w-[20%] w-[20%]  m-auto"
                src="./images/Convenient.png"
              />
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                운영편리
              </h1>
              <p class="leading-relaxed mb-3">
                일반근로자도 손쉽게 해석하고 대응운영 가능
              </p>
            </div>
          </div>
          <div class="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div class="h-full bg-gray-100  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img
                className="mb-[5vh] lg:w-[30%] md:w-[20%] w-[20%]  m-auto"
                src="./images/quality.png"
              />
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                높은 품질
              </h1>
              <p class="leading-relaxed mb-3">
                비용과 속도면에서 40배이상 절감효과
              </p>
            </div>
          </div>
          <div class="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div class="h-full bg-gray-100  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <img
                className="mb-[5vh] lg:w-[30%] md:w-[20%] w-[20%]  m-auto"
                src="./images/proactive response.png"
              />
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                적용분야
              </h1>
              <p class="leading-relaxed mb-3">
                석유화학, 기계, 식품 등 산업계에 광범위하게 적용
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
