'use client';

import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import DatePicker from "../ui/datepicker";
import { Button } from "../ui/button";

const FlightForm = () => {

    const [date, setDate] = useState<Date>();

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-2 justify-center">
        <div className="flex flex-col gap-3">
          <Label htmlFor="flyingFrom" className="font-normal">
            Flying From
          </Label>
          <Input type="text" placeholder="Flying From" id="flyingFrom" className="py-7 px-4 w-full md:w-[20vw]" />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="flyingTo" className="font-normal">
            Flying To
          </Label>
          <Input type="text" placeholder="Flying To" id="flyingTo" className="py-7 px-4 w-full md:w-[20vw]" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center">
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
          <Input type="text" placeholder="No. of persons & Type" id="typeAndPerson" className="py-7 px-4 w-full md:w-[20vw]" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button className="bg-mainColor hover:bg-mainColor/60">Submit</Button>
      </div>
    </div>
  );
};

export default FlightForm;