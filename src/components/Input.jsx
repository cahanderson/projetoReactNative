import { FormControl, Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ErrorMessage=null, isInvalid, ...rest }) {
  const invalid = !!ErrorMessage || isInvalid;
  return (
    <FormControl isInvalid={invalid} >
      <NativeBaseInput
        h={12}
        px={4}
        w={{
          base: "100%",
          md: "25%"
      }}
        isInvalid={invalid}
        borderColor="gray.600"
        fontSize="md"
        bg='white'
        fontFamily="body"
        color="black"
        placeholderTextColor="gray.700"
        _invalid={{
          borderWidth:2,
          borderColor:'red.500'
        }}
        _focus={{
          bg: "gray.800",
          borderColor: "gray.600"
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>
        {ErrorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}