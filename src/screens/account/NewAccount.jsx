const img = require('../../assets/logo-shape.png');
import { useState } from 'react';
import { Pressable, KeyboardAvoidingView } from 'react-native';
import {Heading, HStack, Box, Icon, Image,Stack,Text, VStack, ScrollView} from 'native-base'
import {useForm, Controller} from 'react-hook-form'
import {Eye, EyeSlash } from 'phosphor-react-native'
import { AntDesign } from '@expo/vector-icons'
import { Button } from "../../components/Button"; 
import { Input } from '../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const newAccountSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o email').email('E-mail inválido'),
    phone: yup.number(),
    password:yup.string().required('Informe sua senha').min(8,'A senha deve conter no mínimo 8 dígitos')
    
  });


export function NewAccount({navigation}){
    const {control, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(newAccountSchema)
    })
    const[show, setShow] = useState(false);

    function handleSignUp(data){
        navigation.navigate('plans')
        console.log(data)

    }

    return(
        <Box flex={1} bgColor='black' w='full' p={7} >
                <HStack mt={7} space='12%' mb='6'>
                    <Pressable onPress={()=>navigation.navigate('home')}>
                        <Icon as={<AntDesign name="arrowleft" />} size={8} color='white'/>
                    </Pressable>
                </HStack>
                {/* Componentizar Sidebar com botão de voltar e Title */}

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    display='flex' 
                    justifyContent='center' 
                    alignItems='center'
                >
                    <Box>
                        <Image source={img} alt="Alternate Text" size="xl"/>
                    </Box>
                    <Box my={10} display='flex' alignContent='flex-start'>
                        <Heading color='white'>Crie sua conta</Heading>
                    </Box>

                    <Stack space={5} w="100%" alignItems="center">
                        <Controller 
                            control={control}
                            name='name'
                            render={({field:{onChange} })=>(
                                <Input placeholder="Nome" onChangeText={onChange} ErrorMessage={errors.name?.message} />
                            )}
                        />
                        <Controller 
                            control={control}
                            name='phone'
                            render={({field:{onChange} })=>(
                                <Input placeholder="Telefone" onChangeText={onChange} ErrorMessage={errors.phone?.message} />
                            )}
                        />
                        <Controller
                            control={control}
                            name='email'
                            render={({field:{onChange} })=>(
                                <Input placeholder="E-mail" onChangeText={onChange} ErrorMessage={errors.email?.message}/>
                            )}
                        /> 
                        <Controller 
                            control={control}
                            name='password'
                            render={({field:{onChange} })=>(
                                <Input type={show ? "text" : "password"} onChangeText={onChange} ErrorMessage={errors.password?.message} placeholder="Senha" InputRightElement={
                                    <Pressable onPress={() => setShow(!show)}>
                                        <Icon as={show ? <Eye /> : <EyeSlash />} size={5} mr="2" color="muted.400" />
                                    </Pressable>
                                } 
                                />
                            )}
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
                            type='submit'
                            title="Aceitar e continuar"
                            onPress={handleSubmit(handleSignUp)} 
                        />
                    </VStack>
                </KeyboardAvoidingView>

            </Box>
    )
}