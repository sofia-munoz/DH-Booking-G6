import LocationSelector from "../LocationSelector"

import Button from "../Button"
import styles from "./searchbar.module.css"
import CalendarSelector from "../CalendarSelector"

const SearchBar = () => {
  return (
    <section className={styles.searchBar} aria-label="search">
      <h1 className={styles.searchTitle}>
        Busca ofertas en hoteles, casas y mucho más
      </h1>
      <form className={styles.searchBarForm}>
        <LocationSelector />
        <CalendarSelector />

        <div className={styles.buttonContainer}>
          <Button text="Buscar" type="submit" styling="secondary" />
        </div>
      </form>
    </section>
  )
}

export default SearchBar
