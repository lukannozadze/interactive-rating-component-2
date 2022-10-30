import { Fragment, useState } from "react";
import InteractivePage from "./Components/InteractivePage";
import ThanksPage from "./Components/ThanksPage";
const App = () => {
  const [clicked, setClicked] = useState(false);
  const [markValue, setMarkValue] = useState("");
  const getBtnStatus = () => {
    setClicked(true);
  };
  const getValue = (value) => {
    setMarkValue(value);
    if (value !== "") {
      setClicked(false);
    }
    console.log(value);
  };
  return (
    <Fragment>
      <div
        id="interactive-container"
        className={`h-screen bg-[#131518]  justify-center items-center ${
          clicked && markValue !== "" ? "hidden" : "flex"
        }`}
      >
        <InteractivePage onGetBtnStatus={getBtnStatus} onGetValue={getValue} />
      </div>
      <div
        id="thanks-container"
        className={`h-screen bg-[#131518] justify-center items-center ${
          clicked ? "flex" : "hidden"
        }`}
      >
        <ThanksPage mark={markValue} />
      </div>
    </Fragment>
  );
};

export default App;
