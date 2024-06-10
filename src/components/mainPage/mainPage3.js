export default function Mainpage3() {
  return (
    <div className="w-full h-[1080px] text-[#9FBAFD] flex ">
      <div className="w-[50%] bg-[url('./assets/page3.png')] bg-cover hidden min-[1300px]:block"></div>
      <div className="w-full min-[1300px]:w-[50%] h-full flex flex-col justify-center items-center min-[1300px]:items-start font-PretendMedium bg-[#161a1d] p-[100px]">
        <p className="font-PretendBold text-[56px] leading-[80px]">Solution</p>
        <img src="./images/solutionicon.png" className="w-[7vw]" />
        <div className="w-[550px] text-[#d3d3d3] text-[20px] leading-[30px] mt-[20px]">
          <p className="mt-[24px]">
            온라인 사장님들의 커머스 운영 난이도를 완화하기 위해 "스냅" 솔루션을
            출시했습니다.
          </p>
          <p className="mt-[24px]">
            샌드버그는 비용적 부담을 완화하는 것이 온라인 사업자를 설득할 수
            있는 가장 좋은 방법이라는 것을 알고 있고, 이러한 점을 활용하여
            온라인 사업자를 모으는 것에 힘쓰고 있습니다.
          </p>
          <p className="mt-[24px]">
            다수의 온라인 사업자들이 모였을 때, 이들의 데이터를 활용하여 만들어
            나가는 BM을 구축하고 있으며, 데이터를 기반으로 금융 영역에서부터
            온라인 사업자의 니즈와 금융사의 니즈를 연결하는 역할을 하고
            있습니다.
          </p>
        </div>
        <button className="h-[60px] w-[150px] font-PretendBold text-[20px] bg-[#6250FF] mt-9 text-white rounded-[44px] hover:scale-105 duration-300">
          &nbsp;More
        </button>
      </div>
    </div>
  );
}
