import {Box, Heading, HStack, Icon, VStack} from 'native-base'
import { Pressable } from 'react-native';
import { Button } from "../../components/Button"; 
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Card} from '../../components/Card'
import { Body as BodyComponent } from '../../components/Body';

export function Plans({navigation}){
    const [selectedCard, setSelectedCard] = useState(1);
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
                        <Pressable onPress={() => setSelectedCard(1)}>
                            <Card 
                                title='Plano solo R$39,90/mês'
                                body='Gerenciamento de entregas com criação de rotas'
                                colors ={selectedCard === 1 ? ['#0089E2','#141440'] : ['#303042','#303042']}
                                border ={selectedCard === 1 ? '2' : '0'}
                            />
                        </Pressable>
                        <Pressable onPress={() => setSelectedCard(2)}>
                            <Card 
                                title='Plano solo R$39,90/mês'
                                body='Gerenciamento de entregas com criação de rotas'
                                colors ={selectedCard === 2 ? ['#0089E2','#141440'] : ['#303042','#303042']}
                                border ={selectedCard === 2 ? '2' : '0'}
                                
                            />
                        </Pressable>
                        <Pressable onPress={() => setSelectedCard(3)}>
                            <Card 
                                title='Plano solo R$39,90/mês'
                                body='Gerenciamento de entregas com criação de rotas'
                                colors ={selectedCard === 3 ? ['#0089E2','#141440'] : ['#303042','#303042']}
                                border ={selectedCard === 3 ? '2' : '0'}
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