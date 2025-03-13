import { useState } from 'react'
import About from './AboutUs/About';
import Footer from './Footer/Footer';
import Header from './Header/Header.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default App
