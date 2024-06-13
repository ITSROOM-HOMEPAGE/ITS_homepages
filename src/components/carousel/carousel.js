export default function Carouselcomp(props) {
  const backimgstyle = {
    backgroundImage: `url(${props.imgsrc})`,
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
  };

  return (
    <div className="flex w-[100vw] h-[100vh]" style={backimgstyle}>
      <div className="border-2 border-black w-1/2 flex justify-end items-center opacity-50 bg-black">
        <h1 className="text-white">안녕하세요</h1>
      </div>
      <div className="border-2 border-red-500 w-1/2">sd</div>
    </div>
  );
}
