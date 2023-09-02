import MobileNav from "@/features/mobile-nav/components/MobileNav";
import TodaysDealSection from '@/features/todays-deals-section/components/Todays-deals-section';
import RandomCTABannerGiveaway from '@/features/PCGiveawayBanners/components/PCGiveawayBanners'

const Home = () => {
const CTABannerRandomGiveawayURL = `https://www.gamerpower.com/api/giveaways`
const CTABannerRandomPCGiveawayURL = `https://www.gamerpower.com/api/giveaways?platform=pc`
  return (
    <>
      <TodaysDealSection />
      <RandomCTABannerGiveaway />
      <MobileNav />
    </>
  )
}

export default Home;