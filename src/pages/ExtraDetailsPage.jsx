import { Button, Flex, Image, Input, Select, Text } from "@chakra-ui/react";
import progressBarImage from "../UI Images/progress bar3.png";
import messageImage from "../UI Images/Message.png";
import confettiImage from "../UI Images/Asset 1.png";
import musicNoteImage from "../UI Images/Purple tone.png";
import balloonImage from "../UI Images/Balloon.png";
import { colors } from "../utils/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExtraDetailsPage = () => {
  const navigate = useNavigate();

  const [showAdditionalQuestions, setShowAdditionalQuestions] = useState(false);
  const [petName, setPetName] = useState("");
  const [angry, setAngry] = useState("");
  const [funny, setFunny] = useState("");
  const [smile, setSmile] = useState("");
  const [movie, setMovie] = useState("");
  const [sport, setSport] = useState("");

  const user = localStorage.getItem("userData");
  let userData = {};

  if (user !== null) {
    userData = JSON.parse(user);
  }

  const handleOnSubmit = () => {
    userData = { ...userData, petName, angry, funny, smile, movie, sport };

    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/lyrics-page");
  };

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
        gap={"10px"}
        alignItems={"center"}
      >
        <Text
          fontFamily={"Gibson"}
          color={"white"}
          fontWeight={"bold"}
          fontSize={"18px"}
        >
          Tell us liitle more about them...
        </Text>

        <Image
          src={messageImage}
          height={"300px"}
          width={"300px"}
          objectFit={"contain"}
        />
        <form
          style={{ width: "100%" }}
          onSubmit={(e) => {
            e.preventDefault();
            handleOnSubmit();
          }}
        >
          <Flex
            width={"100%"}
            direction={"column"}
            gap={"10px"}
            alignItems={"center"}
            zIndex={"999"}
            overflowY={"scroll"}
            maxHeight={"40vh"}
            paddingBottom={"70px"}
          >
            <Flex
              width={"100%"}
              direction={"column"}
              flexShrink={0}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text
                fontFamily={"Gibson"}
                color={"white"}
                fontWeight={"bold"}
                fontSize={"18px"}
              >
                What's your pet name for them?
              </Text>

              <Input
                type={"text"}
                placeholder={"xxxxxxxxxxxxx"}
                bgColor={"white"}
                borderRadius={"30px"}
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                required
              />
            </Flex>

            <Flex
              width={"100%"}
              direction={"column"}
              flexShrink={0}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text
                fontFamily={"Gibson"}
                color={"white"}
                fontWeight={"bold"}
                fontSize={"18px"}
              >
                What makes them angry?
              </Text>
              <Input
                type={"text"}
                placeholder={"xxxxxxxxxxxxx"}
                bgColor={"white"}
                borderRadius={"30px"}
                value={angry}
                onChange={(e) => setAngry(e.target.value)}
                required
              />
            </Flex>
            <Flex
              width={"100%"}
              direction={"column"}
              flexShrink={0}
              alignItems={"center"}
              gap={"10px"}
            >
              <Text
                fontFamily={"Gibson"}
                color={"white"}
                fontWeight={"bold"}
                fontSize={"18px"}
              >
                What is the funniest thing they do?
              </Text>
              <Input
                type={"text"}
                placeholder={"xxxxx xxxxxxxxxxxxx"}
                bgColor={"white"}
                borderRadius={"30px"}
                value={funny}
                onChange={(e) => setFunny(e.target.value)}
                required
              />
            </Flex>
            {showAdditionalQuestions && (
              <>
                <Flex
                  width={"100%"}
                  direction={"column"}
                  flexShrink={0}
                  alignItems={"center"}
                  gap={"10px"}
                >
                  <Text
                    fontFamily={"Gibson"}
                    color={"white"}
                    fontWeight={"bold"}
                    fontSize={"18px"}
                  >
                    What makes them smile?
                  </Text>
                  <Input
                    type={"text"}
                    placeholder={"xxxxx xxxxxxxxxxxxx"}
                    bgColor={"white"}
                    borderRadius={"30px"}
                    value={smile}
                    onChange={(e) => setSmile(e.target.value)}
                    required={showAdditionalQuestions}
                  />
                </Flex>

                <Flex
                  width={"100%"}
                  direction={"column"}
                  flexShrink={0}
                  alignItems={"center"}
                  gap={"10px"}
                >
                  <Text
                    fontFamily={"Gibson"}
                    color={"white"}
                    fontWeight={"bold"}
                    fontSize={"18px"}
                  >
                    What is their favourite movie?
                  </Text>
                  <Input
                    type={"text"}
                    placeholder={"xxxxx xxxxxxxxxxxxx"}
                    bgColor={"white"}
                    borderRadius={"30px"}
                    value={movie}
                    onChange={(e) => setMovie(e.target.value)}
                    required={showAdditionalQuestions}
                  />
                </Flex>
                <Flex
                  width={"100%"}
                  direction={"column"}
                  flexShrink={0}
                  alignItems={"center"}
                  gap={"10px"}
                >
                  <Text
                    fontFamily={"Gibson"}
                    color={"white"}
                    fontWeight={"bold"}
                    fontSize={"18px"}
                  >
                    Their favourite sport.
                  </Text>
                  <Input
                    type={"text"}
                    placeholder={"xxxxx xxxxxxxxxxxxx"}
                    bgColor={"white"}
                    borderRadius={"30px"}
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                    required={showAdditionalQuestions}
                  />
                </Flex>
              </>
            )}
          </Flex>

          <Flex
            width={"100%"}
            background={
              "linear-gradient(360deg,rgba(50,5,112,1) 0%,rgba(50,5,112,.1) 100%)"
            }
            position={"absolute"}
            bottom={"10px"}
            zIndex={"1000"}
            gap={"20px"}
            justifyContent={"center"}
          >
            <Flex direction={"column"} gap={"5px"}>
              <Button
                marginTop={"15px"}
                bgColor={"#9658ed"}
                padding={"20px 30px"}
                borderRadius={"10px"}
                color={"white"}
                onClick={() =>
                  setShowAdditionalQuestions(!showAdditionalQuestions)
                }
              >
                <Text
                  fontFamily={"Gibson"}
                  fontWeight={"bold"}
                  fontSize={"18px"}
                >
                  Answer More
                </Text>
              </Button>
              <Text fontFamily={"Gibson"} color={"white"} fontSize={"12px"}>
                For enhanced personalisation
              </Text>
            </Flex>
            <Button
              marginTop={"15px"}
              bgColor={colors.secondary}
              padding={"20px 30px"}
              borderRadius={"10px"}
              color={colors.primary}
              type="submit"
            >
              <Text fontFamily={"Gibson"} fontWeight={"bold"} fontSize={"18px"}>
                Proceed
              </Text>
            </Button>
          </Flex>
        </form>

        <Image
          src={confettiImage}
          position={"absolute"}
          top={"300px"}
          left={"-20px"}
          width={"60px"}
          height={"60px"}
        />

        <Image
          src={balloonImage}
          position={"absolute"}
          top={"300px"}
          right={"20px"}
          width={"45px"}
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
      </Flex>
    </Flex>
  );
};

export default ExtraDetailsPage;
