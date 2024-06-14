export default function Mainpage1() {
  return (
    <div className="h-[100vh] w-full font-PretendMedium flex justify-center items-center bg-[#3a2a68] bg-[url('./assets/main_bg.png')] bg-cover">
      <div className="h-full flex flex-col mt-[90vh] w-[1500px] items-center min-[1500px]:items-start">
        <div className="flex flex-col min-[1500px]:items-start items-center text-black animate-fadeInUp">
          <p className="inline-block mt-[3vh] text-[#133aa5] text-[56px] leading-[80px] font-PretendBold ">
            세상을 이롭게
          </p>
          <p className="text-[24px] mt-[30px] text-[#133aa5]">
            Save Facility, Save Energy, Save Life
          </p>
          <p className="text-[24px] mt-[20px] ">
            아이티공간의{" "}
            <span className="text-[#133aa5] font-extrabold ">
              전류예지보전 기술
            </span>
            은 고객의 시설, 에너지,
          </p>
          <p className="text-[24px] ">
            그리고 생명을 아끼고 지키는 데 있어서 핵심적인 역할을 합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
