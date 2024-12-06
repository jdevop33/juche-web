import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import OurApproach from '../components/OurApproach'
import PoliticalSelfReliance from '../components/PoliticalSelfReliance'
import SelfDefense from '../components/SelfDefense'
import IndividualEmpowerment from '../components/IndividualEmpowerment'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <OurApproach />
        <PoliticalSelfReliance />
        <SelfDefense />
        <IndividualEmpowerment />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

