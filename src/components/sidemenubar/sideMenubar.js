import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

export default function Sidemenubar(props) {
  const buttonStyled = {};

  return (
    <FloatButton.Group
      shape="circle"
      style={{
        bottom: "5vh",
      }}
    >
      <FloatButton description="메뉴1" style={buttonStyled} />
      <FloatButton description="메뉴2" style={buttonStyled} />
      <FloatButton description="메뉴3" style={buttonStyled} />
      {props.isScrolled ? (
        <FloatButton.BackTop visibilityHeight={0} style={buttonStyled} />
      ) : (
        <></>
      )}
    </FloatButton.Group>
  );
}
