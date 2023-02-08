import {Box, HStack, Icon, Pressable,Text, VStack} from 'native-base'
import {useForm, Controller} from 'react-hook-form'
import { Button } from "../../components/Button"; 
import { Input } from '../../components/Input';
import { Heading } from 'native-base';
import { AntDesign } from '@expo/vector-icons'
import { Body as BodyComponent } from '../../components/Body';
// import { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validation = Yup.object({
    cardHolder: Yup.string().required('O nome do titular é obrigatório'),
    cardNumber: Yup.string()
        .required('O número do cartão é obrigatório')
        .matches(/^\d{16}$/, "O número do cartão deve ter 16 dígitos"),
    expiryDate: Yup.string()
        .required('A data de validade é obrigatória')
        .matches(/^\d{2}\/\d{2}$/, "A data de validade deve estar no formato MM/AA"),
    cvv: Yup.string()
        .required('O CVV é obrigatório')
        .matches(/^\d{3}$/, "O CVV deve ter 3 dígitos"),
    cpf: Yup.string()
        .required('O CPF é obrigatório')
        .matches(/^\d{11}$/, "O CPF deve ter 11 dígitos"),
});

export function PaymentPlan({navigation}){

    const {control, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(validation)
    })

    function handleSubmitPayment(){
        // props.usuario = data;
        navigation.navigate('plans')
        console.log(validation);

    }
    return(
        <BodyComponent
            title='Dados de pagamento'
        >
            <Box p={7}>
                <Box alignItems={'center'} w='100%' h='75%' display='flex'>
                    <VStack mt={8} space={5} w="100%">
                        <Controller
                            control={control}
                            name='cardHolder'
                            render={({field:{onChange}}) =>(
                                <Input 
                                    bg='white'
                                    placeholderTextColor="gray.700"
                                    placeholder="Titular do cartão"
                                    // value={cardHolder} 
                                    onChangeText={onChange}
                                    ErrorMessage={errors.cardHolder?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name='cardNumber'
                            render={({field:{onChange}}) =>(
                                <Input
                                    bg='white'
                                    placeholderTextColor="gray.700" 
                                    placeholder="Número do cartão" 
                                    // value={cardNumber} 
                                    onChangeText={onChange}
                                    ErrorMessage={errors.cardNumber?.message}
                                />
                            )}
                        />
                        <HStack maxW={'49%'} space='2'>
                            <Controller
                                control={control}
                                name='expiryDate'
                                render={({field:{onChange}}) =>(
                                    <Input
                                        bg='white'
                                        placeholderTextColor="gray.700"
                                        placeholder="Data de validade"
                                        // value={validDate} 
                                        onChangeText={onChange}
                                        ErrorMessage={errors.expiryDate?.message}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name='cvv'
                                render={({field:{onChange}}) =>(
                                    <Input 
                                        bg='white'
                                        placeholderTextColor="gray.700"
                                        placeholder="CVV"
                                        // value={cvv} 
                                        onChangeText={onChange}
                                        ErrorMessage={errors.cvv?.message}
                                    />
                                )}
                            />
                        </HStack>
                        <Controller
                            control={control}
                            name='cpf'
                            render={({field:{onChange}}) =>(
                                <Input
                                    bg='white'
                                    placeholderTextColor="gray.700" 
                                    placeholder="CPF" 
                                    // value={cpf} 
                                    onChangeText={onChange}
                                    ErrorMessage={errors.cpf?.message}
                                />
                            )}
                        />
                    </VStack>
                    <Box mt={10}>
                        <Text>
                            Texto explicativo sobre a cobrança do cartão
                        </Text>
                    </Box>
                </Box>
                <HStack  w="100%" mt={10} space={4} alignItems="center">
                    <Button
                        title="Concordar e assinar"
                        onPress={handleSubmit(handleSubmitPayment)}
                    />
                </HStack>
            </Box>
        </BodyComponent>
    )
}