import { FacebookIcon, InstagramIcon } from "lucide-react";
import Container from "../Container";
import galary1 from "/public/galary1.png";
import galary2 from "/public/galary2.png";
import galary3 from "/public/galary3.png";
import galary4 from "/public/galary4.png";
import galary5 from "/public/galary5.png";
import galary6 from "/public/galary6.png";
import Image from "next/image";

const UpperFooter = () => {
  return (
    <div className="hidden md:block bg-[url('../../public/bottomfooter-image.png')] bg-cover bg-no-repeat bg-center">
      <div className="py-10 bg-mainColor/70 text-white">
        <Container>
          <div className="flex justify-around">
            <div className="w-1/3">
              <div>
                <p className="font-light">
                  Telitrip offers exceptional travel experiences for Pakistani
                  travelers. Book flights, hotels, and tours with our
                  one-stop-shop platform and latest technology.
                </p>
              </div>
              <div className="mt-5">
                <h2 className="text-3xl font-bold">Follow Us On</h2>
                <div className="flex gap-3 mt-2">
                  <FacebookIcon />
                  <InstagramIcon />
                </div>
              </div>
            </div>
            <div className="w-1/3 pl-10">
              <h4 className="text-2xl font-bold">Quick Links</h4>
              <ul className="font-light">
                <li className="leading-8">About Us</li>
                <li className="leading-8">Contact Us</li>
                <li className="leading-8">Terms</li>
                <li className="leading-8">Privacy</li>
                <li className="leading-8">Blogs</li>
              </ul>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
                <div className="flex gap-2">
                    <Image className="object-cover h-[50px] w-[100px] rounded-sm" src={galary1} alt="footer1"/>
                    <Image className="object-cover h-[50px] w-[100px] rounded-sm" src={galary2} alt="footer1"/>
                    <Image className="object-cover h-[50px] w-[100px] rounded-sm" src={galary3} alt="footer1"/>
                </div>
                <div className="flex gap-2">
                    <Image className="object-cover h-[50px] w-[100px] rounded-sm" src={galary4} alt="footer1"/>
                    <Image className="object-cover h-[50px] w-[100px] rounded-sm" src={galary5} alt="footer1"/>
                    <Image className="object-cover h-[50px] w-[100px] rounded-sm" src={galary6} alt="footer1"/>
                </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default UpperFooter;
