import MyContainer from "components/Container/Container";
import { MetaHead } from "components/MetaHead/MetaHead";
import FarmComponent from "./commons/FarmComponent/FarmComponent";
import FarmHeading from "./commons/FarmHeading/FarmHeading";

const FarmView = () => {
  return (
    <>
      <MetaHead metaTitle="Farm" />
      <MyContainer my={"100px"}>
        <FarmHeading />
        <FarmComponent />
      </MyContainer>
    </>
  );
};

export default FarmView;
