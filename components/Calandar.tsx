"use client";

import React from "react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const Calandar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <div>
        {date?.toDateString()} This should be on the right of the calandar and
        will be a display of the week
      </div>
    </>
  );
};

export default Calandar;
