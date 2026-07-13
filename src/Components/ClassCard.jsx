function ClassCard({ time, title, coach, spots }) {
  return (
    <div className="class-card">
      <div className="card-top">
        <span className="class-time">{time}</span>

        <span className={spots === "FULL" ? "class-spots full" : "class-spots"}>
          {spots}
        </span>
      </div>

      <h3>{title}</h3>

      <p>{coach}</p>
    </div>
  );
}

export default ClassCard;
