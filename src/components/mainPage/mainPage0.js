import { Carousel } from "antd";

export default function Mainpage0() {
  const contentStyle = {
    margin: 0,
    height: "100vh",
    width: "100vw",
    lineHeight: "160px",
    textAlign: "center",
    filter: "brightness(50%)",
  };

  return (
    <Carousel autoplay arrows infinite={true}>
      <div>
        <img src="./images/carousel1.webp" style={contentStyle} />
      </div>
      <div>
        <img src="./images/carousel2.webp" style={contentStyle} />
      </div>
      <div>
        <img src="./images/carousel3.webp" style={contentStyle} />
      </div>
      <div>
        <img src="./images/carousel4.webp" style={contentStyle} />
      </div>
      <div>
        <img src="./images/carousel5.webp" style={contentStyle} />
      </div>
    </Carousel>
  );
}
