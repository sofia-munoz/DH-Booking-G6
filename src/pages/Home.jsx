import React, { useEffect } from "react"
import SearchBar from "../components/SearchBar"
import ListCategories from "../components/ListCategories"
import ListProduct from "../components/ListProduct"
// import MenuDrawer from "../components/MenuDrawer"

const Home = ({ setOnPage }) => {
  useEffect(() => setOnPage("/"))
  return (
    <div>
      <SearchBar />
      <ListCategories />
      <ListProduct />
      {/* <MenuDrawer /> */}
    </div>
  )
}

export default Home
