import {Heading, HStack, Icon} from 'native-base'
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export function Sidebar({title, navigation, back}){
  return (
    <HStack mt={7} space='12%' mb='6'>
        <Pressable onPress={()=>navigation.navigate({back})}>
            <Icon as={<AntDesign name="arrowleft" />} size={8} color='white'/>
        </Pressable>
        <Heading alignItems='center' color='white'>{title}</Heading>
</HStack>
  );
}