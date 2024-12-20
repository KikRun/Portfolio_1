import "./ToolsBanner.scss";

export default function Tool({ icon, value }) {
  return (
    <>
      <article>
        <img className="tool-img" src={icon} alt={`Logo ${value}`} />
        <h4 className="tool-subtitle">{value}</h4>
      </article>
    </>
  );
}
