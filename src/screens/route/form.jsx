import {Box, Checkbox, Flex, Heading, HStack, Icon, Pressable,Stack,Text, VStack, Button, Center, Select, CheckIcon} from 'native-base'
import { Input } from '../../components/Input';
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react';

export function NewRoute({navigation}){
    const uf = ['AC','AL','AM','BA','CE','DF','ES','GO','MA','MT','RS','MS','MG',]
    const [service, setService] = useState("");
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
            <Stack mt={5} space={6} w="100%" h='70%'>
                <Input 
                    w={{
                        base: "100%",
                        md: "25%"
                    }}
                    bg='white'
                    placeholderTextColor="gray.700"
                    placeholder="Nome"
                    onChangeText={(e) => setState({...state, codigo: e.target.value})}
                />
                <VStack mt={5} space={3}>
                    <Text color='white'>Localidades</Text>
                    <Input 
                        w={{
                            base: "100%",
                            md: "25%"
                        }}
                        bg='white'
                        placeholderTextColor="gray.700"
                        placeholder="Localidade"
                        onChangeText={(e) => setState({...state, nome: e.target.value})}
                    />
                </VStack>
                <HStack space={3} >
                    <VStack space={5} h="50%" w="80%" rounded="md" shadow={3} >
                        <Input
                            w={{ base: "100%", md: "25%" }}
                            bg='white'
                            placeholderTextColor="gray.700" 
                            placeholder="Custo (R$)"
                            onChangeText={(e) => setState({...state, custo: e.target.value})}
                        />

                        <HStack justifyContent={'space-between'}>
                        <Select 
                            selectedValue={service} 
                            minWidth="40%" 
                            accessibilityLabel="UF" 
                            placeholder="UF"
                            placeholderTextColor='white'
                            color='white'
                            // _item={{
                            //     color:'white'
                            // }}
                            _selectedItem={{
                                bgColor:'blue.100',
                                // endIcon: <CheckIcon size="5" />
                            }} 
                            mt={1} 
                            onValueChange={itemValue => 
                            setService(itemValue)}
                        >
                            {uf.map((i)=>(                            
                                <Select.Item label={i} value={i} />
                            ))}
                        </Select>
                            <Input 
                                w={{
                                    base: "50%",
                                    md: "25%"
                                }}
                                bg='white'
                                placeholderTextColor="gray.700"
                                placeholder="Fator preço"
                                onChangeText={(e) => setState({...state, codigo: e.target.value})}
                            />
                        </HStack>
                    </VStack>
                    <Center w="17%" rounded="md">
                        <Pressable onPress={()=>{navigation.navigate('products')}}>
                            <Icon as={<AntDesign name="close" />} size={8} color='white'/>
                        </Pressable>
                    </Center>
                </HStack>
            </Stack>
            <HStack  w="100%">
                <Button size="lg" variant="ghost" colorScheme="secondary" w='full'>
                    Excluir
                </Button>
            </HStack>

        </Box>
    )
}