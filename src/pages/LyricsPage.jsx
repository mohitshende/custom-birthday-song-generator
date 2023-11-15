import { Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import progressBarImage from "../UI Images/progress bar4.png";
import { colors } from "../utils/colors";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import OpenAI from "openai";

const LyricsPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [lyrics, setLyrics] = useState();

  const user = localStorage.getItem("userData");
  let userData = {};

  if (user !== null) {
    userData = JSON.parse(user);
  }

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_CHAT_GPT_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  async function generateLyrics() {
    if (userData !== null) {
      try {
        const chatCompletion = await openai.chat.completions.create({
          messages: [
            {
              role: "user",
              content: `Wish a happy birthday to ${userData.name}. Their pet name is
          ${userData.petName}. 
          ${userData.angry} makes them angry. 
          ${userData.funny} makes them funniest. 
          ${userData.smile} makes them special.
          ${userData.movie} movie they likes/like the most.
          ${userData.sport} sports they likes/like the most.
          Ensure that "Happy birthday" is mentioned at least twice in the
          lyrics, and it should rhyme. The lyrics should use simple, short,
          and easy to pronounce words as much as possible. Using the above
          information about ${userData.name}, please write 16 lines of ${userData.genre}
          lyrics that I can dedicate to them for their birthday. Each line can
          have maximum of 8 words or 40 characters. The lyrics generated
          should be completely unique and never written before every single
          time and should not in any way or manner infringe on any
          trademarks/copyrights or any other rights of any individual or
          entity anywhere in the world. Any references or similarity to
          existing lyrics of any song anywhere in the world needs to be
          completely avoided. Any mention of proper nouns i.e. names or places
          of any manner apart from the ones mentioned above needs to be
          completely avoided. The lyrics generated should not be insensitive
          or should not offend any person/ place/ caste/ religion/ creed/
          tribe/ country/ gender/ government/ organisation or any entity or
          individual in any manner whatsoever. Any words which might be
          construed directly or indirectly as cuss words or are offensive in
          any language should also be completely avoided.`,
            },
          ],
          model: "gpt-3.5-turbo",
        });
        setLyrics(chatCompletion?.choices[0]?.message?.content);
        userData = {
          ...userData,
          lyrics: chatCompletion?.choices[0]?.message?.content,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        setIsLoading(false);
      } catch (error) {
        alert("Oops! Something went wrong");
        setIsLoading(false);
      }
    } else {
      navigate("/");
    }
  }

  useEffect(() => {
    generateLyrics();
  }, []);

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
          Your song's lyrics are ready!
        </Text>
        <Flex
          width={"100%"}
          direction={"column"}
          gap={"10px"}
          alignItems={"center"}
          zIndex={"999"}
          overflowY={"scroll"}
          maxHeight={"60vh"}
          bgColor={"white"}
          borderRadius={"12px"}
          color={colors.primary}
          padding={"20px"}
        >
          {isLoading ? <Spinner size={"lg"} /> : lyrics}
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
            bgColor={"#9658ed"}
            padding={"20px 30px"}
            borderRadius={"10px"}
            color={"white"}
            onClick={generateLyrics}
          >
            <Text fontFamily={"Gibson"} fontWeight={"bold"} fontSize={"18px"}>
              Recreate Lyrics
            </Text>
          </Button>

          <Button
            marginTop={"15px"}
            bgColor={colors.secondary}
            padding={"20px 30px"}
            borderRadius={"10px"}
            color={colors.primary}
            onClick={() => {
              navigate("/share-song");
            }}
          >
            <Text fontFamily={"Gibson"} fontWeight={"bold"} fontSize={"18px"}>
              Create Song
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LyricsPage;
