import { useState } from "react"
import classNames from 'classNames'





const MobileNav = () => {

const [isSearchActive, setIsSearchActive] = useState(false);


  return (
    <>
      <div className='h-16 px-4 fixed bottom-0 w-full flex  justify-evenly bg-neutral-900'>
          {/* favorites mobile button */}
          <button >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classNames('w-8 h-8 text-white')}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </button>
          {/* home mobile button */}
          <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
          </button>
          {/* search mobile button */}
          <button onClick={() => setIsSearchActive((prevState) => !prevState)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          <div className={classNames('h-16 px-2 absolute z-10 left-0 top-0 w-full flex items-center bg-blue-700',
          {"translate-y-full duration-300 ease-in-out": !isSearchActive},
          {"-translate-y-0 duration-300 ease-in-out": isSearchActive} )} >
            <input placeholder="Search for game" className="w-full bg-transparent text-white outline-none" />
            {/* close search button */}
              <button onClick={() => setIsSearchActive((prevState) => !prevState)} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </button>
          </div>
      </div>
    </>
  );
};


export default MobileNav;