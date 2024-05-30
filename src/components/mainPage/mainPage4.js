import Kakaomap from "../kakaomap/kakaomap";

export default function Mainpage4() {
  return (
    <div className="h-[1080px] bg-white w-full text-black font-PretendMedium relative">
      <div className="h-full flex items-center flex-col text-center">
        <p className="mt-[100px] text-[56px] leading-[80px] font-PretendBold">
          ITS Room Workspace
        </p>
        <p className="text-[24px] mt-[20px]">ITS Room</p>
        <Kakaomap className="mt-[30px]" />

        <button className="h-[60px] w-[206px] font-PretendBold text-[20px] bg-[#6250FF] mt-9 text-white rounded-[44px] hover:scale-105 duration-300">
          &nbsp;ABOUT Inc.
        </button>
      </div>
    </div>
  );
}
