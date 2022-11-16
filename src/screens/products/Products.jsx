import {Box, Checkbox, Flex, Heading, HStack, Icon, Pressable,Stack,Text, VStack, Button} from 'native-base'
import { Input } from '../../components/Input';
import { AntDesign, Feather } from '@expo/vector-icons'
import { useState } from 'react';

export function Products({navigation}){
    let produtos = ["Calcinha", "short", "calça" ]
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
            <Box mt={5} space={6} w="100%" alignItems="center">
                <Pressable onPress={()=>{navigation.navigate('newProducts')}}>
                    <HStack space={10}>
                        {produtos.forEach(i=>(
                            <Box><Text color='white'>{i}</Text></Box>
                        ))}
                        <Text fontSize={32} color='white'>Calcinha</Text>
                        <Icon as={<AntDesign name="arrowright" />} size={10} color='white'/>
                    </HStack>

                </Pressable>
            </Box>
            {/* <Box mt={80} alignSelf='end' w='full'>
                <Pressable >
                    <Icon as={<AntDesign name="pluscircleo" />}  size={12} color='white'/>
                </Pressable>
            </Box> */}
        </Box>
    )
}