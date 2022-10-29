import React from "react";
import Card from "../UI/Card";
import TextContent from "./TextContent";
import phoneImgPath from "../images/phone.png";
const ThanksPage = () => {
  return (
    <Card>
      <div className="flex justify-center mt-[34px]">
        <img src={phoneImgPath} alt="phone shape" />
      </div>
      <div className="flex justify-center mt-[20gipx] mb-[20px]">
        <div className="bg-[#262E38] w-[193px] flex justify-center pt-[4px] pb-[4px] rounded-[22.5px]">
          <span className="font-overpass text-[#FC7614]">
            You selected 4 out of 5
          </span>
        </div>
      </div>
      <div className="text-center">
        <TextContent
          className="font-overpass ml-[24px] mr-[24px]"
          headerText="Thank You!"
          paragraphText="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
        />
      </div>
    </Card>
  );
};

export default ThanksPage;
