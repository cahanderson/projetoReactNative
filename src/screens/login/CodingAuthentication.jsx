import {Box, Center, Text, VStack} from 'native-base'
import { Body as BodyComponent } from '../../components/Body'

export function CodingAuthentication({navigation}){
    function changeView(){
        navigation.navigate('product')
    }

    setTimeout(() => {
        changeView()
      }, 2000);

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