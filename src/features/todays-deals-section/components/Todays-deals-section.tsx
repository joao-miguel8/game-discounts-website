import { useEffect, useState } from 'react'
import FavoritesBtn from '@/features/favoritesBtn/FavoritesBtn'
import useAxiosFetch from '@/hooks/useAxiosFetch';

const TodaysDealSection = () => {

interface popularCardData {
"id": string,
"title": string,
"worth": string,
"image": string,
}

const [dataFetched, setDataFetched] = useState<Array<popularCardData>>([]);


// axios fetch our cards on page load with custom hook
const {data, loading, error} = useAxiosFetch(`https://corsproxy.io/?https://www.gamerpower.com/api/giveaways?sort-by=popularity
`)
useEffect(() => {
    if (data) {
    const slicedData = data.slice(0, 6);
    setDataFetched(slicedData);
  } else if (error) {
    console.error(error);
  }
}, [data, error,loading]);



return (
  <section>
    <h3 className="text-24 font-bold">Trending Deals</h3>
      <div className='overflow-x-scroll flex w-screen'>
        {/* slider */}
        <div className='py-6 px-2 flex gap-4 overscroll-contain'>
        {/* card */}
        {dataFetched.map((cardData) => {
    return (
            <div className='w-56 rounded overflow-hidden hover:-translate-y-3 duration-300 ease-in-out shadow-neutral-200 shadow-xl hover:opacity-90 cursor-pointer'>
              <div className='w-auto h-40' >
                <img className='w-full h-full' src={cardData.image} alt="image of game" />
              </div>
              <div className='p-4 flex flex-col bg-white'>
                  <h4 className='h-10 text-14 line-clamp-2 text-ellipsis whitespace-normal font-bold text-black'>{cardData.title}
                  </h4>
                  <div className='mt-4 flex align-center justify-between' >
                    {cardData.worth === 'N/A' ? <span className='  text-[#F8683B]'>Free</span> : <span className=' text-[#F8683B]'>{cardData.worth}</span>}
                    <FavoritesBtn />
                  </div>
              </div>
            </div>
    )
        })}
        </div>
      </div>
  </section>
  )
}

export default TodaysDealSection;