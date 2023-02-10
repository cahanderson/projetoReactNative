import NetInfo from '@react-native-community/netinfo';
import { Box, Text } from 'native-base';
import { WifiSlash } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import { Body as BodyComponent } from '../../components/Body';

export function CheckingConection(){
  const [isConnected, setIsConnected] = useState(true);

  useEffect(()=>{
      NetInfo.addEventListener(state => {
        console.log(state.isConnected)
        setIsConnected(state.isConnected);
  },[])
  })
  return (
    <BodyComponent>
        <Box justifyContent='center' alignItems='center'>
            {isConnected === true ?<WifiSlash size={100}  weight="light" /> : null}
            <Text fontSize='2xl' mt='5'>Você está off-line. Verifique sua conexão.</Text>
        </Box>
    </BodyComponent>
  );
};
