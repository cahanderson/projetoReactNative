import {Box, Image,Text, VStack} from 'native-base'
import {Button as ButtonNative} from 'native-base'
const img = require('../assets/logo-shape.png');
import { Button } from "../components/Button"; 
import { useNavigation } from '@react-navigation/native';


export function SignIn(){
    const navigation = useNavigation({navigation})
    return(
        <Box flex={1} bgColor='black' p={7} display='flex' justifyContent='center' alignItems='center'>
            <Image source={img} alt="Alternate Text" size="xl"/>
                <Text fontSize="2xl" mt={16} color='white'>Seu App de vendas externas</Text>
                <Text fontSize="sm" mt={4} mb={10} color='white'>Venda com o GalegoU com planos a partir de{'\n'} R$39,90/mês.</Text>

                <VStack  w="100%" mt={24} space={4} alignItems="center">
                    <Button
                        title="Começar agora"
                        onPress={()=>navigation.navigate('newAccount')}
                    />
                    <ButtonNative 
                        size="sm" 
                        variant="ghost" 
                        color='white'
                        w='full'
                        onPress={()=>navigation.navigate('login')}
                    >
                        <Text
                            bold
                            color='white'
                        >
                            Entrar
                        </Text>
                    </ButtonNative>
                </VStack>
        </Box>
    )
}