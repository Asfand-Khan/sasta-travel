"use client";

import { BedIcon, PlaneIcon } from "lucide-react";
import { useState } from "react";
import FlightsHotels from "./FlightsHotels";
import FlightForm from "./FlightForm";
import HotelForm from "./HotelForm";

const Form = () => {
  const [isActive, setIsActive] = useState("flights");

  return (
    <div>
      {/**********************  Options *********************/}
      <FlightsHotels isActive={isActive} setIsActive={setIsActive} />

      {/***************************  Form **********************/}

      <div className="bg-white/90 p-10 rounded-md w-[100vw] md:w-[60vw] shadow-2xl overflow-hidden">
        {isActive === "flights" ? <FlightForm /> : <HotelForm />}
      </div>
    </div>
  );
};

export default Form;
