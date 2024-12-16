import "./ToolsBanner.scss";

export default function Tool({ icon, value }) {
  return (
    <>
      <article>
        <img className="tool-img" src={icon} alt={`Logo ${value}`} />
        <h5 className="tool-subtitle">{value}</h5>
      </article>
    </>
  );
}
