import logo from "../assets/Logo.svg"
import Nav from "./Nav";
function Header() {
  return (
    <header>
      <div className="main-grid"></div>
      <img src={logo}></img>
      <Nav />
    </header>
  )
}
export default Header;