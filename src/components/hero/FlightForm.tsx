"use client";

import { Dispatch, SetStateAction, useState } from "react";
import OneWay from "./OneWay";
import Return from "./Return";
import Multi from "./Multi";

const FlightForm = () => {

  const [toggleForm,setToggleForm] = useState("oneway");

  const switchToOneWay=()=>{
    setToggleForm("oneway");
  }

  const switchToReturn=()=>{
    setToggleForm("return");
  }

  const switchToMulti=()=>{
    setToggleForm("multi");
  }

  return (
    <div className="space-y-4 flex flex-col justify-center">
      <div className="w-full flex justify-center">
      <div className="w-max flex justify-around text-mainColor border-[1px] border-mainColor rounded-xl overflow-hidden">
        <div className={`p-4 ${toggleForm === "oneway" ? "bg-mainColor text-white":" text-mainColor "}`}>
          <button onClick={()=>switchToOneWay()}>One Way</button>
        </div>
        <div className={`p-4 ${toggleForm === "return" ? "bg-mainColor text-white":" text-mainColor "}`}>
          <button onClick={()=>switchToReturn()}>Return</button>
        </div>
        <div className={`p-4 ${toggleForm === "multi" ? "bg-mainColor text-white":" text-mainColor "}`}>
        <button onClick={()=>switchToMulti()}>Multi</button>
        </div>
      </div>
      </div>

      { toggleForm === "oneway" ? <OneWay/> : "" }
      { toggleForm === "return" ? <Return/> : "" }
      { toggleForm === "multi" ? <Multi/> : "" }
      
    </div>
  );
};

export default FlightForm;
