import { Button, Flex, Image, Input, Select, Text } from "@chakra-ui/react";
import progressBarImage from "../UI Images/progress bar1.png";
import capAndGiftImage from "../UI Images/Cap&Gift.png";
import confettiImage from "../UI Images/Asset 1.png";
import musicNoteImage from "../UI Images/Purple tone.png";
import balloonImage from "../UI Images/Balloon.png";
import { colors } from "../utils/colors";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const GeneralInfoPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    gender: "",
  });

  function handleInput(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  const user = localStorage.getItem("userData");
  let userData = {};

  if (user !== null) {
    userData = JSON.parse(user);
  }

  function handleSubmit() {
    userData = { ...userData, ...formValues };
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/song-preference");
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
        gap={"10px"}
        alignItems={"center"}
      >
        <Text
          fontFamily={"Gibson"}
          color={"white"}
          fontWeight={"bold"}
          fontSize={"18px"}
        >
          Tell us about your loved ones
        </Text>
        <Image
          src={capAndGiftImage}
          height={"300px"}
          width={"300px"}
          objectFit={"contain"}
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          style={{ width: "100%" }}
        >
          <Flex
            width={"100%"}
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
              Their name
            </Text>

            <Input
              type={"text"}
              placeholder={"xxxxx xxxxxxxxxxxxx"}
              bgColor={"white"}
              borderRadius={"30px"}
              value={formValues.name}
              name="name"
              onChange={handleInput}
            />

            <Text
              fontFamily={"Gibson"}
              color={"white"}
              fontWeight={"bold"}
              fontSize={"18px"}
            >
              How old they&apos;ll be this birthday
            </Text>
            <Input
              type={"number"}
              placeholder={"Age"}
              bgColor={"white"}
              borderRadius={"30px"}
              value={formValues.age}
              name="age"
              onChange={handleInput}
            />
            <Text
              fontFamily={"Gibson"}
              color={"white"}
              fontWeight={"bold"}
              fontSize={"18px"}
            >
              Gender
            </Text>
            <Select
              bgColor={"white"}
              borderRadius={"30px"}
              placeholder={"Select Gender"}
              value={formValues.gender}
              name="gender"
              onChange={handleInput}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Select>

            <Button
              type={"submit"}
              marginTop={"15px"}
              bgColor={colors.secondary}
              padding={"20px 30px"}
              borderRadius={"10px"}
              color={colors.primary}
              isDisabled={
                formValues.name == "" ||
                formValues.age == "" ||
                formValues.gender == ""
              }
            >
              <Text fontFamily={"Gibson"} fontWeight={"bold"} fontSize={"18px"}>
                Submit
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

export default GeneralInfoPage;
