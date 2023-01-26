import {Box, Checkbox, Flex, Heading, HStack, Icon, Pressable,Stack,Text, VStack, Button} from 'native-base'
import { AntDesign, Feather } from '@expo/vector-icons'

export function Route({navigation}){
    let produtos = ["Caucaia", "Maracanaú", "Morada nova" ]
    return(
        <Box flex={1} bgColor='black' p={7}>
            <HStack my={10} space={2}>
                <Pressable >
                    <Icon as={<AntDesign name="arrowleft" />} size={8} color='white'/>
                </Pressable>
                <Heading color='white'>Produto</Heading>
                <Pressable >
                    <Icon as={<Feather name="search" />} mt={1} marginLeft={48} size={6} color='white'/>
                </Pressable>
            </HStack>
            <Box  alignSelf={'center'} mt={7} alignItems={'center'} w='100%' h='70%' display='flex'>
                <VStack space={8}>
                    {produtos.map((i)=>(
                        <Pressable onPress={()=>{navigation.navigate('newRoute')}}>
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
    )
}