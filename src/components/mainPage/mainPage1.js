export default function Mainpage1() {
  return (
    <div className="h-[1080px] w-full font-PretendMedium flex justify-center items-center bg-[#3a2a68] bg-[url('./assets/mainpage.png')] bg-cover bg-fixed">
      <div className="h-full flex flex-col justify-center w-[1300px] items-center min-[1300px]:items-start">
        <div className="flex flex-col min-[1300px]:items-start items-center text-white">
          <p className="inline-block mt-[3vh] text-[#5356FF] text-[56px] leading-[80px] font-PretendBold">
            SANDBURG
          </p>
          <p className="text-[24px] mt-[30px]">MISFIT ORGANIZATION</p>
          <p className="text-[24px] mt-[20px]">
            국내 유일, 커머스와 핀테크를 잇는 데이터 전문기업 샌드버그입니다.
          </p>
          <p className="text-[24px]">
            온라인 사장님들이 마주하는 사업의 모든 문제를 데이터와 연결로
            해결하고자 합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
