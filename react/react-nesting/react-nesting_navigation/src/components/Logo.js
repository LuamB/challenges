// import Image from "./components/Image.js";
// import logo from "./img/logo.jpg";

export default function Logo({logo}) {
    return (
        <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>
    )
}