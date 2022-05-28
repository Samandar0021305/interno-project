import './TopBar.css';
import Logo from "../../assets/nav-logo.png";

function TopBar() {
  return (
    <nav>
  <img src={Logo} className="nav-img" alt="nav logo" />
  <ul>
      <li>
          <a href="/">Home</a>
      </li>
      <li>
          <a href="/">About Us</a>
      </li>
      <li>
          <a href="/">Services</a>
      </li>
      <li>
          <a href="/">Pages</a>
      </li>
      <li>
          <a href="/">Contact Us</a>
      </li>
  </ul>
    </nav>
  )
}

export default TopBar