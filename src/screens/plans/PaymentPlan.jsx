import {Box, HStack, Icon, Pressable,Text, VStack} from 'native-base'
import { Button } from "../../components/Button"; 
import { Input } from '../../components/Input';
import { Heading } from 'native-base';
import { AntDesign } from '@expo/vector-icons'
import { Body as BodyComponent } from '../../components/Body';
import { useState } from 'react';

export function PaymentPlan({navigation}){
    const [cardHolder, setCardHolder] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const[validDate, setValidDate] = useState('');
    const[cvv, setCvv] = useState('');
    const[cpf, setCpf] = useState('');
    return(
        <BodyComponent>
            <Box p={7}>
                <HStack mt={7} space={2}>
                    <Pressable onPress={()=>navigation.navigate('plans')}>
                        <Icon as={<AntDesign name="arrowleft" />} size={8} color='white'/>
                    </Pressable>
                    <Heading alignItems='center' color='white'>Dados de pagamento</Heading>
                </HStack>
                <Box alignItems={'center'} w='100%' h='75%' display='flex'>
                    <VStack mt={8} space={5} w="100%">
                        <Input 
                            w={{
                                base: "100%",
                                md: "25%"
                            }}
                            bg='white'
                            placeholderTextColor="gray.700"
                            placeholder="Titular do cartão"
                            value={cardHolder} 
                            onChangeText={(text) => setCardHolder(text)} 
                        />

                        <Input
                            w={{
                                base: "100%",
                                md: "25%"
                            }}
                            bg='white'
                            placeholderTextColor="gray.700" 
                            placeholder="Número do cartão" 
                            value={cardNumber} 
                            onChangeText={(text) => setCardNumber(text)}
                        />
                        <HStack maxW={'49%'} space='2'>
                            <Input

                                bg='white'
                                placeholderTextColor="gray.700"
                                placeholder="Data de validade"
                                value={validDate} 
                                onChangeText={(text) => setValidDate(text)}
                            />
                            <Input 

                                bg='white'
                                placeholderTextColor="gray.700"
                                placeholder="CVV"
                                value={cvv} 
                                onChangeText={(text) => setCvv(text)}
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
                            value={cpf} 
                            onChangeText={(text) => setCpf(text)}
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
        </BodyComponent>
    )
}