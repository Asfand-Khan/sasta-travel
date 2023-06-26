import Image, { StaticImageData } from "next/image";
import BWC1 from '/public/BWC1.png';

interface BookWithCallItemProps {
    image:StaticImageData,
    alt:string,
    label:string,
    secondaryLabel:string
}

const BookWithCallItem:React.FC<BookWithCallItemProps> = ({
    image,
    alt,
    label,
    secondaryLabel
}) => {
  return (
    <div><div className="flex flex-col items-center">
    <Image src={image} alt={alt} width={70} height={70}/>
    <h5 className="text-slate-500">{label}</h5>
    <p className="text-xs font-semibold">{secondaryLabel}</p>
  </div></div>
  )
}

export default BookWithCallItem