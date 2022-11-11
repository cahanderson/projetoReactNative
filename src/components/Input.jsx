import { Input as NativeBaseInput } from 'native-base';

export function Input({ ...rest }) {
  return (
    <NativeBaseInput
      bg="gray.800"
      h={12}
      px={4}
      borderColor="gray.600"
      fontSize="md"
      fontFamily="body"
      color="black"
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.800",
        borderColor: "gray.600"
      }}
      {...rest}
    />
  );
}