import MobileNav from "@/features/mobile-nav/components/MobileNav";
import TodaysDealSection from '@/features/todays-deals-section/components/Todays-deals-section'
const Home = () => {
  return (
    <>
    <TodaysDealSection />
      <MobileNav />
    </>
  )
}

export default Home;