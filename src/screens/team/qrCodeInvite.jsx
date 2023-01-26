import {Box, Checkbox, Flex, Heading, HStack, Icon, Pressable,Stack,Text, VStack, Button, Center, Select, CheckIcon, Image} from 'native-base'
import { Input } from '../../components/Input';
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react';
// const img = require('../../assets/featured');

export function Invitation({navigation}){
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
                <Heading color='white'>Convidar alguém</Heading>
                <Pressable >
                    <Icon as={<AntDesign name="check" />} marginLeft={24} size={8} color='green.800'/>
                </Pressable>
            </HStack>
            <Stack mt={5} space={6} w="100%" h='70%'>
                <Select 
                    selectedValue={service} 
                    minWidth="40%" 
                    accessibilityLabel="UF" 
                    placeholder="Vaga x"
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
                <Box>
                    <Image source={img} alt="Alternate Text" size="xl"/>
                </Box>
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
            </Stack>
            <HStack  w="100%">
                <Button size="lg" variant="ghost" colorScheme="secondary" w='full'>
                    Excluir
                </Button>
            </HStack>

        </Box>
    )
}