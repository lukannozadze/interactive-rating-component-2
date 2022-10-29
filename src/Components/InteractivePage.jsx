import MarkButtonList from "./MarkButtonList";
import SubmitButton from "./SubmitButton";
import TextContent from "./TextContent";
import Card from "../UI/Card";
import Icon from "../UI/Icon";

const InteractivePage = () => {
  return (
    <Card>
      <Icon />
      <TextContent
        className="ml-[24px] mr-[24px] mt-[16px] font-overpass text-white"
        headerText="How did we do?"
        paragraphText="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
      />
      <MarkButtonList />
      <SubmitButton />
    </Card>
  );
};
export default InteractivePage;
