import Calandar from "@/components/Calandar";
import React from "react";
import CreateEmployee from "@/components/CreateEmployee";
import Today from "@/components/Today";

const Start = () => {
  return (
    <div>
      <div className="flex space-x-2">
        <Today />
        <CreateEmployee />
      </div>
      <Calandar />
      <div>Hello</div>
    </div>
  );
};

export default Start;
