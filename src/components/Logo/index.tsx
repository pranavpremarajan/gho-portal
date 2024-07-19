import logo from "../../assets/gho_logo.png";

interface LogoProps {
  className: string;
}

const Logo = (props: LogoProps) => {
  return <img src={logo} {...props} />;
};

export default Logo;
