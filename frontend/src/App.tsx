import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home" 
import { ShowPublications } from "./pages/Show_Publications"
import { CreatePublications } from "./pages/Create_Publication";
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Container className="mb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Show_Publications" element={<ShowPublications />} />
          <Route path="/Create_Publications" element={<CreatePublications />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App