import Link from "../../../../../Library/Caches/typescript/2.9/node_modules/@types/next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>about</a>
    </Link>
  </div>
);

export default Header;
