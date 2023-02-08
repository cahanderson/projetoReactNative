import {Box, VStack} from 'native-base'
import { Pressable } from 'react-native';
import { Button } from "../../components/Button"; 
import { useState } from 'react';
import {Card} from '../../components/Card'
import { Body as BodyComponent } from '../../components/Body';

export function Plans({navigation}){
    const [selectedCard, setSelectedCard] = useState(1);
    return(
        <BodyComponent
            title='Escolha seu plano'
        >
            <Box p={7}>
                <Box alignSelf={'center'} mt={10} justifyContent='center' alignItems={'center'} w='100%' h='70%' display='flex'>
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
                <VStack  w="100%" mt={20} space={4} alignItems="center">
                    <Button
                        title="Aceitar e continuar"
                        onPress={()=>navigation.navigate('paymentPlan')}
                    />
                </VStack>

            </Box>
        </BodyComponent>
    )
}