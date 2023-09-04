import { useState } from "react"
import classNames from 'classNames'
import { Link } from 'react-router-dom'
import useAxiosFetch from "@/hooks/useAxiosFetch";



interface SearchedInputProps {
searchInput: string;
}

const FilteredSearchList: React.FC<SearchedInputProps> = ({searchInput}) => {
const { data } = useAxiosFetch(`https://www.gamerpower.com/api/giveaways`)


const filteredList = (data)?.filter((giveaway) => {
return  giveaway.title.toLowerCase().includes(searchInput.toLowerCase());
})

  return (
<>

  { searchInput &&
  <>
  <section className="pb-14 top-0 bg-white" >
    <div className="mx-auto flex flex-col items-start">
    {searchInput && filteredList.map((giveaway, index) => {

      return (
        <Link className="w-full" to={`/giveawayDetails/${giveaway.id}/`} state={{giveaway}} >
          <div key={index} className='p-4 flex items-center gap-2 bg-white'>
            <img src={giveaway.thumbnail} alt={giveaway.title} className="w-28 sm:w-40 rounded"/>
            <h5 className='text-14 sm:text-18 font-medium'>{giveaway.title}</h5>
          </div>
        </Link>
    )
  })}
  {/* if no results are found */}
  {filteredList.length === 0 && <p className="px-4 pt-6 text-24 font-light italic" >No results Found</p> }
    </div>
  </section>
    </>
  }
</>
  )
};





// SEARCH ICON AND INPUT COMPONENT
const GiveawaySearchListing = ({isSearchActive, handleIsSearchActive}) => {

const [searchInput, setSearchInput] = useState<string>("");


function handleSearchInput(e:React.ChangeEvent<HTMLInputElement>) {
setSearchInput(e.target.value);
}

  return (
  <>
    <FilteredSearchList searchInput={searchInput} />
    <div className={classNames('px-2 w-full fixed z-40 bottom-[64px] flex items-center bg-[#F8683B]',
        {"translate-y-full duration-300 ease-in-out": !isSearchActive},
        {"-translate-y-0 duration-300 ease-in-out": isSearchActive} )} >
        {/* search input */}
        <input value={searchInput} onChange={(e) => handleSearchInput(e)} placeholder="Search for giveaway" className="h-16 w-full bg-transparent text-black outline-none placeholder-black placeholder:font-medium placeholder:italic" />
        {/* close search button */}
        <Link to={'/'}  >
        <button onClick={handleIsSearchActive}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-8 h-8 text-black">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>
        </Link>
    </div>
  </>
  )
}

export default GiveawaySearchListing;