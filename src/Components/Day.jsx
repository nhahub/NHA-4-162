import ClassCard from "./ClassCard";

function Day({ day, sessions }) {
  return (
    <div className="day">
      <div className="day-header">
        <h2>{day}</h2>

        <span>{sessions.length} SESSIONS</span>
      </div>

      <div className="day-cards">
        {sessions.map((item, index) => (
          <ClassCard
            key={index}
            time={item.time}
            title={item.title}
            coach={item.coach}
            spots={item.spots}
          />
        ))}
      </div>
    </div>
  );
}

export default Day;
