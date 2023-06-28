"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import DatePicker from "../ui/datepicker";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const OneWay = () => {
  const [flyingFrom ,setFlyingFrom] = useState<string>("");
  const [flyingTo ,setFlyingTo] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [noOfAdult,setNoOfAdult] = useState<number>(1);
  const [noOfChildren,setNoOfChildren] = useState<number>(0);
  const [noOfInfant,setNoOfInfant] = useState<number>(0);
  const [typeOfFlight,setTypeOfFlight] = useState<string>("Economy");

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 justify-center mb-2">
        <div className="relative flex flex-col gap-3">
          <Label htmlFor="flyingFrom" className="font-normal">
            Flying From
          </Label>
          <Input
            type="text"
            placeholder="Flying From"
            id="flyingFrom"
            className="py-7 px-4 w-full md:w-[20vw]"
            value={flyingFrom}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="flyingTo" className="font-normal">
            Flying To
          </Label>
          <Input
            type="text"
            placeholder="Flying To"
            id="flyingTo"
            className="py-7 px-4 w-full md:w-[20vw]"
            value={flyingTo}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center mb-2">
        <div className="flex flex-col gap-3">
          <Label htmlFor="datePicker" className="font-normal">
            Pick A Date
          </Label>
          <DatePicker date={date} setDate={setDate} />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="typeAndPerson" className="font-normal">
            No. Of Person & Type
          </Label>
          <Input
            type="text"
            placeholder="No. of persons & Type"
            id="typeAndPerson"
            className="py-7 px-4 w-full md:w-[20vw]"
            value={`${noOfAdult+noOfChildren+noOfInfant} Traveller(s), ${typeOfFlight}`}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button className="bg-mainColor hover:bg-mainColor/60">Search</Button>
      </div>
    </div>
  );
};

export default OneWay;
