import Container from "../Container"
import Logo from "../Logo"

const LowerNav = () => {
  return (
    <Container>
        <div className="flex justify-between">
            <Logo />
            <button className="text-mainColor text-md md:text-lg">My Booking</button>
        </div>
    </Container>
  )
}

export default LowerNav