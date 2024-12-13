import "./Header.scss";
import Logo from "../../Assets/Pictures/Logo_Ulysse_Conjard_Front_End_Développeur_Réunion.png";

export default function Header() {
  return (
    <header className="header-container">
      <nav className="header-container">
        <a href="/">
          <img src={Logo} alt="Logo Ulysse Conjard - Développeur Front End sur La Réunion" />
        </a>

        <div className="nav_link">
          <a href="/about-me">À Propos</a>
          <a href="mailto:conjard.ulysse@gmail.com">Contact</a>
        </div>
      </nav>
    </header>
  );
}
