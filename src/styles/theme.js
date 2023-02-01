import { extendTheme } from "native-base";
const config = {
    useSystemColorMode: false,
    initialColorMode: 'dark',
    colors:{
        blue:{
            700:'#0089E2',
        }
    }
  };
  
export const theme = extendTheme({config})