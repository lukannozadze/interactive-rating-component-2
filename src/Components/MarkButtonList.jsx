import React, { useState } from "react";

const btnValueArr = [1, 2, 3, 4, 5];
const MarkButtonList = (props) => {
  const [active, setActive] = useState(null);
  const btnClickHandler = (e) => {
    setActive(e.target.id);
    props.onGetValue(e.target.id);
  };
  return (
    <ul className="flex ml-[24px] gap-[17px] mt-[24px] md:ml-[32px] md:gap-[22px]">
      {btnValueArr.map((value) => {
        return (
          <div
            id={value}
            onClick={btnClickHandler}
            key={Math.random().toString()}
            className={`w-[42px] h-[42px] rounded-[50%] text-[#7C8798] bg-[#262E38] flex justify-center items-center md:w-[51px] md:h-[51px]
             hover:bg-[#FC7614] hover:text-white active:bg-[#7C8798] active:text-white ${
               active == value ? "bg-[#7C8798] text-[white]" : ""
             } `}
          >
            <li className="font-overpass font-bold">
              <button id={value}>{value}</button>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default MarkButtonList;
