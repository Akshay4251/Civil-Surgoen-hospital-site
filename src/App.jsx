import Chatbot from './components/Chatbot'
import Hero from './components/Hero'
import Services from './components/Services'
import Departments from './components/Departments'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import RecentEvents from './components/RecentEvents'
import Dashboard from './components/Dashboard'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero/>
      <Services/>
      <Departments/>
      <RecentEvents/>
      <Contact/>
      <Dashboard/>
      <About/>
      <Chatbot />
      <Footer/>
    </div>
  )
}

export default App