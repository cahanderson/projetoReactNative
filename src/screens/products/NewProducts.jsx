import {Box, Checkbox, Flex, Heading, HStack, Icon, Pressable,Stack,Text, VStack, Button} from 'native-base'
import { Input } from '../../components/Input';
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react';

export function NewProducts({navigation}){
    const [state, setState] = useState({
        codigo:'',
        nome:'',
        custo: '',
        valorVenda:'',
    });

    return(
        <Box flex={1} bgColor='black' p={7}>
            <HStack my={10} space={3}>
                <Pressable onPress={()=>{navigation.navigate('products')}}>
                    <Icon as={<AntDesign name="arrowleft" />} size={8} color='white'/>
                </Pressable>
                <Heading color='white'>Crie sua conta</Heading>
                <Pressable >
                    <Icon as={<AntDesign name="check" />} marginLeft={24} size={8} color='green.800'/>
                </Pressable>
            </HStack>
            <Stack mt={5} space={6} w="100%" alignItems="center">
                <HStack space={16}>
                    <Input 
                        w={{
                            base: "50%",
                            md: "25%"
                        }}
                        bg='white'
                        placeholderTextColor="gray.700"
                        placeholder="Código"
                        onChangeText={(e) => setState({...state, codigo: e.target.value})}
                    />
                    <Checkbox value="one" my={2}>
                        <Text color='white'>Gerar código</Text>
                        
                    </Checkbox>
                </HStack>
                <Input 
                    w={{
                        base: "100%",
                        md: "25%"
                    }}
                    bg='white'
                    placeholderTextColor="gray.700"
                    placeholder="Nome"
                    onChangeText={(e) => setState({...state, nome: e.target.value})}
                />

                <Input
                    w={{ base: "100%", md: "25%" }}
                    bg='white'
                    placeholderTextColor="gray.700" 
                    placeholder="Custo (R$)"
                    onChangeText={(e) => setState({...state, custo: e.target.value})}
                />

                <Input
                    w={{
                        base: "100%",
                        md: "25%"
                    }}
                    bg='white'
                    placeholderTextColor="gray.700" 
                    // InputRightElement={
                    //     <Pressable onPress={() => setShow(!show)}>
                    //         <Icon as={show ? <Eye /> : <EyeSlash />} size={5} mr="2" color="muted.400" />
                    //     </Pressable>
                    // } 
                    placeholder="Valor de venda (R$)"
                    onChangeText={(e) => setState({...state, valorVenda: e.target.value})}
                />
            </Stack>
            <HStack  w="100%" mt={96}>
                <Button size="lg" variant="ghost" colorScheme="secondary" w='full'>
                    Excluir
                </Button>
            </HStack>

        </Box>
    )
}