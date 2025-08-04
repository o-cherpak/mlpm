import logo from "../../assets/images/logo.svg"

export function Logo() {
  return(
    <a href="#">
      <img
        className="w-8 h-8"
        src={logo}
        alt="Logo"
      />
    </a>
  );
}