import Header from '././Header/header'
import NavbarLeft from './components/Navbar-left/navbarLeft'
import Welcome from './components/WelcomeName/welcomeName'
import './App.css'

function App() {

  return (
    <>
      <Header />
      
      <main>
      <NavbarLeft />
        <Welcome name="John" />
      </main>
    </>
    
  )
}

export default App
