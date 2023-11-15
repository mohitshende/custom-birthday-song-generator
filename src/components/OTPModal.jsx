/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
  PinInput,
  PinInputField,
  HStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import yellowCloseIcon from "../UI Images/Cross2.png";
import { colors } from "../utils/colors";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OTPModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [pinInput, setPinInput] = useState("");

  function onModalClose() {
    navigate("/");
    onClose();
  }

  function handleSubmit() {
    navigate("/general-info");
  }

  function handlePinInput(e) {
    setPinInput(e);
  }

  return (
    <Modal isOpen={isOpen} onClose={onModalClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW={"90vw"} borderRadius={"18px"}>
        <ModalCloseButton _hover={{}} _focus={{}} onClick={onModalClose}>
          <Image src={yellowCloseIcon} />
        </ModalCloseButton>
        <ModalBody
          minH={"30vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"10px"}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Flex alignItems={"center"} flexDirection={"column"}>
              <Text
                color={colors.primary}
                fontWeight={"bold"}
                fontSize={"25px"}
                marginBottom={"10px"}
              >
                Enter OTP
              </Text>
              <HStack>
                <PinInput placeholder="" onChange={handlePinInput}>
                  <PinInputField bgColor={colors.primary} color={"white"} />
                  <PinInputField bgColor={colors.primary} color={"white"} />
                  <PinInputField bgColor={colors.primary} color={"white"} />
                  <PinInputField bgColor={colors.primary} color={"white"} />
                </PinInput>
              </HStack>

              <Text
                marginTop={"10px"}
                width={"100%"}
                color={colors.primary}
                fontWeight={"bold"}
                textDecoration={"underline"}
                textAlign={"right"}
                fontSize={"14px"}
              >
                Resend OTP
              </Text>
            </Flex>
            <Button
              type="submit"
              bgColor={colors.secondary}
              padding={"20px 60px"}
              borderRadius={"10px"}
              color={colors.primary}
              isDisabled={
                pinInput == "" || pinInput.length == 0 || pinInput.length < 4
              }
            >
              <Text fontFamily={"Gibson"} fontWeight={"bold"} fontSize={"18px"}>
                Submit
              </Text>
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OTPModal;
