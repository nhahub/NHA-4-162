import Day from "./Day";
import schedule from "../scheduleData.jsx";

function Schedule() {
  return (
    <section className="schedule">
      <div className="schedule-grid">
        {schedule.map((day) => (
          <Day key={day.day} day={day.day} sessions={day.sessions} />
        ))}
      </div>
    </section>
  );
}

export default Schedule;
