import "./Project.scss";

export default function Project({ title, description, skills, pictures }) {
  return (
    <article className="project-container">
      <section className="project-container-text">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <h4 className="project-skill">{skills.map((skill, index) => (index < skills.length - 1 ? `${skill}, ` : `${skill}.`))}</h4>
      </section>
      <img className="project-picture" src={pictures} alt={title} />
    </article>
  );
}
