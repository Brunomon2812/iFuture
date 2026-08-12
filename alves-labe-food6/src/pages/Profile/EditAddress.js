import { Input, Stack, Button, Flex, Image, Heading, FormControl, FormHelperText, FormErrorMessage } from "@chakra-ui/react";
import Header from "../../components/Header";
import { useForm } from "../../hooks/useForm";
import Logo from "../../img/logo-future-eats-login.svg";
import { GlobalContext } from "../../components/global/GlobalContext";
import { useContext, useEffect } from "react";
import { goBack, goToLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const EditAddress = () => {
  const { userAddAddress, errors, address } = useContext(GlobalContext);
  const navigate = useNavigate()
  const { form, onChange } = useForm(
    {
      street: address && address.street,
      number: address && address.number,
      neighbourhood: address && address.neighbourhood,
      city: address && address.city,
      state: address && address.state,
      complement: address && address.complement,
    }
  )

  useEffect(() => {
    !localStorage.getItem('token') && goToLoginPage(navigate)
  }, [])
  const submitEdit = () => {
    alert('Address updated successfully!')
  }
  return (
    <Stack>
      <Header name={'Address'} onEditAddress={true} />
      <Flex
        flexDir={"center"}
        justify={"center"}
        align={"center"}
        fontFamily={"Roboto"}
        w={"100%"}
      >
        <Flex flexDir={"column"} w={"90%"}>
          <FormControl id="street" isRequired isInvalid={errors.street}>
            <FormHelperText marginBottom={"5px"}>Street*</FormHelperText>
            <Input
              placeholder={"Street/Ave."}
              _placeholder={{ color: "#d0d0d0" }}
              h={"3.5rem"}
              onChange={onChange}
              type={"text"}
              name={"street"}
              value={form.street}
            ></Input>
            <FormErrorMessage>Street is required</FormErrorMessage>
          </FormControl>
          <FormControl id="number" isRequired isInvalid={errors.number}>
            <FormHelperText marginBottom={"5px"}>Number*</FormHelperText>
            <Input
              placeholder={"Number"}
              _placeholder={{ color: "#d0d0d0" }}
              h={"3.5rem"}
              onChange={onChange}
              type={"number"}
              value={form.number}
              name={"number"}
            ></Input>
            <FormErrorMessage>Number is required</FormErrorMessage>
          </FormControl>
          <FormControl id="complement" isInvalid={errors.complement}>
            <FormHelperText marginBottom={"5px"}>Address line 2</FormHelperText>
            <Input
              placeholder={"Apt./Unit"}
              _placeholder={{ color: "#d0d0d0" }}
              h={"3.5rem"}
              onChange={onChange}
              type={"text"}
              value={form.complement}
              name={"complement"}
            ></Input>
            <FormErrorMessage>Address line 2 is invalid.</FormErrorMessage>
          </FormControl>
          <FormControl
            id="neighbourhood"
            isRequired
            isInvalid={errors.neighbourhood}
          >
            <FormHelperText marginBottom={"5px"}>District*</FormHelperText>
            <Input
              placeholder={"District"}
              _placeholder={{ color: "#d0d0d0" }}
              h={"3.5rem"}
              onChange={onChange}
              value={form.neighbourhood}
              type={"text"}
              name={"neighbourhood"}
            ></Input>
            <FormErrorMessage>District is required.</FormErrorMessage>
          </FormControl>
          <FormControl id="city" isRequired isInvalid={errors.city}>
            <FormHelperText marginBottom={"5px"}>City*</FormHelperText>
            <Input
              placeholder={"City"}
              _placeholder={{ color: "#d0d0d0" }}
              h={"3.5rem"}
              onChange={onChange}
              type={"text"}
              value={form.city}
              name={"city"}
            ></Input>
            <FormErrorMessage>City is required.</FormErrorMessage>
          </FormControl>
          <FormControl id="state" isRequired isInvalid={errors.state}>
            <FormHelperText marginBottom={"5px"}>State*</FormHelperText>
            <Input
              placeholder={"State"}
              _placeholder={{ color: "#d0d0d0" }}
              h={"3.5rem"}
              onChange={onChange}
              type={"text"}
              value={form.state}
              name={"state"}
            ></Input>
            <FormErrorMessage>State is required.</FormErrorMessage>
          </FormControl>
          <Button
            background={"#E8222E"}
            marginTop={'1rem'}
            borderRadius={"0"}
            h={"2.625rem"}
            fontWeight={"400"}
            onClick={() => { userAddAddress(form); submitEdit() }}
          >
            Salvar
          </Button>
        </Flex>
      </Flex>

    </Stack>
  )

}
