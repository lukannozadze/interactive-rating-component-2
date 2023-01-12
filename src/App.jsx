import { Fragment, useState } from "react";
import InteractivePage from "./Components/InteractivePage";
import ThanksPage from "./Components/ThanksPage";
import { Route } from "react-router-dom";
const App = () => {
  const [markValue, setMarkValue] = useState("");

  const getValue = (value) => {
    setMarkValue(value);
  };

  return (
    <Fragment>
      <Route path="/interactive-rating-component-2">
        <div className="h-screen bg-[#131518] flex justify-center items-center">
          <InteractivePage onGetValue={getValue} mark={markValue} />
        </div>
      </Route>
      <Route path="/thanks-page">
        <div className="h-screen bg-[#131518] flex justify-center items-center">
          <ThanksPage mark={markValue} />
        </div>
      </Route>
    </Fragment>
  );
};

export default App;
