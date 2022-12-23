import {
  Modal,
  ModalContent,
  ModalContentProps,
  ModalOverlay,
  ModalOverlayProps,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IProps extends ModalContentProps {
  isOpen: boolean;
  onClose: () => void;
  size?: string;
  isCentered?: boolean;
  overlayProps?: ModalOverlayProps;
}

const MyModal = ({
  isOpen,
  onClose,
  children,
  size,
  isCentered = true,
  overlayProps,
  ...props
}: PropsWithChildren<IProps>) => {
  return (
    <>
      <Modal
        isCentered={isCentered}
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={size}
      >
        <ModalOverlay background={"rgba(0,0,0,0.7)"} {...overlayProps} />
        <ModalContent
          background={"#0B1426"}
          borderRadius="15px"
          width={"90%"}
          {...props}
        >
          {children}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;
