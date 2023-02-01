import {Box, Center, Heading, HStack, Icon, Text, VStack} from 'native-base'
import { Pressable } from 'react-native';
import { Button } from "../../components/Button"; 
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import {Card} from '../../components/Card'
import { Body as BodyComponent } from '../../components/Body';

export function Plans({navigation}){
    const [plan1, setPlan1] = useState(false);
    const [plan2, setPlan2] = useState(false);
    const [plan3, setPlan3] = useState(true);
    return(
        <BodyComponent>
            <Box p={7}>
                <HStack mt={7} space='12%' mb='6'>
                    <Pressable onPress={()=>navigation.navigate('new')}>
                        <Icon as={<AntDesign name="arrowleft" />} size={8} color='white'/>
                    </Pressable>
                    <Heading alignItems='center' color='white'>Escolha seu plano</Heading>
                </HStack>
                <Box  alignSelf={'center'} mt={7} justifyContent='center' alignItems={'center'} w='100%' h='70%' display='flex'>
                    <VStack space={7} alignItems='center'>
                        <Pressable onPress={() => console.log("I'm Pressed")}>
                            <Card 
                                title='Plano solo R$39,90/mês'
                                p='Gerenciamento de entregas com criação de rotas'
                            />
                        </Pressable>
                        <Pressable onPress={() => console.log("I'm Pressed")}>
                            <Card 
                                title='Plano solo R$39,90/mês'
                                p='Gerenciamento de entregas com criação de rotas'
                            />
                        </Pressable>
                        <Pressable onPress={() => console.log("I'm Pressed")}>
                            <Card 
                                title='Plano solo R$39,90/mês'
                                p='Gerenciamento de entregas com criação de rotas'
                            />
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
        </BodyComponent>
    )
}