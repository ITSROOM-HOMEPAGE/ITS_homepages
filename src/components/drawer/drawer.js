import { Drawer } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Drawercomp() {
  const [open, setOpen] = useState(false);
  const menuStyled =
    "w-full h-16 border-[1px] border-gray-500 flex items-center mt-1";

  const isDrawer = () => {
    setOpen((curr) => !curr);
  };

  return (
    <>
      <button type="primary" onClick={isDrawer}>
        <img src="/icon/list.png" />
      </button>
      <Drawer title={<img src="/logo.png" />} onClose={isDrawer} open={open}>
        <Link to="https://www.google.com">
          <div className={`${menuStyled}`}>메뉴1</div>
        </Link>
        <Link to="https://blog.naver.com/itsroom777">
          <div className={`${menuStyled}`}>메뉴2</div>
        </Link>
        <Link to="https://www.youtube.com/channel/UChc1uXO0XHQ3fpFU0OCpRcQ">
          <div className={`${menuStyled}`}>메뉴3</div>
        </Link>
      </Drawer>
    </>
  );
}
