import { BedIcon, PlaneIcon } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

interface FlightsHotelsProps {
    isActive:string,
    setIsActive: Dispatch<SetStateAction<string>>
}

const FlightsHotels:React.FC<FlightsHotelsProps> = ({
    isActive,
    setIsActive
}) => {
  return (
    <div className="flex items-center justify-center">

        <div className={`bg-white/90 px-6 py-4 font-semibold rounded-l-md text-lg md:text-xl  flex gap-2 items-center tracking-wider uppercase cursor-pointer ${isActive === "flights" ? 'border-b-4 border-mainColor text-mainColor' : 'border-b-4 border-white/90'}`} onClick={()=>setIsActive("flights")}>
          <PlaneIcon/>
          Flights
        </div>
        <div className={`bg-white/90 px-6 py-4 font-semibold rounded-r-md text-lg md:text-xl  flex gap-2 items-center tracking-wider uppercase cursor-pointer ${isActive === "hotels" ? 'border-b-4 border-mainColor text-mainColor' : 'border-b-4'}`} onClick={()=>setIsActive("hotels")}>
          <BedIcon/>
          Hotels
        </div>

      </div>
  )
}

export default FlightsHotels