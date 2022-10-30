import React from "react";

const Card = (props) => {
  return (
    <div className="w-[327px] h-[360px] bg-gradient-radial from-[#232A34] to-[#181E27] rounded-[15px] md:w-[412px] md:h-[416px] md:rounded-[30px] ">
      {props.children}
    </div>
  );
};
export default Card;
