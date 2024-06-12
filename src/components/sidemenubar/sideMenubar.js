import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

export default function Sidemenubar() {
  const buttonwidth = 70;

  const buttonStyled = {
    width: buttonwidth,
    height: "70px",
  };

  return (
    <FloatButton.Group
      shape="square"
      style={{
        right: buttonwidth - 60,
        bottom: "30vh",
      }}
    >
      <FloatButton description="메뉴1" style={buttonStyled} />
      <FloatButton description="메뉴2" style={buttonStyled} />
      <FloatButton description="메뉴3" style={buttonStyled} />
      <FloatButton.BackTop visibilityHeight={0} style={buttonStyled} />
    </FloatButton.Group>
  );
}
