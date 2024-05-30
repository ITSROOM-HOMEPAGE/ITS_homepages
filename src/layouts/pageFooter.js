export default function Pagefooter() {
  return (
    <div>
      <div className="h-[300px] bg-[#161a1d] w-full text-white font-PretendMedium flex items-center justify-center">
        <section className="w-[1300px] h-full flex flex-col justify-center min-[1600px]:ml-0 ml-[5vw]">
          <p className="text-white text-[32px] font-PretendBold">Contact Us</p>
          <div className="w-full border-b-[1px] border-white mt-[20px]"></div>
          <div className="mt-[20px] text-[16px] text-[#FCFCFC]">
            <p>GIT | github.com/MUYEONKIM</p>
            <p className="mt-[10px]">
              사업 및 제휴 문의 | rlaandus2@gmail.com (010-4048-7042)
            </p>
            <p className="mt-[30px]">2024 ©️ 김무연</p>
          </div>
        </section>
      </div>
    </div>
  );
}
