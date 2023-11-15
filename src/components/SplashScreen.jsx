import { Flex, Image, Text } from "@chakra-ui/react";
import bgImage from "../UI Images/BG.jpg";
import celebrationsBgImage from "../UI Images/Celebrations(Bg) - hashtag.png";

const SplashScreen = () => {
  return (
    <Flex
      height={"100vh"}
      width={"100%"}
      bgRepeat={"no-repeat"}
      bgImage={bgImage}
      bgSize={"cover"}
      alignItems={"center"}
      justifyContent={"center"}
      direction={"column"}
    >
      <Image src={celebrationsBgImage} maxW={"350px"} />
      <Text fontFamily={"Gibson"} color={"white"} fontWeight={"regular"}>
        A unique birthday song for everyone!
      </Text>
      <Text
        fontFamily={"Gibson"}
        color={"white"}
        mt={"10px"}
        fontWeight={"light"}
        fontStyle={"italic"}
        fontSize={"12px"}
      >
        इस birthday, कुछ अच्छा हो जाए कुछ मीठा हो जाए.
      </Text>
    </Flex>
  );
};

export default SplashScreen;
