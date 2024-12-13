import "./Title.scss";

export default function Title({ titleText }) {
  return (
    <div className="title-container">
      <h2 className="title">{titleText}</h2>;
    </div>
  );
}
