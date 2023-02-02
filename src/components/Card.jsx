import { LinearGradient } from 'expo-linear-gradient';
import { Box, Center, Pressable, Text, VStack } from "native-base";

export function Card(props){
    return(
            <VStack space={10} alignItems='center'>
                <Center>
                    <LinearGradient
                        alignItems='center'
                        height={160}
                        padding={3}
                        colors={props.colors}
                        width="100%"
                        borderWidth= {props.border}
                        borderColor= 'white'
                        shadow={5}
                        borderRadius={10}
                    >
                        <VStack space={5} mt={4} p={3}>
                            <Text fontSize='2xl'>{props.title}</Text>
                            <Text fontSize='md'>{props.body}</Text>
                        </VStack>
                    </LinearGradient>
                </Center>
            </VStack>
    )
}