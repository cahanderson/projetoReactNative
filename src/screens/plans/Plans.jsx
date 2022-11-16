import {Box, Center, Heading, HStack, Icon, Text, VStack} from 'native-base'
import { Pressable } from 'react-native';
import { Button } from "../../components/Button"; 
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react';
import { useEffect } from 'react';

export function Plans({navigation}){
    const [plan1, setPlan1] = useState(false);
    const [plan2, setPlan2] = useState(false);
    const [plan3, setPlan3] = useState(false);
    function handlePlans(){
        if(plan1==true){
            setPlan2(false)
            setPlan3(false)
        }else if(plan2==true){
            setPlan1(false)
            setPlan3(false)
        } else if(plan3==true) {
            setPlan1(false)
            setPlan2(false)
        }
    }
    useEffect(()=>{
        handlePlans()
    },[plan1,plan2,plan3])

    return(
        <Box flex={1} p={7} w='full' bg='gray.900'>
            <HStack mt={7} space={2}>
                <Pressable onPress={()=>navigation.navigate('new')}>
                    <Icon as={<AntDesign name="arrowleft" />} size={8} color='white'/>
                </Pressable>
                <Heading alignItems='center' color='white'>Escolha seu plano</Heading>
            </HStack>
            <Box  alignSelf={'center'} mt={7} justifyContent='center' alignItems={'center'} w='100%' h='70%' display='flex'>
                <VStack space={10} alignItems='center'>
                    <Pressable onPress={()=>setPlan1(!plan1)}>
                        <Center
                            p={2} 
                            bg="gray.600" 
                            _text={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                            name='Plano 1'
                            h="40" 
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
                    </Pressable>
                    <Pressable onPress={()=>setPlan2(!plan2)}>
                        <Center 
                            p={2} 
                            bg="gray.600" 
                            _text={{
                                color: 'white',
                                fontWeight: 'bold'
                            }} 
                            h="40" 
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
                    </Pressable>
                    <Pressable onPress={()=>setPlan3(!plan3)}>
                        <Center 
                            p={2} 
                            bg="gray.600" 
                            _text={{
                                color: 'white',
                                fontWeight: 'bold'
                            }} 
                            h="40" 
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