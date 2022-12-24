import { Box } from "@chakra-ui/react";
import ActionButton from "components/ActionButton/ActionButton";
import { ThreDotsVericalIcon, ThreeDotsIcon } from "components/icons/ui-icons";
import { lazy, useState } from "react";

const MoreOptionsModal = lazy(() => import("./MoreOptionsModal"));

const MoreOptions = () => {
  const [openMoreOptionsModal, setOpenMoreOptionsModal] = useState(false);

  const handleOpenMoreOptionsModal = () => {
    setOpenMoreOptionsModal(true);
  };
  const handleCloseMoreOptionsModal = () => {
    setOpenMoreOptionsModal(false);
  };
  return (
    <Box position={"relative"}>
      <ActionButton
        variant={"secondary"}
        px="10px"
        h={{ xs: "40px", md: "46px" }}
        onClick={handleOpenMoreOptionsModal}
      >
        <ThreeDotsIcon fontSize={"25px"} />
      </ActionButton>

      {openMoreOptionsModal && (
        <MoreOptionsModal onClose={handleCloseMoreOptionsModal} />
      )}
    </Box>
  );
};

export default MoreOptions;

export const MoreOptionsV2 = ({
  placement = "left",
}: {
  placement?: "right" | "left";
}) => {
  const [openMoreOptionsModal, setOpenMoreOptionsModal] = useState(false);

  const handleOpenMoreOptionsModal = () => {
    setOpenMoreOptionsModal(true);
  };
  const handleCloseMoreOptionsModal = () => {
    setOpenMoreOptionsModal(false);
  };
  return (
    <Box position={"relative"}>
      <ActionButton
        w="auto"
        px="0"
        minW="0"
        bg="transparent"
        fontSize={"31px"}
        onClick={handleOpenMoreOptionsModal}
      >
        <ThreDotsVericalIcon />
      </ActionButton>

      {openMoreOptionsModal && (
        <MoreOptionsModal
          onClose={handleCloseMoreOptionsModal}
          placement={placement}
        />
      )}
    </Box>
  );
};
