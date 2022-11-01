import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useInfo } from "../../context/infoContext";
import { HeaderStyle } from "./style";

const Header = () => {
  const { colorsTheme, darkMode, changeDarkMode, changeSearchTerm } = useInfo();
  const sidebarLeftRef: any = useRef();
  const [openMenuLeft, setOpenMenuLeft] = useState(false);
  const [searchForTerm, setSearchForTerm] = useState("");
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (
        sidebarLeftRef.current &&
        !sidebarLeftRef.current.contains(event.target)
      ) {
        setOpenMenuLeft(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarLeftRef]);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      changeSearchTerm(searchForTerm.toLowerCase());
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [searchForTerm]);
  return (
    <HeaderStyle
      theme={{
        titles: colorsTheme.titles,
        text: colorsTheme.text,
        background: colorsTheme.backgroundHeaderFooter,
      }}
    >
      <div className="content-wrapper">
        <div
          onClick={() => setOpenMenuLeft(!openMenuLeft)}
          className="menu-icon-wrapper"
        >
          <AiOutlineMenu fontSize={28} />
        </div>
        <a href={"/"} className="title">
          Address Book
        </a>

        <a href={"/settings"} className="title settings">
          settings
        </a>
        <input
          className="search-input"
          onChange={(e) => setSearchForTerm(e.target.value)}
          value={searchForTerm}
          type="text"
          placeholder="search here"
        />
      </div>
      <div className={openMenuLeft ? "menu-mobile active" : "menu-mobile"}>
        <div
          ref={sidebarLeftRef}
          className={
            openMenuLeft
              ? "menu-mobile-items-left active"
              : "menu-mobile-items-left"
          }
        >
          <div className="menu-open-header-wrapper">
            <div
              className="close-button-menu"
              onClick={() => setOpenMenuLeft(!openMenuLeft)}
            >
              <AiOutlineClose fontSize={25} />
            </div>
            <div className="menu-content-wrapper">
              <input
                className="search-input"
                onChange={(e) => setSearchForTerm(e.target.value)}
                value={searchForTerm}
                type="text"
                placeholder="search here"
              />
              <a href={"/settings"} className="title settings">
                settings
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
    </HeaderStyle>
  );
};
export default Header;
