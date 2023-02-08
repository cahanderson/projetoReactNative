import {Box, Heading, HStack, Icon, Pressable,Text, VStack} from 'native-base'
import { AntDesign, Feather } from '@expo/vector-icons'
import { Body as BodyComponent } from '../../components/Body';


export function Products({navigation}){
    const data = [
        { id: '1', name: 'Camisa Branca' },
        { id: '2', name: 'Calça Jeans' },
        { id: '3', name: 'Tênis Preto' },
        { id: '4', name: 'Jaqueta de Couro' },
      ];
    return(
        <BodyComponent
            title='Produtos'
        >
            <Box p={7}>
                <Box  alignSelf={'center'} mt={7} alignItems={'center'} w='100%' h='70%' display='flex'>
                    <VStack space={8}>
                        {data.map((i)=>(
                            <Pressable onPress={()=>{navigation.navigate('newProducts')}}>
                                <HStack space={10}>
                                    <Box width='200px'  ><Text fontSize={32} color='white'>{i}</Text></Box>
                                    <Box><Icon as={<AntDesign name="arrowright" />} size={10} color='white'/></Box>
                                </HStack>

                            </Pressable>
                        ))}
                    </VStack>
                </Box>
                <Box alignItems={'flex-end'} w='full'>
                    <Pressable >
                        <Icon as={<AntDesign name="pluscircleo" />} size={10} color='white'/>
                    </Pressable>
                </Box>
            </Box>
        </BodyComponent>
    )
}