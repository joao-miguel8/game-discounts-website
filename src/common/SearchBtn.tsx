import { Link } from "react-router-dom";

const SearchMobileIcon = ({handleIsSearchActive}) => {




  return (
    <>
      {/* search mobile button */}
       <Link to={'/searchGiveaway'} className="flex">
          {<button onClick={ handleIsSearchActive }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>}
      </Link>
    </>
   )
}


export default SearchMobileIcon;