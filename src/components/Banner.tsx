import { PhoneCall } from "lucide-react";
import Container from "./Container";

const Banner = () => {
  return (
    <div className="bg-mainColor">
      <Container>
        <div className="flex gap-4 items-center justify-center py-5 font-light text-white">
        <span>
          <PhoneCall />
        </span>
        <span>
          Call 0304 111 8354 (SASTA) to unlock exclusive travel deals too good
          to be published.
        </span>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
