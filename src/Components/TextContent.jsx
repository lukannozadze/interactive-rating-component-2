import React from "react";

const TextContent = (props) => {
  return (
    <div className={props.className}>
      <h1 className="text-[24px] mb-[17px] font-bold leading-[30px]">
        {props.headerText}
      </h1>
      <p className="text-[14px] leading-[22px] font-normal text-[#969FAD]">
        {props.paragraphText}
      </p>
    </div>
  );
};
export default TextContent;
