
import HeroSection from "../components/HeroSection"
import ReviewsSection from "../components/Review"
import PlateTypes from "../components/PlateTypes"
import AboutSection from "../components/About"
import WhyChooseUs from "../components/Whychoose"
import HowItWorks from "../components/HowItWorks"
import PlateComparison from "../components/PlateComparison"
import FAQ from "../components/Faq"
import ContactSection from "../components/Contact"

const Home = () => {
    return (
        <div>
            <HeroSection />
            <PlateTypes />
            <AboutSection />
            <WhyChooseUs />
            <HowItWorks />
            <PlateComparison />
            <ReviewsSection />
            <FAQ />
            <ContactSection />
        </div>
    )
}

export default Home
