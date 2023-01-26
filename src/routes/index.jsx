import { NavigationContainer } from "@react-navigation/native";
import { Box } from "native-base";
import { StackRoutes } from "./appRoutes";

export function Routes(){
    return(
        <Box flex={1} bg='gray.900'>
            <NavigationContainer>
                <StackRoutes />
            </NavigationContainer>
        </Box>
    )
}