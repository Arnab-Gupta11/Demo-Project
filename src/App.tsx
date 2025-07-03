import './App.css'
import Banner from './components/Banner/Banner'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import GettingStarted from './components/GettingStrarted/GettingStarted'
import Header from './components/Header/Header'
import HowItWorks from './components/HowItWorks/HowItWorks'
import KeyFeature from './components/KeyFeature/KeyFeature'
import SimplePricing from './components/SimplePricing/SimplePricing'
import WhoIsThisPlatform from './components/WhoIsThisPlatform/WhoIsThisPlatform'
import Testimonials from './components/Testimonials/Testimonials'
import CTA from './components/CTA/CTA'

function App() {

  return (
    <>
      <div className=' montserrat'>
        <Header/>
        <Banner/>
        <div className="relative  bg-[url('./assets/gradiant.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
          <div className="relative z-20">
    <HowItWorks />
    <KeyFeature />
    <WhoIsThisPlatform />
    <GettingStarted />
  </div>
        </div>
        <Testimonials/>
        <div className="relative min-h-screen bg-[url('./assets/gradiant.png')] bg-cover bg-no-repeat ">
        <div className='absolute inset-0 bg-gradient-to-b from-white via-transparent to-white'/>
        <div className='relative z-20'>
        <SimplePricing/>
        <FAQ/>
        </div>

        </div>
        <CTA/>
        <Footer/>
      </div>
    </>
  )
}

export default App
