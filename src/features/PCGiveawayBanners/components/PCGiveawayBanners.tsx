import useAxiosFetch from '@/hooks/useAxiosFetch';
import { useEffect, useState } from 'react';
import classnames from 'classnames'


const PCGiveawayBanners = () => {

  interface RandomCTABannerData {
    'image': string;
    'title': string;
    'worth': string;
  }

  const [dataFetch, setDataFetch] = useState<Array<RandomCTABannerData>>([]);

  const {data, loading, error} = useAxiosFetch(`https://www.gamerpower.com/api/giveaways?platform=pc
`);


  useEffect(() => {
    if (data) {
      const dataCopy = [...data]
      const randomGiveaways:any = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * dataCopy.length);
        randomGiveaways.push(data[randomIndex]);
        dataCopy.splice(randomIndex, 1);
      }
      setDataFetch(randomGiveaways);
    } else if (error) {
      console.error(error);
    }
},[data, loading, error])

  return (
  <section className='mt-28'>
    <h3 className='text-22 font-bold'>Explore PC Giveaways</h3>
    <div className='mt-6 mx-auto w-5/6 grid grid-cols-1 grid-rows-3 md:grid-cols-4 gap-1' >
    {dataFetch.map((giveaway, i) => {
      const gridCellBreakpoints = [300, 600, 600];

      // check if i value is less than gridCellBreakpoints.length if is update i to highest valid index
      const gridItemIndex = i < gridCellBreakpoints.length ? i : gridCellBreakpoints.length - 1;

      // add class if gridIndex >= 1 (class hides all values except for 1 until md breakpoint size)
      const hideOnSm = gridItemIndex >= 1 ? 'hidden md:block' : '';


      // expression to get index variables
      const isContainer1 = i === 0;
      const isContainer3 = i === 1;
      const isContainer4 = i === 2;


      const container1Styling = isContainer1 ? 'row-span-5	col-span-2' : '';
      const container2Styling = isContainer3 ? 'col-span-3 col-start-3 row-span-3': '';
      const container3Styling = isContainer4 ? 'col-span-3 col-start-3 row-span-2' : '';

  return (
    <div key={i} className={`relative max-w-[${gridCellBreakpoints[gridItemIndex]}px] ${hideOnSm} ${container2Styling} ${container3Styling} ${container1Styling}`}>
          <div className='h-full' >
          <img src={giveaway.image} alt=""  className={classnames( 'rounded', isContainer1 ? 'w-full h-full' : '', isContainer3 ? 'h-full w-full' : "", isContainer4 ? 'w-full h-full' : '')} />
          </div>
          <div className='absolute bottom-2 left-0 right-0'>
          <button className='sm:p-2 px-4 flex mx-auto font-bold bg-[#F8683B] rounded text-white' >View Giveaway</button>
          </div>
    </div>
  )
})};
    </div>
  </section>
  )
}

export default PCGiveawayBanners;