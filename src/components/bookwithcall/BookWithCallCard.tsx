import Image, { StaticImageData } from "next/image"

interface BookWithCallCardProps{
    image: StaticImageData,
    label:string,
    secondaryLabel:string,
    buttontext:string
}

const BookWithCallCard:React.FC<BookWithCallCardProps> = ({
    image,
    label,
    secondaryLabel,
    buttontext
}) => {
  return (
    <div className="border-[3px] flex gap-8 p-3 w-full md:w-1/2 rounded-sm">
        <div>
            <Image src={image} alt={label} width={90}  height={100} />
        </div>
        <div className="flex-grow">
            <p className="text-mainColor font-bold capitalize">{label}</p>
            <p className="font-extralight font-xs capitalize">{secondaryLabel}</p>
            <button className="bg-mainColor p-2 text-white rounded-lg mt-5 capitalize">{buttontext}</button>
        </div>
    </div>
  )
}

export default BookWithCallCard