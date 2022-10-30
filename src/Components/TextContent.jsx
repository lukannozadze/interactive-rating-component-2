import React from "react";

const TextContent = (props) => {
  return (
    <div className={props.className}>
      <h1 className="text-[24px] mb-[17px] font-bold leading-[30px] text-[white] md:text-[28px]">
        {props.headerText}
      </h1>
      <p className="text-[14px] leading-[22px] font-normal text-[#969FAD] md:text-[16px] md:leading-[24px] ">
        {props.paragraphText}
      </p>
    </div>
  );
};
export default TextContent;
