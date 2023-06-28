"use client";

import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import DatePicker from "../ui/datepicker";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const OneWay = () => {
  // states to store values
  const [flyingFrom ,setFlyingFrom] = useState<string>("");
  const [flyingTo ,setFlyingTo] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [noOfAdult,setNoOfAdult] = useState<number>(1);
  const [noOfChildren,setNoOfChildren] = useState<number>(0);
  const [noOfInfant,setNoOfInfant] = useState<number>(0);
  const [typeOfFlight,setTypeOfFlight] = useState<string>("Economy");

  // references of the elements
  const refOne:MutableRefObject<undefined | any> = useRef();
  const refTwo:MutableRefObject<undefined | any> = useRef();
  const refThree:MutableRefObject<undefined | any> = useRef();

  // states to toggle respective input divs
  const [isFlyingFromOpen,setIsFlyingFromOpen] = useState<boolean>(false);
  const [isFlyingToOpen,setIsFlyingToOpen] = useState<boolean>(false);
  const [isNoOfPersonsAndTypeOpen,setIsNoOfPersonsAndTypeOpen] = useState<boolean>(false);

  // func to toggle flying from div
  const toggleFlyingFrom = () =>{
    setIsFlyingFromOpen(!isFlyingFromOpen);
  }

  // func to toggle flying to div
  const toggleFlyingTo = () =>{
    setIsFlyingToOpen(!isFlyingToOpen);
  }

  // func to toggle toggle no of persons and type div
  const toggleNoOfPersonsAndType = () =>{
    setIsNoOfPersonsAndTypeOpen(!isNoOfPersonsAndTypeOpen);
  }

  // calling this function everytime when we click outside the referenced element
  useEffect(()=>{
    document.addEventListener("click",handleOutsideClick,true);
  },[]);

  // func to handle outside click
  const handleOutsideClick = (e:any)=>{
    if(!refOne?.current.contains(e.target)){
     setIsFlyingFromOpen(false);
    }
    
    if(!refTwo?.current.contains(e.target)){
      setIsFlyingToOpen(false);
    }

    if(!refThree?.current.contains(e.target)){
      setIsNoOfPersonsAndTypeOpen(false);
    }
  }


  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 justify-center mb-2">
        <div className="relative flex flex-col gap-3">
          <Label htmlFor="flyingFrom" className="font-normal">
            Flying From
          </Label>
          <Input
            ref={refOne}
            type="text"
            placeholder="Flying From"
            id="flyingFrom"
            className="py-7 px-4 w-full md:w-[20vw]"
            value={flyingFrom}
            onClick={toggleFlyingFrom}
          />
          {
            isFlyingFromOpen && (
              <div className="absolute top-[5.5rem] bg-white p-5 w-full md:w-[20vw] h-52 rounded-md overflow-y-auto z-50">
                Asfand
              </div>
            )
          }
        </div>
        <div className="relative flex flex-col gap-3">
          <Label htmlFor="flyingTo" className="font-normal">
            Flying To
          </Label>
          <Input
            ref={refTwo}
            type="text"
            placeholder="Flying To"
            id="flyingTo"
            className="py-7 px-4 w-full md:w-[20vw]"
            value={flyingTo}
            onClick={toggleFlyingTo}
          />
          {
            isFlyingToOpen && (
              <div className="absolute top-[5.5rem] bg-white p-5 w-full md:w-[20vw] h-52 rounded-md overflow-y-auto z-50">
                Asfand
              </div>
            )
          }
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center mb-2">
        <div className="flex flex-col gap-3">
          <Label htmlFor="datePicker" className="font-normal">
            Pick A Date
          </Label>
          <DatePicker date={date} setDate={setDate} />
        </div>
        <div className="relative flex flex-col gap-3">
          <Label htmlFor="typeAndPerson" className="font-normal">
            No. Of Person & Type
          </Label>
          <Input
            ref={refThree}
            type="text"
            placeholder="No. of persons & Type"
            id="typeAndPerson"
            className="py-7 px-4 w-full md:w-[20vw]"
            value={`${noOfAdult+noOfChildren+noOfInfant} Traveller(s), ${typeOfFlight}`}
            onClick={toggleNoOfPersonsAndType}
          />
          {
            isNoOfPersonsAndTypeOpen && (
              <div className="absolute top-[5.5rem] bg-white p-5 w-full md:w-[20vw] h-52 rounded-md overflow-y-auto z-50">
                Asfand
              </div>
            )
          }
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button className="bg-mainColor hover:bg-mainColor/60">Search</Button>
      </div>
    </div>
  );
};

export default OneWay;
