import { Button, Flex, Image, Text } from "@chakra-ui/react";
import progressBarImage from "../UI Images/progress bar5.png";
import confettiImage from "../UI Images/Asset 1.png";
import musicNoteImage from "../UI Images/Yellow tone.png";
import purpleMusicNoteImage from "../UI Images/Purple Music Tone.png";
import yellowballoonImage from "../UI Images/Balloon.png";
import balloonImage from "../UI Images/Balloon2.png";
import { colors } from "../utils/colors";
import LoadingScreen from "../components/LoadingScreen";
import { useState } from "react";
import celebrationsBgImage from "../UI Images/Celebrations(Bg) - hashtag.png";
import playButtonImage from "../UI Images/Play button.png";

const ShareSongPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      paddingTop={"20px"}
      paddingBottom={"10px"}
      paddingX={"20px"}
    >
      <Image
        src={progressBarImage}
        height={"12px"}
        width={"auto"}
        objectFit={"contain"}
      />

      <Flex
        marginTop={"20px"}
        direction={"column"}
        gap={"20px"}
        alignItems={"center"}
      >
        <Text
          fontFamily={"Gibson"}
          color={"white"}
          fontWeight={"bold"}
          fontSize={"18px"}
        >
          Your unique song is ready!
        </Text>
        <Flex
          direction={"column"}
          gap={"10px"}
          alignItems={"center"}
          zIndex={"999"}
          borderRadius={"12px"}
          color={colors.primary}
          border={`1px solid ${colors.secondary}`}
          paddingTop={"20px"}
          overflow={"hidden"}
          minH={"60vh"}
          justifyContent={"space-between"}
          position={"relative"}
        >
          <Text
            fontFamily={"Gibson"}
            color={colors.secondary}
            fontWeight={"bold"}
            fontSize={"18px"}
          >
            Happy birthday {"Mohit"}!
          </Text>
          <Image src={celebrationsBgImage} width={"300px"} height={"250px"} />

          <Image
            src={playButtonImage}
            position={"absolute"}
            top={"40%"}
            width={"60px"}
            height={"60px"}
            cursor={"pointer"}
          />

          <Flex width={"100%"} gap={"4px"} justifyContent={"center"}>
            <Button
              width={"50%"}
              bgColor={colors.secondary}
              padding={"20px 30px"}
              color={colors.primary}
            >
              <Text fontFamily={"Gibson"} fontWeight={"bold"} fontSize={"18px"}>
                Share
              </Text>
            </Button>

            <Button
              width={"50%"}
              bgColor={colors.secondary}
              padding={"20px 30px"}
              color={colors.primary}
            >
              <Text fontFamily={"Gibson"} fontWeight={"bold"} fontSize={"18px"}>
                Download
              </Text>
            </Button>
          </Flex>
        </Flex>

        <Flex
          width={"100%"}
          background={
            "linear-gradient(360deg,rgba(50,5,112,1) 0%,rgba(50,5,112,.1) 100%)"
          }
          position={"absolute"}
          bottom={"30px"}
          zIndex={"1000"}
          gap={"20px"}
          justifyContent={"center"}
        >
          <Button
            marginTop={"15px"}
            bgColor={colors.secondary}
            padding={"20px 30px"}
            borderRadius={"10px"}
            color={colors.primary}
          >
            <Text fontFamily={"Gibson"} fontWeight={"bold"} fontSize={"18px"}>
              Redeem Gift
            </Text>
          </Button>

          <Button
            marginTop={"15px"}
            bgColor={colors.secondary}
            padding={"20px 30px"}
            borderRadius={"10px"}
            color={colors.primary}
          >
            <Text fontFamily={"Gibson"} fontWeight={"bold"} fontSize={"18px"}>
              Create Again
            </Text>
          </Button>
        </Flex>
      </Flex>

      <Image
        src={confettiImage}
        position={"absolute"}
        top={"200px"}
        left={"30px"}
        width={"60px"}
        height={"60px"}
      />
      <Image
        src={purpleMusicNoteImage}
        position={"absolute"}
        width={"40px"}
        height={"40px"}
        left={"10px"}
        top={"360px"}
      />
      <Image
        src={balloonImage}
        position={"absolute"}
        top={"300px"}
        right={"20px"}
        width={"40px"}
        height={"50px"}
      />

      <Image
        src={yellowballoonImage}
        position={"absolute"}
        width={"40px"}
        height={"50px"}
        left={"30px"}
        bottom={"300px"}
      />
      <Image
        src={musicNoteImage}
        position={"absolute"}
        bottom={"300px"}
        right={"20px"}
        width={"30px"}
        height={"50px"}
      />

      <Image
        src={confettiImage}
        position={"absolute"}
        bottom={"100px"}
        right={"20px"}
        width={"60px"}
        height={"60px"}
      />
    </Flex>
  );
};

export default ShareSongPage;
