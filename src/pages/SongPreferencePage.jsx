import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../utils/colors";
import progressBarImage from "../UI Images/progress bar2.png";
import headphoneImage from "../UI Images/Headphone.png";
import confettiImage from "../UI Images/Asset 1.png";
import musicNoteImage from "../UI Images/Purple Music tone.png";
import balloonImage from "../UI Images/Balloon2.png";
import happyImage from "../UI Images/Icons/Happy.png";
import romanticImage from "../UI Images/Icons/Romantic.png";
import funnyImage from "../UI Images/Icons/Funny.png";
import motivationalImage from "../UI Images/Icons/Motivational.png";
import calmImage from "../UI Images/Icons/Calm.png";
import rapImage from "../UI Images/Icons/Rap.png";
import rockImage from "../UI Images/Icons/Rock.png";
import popImage from "../UI Images/Icons/Pop.png";
import desiImage from "../UI Images/Icons/Desi.png";
import edmImage from "../UI Images/Icons/EDM.png";
import maleImage from "../UI Images/Icons/MAle.png";
import femaleImage from "../UI Images/Icons/Female.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MOODS = [
  {
    label: "Happy",
    image: happyImage,
  },
  {
    label: "Romantic",
    image: romanticImage,
  },
  ,
  {
    label: "Funny",
    image: funnyImage,
  },
  {
    label: "Motivational",
    image: motivationalImage,
  },
  {
    label: "Calm",
    image: calmImage,
  },
];

const GENRE = [
  {
    label: "Rap",
    image: rapImage,
  },
  {
    label: "Rock",
    image: rockImage,
  },
  ,
  {
    label: "Pop",
    image: popImage,
  },
  {
    label: "Desi",
    image: desiImage,
  },
  {
    label: "EDM",
    image: edmImage,
  },
];
const VOCALS = [
  {
    label: "Male",
    image: maleImage,
  },
  {
    label: "Female",
    image: femaleImage,
  },
];

const SongPreferencePage = () => {
  const navigate = useNavigate();

  const [moodValue, setMoodValue] = useState("");
  const [genreValue, setGenreValue] = useState("");
  const [vocalValue, setVocalValue] = useState("");

  const user = localStorage.getItem("userData");
  let userData = {};

  if (user !== null) {
    userData = JSON.parse(user);
  }

  const handleOnSubmit = () => {
    userData = { ...userData, moodValue, genreValue, vocalValue };
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/extra-details");
  };

  return (
    <Flex
      direction={"column"}
      paddingTop={"20px"}
      paddingBottom={"10px"}
      paddingX={"20px"}
      height={"100%"}
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
        gap={"10px"}
        alignItems={"center"}
      >
        <Text
          fontFamily={"Gibson"}
          color={"white"}
          fontWeight={"bold"}
          fontSize={"18px"}
          paddingX={"40px"}
          textAlign={"center"}
        >
          What would you like their song&apos;s vibe to be?
        </Text>

        <Image
          src={headphoneImage}
          height={"200px"}
          width={"200px"}
          objectFit={"contain"}
        />

        <Flex
          width={"100%"}
          direction={"column"}
          gap={"30px"}
          alignItems={"center"}
          zIndex={"999"}
          overflowY={"scroll"}
          maxHeight={"50vh"}
          paddingBottom={"50px"}
        >
          <Flex
            direction={"column"}
            border={`1px solid ${colors.secondary}`}
            borderRadius={"12px"}
            overflow={"hidden"}
            width={"100%"}
            flexShrink={0}
          >
            <Text
              fontFamily={"Gibson"}
              color={colors.primary}
              fontWeight={"bold"}
              fontSize={"18px"}
              padding={"5px"}
              bgColor={colors.secondary}
              textAlign={"center"}
            >
              Mood
            </Text>
            <Flex justifyContent={"space-between"} padding={"10px"}>
              {MOODS.map((mood) => (
                <Flex
                  key={mood.label}
                  gap={"5px"}
                  cursor={"pointer"}
                  direction={"column"}
                  alignItems={"center"}
                  onClick={() => setMoodValue(mood.label)}
                >
                  <Flex
                    width={"50px"}
                    height={"50px"}
                    bgColor={
                      moodValue === mood.label ? colors.secondary : "white"
                    }
                    borderRadius={"50%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Image src={mood.image} width={"30px"} height={"30px"} />
                  </Flex>
                  <Text color={"white"}>{mood.label}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>

          <Flex
            direction={"column"}
            border={`1px solid ${colors.secondary}`}
            borderRadius={"12px"}
            overflow={"hidden"}
            width={"100%"}
            flexShrink={0}
          >
            <Text
              fontFamily={"Gibson"}
              color={colors.primary}
              fontWeight={"bold"}
              fontSize={"18px"}
              padding={"5px"}
              bgColor={colors.secondary}
              textAlign={"center"}
            >
              Genre
            </Text>
            <Flex justifyContent={"space-between"} padding={"10px"}>
              {GENRE.map((genre) => (
                <Flex
                  key={genre.label}
                  gap={"5px"}
                  cursor={"pointer"}
                  direction={"column"}
                  alignItems={"center"}
                  onClick={() => setGenreValue(genre.label)}
                >
                  <Flex
                    width={"50px"}
                    height={"50px"}
                    bgColor={
                      genreValue === genre.label ? colors.secondary : "white"
                    }
                    borderRadius={"50%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Image
                      src={genre.image}
                      width={"40px"}
                      height={"40px"}
                      objectFit={"contain"}
                    />
                  </Flex>
                  <Text color={"white"}>{genre.label}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>

          <Flex
            direction={"column"}
            border={`1px solid ${colors.secondary}`}
            borderRadius={"12px"}
            overflow={"hidden"}
            width={"100%"}
            flexShrink={0}
          >
            <Text
              fontFamily={"Gibson"}
              color={colors.primary}
              fontWeight={"bold"}
              fontSize={"18px"}
              padding={"5px"}
              bgColor={colors.secondary}
              textAlign={"center"}
            >
              Singer's Voice
            </Text>
            <Flex gap={"10px"} padding={"10px"} justifyContent={"center"}>
              {VOCALS.map((vocal) => (
                <Flex
                  key={vocal.label}
                  gap={"5px"}
                  cursor={"pointer"}
                  height={"100%"}
                  direction={"column"}
                  alignItems={"center"}
                  onClick={() => setVocalValue(vocal.label)}
                >
                  <Flex
                    width={"130px"}
                    height={"60px"}
                    bgColor={
                      vocalValue === vocal.label ? colors.secondary : "white"
                    }
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius={"8px"}
                  >
                    <Image src={vocal.image} width={"50px"} height={"70px"} />
                  </Flex>
                  <Text color={"white"}>{vocal.label}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>

        <Flex
          paddingTop={"20px"}
          width={"100%"}
          justifyContent={"center"}
          background={
            "linear-gradient(360deg,rgba(50,5,112,1) 0%,rgba(50,5,112,.1) 100%)"
          }
          position={"absolute"}
          bottom={"20px"}
          zIndex={"1000"}
        >
          <Button
            marginTop={"15px"}
            bgColor={colors.secondary}
            padding={"20px 30px"}
            borderRadius={"10px"}
            color={colors.primary}
            isDisabled={moodValue == "" || genreValue == "" || vocalValue == ""}
            onClick={handleOnSubmit}
          >
            <Text fontFamily={"Gibson"} fontWeight={"bold"} fontSize={"18px"}>
              Submit
            </Text>
          </Button>
        </Flex>

        <Image
          src={confettiImage}
          position={"absolute"}
          bottom={"40px"}
          right={"-15px"}
          width={"60px"}
          height={"60px"}
        />

        <Image
          src={balloonImage}
          position={"absolute"}
          top={"280px"}
          right={"20px"}
          width={"45px"}
          height={"50px"}
        />

        <Image
          src={musicNoteImage}
          position={"absolute"}
          width={"40px"}
          height={"40px"}
          left={"10px"}
          top={"360px"}
        />
      </Flex>
    </Flex>
  );
};

export default SongPreferencePage;
