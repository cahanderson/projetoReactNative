import { Box, Icon, useColorMode } from "native-base";
import {Sun, Moon } from 'phosphor-react-native'
import { Pressable } from "react-native";

export function Body({children}){
    const {toggleColorMode, colorMode} = useColorMode();
    console.log(colorMode);
    return(
        <Box 
            flex={1} 
            _dark={{
                bg: "#121212"
            }} 
            _light={{
                bg: "warmGray.50"
            }}>
                <Box alignItems={'flex-end'} top='7%'>
                    <Pressable onPress={toggleColorMode}>
                        <Icon as={ colorMode == 'dark' ? <Sun color='#fff' /> : <Moon color='#000'/>} size={5} mr="2" color="muted.400" />
                    </Pressable>
                </Box>
            {children}
        </Box>
    )
}