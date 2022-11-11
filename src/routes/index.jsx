import { NavigationContainer } from "@react-navigation/native";
import { Box } from "native-base";
import { Products } from "../screens/Products";
// import { NewProducts } from "../screens/NewProducts";
// import { NewAccount } from "../screens/NewAccount";
// import { SignIn } from "../screens/SignIn";
// import { StackRoutes } from "./appRoutes";

export function Routes(){
    return(
        <Box flex={1} bg='gray.900'>
            <NavigationContainer>
                <Products />
            </NavigationContainer>
        </Box>
    )
}