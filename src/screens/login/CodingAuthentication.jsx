import {Box, Center, Heading, HStack, Icon, Text, VStack} from 'native-base'
import { AntDesign, Feather } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import { Body as BodyComponent } from '../../components/Body'

export function CodingAuthentication({navigation}){

    return(
        <BodyComponent>
            <Box p={7}>
                <Box top='2'>
                    <HStack space='5%' mb='6'>
                        <Pressable onPress={()=>navigation.navigate('home')}>
                            <Icon as={<AntDesign name="arrowleft" />} size={8} color='white'/>
                        </Pressable>
                        <Heading alignItems='center' color='white'>Dados de pagamento</Heading>
                    </HStack>
                    <VStack justifyContent='center' alignContent='center'>
                        <Center>
                            <Text>Aguarde ser dispositivo ser liberado.</Text>
                        </Center>
                        <Center>
                            <Text color='white'>XYZ-KFX</Text>
                        </Center>
                    </VStack>
                </Box>
            </Box>
        </BodyComponent>
    )
}