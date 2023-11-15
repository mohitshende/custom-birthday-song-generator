import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import confettiImage from "../UI Images/Asset 1.png";
import musicNoteImage from "../UI Images/Purple tone.png";
import yellowMusicNoteImage from "../UI Images/Yellow tone.png";
import purpleMusicNoteImage from "../UI Images/Purple Music Tone.png";
import guitarImage from "../UI Images/Guitar 12th screen.png";
import desiImage from "../UI Images/Desi_.png";

const LoadingScreen = () => {
  const [currentImage, setCurrentImage] = useState(guitarImage);

  useEffect(() => {
    let interval = setInterval(() => {
      if (currentImage === guitarImage) {
        setCurrentImage(desiImage);
      } else {
        setCurrentImage(guitarImage);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <Flex
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        marginTop={"20px"}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text
          fontFamily={"Gibson"}
          color={"white"}
          fontWeight={"bold"}
          fontSize={"18px"}
        >
          Please wait
        </Text>
        <Text
          fontFamily={"Gibson"}
          color={"white"}
          fontWeight={"bold"}
          fontSize={"18px"}
        >
          while we compose your song
        </Text>

        <Image
          marginTop={"20px"}
          src={currentImage}
          width={"300px"}
          height={"300px"}
          objectFit={"contain"}
        />
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
        src={yellowMusicNoteImage}
        position={"absolute"}
        top={"300px"}
        right={"20px"}
        width={"30px"}
        height={"50px"}
      />

      <Image
        src={musicNoteImage}
        position={"absolute"}
        width={"25px"}
        height={"50px"}
        left={"30px"}
        bottom={"20px"}
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

export default LoadingScreen;
