import {Box, Icon, Image,Pressable,Stack,Text, VStack} from 'native-base'
const img = require('../../assets/logo-shape.png');
import { Button } from "../../components/Button"; 
import { Input } from '../../components/Input';
import { Heading } from 'native-base';
import { useState } from 'react';
import {Eye, EyeSlash} from 'phosphor-react-native'
import { Body as BodyComponent } from '../../components/Body';

export function Login({navigation}){
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState(false);
    const [senha, setSenha] = useState(false);

    return(
        <BodyComponent>
            <Box 
                p={7} 
                top='5%'
                alignItems='center'
                justifyContent='center'
            >
                <Box>
                    <Image source={img} alt="Alternate Text" size="xl"/>
                </Box>
                 <Box my={10} display='flex' alignContent='flex-start'>
                    <Heading color='white'>Entrar</Heading>
                </Box>
                <Stack space={5} w="100%" alignItems="center">
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
                    <Text color='white'>Esqueceu a senha?</Text>
                </Stack>
                 <VStack  w="100%" mt={12} space={4} alignItems="center">
                    <Button
                        onPress={()=>navigation.navigate('products')}
                        title="Continuar"
                    />
                    <Text bold color='white'>ou</Text>
                    <Button
                        onPress={()=>navigation.navigate('qrcode')}
                        title="Ler QRCode"
                    />
                </VStack>
                <Box mt={'32'}>
                    <Pressable onPress={()=>navigation.navigate('newAccount')}>
                        <Text color='white'>É novo GalegoU? Cadastrar-se</Text>
                    </Pressable>
                </Box>

            </Box>
        </BodyComponent>
    )
}