import {Box, Center, Heading, HStack, Icon, Text, VStack} from 'native-base'
import { Pressable } from 'react-native';
import { Button } from "../../components/Button"; 
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Sidebar } from '../../components/Sidebar';
import { AntDesign } from '@expo/vector-icons';

export function Plans({navigation}){
    const [plan1, setPlan1] = useState(false);
    const [plan2, setPlan2] = useState(false);
    const [plan3, setPlan3] = useState(true);
    function handlePlan1(){
        setPlan1(true)
        setPlan2(false)
        setPlan3(false)
    }
    function handlePlan2(){
        setPlan1(false)
        setPlan2(true)
        setPlan3(false)
    }
    function handlePlan3(){
        setPlan1(false)
        setPlan2(false)
        setPlan3(true)
    }
    return(
        <Box flex={1} p={7} w='full' bg='gray.900'>
            <HStack mt={7} space='12%' mb='6'>
                <Pressable onPress={()=>navigation.navigate('new')}>
                    <Icon as={<AntDesign name="arrowleft" />} size={8} color='white'/>
                </Pressable>
            </HStack>
            <Heading alignItems='center' color='white'>Escolha seu plano</Heading>
            {/* Componentizar Sidebar com botão de voltar e Title */}
            <Box  alignSelf={'center'} mt={7} justifyContent='center' alignItems={'center'} w='100%' h='70%' display='flex'>
                <VStack space={10} alignItems='center'>
                    <Pressable onPress={()=>handlePlan1()}>
                        {plan1?
                            <Center>
                                <LinearGradient
                                    alignItems='center'
                                    height={160}
                                    padding={2}
                                    colors={['#0089E2','#0057e2']}
                                    width="95%" 
                                    shadow={5}
                                    borderRadius={5}
                                    // borderWidth={plan3? '1px':null}
                                    // borderWidth={plan3? '1' : null}
                                    // borderColor={'cyan.500'}
                                >
                                    <VStack space={7} mt={5}>
                                        <Text fontSize='2xl'>Plano solo R$39,90/mês</Text>
                                        <Text fontSize='md'>Gerenciamento de entregas com criação de rotas</Text>
                                    </VStack>
                                </LinearGradient>
                            </Center>
                            :
                            <Center
                                p={2} 
                                bg="gray.600" 
                                _text={{
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}
                                name='Plano 1'
                                height={160}
                                width="95%" 
                                shadow={5}
                                borderRadius={5}
                                borderWidth={plan1? '1px':null}
                                borderColor="cyan.500"
                            >
                                    <VStack space={7}>
                                        <Text fontSize='2xl'>Plano solo R$39,90/mês</Text>
                                        <Text fontSize='md'>Gerenciamento de entregas com criação de rotas</Text>
                                    </VStack>
                            </Center>
                        }
                    </Pressable>
                    <Pressable onPress={()=>handlePlan2()}>
                        {plan2?
                            <Center>
                                <LinearGradient
                                    height={160}
                                    padding={2}
                                    colors={['#0089E2','#0057e2']}
                                    width="95%" 
                                    shadow={5}
                                    borderRadius={5}
                                    // borderWidth={plan3? '1px':null}
                                    borderWidth={plan3? '1' : null}
                                    borderColor={'cyan.500'}
                                >
                                    <VStack space={7} mt={5}>
                                        <Text fontSize='2xl'>Plano solo R$39,90/mês</Text>
                                        <Text fontSize='md'>Gerenciamento de entregas com criação de rotas</Text>
                                    </VStack>
                                </LinearGradient>
                            </Center>
                        :
                            <Center 
                                p={2} 
                                bg="gray.600" 
                                _text={{
                                    color: 'white',
                                    fontWeight: 'bold'
                                }} 
                                height={160}
                                width="95%" 
                                shadow={5}
                                borderRadius={5}
                                borderWidth={plan2? '1px':null}
                                borderColor="cyan.500"
                            >
                                <VStack space={7}>
                                    <Text fontSize='2xl'>Plano solo R$39,90/mês</Text>
                                    <Text fontSize='md'>Gerenciamento de entregas com criação de rotas</Text>
                                </VStack>
                            </Center>
                        }
                    </Pressable>
                    <Pressable onPress={()=>handlePlan3()}>
                        {plan3 ?
                            <Center>
                                <LinearGradient
                                    height={160}
                                    padding={2}
                                    colors={['#0089E2','#0057e2']}
                                    width="95%" 
                                    shadow={5}
                                    borderRadius={5}
                                    // borderWidth={plan3? '1px':null}
                                    borderWidth={plan3? '1' : null}
                                    borderColor={'cyan.500'}
                                >
                                    <VStack space={7} mt={5}>
                                        <Text fontSize='2xl'>Plano solo R$39,90/mês</Text>
                                        <Text fontSize='md'>Gerenciamento de entregas com criação de rotas</Text>
                                    </VStack>
                                </LinearGradient>
                            </Center>
                            :
                            <Center
                                p={2} 
                                bg="gray.600" 
                                _text={{
                                    color: 'white',
                                    fontWeight: 'bold'
                                }} 
                                height={160}
                                width="95%" 
                                shadow={5}
                                borderRadius={5}
                                borderWidth={plan3? '1px':null}
                                borderColor="cyan.500"
                            >
                                <VStack space={7}>
                                    <Text fontSize='2xl'>Plano solo R$39,90/mês</Text>
                                    <Text fontSize='md'>Gerenciamento de entregas com criação de rotas</Text>
                                </VStack>
                            </Center>
                        }
                    </Pressable>
                </VStack>
            </Box>
            <VStack  w="100%" mt={10} space={4} alignItems="center">
                <Button
                    title="Aceitar e continuar"
                    onPress={()=>navigation.navigate('paymentPlan')}
                />
            </VStack>

        </Box>
    )
}