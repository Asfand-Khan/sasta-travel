"use client";
import { UserPlus2, Facebook, Instagram } from "lucide-react";
import Container from "../Container";

const UpperNav = () => {
  return (
    <div className="bg-mainColor p-5 text-white text-sm font-light">
      <Container>
        <div className="flex justify-between">
          <span className="flex gap-4">
            <span>0304 111 8354 (SASTA)</span>
            <span className="hidden md:block">support@sastatravel.com</span>
          </span>
          <span className="flex gap-4 items-center">
            <button className="flex gap-2 items-center">
              <UserPlus2 className="hidden md:block" />
              Sign In Or Register
            </button>
            <span className="hidden md:flex gap-2 items-center">
              <Facebook size={20} />
              <Instagram size={20} />
            </span>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default UpperNav;
