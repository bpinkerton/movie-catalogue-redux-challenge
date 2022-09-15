import { CSSProperties, FC } from "react";

export const headerHeight = "60px";

const HeaderStyle: CSSProperties = {
  height: headerHeight,
  backgroundColor: "#20232a",
  color: "#fff",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

type HeaderProps = {
  pageTitle: string;
};

const Header: FC<HeaderProps> = ({ pageTitle }) => {
  return (
    <header className="header" style={HeaderStyle}>
      <h1>{pageTitle}</h1>
    </header>
  );
};

export default Header;
