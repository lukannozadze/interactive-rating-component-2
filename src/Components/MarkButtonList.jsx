import React from "react";
const btnValueArr = [1, 2, 3, 4, 5];
const MarkButtonList = () => {
  return (
    <ul className="flex ml-[24px] gap-[17px] mt-[24px]">
      {btnValueArr.map((value) => {
        return (
          <div
            key={Math.random().toString()}
            className="w-[42px] h-[42px] rounded-[50%] text-[#7C8798] bg-[#262E38] flex justify-center items-center
             hover:bg-[#FC7614] hover:text-white active:bg-[#7C8798] active:text-white"
          >
            <li className="font-overpass font-bold">{value}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default MarkButtonList;
