import { Box, HStack, Icon, Text, useColorMode, useColorModeValue } from "native-base";
import {Sun, Moon } from 'phosphor-react-native'
import { Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons'

export function Body({navigation, children, back, title}){
    const {toggleColorMode, colorMode} = useColorMode();
    const text = useColorModeValue("Light", "Dark");
    const bg = useColorModeValue("warmGray.50", "coolGray.800");
    return(
        <Box flex={1} bg={bg}>
                <HStack  px='2' top='15%' justifyContent={'space-between'}>
                    <Box>
                        <Pressable onPress={()=>navigation.navigate(back)}>
                            <Icon as={<AntDesign name="arrowleft" />} size={8}/>
                        </Pressable>    
                    </Box>
                    <Text fontSize="2xl">{title? title : null}</Text>
                    <Box>
                        <Pressable onPress={()=>{toggleColorMode()}}>
                            <Icon as={ colorMode == 'dark' ? <Sun color='#fff' /> : <Moon color='#000'/>} size={5} mr="2" color="muted.400"/>
                        </Pressable>
                    </Box>
                </HStack>
                <Box mt='14%'>
                    {children}
                </Box>
        </Box>
    )
}