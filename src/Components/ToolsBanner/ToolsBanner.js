import "./ToolsBanner.scss";

export default function ToolsBanner({ title, svgs }) {
  return (
    <>
      <section className="tool-article">
        <h4 className="tool-title">{title}</h4>
        <div className="tool-container">
          {svgs.map((svg) => (
            <article>
              <img className="tool-img" src={svg.icon} alt={`Logo ${svg.value}`} />
              <h5 className="tool-subtitle">{svg.value}</h5>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
