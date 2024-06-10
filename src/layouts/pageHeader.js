import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
export default function PageHeader() {
  const solutionMenu = (
    <Menu>
      <Menu.Item key="1" className="text-center">
        <Link to="/solution/예지보전">예지보전</Link>
      </Menu.Item>
      <Menu.Item key="2" className="text-center">
        <Link to="/solution/SmartEOCR">SmartEOCR</Link>
      </Menu.Item>
      <Menu.Item key="3" className="text-center">
        <Link to="/solution/LUDA-lite">LUDA lite</Link>
      </Menu.Item>
    </Menu>
  );

  const contentsMenu = (
    <Menu>
      <Menu.Item key="1" className="text-center">
        <Link to="/contents/자료실">자료실</Link>
      </Menu.Item>
      <Menu.Item key="2" className="text-center">
        <Link to="/contents/공지사항">공지사항</Link>
      </Menu.Item>
      <Menu.Item key="3" className="text-center">
        <Link to="/contents/blog">blog</Link>
      </Menu.Item>
    </Menu>
  );

  const companyMenu = (
    <Menu>
      <Menu.Item key="1" className="text-center">
        <Link to="/company/about">about</Link>
      </Menu.Item>
      <Menu.Item key="2" className="text-center">
        <Link to="/company/채용">채용</Link>
      </Menu.Item>
      <Menu.Item key="3" className="text-center">
        <Link to="/company/오시는-길">오시는 길</Link>
      </Menu.Item>
    </Menu>
  );

  const dropdownOverlayStyle = {
    marginTop: "-20px",
  };

  return (
    <>
      <div className="w-full flex items-center justify-center fixed bg-white">
        <div className="w-[1500px] flex items-center h-20 text-[1rem] font-extrabold justify-between">
          <div>
            <img src="./logo.png" className="w-[150px]" alt="Logo" />
          </div>
          <div className="ml-auto flex h-full">
            <Dropdown
              overlay={solutionMenu}
              trigger={["hover"]}
              overlayStyle={dropdownOverlayStyle}
            >
              <Link
                className="w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED] hover:text-center "
                to="/solution"
              >
                Solution
              </Link>
            </Dropdown>

            <Link
              className="w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]"
              to="/UseCase"
            >
              UseCase
            </Link>

            <Dropdown overlay={contentsMenu} trigger={["hover"]}>
              <Link
                className="w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]"
                to="/contents"
              >
                Contents
              </Link>
            </Dropdown>

            <Dropdown overlay={companyMenu} trigger={["hover"]}>
              <Link
                className="w-[192px] h-full flex items-center justify-center hover:text-[#4E43ED]"
                to="/company"
              >
                Company
              </Link>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
}
