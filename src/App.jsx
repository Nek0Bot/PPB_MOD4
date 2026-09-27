import { useState } from "react";
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Catalog from './Pages/Catalog.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import "./App.css";

function App() {
  const [tab, setTab] = useState('Catalog')

  return (
    <div className="shell">
      <Header tab={tab} onTab={setTab} />

      <main className="main">
        {tab === 'Catalog' && <Catalog />}
        {tab === 'About' && <About />}
        {tab === 'Contact' && <Contact />}
      </main>

      <Footer />
    </div>
  )
}

export default App