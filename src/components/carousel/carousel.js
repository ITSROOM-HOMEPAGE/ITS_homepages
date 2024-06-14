export default function Carouselcomp(props) {
  const backimgstyle = {
    backgroundImage: `url(${props.imgsrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="flex w-[100%] h-[100vh] lg:relative" style={backimgstyle}>
      <div className="w-full flex flex-col items-center justify-center lg:w-[55%] bg-black opacity-50 animate-flip-down "></div>
      <section className="w-auto absolute left-[10%] right-[10%] top-[35%] lg:right-[48%] lg:left-auto md:top-[40%] text-white text-center lg:text-start">
        <h2 className="font-PretendExtraBold text-[1.5em] sm:text-4xl">
          Blood flows in your body
        </h2>
        <br />
        <h1 className="font-PretendBold text-[3em] sm:text-[4.8em] leading-[1em]">
          Electricity flows <br />
          in machinery
        </h1>
        <button
          class="middle none center mr-4 rounded-lg bg-blue-500 mt-10 py-3 px-6 font-PretendBold text-sm text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          ABOUT
        </button>
      </section>
      <div className="hidden lg:w-[45%] lg:flex lg:justify-end lg:items-center "></div>
    </div>
  );
}
