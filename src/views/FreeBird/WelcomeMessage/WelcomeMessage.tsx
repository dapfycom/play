import { Flex } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import { AMessageIcon, SendMessageIcon } from "components/icons/ui-icons";
import { useState } from "react";
import InboundView from "./InboundView/InboundView";
import OutBoundView from "./OutBoundView/OutBoundView";

type viewType = "out" | "in";

const WelcomeMessage = () => {
  const [view, setView] = useState<viewType>("out");
  const handleChangeView = (v: viewType) => {
    setView(v);
  };

  let componentView = <OutBoundView />;
  switch (view) {
    case "out":
      componentView = <OutBoundView />;
      break;
    case "in":
      componentView = <InboundView />;

      break;

    default:
      break;
  }

  return (
    <Flex w="full" px={{ xs: 4, md: 10 }}>
      <Flex flexDir={"column"} align={{ xs: "center", xl: "flex-start" }}>
        <Flex gap={2} mb={14} flexDir={{ xs: "column", lg: "row" }}>
          <ActionButton
            fontSize={{ xs: "xs", md: "sm" }}
            borderRadius="full"
            variant={view === "out" ? "solid" : "ghost"}
            onClick={() => handleChangeView("out")}
            color="black"
          >
            <SendMessageIcon fontSize={"xl"} mr={1} />
            Outbound Welcome message
          </ActionButton>
          <ActionButton
            fontSize={{ xs: "xs", md: "sm" }}
            borderRadius="full"
            variant={view === "in" ? "solid" : "ghost"}
            color="black"
            onClick={() => handleChangeView("in")}
          >
            <AMessageIcon fontSize={"xl"} mr={1} />
            Inbound Welcome message
          </ActionButton>
        </Flex>
        {componentView}
      </Flex>
    </Flex>
  );
};

export default WelcomeMessage;
