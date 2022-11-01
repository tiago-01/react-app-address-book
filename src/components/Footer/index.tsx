import { useInfo } from "../../context/infoContext";
import { FooterStyle } from "./style";

const Footer = () => {
  const { colorsTheme } = useInfo();

  return (
    <FooterStyle
      theme={{
        titles: colorsTheme.titles,
        text: colorsTheme.text,
        background: colorsTheme.backgroundHeaderFooter,
      }}
    >
      <div className="content-wrapper">
        <a href={"/"} className="title">
          Address Book
        </a>
      </div>
    </FooterStyle>
  );
};
export default Footer;
