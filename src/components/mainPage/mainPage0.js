import { Carousel } from "antd";
import Carouselcomp from "../carousel/carousel";

export default function Mainpage0() {
  const contentStyle = {
    margin: 0,
    height: "100vh",
    width: "100vw",
    lineHeight: "160px",
  };

  const imgsrcs = [
    "./images/carousel1.webp",
    "./images/carousel2.webp",
    "./images/carousel3.webp",
    "./images/carousel4.webp",
    "./images/carousel5.webp",
  ];

  return (
    <Carousel fade={true} autoplay arrows infinite={true}>
      {imgsrcs.map((el) => (
        <div style={contentStyle}>
          <Carouselcomp imgsrc={el} />
        </div>
      ))}
    </Carousel>
  );
}
