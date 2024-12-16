import Title from "../../Components/Title/Title";
import "./Home.scss";
import profilePicture from "../../Assets/Pictures/front-end_developper_banner.webp";
import projects from "../../Assets/Json/projects.json";
import Project from "../../Components/Project/Project";
import ToolsBanner from "../../Components/ToolsBanner/ToolsBanner";
import icones from "../../Assets/Json/icons.json";

export default function Home() {
  return (
    <main className="main-home">
      <section className="banner">
        <img className="introducing-picture" src={profilePicture} alt="Ulysse Conjard Développeur Front-End"></img>
        <h1>
          Ulysse Conjard <br></br>
          <br></br> Développeur Front-End
        </h1>
      </section>

      <Title key={"T0"} titleText={"Présentation"} />
      <div className="introducing">
        <div className="introducing-text">
          <section className="introducing-summary">
            <p>
              Je m'appelle Ulysse Conjard, intégrateur web et développeur front-end passionné.<br></br>
              Mon objectif est de continuer à me former et à développer mes compétences à travers une alternance dans un cursus de développeur web ou de concepteur d’applications.<br></br>
              <br></br>
              Fort d’une expérience diversifiée en communication, analyse de données et production numérique, j’ai acquis des bases solides dans la gestion de projets, la résolution de problèmes et le
              travail en équipe.<br></br>
              Actuellement en formation chez OpenClassrooms, je me spécialise dans les technologies du web, notamment HTML, CSS, JavaScript, et les frameworks comme React, tout en consolidant mes
              compétences en conception d’interfaces et optimisation de l’expérience utilisateur.<br></br>
              <br></br>
              Je suis motivé par la possibilité de concevoir des solutions performantes et innovantes, tout en offrant des expériences utilisateur de qualité. Mon envie d’apprendre est au cœur de ma
              démarche, et je suis convaincu qu’une alternance me permettra de mettre en pratique mes connaissances tout en approfondissant mes compétences techniques et professionnelles.<br></br>
              <br></br>
              En dehors de mes projets, je puise mon inspiration dans des passions telles que l'escalade, et la cuisine, qui nourrissent ma créativité et m’aident à garder un équilibre dans mon
              quotidien. <br></br>
              <br></br>
              Je suis à la recherche d’une opportunité d’alternance où je pourrais contribuer à des projets enrichissants tout en poursuivant ma formation pour devenir un expert en développement web
              et/ou la conception d’applications.<br></br>
            </p>
          </section>
        </div>
      </div>

      <Title key={"T1"} titleText={"Mes Projets"} />
      <section className="projects">
        {projects.map((projet, index) => (
          <Project key={`P${index}`} title={projet.title} description={projet.description} skills={projet.skills} pictures={projet.pictures} />
        ))}
      </section>
      <Title key={"T2"} titleText={"Je travaille avec"} />
      <section>
        {Object.entries(icones).map(([category, svgs]) => (
          <ToolsBanner key={`Icons${category}`} title={category} svgs={svgs} />
        ))}
      </section>
    </main>
  );
}
