import { useState } from "react";
import "./Project.scss";

export default function Project({ title, description, skills, pictures }) {
  const [index, setIndex] = useState(0);
  const maxIndex = pictures.length - 1;

  function slideForward() {
    const newIndex = index + 1;
    if (newIndex <= maxIndex) {
      setIndex(newIndex);
    } else {
      setIndex(0);
    }
  }

  return (
    <article className="project-container">
      <section className="project-container-text">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <h4 className="project-skill">{skills.map((skill, index) => (index < skills.length - 1 ? `${skill}, ` : `${skill}.`))}</h4>
      </section>
      <img className="project-picture" onClick={slideForward} src={pictures[index]} alt={title} />
    </article>
  );
}
