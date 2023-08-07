import { FC, PropsWithChildren } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputProps,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";
import { currency, rateTypes } from "../forms/schema";

import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";

interface RateFieldProps extends InputProps, PropsWithChildren {}

const SelectorAddOn = styled(Select)`
  border: 0 !important;
  border-color: none !important;
  box-shadow: none !important;
`;

export const RateField: FC<RateFieldProps> = ({ children, isInvalid }) => {
  const { register } = useFormContext();

  return (
    <FormControl isRequired isInvalid={isInvalid}>
      <FormLabel>Rate</FormLabel>
      <InputGroup>
        <InputLeftAddon
          children={
            <SelectorAddOn defaultValue="hour" {...register("currency")}>
              {currency.map((curr) => (
                <option value={curr} key={curr} defaultChecked>
                  {curr}
                </option>
              ))}
            </SelectorAddOn>
          }
        />
        <Input
          type="number"
          {...register("rate", {
            valueAsNumber: true,
          })}
        />
        <InputRightAddon
          p="0"
          children={
            <SelectorAddOn defaultValue="HOUR" {...register("rate_type")}>
              {rateTypes.map((rate) => (
                <option value={rate} key={rate}>
                  {rate}
                </option>
              ))}
            </SelectorAddOn>
          }
        />
      </InputGroup>
      {children}
    </FormControl>
  );
};
