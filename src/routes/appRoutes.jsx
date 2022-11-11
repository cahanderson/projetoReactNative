// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Login} from '../screens/Login'
import {NewAccount} from '../screens/NewAccount'
import { SignIn } from '../screens/SignIn'

// const{Navigator, Screen} = createNativeStackNavigator() 
const { Navigator, Screen } = createBottomTabNavigator();
export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
            name='signIn'
            component={SignIn}
            />
            <Screen 
            name='login'
            component={Login}
            />
            <Screen 
            name='newAccount'
            component={NewAccount}
            />
        </Navigator>
    )
}