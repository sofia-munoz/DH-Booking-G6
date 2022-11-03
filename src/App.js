import { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
  const [onPage, setOnPage] = useState()
  const setPage = (page) => {
    setOnPage(page)
  }
  const [logged, setLogged] = useState()

  useEffect(() => setLogged(Boolean(localStorage.getItem("name"))), [])

  return (
    <>
      <Header logged={logged} page={onPage} />
      <main>
        <Routes>
          <Route path="/login" element={<Login setOnPage={setPage} />} />
          <Route path="/register" element={<Register setOnPage={setPage} />} />
          <Route path="/" element={<Home setOnPage={setPage} />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
export default App
