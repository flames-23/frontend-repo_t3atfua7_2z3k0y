import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MLMNetwork from './components/MLMNetwork'
import Flowchart from './components/Flowchart'
import FinanceCharts from './components/FinanceCharts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <div id="network"><MLMNetwork /></div>
        <div id="flow"><Flowchart /></div>
        <div id="finance"><FinanceCharts /></div>
      </main>
      <Footer />
    </div>
  )
}

export default App
