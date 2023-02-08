import {Box, Button} from 'native-base'
import { Body as BodyComponent } from '../../components/Body'
// import QRCodeScanner from 'react-native-qrcode-scanner';

export function ReadQrcode({navigation}){
    // const [link, setLink] = useState()
    // function handleLink(){
    //     Linking.openURL(link).catch(()=>{
    //         console.log('Houve um erro');
    //     })
    // }
    return(
        <BodyComponent>
            <Box p={7} align>
                <Box alignItems={'center'} justifyContent='center' w='100%' h='75%' display='flex'>
                    <Button onPress={()=>navigation.navigate('codingAuthenticate')}>Ir para proxima tela</Button>
                </Box>
                    {/* <QRCodeScanner 
                        onRead={(data)=>{setLink(data)}}
                        flashMode={RNCamera.Constants.flashMode.off}
                        topContent={
                            <Box><Text>{link}</Text></Box>
                        }
                        bottomContent={
                            <TouchableOpacity
                                onPress={()=>handleLink()}
                            >
                                <Text>Ir para o link</Text>
                            </TouchableOpacity>
                        }

                    /> */}
            </Box>
        </BodyComponent> 
    )
}