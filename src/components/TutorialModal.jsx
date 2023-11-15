/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
} from "@chakra-ui/react";
import yellowCloseIcon from "../UI Images/Cross2.png";

const TutorialModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW={"90vw"} borderRadius={"18px"}>
        <ModalCloseButton _hover={{}} _focus={{}}>
          <Image src={yellowCloseIcon} />
        </ModalCloseButton>
        <ModalBody
          minH={"30vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text color={"#401272"} fontWeight={"bold"} fontSize={"25px"}>
            Tutorial Video
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TutorialModal;
