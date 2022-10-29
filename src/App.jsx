import { Fragment } from "react";
import InteractivePage from "./Components/InteractivePage";
import ThanksPage from "./Components/ThanksPage";
const App = () => {
  return (
    <Fragment>
      <div
        id="interactive-container"
        className="h-screen bg-[#131518]  justify-center items-center hidden"
      >
        <InteractivePage />
      </div>
      <div
        id="thanks-container"
        className="h-screen bg-[#131518] flex justify-center items-center"
      >
        <ThanksPage />
      </div>
    </Fragment>
  );
};

export default App;
