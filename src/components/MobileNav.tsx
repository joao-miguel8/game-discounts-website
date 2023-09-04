import { useState } from 'react';
import classNames from 'classNames'
import { Link } from 'react-router-dom'
import GiveawaySearchListing from "@/components/GiveawaySearchListing";
import SearchMobileIcon from '@/common/SearchBtn';



const MobileNav = () => {


const [isSearchActive, setIsSearchActive] = useState(false);

  function handleIsSearchActive() {
setIsSearchActive((prevState) => !prevState);
}


  return (
    <>
      <div className='h-16 px-4 fixed bottom-0 w-full flex justify-evenly z-50 bg-neutral-900'>
          {/* FAVORITES MOBILE BUTTON */}
          <button >
          <Link to='/favorites' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classNames('w-8 h-8 text-white')}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </Link>
          </button>
          {/* HOME MOBILE BUTTON */}
          <button>
            <Link to='/' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              </Link>
          </button>
         { isSearchActive && <GiveawaySearchListing isSearchActive={isSearchActive} handleIsSearchActive={handleIsSearchActive}  />}
          {/* SEARCH ICON COMPONENT */}
          <SearchMobileIcon handleIsSearchActive={handleIsSearchActive}  />

      </div>
    </>
  );
};


export default MobileNav;