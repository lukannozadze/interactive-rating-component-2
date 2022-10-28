import TextContent from "./Components/TextContent";
import Card from "./UI/Card";
import Icon from "./UI/Icon";
const App = () => {
  return (
    <div className="h-screen bg-[#131518] flex justify-center items-center">
      <Card>
        <Icon />
        <TextContent
          className="ml-[24px] mr-[24px] mt-[16px] font-overpass text-white"
          headerText="How did we do?"
          paragraphText="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        />
      </Card>
    </div>
  );
};

export default App;
