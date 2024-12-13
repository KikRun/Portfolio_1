import "./Jobs.scss";

export default function Jobs({ title, year, description, skills }) {
  return (
    <article className="project-container">
      <section className="project-container-text">
        <h3 className="project-title">
          {title} - {year}
        </h3>
        <p className="project-description">{description}</p>
        <h4 className="project-skill">{skills.map((skill, index) => (index < skills.length - 1 ? `${skill}, ` : `${skill}.`))}</h4>
      </section>
    </article>
  );
}
