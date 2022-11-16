import {Box, Center, Heading, HStack, Icon, Text, VStack} from 'native-base'
import { AntDesign, Feather } from '@expo/vector-icons'
import { Pressable } from 'react-native'

export function CodingAuthentication({navigation}){

    return(
        <Box flex={1} bgColor='black' p={7}>
            <Box alignItems={'center'} w='100%' h='75%' display='flex'>
                <HStack mt={7} space={2}>
                    <Pressable onPress={()=>navigation.navigate('plans')}>
                        <Icon as={<AntDesign name="arrowleft" />} size={8} color='white'/>
                    </Pressable>
                    <Heading alignItems='center' color='white'>Dados de pagamento</Heading>
                </HStack>
                <VStack justifyContent='center' alignContent='center'>
                    <Center>
                        <Text color='white'>Aguarde ser dispositivo ser liberado.</Text>
                    </Center>
                    <Center>
                        <Text color='white'>XYZ-KFX</Text>
                    </Center>
                </VStack>
            </Box>
        </Box>
    )
}