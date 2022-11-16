import {NativeBaseProvider,StatusBar} from 'native-base'
import { theme } from './src/styles/theme';
import {useFonts, Mina_400Regular,Mina_700Bold} from '@expo-google-fonts/mina'
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
// import { SignIn } from './src/screens/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({Mina_400Regular,Mina_700Bold});
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ?<Routes />: <Loading />}

    </NativeBaseProvider>
  );
}
