import Form from "./Form"

const Hero = () => {
  return (
    <div className="w-full py-20 parallex bg-[url('../../public/header-image.png')] bg-cover bg-no-repeat bg-center">
        <div className='grid place-items-center justify-center h-[100%]'>
            <Form/>
        </div>
    </div>
  )
}

export default Hero