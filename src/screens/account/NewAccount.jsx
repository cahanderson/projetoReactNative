import {Box, Icon, Image,Pressable,Stack,Text, VStack} from 'native-base'
const img = require('../../assets/logo-shape.png');
import { Button } from "../../components/Button"; 
import { Input } from '../../components/Input';
import { Heading } from 'native-base';
import { useState } from 'react';
import {Eye, EyeSlash } from 'phosphor-react-native'

export function NewAccount({navigation}){
    [show, setShow] = useState(false);
    [email, setEmail] = useState(false);
    [senha, setSenha] = useState(false);
    return(
        <Box flex={1} bgColor='black' p={7} display='flex' justifyContent='center' alignItems='center'>
            <Box>
                <Image source={img} alt="Alternate Text" size="xl"/>
            </Box>
            <Box my={10} display='flex' alignContent='flex-start'>
                <Heading color='white'>Crie sua conta</Heading>
            </Box>
            <Stack space={5} w="100%" alignItems="center">
                <Input 
                    w={{
                        base: "100%",
                        md: "25%"
                    }}
                    bg='white'
                    placeholderTextColor="gray.700"
                    placeholder="Nome"
                    onChangeText
                />

                <Input
                    w={{
                        base: "100%",
                        md: "25%"
                    }}
                    bg='white'
                    placeholderTextColor="gray.700" 
                    type={show ? "text" : "password"} 
                    placeholder="Telefone" 
                />
                <Input 
                    w={{
                        base: "100%",
                        md: "25%"
                    }}
                    bg='white'
                    placeholderTextColor="gray.700"
                    placeholder="E-mail"
                    onChangeText
                />

                <Input
                    w={{
                        base: "100%",
                        md: "25%"
                    }}
                    bg='white'
                    placeholderTextColor="gray.700" 
                    type={show ? "text" : "password"} 
                    InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                            <Icon as={show ? <Eye /> : <EyeSlash />} size={5} mr="2" color="muted.400" />
                        </Pressable>
                    } 
                    placeholder="Senha" 
                />
                <Text fontSize={'xs'} color='white'>A senha deve ter: min. 8 carácteres, 1 letra maiúscula, 1 minúscula e 1 número.</Text>
            </Stack>
            <Box mt={10}>
                <Text color='white'>
                    Ao decidir "Aceitar e Continuar", você estará concordando com nosso Termo de Uso e declare ter lido nosso Termo de Privacidade.
                </Text>
            </Box>
            <VStack  w="100%" mt={10} space={4} alignItems="center">
                <Button
                    title="Aceitar e continuar"
                    onPress={()=>navigation.navigate('plans')}
                />
            </VStack>

        </Box>
    )
}