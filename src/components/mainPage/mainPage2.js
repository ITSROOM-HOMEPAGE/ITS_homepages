export default function Mainpage2() {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="w-[620px] inline-block font-PretendBold text-[56px] leading-[80px] mt-[50px] text-center">
        Core-Value
      </p>
      <p className="mt-[24px] text-[#5C5C5C] text-[26px] font-PretendSemiBold">
        샌드버그가 지향하는 가치들을 소개합니다
      </p>
      <div className="w-[1300px] mt-[96px] flex justify-between flex-col items-center min-[1600px]:flex-row">
        <div className="w-[310px] h-[670px] flex flex-col">
          <div className="h-[600px] mt-auto">
            <img src="./images/value1.jpg" />
            <p className="font-PretendBold text-[24px]">본질은 시간입니다</p>
            <p className="font-PretendBold text-[#727B88] text-[20px]">
              시간의 가치를 누구보다 소중하게 생각하며 효율성 극대화를 통해
              시간을 줄일 수 있도록 돕는 모든 것들을 사랑하고, 만듭니다
            </p>
          </div>
        </div>
        <div className="w-[310px] h-[670px] flex flex-col">
          <div className="h-[600px] min-[1600px]:h-[650px]">
            <img src="./images/value2.jpg" />
            <p className="font-PretendBold text-[24px] bg-gradient-to-r from-[#7F3ADD] to-[#6264F6] text-transparent bg-clip-text">
              데이터로 우리를 증명합니다
            </p>
            <p className="font-PretendBold text-[#7079CB] text-[20px]">
              우리가 뛰어나다는 것을 증명하는 많은 수단이 있지만, 우리는
              데이터로 그것을 증명하고데이터로 세상을 효율적으로 만들어갑니다
            </p>
          </div>
        </div>
        <div className="w-[310px] h-[670px] flex flex-col">
          <div className="h-[600px] min-[1600px]:mt-auto">
            <img src="./images/value3.jpg" />
            <p className="font-PretendBold text-[24px] text-[#375984]">
              우리는 언더독입니다
            </p>
            <p className="font-PretendBold text-[#698AB1] text-[20px]">
              언더독 마인드셋을 기반으로, 실패를 두려워않는 사람들을 사랑합니다
            </p>
          </div>
        </div>
        <div className="w-[310px] h-[670px] flex flex-col">
          <div className="h-[600px] min-[1600px]:h-[650px]">
            <img src="./images/value4.jpg" />
            <p className="font-PretendBold text-[24px] text-[#6C3111]">
              우리는 부적응자입니다
            </p>
            <p className="font-PretendBold text-[#6F6F6F] text-[20px]">
              불편함 속에 물음을 던지고, 본질을 파헤치는 과정을 즐기고 사랑하며,
              변화를 만들어내는 조직입니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
