import "./ToolsBanner.scss";
import Tool from "./Tool";

export default function ToolsBanner({ title, svgs }) {
  return (
    <>
      <section className="tool-article">
        <h3 className="tool-title">{title}</h3>
        <div className="tool-container">
          {svgs.map((svg) => (
            <Tool key={svg.value} icon={svg.icon} value={svg.value} />
          ))}
        </div>
      </section>
    </>
  );
}
