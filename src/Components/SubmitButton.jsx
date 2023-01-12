import { useHistory } from "react-router-dom";
const SubmitButton = (props) => {
  const history = useHistory();
  const btnClickHandler = (e) => {
    if (props.mark !== "") {
      history.push("/thanks-page");
    }
  };
  return (
    <button
      onClick={btnClickHandler}
      className="w-[279px] h-[45px] text-[14px] leading-[18px] flex justify-center items-center ml-[24px] outline-none
     rounded-[22.5px] mt-[24px] bg-[#FC7614] font-overpass font-bold text-white tracking-[1.87px] md:w-[341px] md:ml-[32px] md:tracking-[2px] md:text-[15px] md:leading-[19px]
     hover:bg-[white] hover:text-[#FC7614] md:mt-[32px]"
    >
      SUBMIT
    </button>
  );
};

export default SubmitButton;
