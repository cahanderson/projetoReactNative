import { Button as ButtonNativeBase, Text } from 'native-base';

export function Button({ title,...rest }) {
  return (
    <ButtonNativeBase
      w="full"
      h={12}
      rounded="md"
      bgColor='blue.700'
      _pressed={{
        bg:"blue.500"
      }}
      {...rest}
    >
        <Text
            bold
            fontSize="lg"
            color='white'
        >
            {title}
        </Text>
    </ButtonNativeBase >
  );
}