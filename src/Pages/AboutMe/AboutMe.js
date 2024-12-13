import "./AboutMe.scss";
import profilePicture from "../../Assets/Pictures/Ulysse_Conjard_Front-end_developper.jpg";
import jobs from "../../Assets/Json/jobs.json";
import Jobs from "../../Components/Jobs/Jobs";
import Title from "../../Components/Title/Title";

export default function AboutMe() {
  return (
    <>
      <main className="main-about-me">
        <img className="about-me-picture" src={profilePicture} alt="Ulysse Conjard profile"></img>
        <article className="about-me-text">
          <Title titleText={"Mes expériences"}></Title>
          {jobs.map((Job, index) => (
            <Jobs key={index} title={Job.title} year={Job.year} description={Job.description} skills={Job.skills} />
          ))}
        </article>
      </main>
    </>
  );
}
