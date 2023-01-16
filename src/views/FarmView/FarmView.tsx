import MyContainer from "components/Container/Container";
import FarmComponent from "./commons/FarmComponent/FarmComponent";
import FarmHeading from "./commons/FarmHeading/FarmHeading";

const FarmView = () => {
  return (
    <MyContainer>
      <FarmHeading />
      <FarmComponent />
    </MyContainer>
  );
};

export default FarmView;
