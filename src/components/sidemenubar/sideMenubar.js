import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { Link } from "react-router-dom";

export default function Sidemenubar(props) {
  const imgbtnStyled = "hidden sm:block w-[150px]";

  return (
    <FloatButton.Group
      shape="circle"
      className="sm:h-[25vh] flex flex-col justify-between"
      style={{
        bottom: "5vh",
      }}
    >
      <Link to="https://www.google.com">
        <img src="./icon/message.png" className={`${imgbtnStyled}`} />
      </Link>
      <Link to="https://blog.naver.com/itsroom777">
        <img src="./icon/blog.png" className={`${imgbtnStyled}`} />
      </Link>
      <Link to="https://www.youtube.com/channel/UChc1uXO0XHQ3fpFU0OCpRcQ">
        <img src="./icon/youtube.png" className={`${imgbtnStyled}`} />
      </Link>
      {props.isScrolled ? (
        <FloatButton.BackTop visibilityHeight={0} className="animate-fade" />
      ) : (
        <FloatButton className="opacity-0" />
      )}
    </FloatButton.Group>
  );
}
