import {Box, Flex, HStack, Icon, Image,Pressable,Stack,Text, VStack} from 'native-base'
import { Button } from "../../components/Button"; 
import { Input } from '../../components/Input';
import { Heading } from 'native-base';
import { AntDesign, Feather } from '@expo/vector-icons'
import { useState } from 'react';

export function PaymentPlan({navigation}){
    [show, setShow] = useState(false);
    [email, setEmail] = useState(false);
    [senha, setSenha] = useState(false);
    return(
        <Box flex={1} bgColor='black' p={7}>
            <HStack mt={7} space={2}>
                <Pressable onPress={()=>navigation.navigate('plans')}>
                    <Icon as={<AntDesign name="arrowleft" />} size={8} color='white'/>
                </Pressable>
                <Heading alignItems='center' color='white'>Dados de pagamento</Heading>
            </HStack>
            <Box alignItems={'center'} w='100%' h='75%' display='flex'>
                <VStack mt={8} space={5} w="100%" alignItems="center">
                    <Input 
                        w={{
                            base: "100%",
                            md: "25%"
                        }}
                        bg='white'
                        placeholderTextColor="gray.700"
                        placeholder="Titular do cartão"
                        onChangeText
                    />

                    <Input
                        w={{
                            base: "100%",
                            md: "25%"
                        }}
                        bg='white'
                        placeholderTextColor="gray.700" 
                        placeholder="Número do cartão" 
                    />
                    <HStack >
                        <Input 
                            w={{
                                base: "100%",
                                md: "25%"
                            }}
                            bg='white'
                            placeholderTextColor="gray.700"
                            placeholder="Data de validade"
                            onChangeText
                        />
                        <Input 
                            w={{
                                base: "40%",
                                md: "25%"
                            }}
                            bg='white'
                            placeholderTextColor="gray.700"
                            placeholder="CVV"
                            onChangeText
                        />
                    </HStack>

                    <Input
                        w={{
                            base: "100%",
                            md: "25%"
                        }}
                        bg='white'
                        placeholderTextColor="gray.700" 
                        placeholder="CPF" 
                    />
                </VStack>
                <Box mt={10}>
                    <Text color='white'>
                        Texto explicativo sobre a cobrança do cartão
                    </Text>
                </Box>
            </Box>
            <HStack  w="100%" mt={10} space={4} alignItems="center">
                <Button
                    title="Concordar e assinar"
                    onPress={()=>navigation.navigate('products')}
                />
            </HStack>
        </Box>
    )
}