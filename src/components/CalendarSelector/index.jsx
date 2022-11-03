import Calendar from "./Calendar"
import { FaCalendarDay } from "react-icons/fa"
import "./calendar.css"
import styles from "./calendarSearcher.module.css"

function SearchCalendar() {
  return (
    <section className={styles.calendar}>
      <FaCalendarDay className={styles.calendarIcon} />
      <Calendar name="date" label="date" />
    </section>
  )
}

export default SearchCalendar
