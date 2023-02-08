import {Box, Center, Heading, HStack, Icon, Text, VStack} from 'native-base'
import { AntDesign, Feather } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import { Body as BodyComponent } from '../../components/Body'

export function CodingAuthentication({navigation}){

    return(
        <BodyComponent>
            <Box p={7}>
                <Box top='2'>
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