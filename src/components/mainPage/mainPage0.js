import { Carousel } from "antd";
import Carouselcomp from "../carousel/carousel";

export default function Mainpage0() {
  const contentStyle = {
    margin: 0,
    height: "100vh",
    width: "100vw",
    lineHeight: "160px",
    textAlign: "center",
    filter: "brightness(50%)",
  };

  const imgStyle = {
    filter: "brightness(50%)",
    height: "100vh",
    width: "100vw",
  };

  const imgsrc = "./images/carousel1.webp";

  return (
    <Carousel autoplay arrows infinite={true}>
      <div style={contentStyle}>
        <Carouselcomp imgsrc={imgsrc} />
        {/* <img src="./images/carousel1.webp" style={imgStyle} /> */}
      </div>
      {/* <div style={contentStyle}>
        <img src="./images/carousel2.webp" style={imgStyle} />
      </div>
      <div style={contentStyle}>
        <img src="./images/carousel3.webp" style={imgStyle} />
      </div>
      <div style={contentStyle}>
        <img src="./images/carousel4.webp" style={imgStyle} />
      </div>
      <div style={contentStyle}>
        <img src="./images/carousel5.webp" style={imgStyle} />
      </div> */}
    </Carousel>
  );
}
