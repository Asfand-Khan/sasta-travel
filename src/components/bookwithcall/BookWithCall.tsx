import Container from "../Container";
import BWC1 from "/public/BWC1.png";
import BWC2 from "/public/BWC2.png";
import BWC3 from "/public/BWC3.png";
import BWC4 from "/public/BWC4.png";
import Deals1 from "/public/deals1.png";
import Deals2 from "/public/deals2.png";
import BookWithCallItem from "./BookWithCallItem";
import BookWithCallCard from "./BookWithCallCard";

const BookWithCall = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="py-7">
          <h4 className="font-bold text-mainColor text-center text-xl">
            Why To Book With Call Center
          </h4>
        </div>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <BookWithCallItem
            image={BWC1}
            alt="BWC1"
            label="Expert Guidance"
            secondaryLabel="For the best routes"
          />
          <BookWithCallItem
            image={BWC2}
            alt="BWC2"
            label="Instant Confirmation"
            secondaryLabel="For your travel plans"
          />
          <BookWithCallItem
            image={BWC3}
            alt="BWC3"
            label="Connect to be social"
            secondaryLabel="For promotions"
          />
          <BookWithCallItem
            image={BWC4}
            alt="BWC4"
            label="Easy cancellations"
            secondaryLabel="For your acceptance"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <BookWithCallCard image={Deals1} label="Dont have an account?" secondaryLabel="Teli travel and tours" buttontext="Create Account"/>
          <BookWithCallCard image={Deals2} label="Get exclusive deals and travel updates" secondaryLabel="Sasta travel and tours karachi, pakistan." buttontext="Sign me up"/>
        </div>
      </Container>
    </div>
  );
};

export default BookWithCall;
