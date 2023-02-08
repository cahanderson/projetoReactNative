import { FormControl, Input as NativeBaseInput } from 'native-base';

export function Input({ ErrorMessage=null, isInvalid, ...rest }) {
  const invalid = !!ErrorMessage || isInvalid;
  return (
    <FormControl isInvalid={invalid}>
      <NativeBaseInput
        w={{base: "100%",md: "25%"}}
        h={12}
        px={4}
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
          bg: "gray.600",
          borderColor: "gray.600",
          color:'white',
          placeholderTextColor:"white"
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>
        {ErrorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}