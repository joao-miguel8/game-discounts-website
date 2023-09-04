import MobileNav from "@/components/MobileNav";
import TodaysDealSection from '@/components/Todays-deals-section';
import RandomCTABannerGiveaway from '@/components/PCGiveawayBanners'

const Home = () => {

  return (
    <>
      <TodaysDealSection />
      <RandomCTABannerGiveaway />
      <MobileNav />
    </>
  )
}

export default Home;