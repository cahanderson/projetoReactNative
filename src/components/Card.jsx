import { LinearGradient } from 'expo-linear-gradient';
import { Box, Center, Pressable, Text, VStack } from "native-base";

export function Card({title, p}){
    return(
            <VStack space={10} alignItems='center'>
                <Center>
                    <LinearGradient
                        alignItems='center'
                        height={160}
                        padding={3}
                        colors={['#0089E2','#0099e2']}
                        width="100%" 
                        shadow={5}
                        borderRadius={10}
                    >
                        <VStack space={5} mt={4} p={3}>
                            <Text fontSize='2xl'>{title}</Text>
                            <Text fontSize='md'>{p}</Text>
                        </VStack>
                    </LinearGradient>
                </Center>
            </VStack>
    )
}