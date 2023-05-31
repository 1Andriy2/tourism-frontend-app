import {
  VStack,
  Input,
  Button,
  Textarea,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { RiUserReceived2Line } from "react-icons/ri";
import { BsFillCalendarDateFill } from "react-icons/bs";

import useRentForm from "../model/use-rent-form";
import { IToursimPlacesCollection } from "../../../entities/tourism-card/ui/tourism-card";

import { useQuery } from "react-query";
import { fetchBook } from "../../../shared/api";

export default function RentForm({
  tourism,
}: {
  tourism: IToursimPlacesCollection;
}) {
  const { formik, isSubmitingLoading } = useRentForm(tourism);
  const { data: recommendData, isLoading: recommendLoading } = useQuery(
    "book",
    fetchBook
  );
  console.log(recommendData);

  return (
    
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing={4}>
        <InputGroup size={"lg"}>
          <InputLeftElement pointerEvents="none">
            <RiUserReceived2Line />
          </InputLeftElement>
          <Input
            name="name"
            type={"text"}
            placeholder="How we can call you"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isSubmitingLoading}
          />
        </InputGroup>

        <InputGroup size={"lg"}>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.300" />
          </InputLeftElement>
          <Input
            name="phone"
            type={"number"}
            placeholder="Your phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isSubmitingLoading}
          />
        </InputGroup>

        <InputGroup size={"lg"}>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.300" />
          </InputLeftElement>
          <Input
            name="email"
            type={"email"}
            placeholder="Your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isSubmitingLoading}
          />
        </InputGroup>
        
        <Select placeholder="Select option">
          {
            recommendData && recommendData.map((data: any, key: any) => (
                <option key={key}>{data.name}</option>
            ))
          }
        </Select>
        
        <InputGroup size={"lg"}>
          <InputLeftElement pointerEvents="none">
            <BsFillCalendarDateFill />
          </InputLeftElement>
          Start Date
          <Input
            name="start_date"
            type={"datetime-local"}
            placeholder="Your start date"
            value={formik.values.start_date.toString()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isSubmitingLoading}
          />
          <InputRightAddon w="100px" children="start date" />
        </InputGroup>

        <InputGroup size={"lg"}>
          <InputLeftElement pointerEvents="none">
            <BsFillCalendarDateFill />
          </InputLeftElement>
          End Date
          <Input
            name="end_date"
            type={"datetime-local"}
            placeholder="Your end date"
            value={formik.values.end_date.toLocaleString()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={isSubmitingLoading}
          />
          <InputRightAddon w="100px" children="end date" />
        </InputGroup>

        <Textarea
          name="wishes"
          placeholder="Here is a sample placeholder"
          size="lg"
          resize={"none"}
          value={formik.values.wishes}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={isSubmitingLoading}
        />

        <Button
          type="submit"
          w="100%"
          loadingText="Claimng..."
          isLoading={isSubmitingLoading}
          disabled={isSubmitingLoading}
        >
          Claim {tourism.title}
        </Button>
      </VStack>
    </form>
  );
}
