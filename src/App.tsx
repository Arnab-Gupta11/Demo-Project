import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import HowItWorks from './components/HowItWorks/HowItWorks'
import KeyFeature from './components/KeyFeature/KeyFeature'

function App() {

  return (
    <>
      <div className=' montserrat'>
        <Header/>
        <Banner/>
        <HowItWorks/>
        <KeyFeature/>
      </div>
    </>
  )
}

export default App
