import { FaMapMarkerAlt } from "react-icons/fa"
import { GoLocation } from "react-icons/go"
import React, { useEffect, useState } from "react"
import CITIES from "../../mocks/api/cities.json"
import styles from "./locationSelector.module.css"

function SearchLocation(props) {
  // const [selectedCity, setSelectedCity] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => setIsOpen((prevState) => !prevState)

  const handleClick = (city) => () => {
    setSelectedOption(city)
    setIsOpen(false)
  }

  const orderedCities = (cities) => {
    return cities.sort((c1, c2) => {
      if (c1.name > c2.name) {
        return 1
      }
      if (c1.name < c2.name) {
        return -1
      }
      return 0
    })
  }

  return (
    <section className={styles.location}>
      <div className={styles.locationSelect}>
        <div
          onClick={toggling}
          className={`${styles.preselectedOption} ${
            selectedOption ? styles.selected : ""
          }`}
        >
          <div className={styles.iconPreselected}>
            <FaMapMarkerAlt />
          </div>
          {selectedOption || "¿A dónde vamos?"}
        </div>

        {isOpen && (
          <div className={styles.listContainer}>
            <ul className={styles.locationSelect}>
              <div className={styles.space} />
              {orderedCities(CITIES)?.map((city) => (
                <li
                  value={city.name}
                  key={city.id}
                  className={styles.locationSelect}
                  onClick={handleClick(city.name)}
                >
                  <div className={styles.listContent}>
                    <div className={styles.textContainer}>
                      <div className={styles.icon}>
                        <GoLocation />
                      </div>
                      <div className={styles.cityName}>
                        {city.name}
                        <br />
                        <span className={styles.country}>{city.country}</span>
                      </div>
                    </div>
                    <hr className={styles.divider} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default SearchLocation
