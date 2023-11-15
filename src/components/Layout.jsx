import {
  Flex,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import bgImage from "../UI Images/BG.jpg";
import cadburyLogo from "../UI Images/Cadbury Logo.png";
import hashtagImage from "../UI Images/2d logo.png";
import hamburgerImage from "../UI Images/Hamburger.png";
import hamburgerBGImage from "../UI Images/Hamburger Menu.png";
import FooterLogo from "../UI Images/MDLZ SMR Logo Reversed RGB 1.png";
import whiteCloseIcon from "../UI Images/Cross.png";
import TutorialModal from "./TutorialModal";
import OTPModal from "./OTPModal";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [searchParams] = useSearchParams();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isTutorialModalOpen,
    onClose: onTutorialModalClose,
    onOpen: onTutorialModalOpen,
  } = useDisclosure();

  const {
    isOpen: isOTPModalOpen,
    onClose: onOTPModalClose,
    onOpen: onOTPModalOpen,
  } = useDisclosure();

  useEffect(() => {
    if (searchParams.get("modal") == "otp") {
      onOTPModalOpen();
    } else {
      onOTPModalClose();
    }
  }, [searchParams]);

  return (
    <Flex
      height={"100vh"}
      width={"100%"}
      bgRepeat={"no-repeat"}
      bgImage={bgImage}
      bgSize={"cover"}
      direction={"column"}
    >
      <Flex
        bgColor={"rgba(55,4,116,1)"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingX={"20px"}
      >
        <Flex alignItems={"center"}>
          <Image src={cadburyLogo} height={"40px"} width={"100px"} />
          <Image
            src={hashtagImage}
            height={"80px"}
            width={"200px"}
            objectFit={"cover"}
          />
        </Flex>
        <Image
          src={hamburgerImage}
          height={"32px"}
          width={"32px"}
          cursor={"pointer"}
          onClick={onOpen}
        />
      </Flex>
      {children}

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bgImage={hamburgerBGImage}
          bgSize={"cover"}
          bgColor={"unset"}
          boxShadow={"unset"}
        >
          <DrawerHeader display={"flex"} justifyContent={"flex-end"}>
            <Image
              src={whiteCloseIcon}
              height={"30px"}
              cursor={"pointer"}
              onClick={onClose}
            />
          </DrawerHeader>

          <DrawerBody color={"white"}>
            <Flex
              direction={"column"}
              mt={"100px"}
              //   justifyContent={"center"}
              alignItems={"center"}
              gridGap={"65px"}
            >
              <Text
                mt={"50px"}
                onClick={() => {
                  onTutorialModalOpen();
                  onClose();
                }}
              >
                How to Participate
              </Text>
              <Text>Terms & Conditions</Text>
              <Text>Privacy Policy</Text>
              <Text>Contact Us</Text>
            </Flex>
          </DrawerBody>

          <DrawerFooter
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src={FooterLogo} height={"52px"} width={"160px"} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <TutorialModal
        isOpen={isTutorialModalOpen}
        onClose={onTutorialModalClose}
      />

      <OTPModal isOpen={isOTPModalOpen} onClose={onOTPModalClose} />
    </Flex>
  );
};

export default Layout;
