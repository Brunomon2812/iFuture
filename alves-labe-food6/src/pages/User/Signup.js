import React, { useContext } from "react";
import {
  Flex,
  Input,
  Button,
  Heading,
  Image,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  InputRightElement,
  InputGroup,
  IconButton,
} from "@chakra-ui/react";
import Logo from "../../img/logo-future-eats-login.svg";
import { useForm } from "../../hooks/useForm";
import { GlobalContext } from "../../components/global/GlobalContext";
import Header from "../../components/Header";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function Signup() {
  const { form, onChange } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const { userSignUp, errors } = useContext(GlobalContext);
  const [show, setShow] = React.useState(false);
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleClickConfirmation = () => setShowConfirmation(!showConfirmation);

  return (
    <div>
      <Header name={''} onSignUp={true}></Header>
      <Flex
        flexDir={"column"}
        align={"center"}
        fontFamily={"Roboto"}
        w={"100%"}
        gap={"1.5rem"}
      >
        <Flex
          flexDir={"center"}
          justify={"center"}
          align={"center"}
          fontFamily={"Roboto"}
          w={"100%"}
        >
          <Flex flexDir={"column"} gap={"1rem"} w={"90%"}>
            <Image src={Logo} w={"30%"} alignSelf={"center"} marginTop={'1.5rem'}/>
            <Heading
              alignSelf={"center"}
              fontSize={"1.125rem"}
              paddingY={"0.75rem"}
              fontWeight={"400"}
              fontFamily={"Roboto"}
            >
              Sign up
            </Heading>
            <FormControl id="name" isRequired isInvalid={errors.name}>
              <FormHelperText marginBottom={"5px"}>Name*</FormHelperText>
              <Input
                placeholder={"Full name"}
                _placeholder={{ color: "#d0d0d0" }}
                h={"3.5rem"}
                onChange={onChange}
                type={"text"}
                name={"name"}
              ></Input>
              <FormErrorMessage>Name is required</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isRequired isInvalid={errors.email}>
              <FormHelperText marginBottom={"5px"}>Email*</FormHelperText>
              <Input
                placeholder={"email@email.com"}
                _placeholder={{ color: "#d0d0d0" }}
                h={"3.5rem"}
                onChange={onChange}
                type={"e-mail"}
                name={"email"}
              ></Input>
              <FormErrorMessage>Invalid email.</FormErrorMessage>
            </FormControl>
            <FormControl id="CPF" isRequired isInvalid={errors.cpf}>
              <FormHelperText marginBottom={"5px"}>CPF*</FormHelperText>
              <Input
                placeholder={"CPF"}
                _placeholder={{ color: "#d0d0d0" }}
                h={"3.5rem"}
                onChange={onChange}
                type={"number"}
                name={"cpf"}
              ></Input>
              <FormErrorMessage>
                The tax ID must be 11 digits.
              </FormErrorMessage>
            </FormControl>
            <FormControl id="password" isRequired isInvalid={errors.password}>
              <FormHelperText marginBottom={"5px"}>Password*</FormHelperText>
              <InputGroup size="md">
                <Input
                  placeholder={"At least 6 characters"}
                  _placeholder={{ color: "#d0d0d0" }}
                  h={"3.5rem"}
                  onChange={onChange}
                  type={show ? "text" : "password"}
                  name={"password"}
                ></Input>
                <InputRightElement width="4.5rem" h="100%">
                  <IconButton
                    h="100%"
                    fontSize="25px"
                    variant="unstyled"
                    onClick={handleClick}
                    icon={show ? <MdVisibilityOff /> : <MdVisibility />}
                  ></IconButton>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>Invalid password.</FormErrorMessage>
            </FormControl>
            <FormControl id="Confirm" isRequired isInvalid={errors.password}>
              <FormHelperText marginBottom={"5px"}>Confirm*</FormHelperText>
              <InputGroup size="md">
                <Input
                  placeholder={"Confirm password"}
                  _placeholder={{ color: "#d0d0d0" }}
                  h={"3.5rem"}
                  onChange={onChange}
                  type={showConfirmation ? "text" : "password"}
                  name={"password"}
                ></Input>
                <InputRightElement width="4.5rem" h="100%">
                  <IconButton
                    h="100%"
                    fontSize="25px"
                    variant="unstyled"
                    onClick={handleClickConfirmation}
                    icon={showConfirmation ? <MdVisibilityOff /> : <MdVisibility />}
                  ></IconButton>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                Deve ser a mesma que a anterior.
              </FormErrorMessage>
            </FormControl>
            <Button
              background={"#E8222E"}
              borderRadius={"0"}
              h={"2.625rem"}
              fontWeight={"400"}
              onClick={() => userSignUp(form)}
            >
              Create
            </Button>
            <Flex justify={"center"} marginTop={"0.75rem"}></Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
