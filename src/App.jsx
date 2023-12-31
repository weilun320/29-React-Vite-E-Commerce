import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./App.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
