import { useLocation, useNavigate } from "react-router-dom";
import MobileNav from "@/components/MobileNav";


const GiveawayDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const { title, image, description, worth, instructions,  published_date, platforms, open_giveaway_url, gamerpower_url } = location.state.giveaway



const platformsConvertToArr = (platforms.split(",").map( platform => platform.trim()));


return (
<div className="pb-28" >
<button onClick={(e) => { e.preventDefault();navigate('/'); }} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-4 ml-2 w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
</button>
<img src={image} alt={title} className="px-1 w-full rounded-md sm:mx-auto sm:w-5/6" />


{/* giveaway details */}
<div className="mx-4 mt-4 sm:mt-10">
    <h1 className="text-18 sm:text-22 md:text-28 font-bold">{title}</h1>
    {/* cost and favorites btn container and extra details container */}
    <div className="mt-8">
        <div className="flex justify-between" >
            <button className="" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg></button>
            {worth === "N/A" ? <p className="text-20 sm:text-24">Free</p> : <p className="text-20 sm:text-24" >{worth}</p>}
        </div>
        <div className="mt-4 flex flex-col min-[560px]:flex-row gap-4">
            <div className="flex flex-col gap-4" >
              <div className="flex items-center gap-2 w-60 bg-white" >
                <div className="w-10 border-[0.7px] rounded" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                </div>
              <div>
                <h5 className="text-14 text-neutral-600">Publish Date:</h5>
                <span className="text-14 font-medium">{published_date.slice(0,10)}</span>
              </div>
            </div>
            <div className="flex gap-2 w-fit-content bg-white" >
              <div className="w-10 border-[0.7px] rounded" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                </svg>
              </div>
              <div>
                {platformsConvertToArr.length <= 1 ? <h5 className="text-14 text-neutral-600">Platform:</h5> : <h5 className="text-14 text-neutral-600">Platforms:</h5>}
                <div className="flex flex-wrap">
                {platformsConvertToArr.map((platform, index, array) => {
                return (
                  <>
                    <span key={index} className="text-14 font-medium">{platform}</span>
                    {index !== array.length - 1 && <span className="mx-1">{'\u2022'}</span>}
                  </>
                )
                })}
                </div>
              </div>
            </div>
          </div>
          <div className="max-[530px]:mt-10">
            <h4 className="mb-2 text-14 md:text-18 font-medium" >Visit Giveaway Links:</h4>
            <a target="blank" href={open_giveaway_url} className="font-bold text-blue-500 hover:text-blue-600" ><p className="text-12 md:text-14" >{open_giveaway_url}</p></a>
            <a target="blank" href={gamerpower_url}className="font-bold text-blue-500 hover:text-blue-600"><p className="mt-4 text-12 md:text-14" >{gamerpower_url}</p></a>
          </div>
        </div>
    </div>
    <p className="mt-8 text-14 leading-6" >{description}</p>
    <p className="mt-4 text-14">{instructions}</p>
</div>
<MobileNav />
</div>
)
}

export default GiveawayDetails;