import { Flex, Image, Input, Text, Checkbox, Button } from "@chakra-ui/react";
import celebrationsBgImage from "../UI Images/Celebrations(Bg).png";
import progressBarImage from "../UI Images/progress bar.png";
import confettiImage from "../UI Images/Asset 1.png";
import musicNoteImage from "../UI Images/Yellow tone.png";
import { colors } from "../utils/colors";
import { useNavigate } from "react-router-dom";

const BasicDetailsPage = () => {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/?modal=otp");
  }

  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
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
      <Image
        src={celebrationsBgImage}
        marginTop={"-65px"}
        width={"400px"}
        height={"350px"}
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Flex direction={"column"} gap={"10px"} alignItems={"center"}>
          <Text
            fontFamily={"Gibson"}
            color={"white"}
            fontWeight={"bold"}
            fontSize={"18px"}
          >
            Register to create
          </Text>

          <Input
            type="tel"
            placeholder={"Phone Number"}
            bgColor={"white"}
            borderRadius={"30px"}
            required={true}
            maxLength={10}
            minLength={10}
          />
          <Input
            type={"text"}
            placeholder={"Full Name"}
            bgColor={"white"}
            borderRadius={"30px"}
            required
          />
          <Input
            type={"email"}
            placeholder={"Email ID"}
            bgColor={"white"}
            borderRadius={"30px"}
            required
          />
          <Flex
            width={"100%"}
            direction={"column"}
            gap={"10px"}
            paddingX={"20px"}
          >
            <Flex gap={"20px"} alignItems={"center"}>
              <Checkbox required />

              <Text fontFamily={"Gibson"} color={"white"} fontSize={"12px"}>
                I accept Terms & Conditions and Privacy Policy of
                Mondelez(Cadbury)
              </Text>
            </Flex>

            <Flex gap={"20px"} alignItems={"center"}>
              <Checkbox />

              <Text fontFamily={"Gibson"} color={"white"} fontSize={"12px"}>
                I would like to receive promotional communication from
                Mondelez(Cadbury) about its products and offers.
              </Text>
            </Flex>

            <Button
              type="submit"
              bgColor={colors.secondary}
              padding={"20px 30px"}
              borderRadius={"10px"}
              color={colors.primary}
            >
              <Text fontFamily={"Gibson"} fontWeight={"bold"} fontSize={"18px"}>
                Submit
              </Text>
            </Button>
          </Flex>
        </Flex>
      </form>

      <Image
        src={confettiImage}
        position={"absolute"}
        left={"20px"}
        bottom={"20px"}
        width={"60px"}
        height={"60px"}
      />

      <Image
        src={musicNoteImage}
        position={"absolute"}
        width={"25px"}
        height={"50px"}
        bottom={"80px"}
        right={"20px"}
      />
    </Flex>
  );
};

export default BasicDetailsPage;
