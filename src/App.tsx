import './App.css'
import Banner from './components/Banner/Banner'
import GettingStarted from './components/GettingStrarted/GettingStarted'
import Header from './components/Header/Header'
import HowItWorks from './components/HowItWorks/HowItWorks'
import KeyFeature from './components/KeyFeature/KeyFeature'
import SimplePricing from './components/SimplePricing/SimplePricing'
import WhoIsThisPlatform from './components/WhoIsThisPlatform/WhoIsThisPlatform'

function App() {

  return (
    <>
      <div className=' montserrat'>
        <Header/>
        <Banner/>
        <HowItWorks/>
        <KeyFeature/>
        <WhoIsThisPlatform/>
        <GettingStarted/>
        <SimplePricing/>
      </div>
    </>
  )
}

export default App
