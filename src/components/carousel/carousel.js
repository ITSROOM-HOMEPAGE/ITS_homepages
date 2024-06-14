export default function Carouselcomp(props) {
  const backimgstyle = {
    backgroundImage: `url(${props.imgsrc})`,
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
  };

  return (
    <div className="flex w-[100vw] h-[100vh] relative" style={backimgstyle}>
      <div className="w-[55%] flex flex-col justify-center items-end opacity-50 bg-black"></div>
      <section className="absolute right-[48%] top-[40%] text-white">
        <h2 className="font-PretendExtraBold text-4xl">
          Blood flows in your body
        </h2>
        <br />
        <h1 className="font-PretendBold text-7xl">
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
      <div className="w-[45%] flex justify-end items-center ">sd</div>
    </div>
  );
}
