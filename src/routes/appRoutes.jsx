import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from '../screens/account/Login'
import {NewAccount} from '../screens/account/NewAccount'
import { Products } from '../screens/products/Products';
import { SignIn } from '../screens/SignIn'
import { NewProducts } from '../screens/products/NewProducts'
import { Plans } from '../screens/plans/Plans';
import { PaymentPlan } from '../screens/plans/PaymentPlan';
import { ReadQrcode } from '../screens/login/ReadQrcode';
import { CodingAuthentication } from '../screens/login/CodingAuthentication';
import { Route } from '../screens/route';
import { NewRoute } from '../screens/route/form';
import { Invitation } from '../screens/team/qrCodeInvite';
import { Team } from '../screens/team';
import { CheckingConection } from '../screens/checkingConection';

const ProductsStack = createNativeStackNavigator();
const CreateAccountStack = createNativeStackNavigator();
const { Navigator, Screen } = createNativeStackNavigator();
export function StackRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown:false,
                tabBarLabelPosition: 'beside-icon',
                tabBarActiveTintColor: 'blue.700',
                tabBarInactiveTintColor: 'gray.300',
                tabBarStyle: {
                    position: 'absolute',
                    borderTopWidth: 0,
                    backgroundColor: 'white'
                  },
                  tabBarItemStyle: {
                    position: 'relative',
                    top: 0,
                  }
            }}
        >
            <Screen 
                name='home'
                component={Route}
            />
            <Screen 
                name='login'
                component={LoginTabStack}
            />
            <Screen 
                name='newAccount'
                component={CreateAccountTabStack}
            />
            <Screen 
                name='team'
                component={ProductsTabStack}
            />
        </Navigator>
    )
}
function ProductsTabStack() {
    return (
        <ProductsStack.Navigator screenOptions={{headerShown:false}}>
            <ProductsStack.Screen name="products" component={Products} />
            <ProductsStack.Screen name="newProducts" component={NewProducts} />
            <CreateAccountStack.Screen name="route" component={Route} />
            <CreateAccountStack.Screen name="newRoute" component={NewRoute} />
        </ProductsStack.Navigator>
    );
}
function CreateAccountTabStack() {
    return (
        <CreateAccountStack.Navigator screenOptions={{headerShown:false}}>
            <CreateAccountStack.Screen name="new" component={NewAccount} />
            <CreateAccountStack.Screen name="plans" component={Plans} />
            <CreateAccountStack.Screen name="paymentPlan" component={PaymentPlan} />
            <ProductsStack.Screen name="products" component={Products} />
        </CreateAccountStack.Navigator>
    );
}
function LoginTabStack() {
    return (
        <CreateAccountStack.Navigator screenOptions={{headerShown:false}}>
            <CreateAccountStack.Screen name="login" component={Login} />
            <CreateAccountStack.Screen name="qrcode" component={ReadQrcode} />
            <CreateAccountStack.Screen name="codingAuthenticate" component={CodingAuthentication} />
            <CreateAccountStack.Screen name="route" component={Route} />
        </CreateAccountStack.Navigator>
    );
}
function TeamTabStack() {
    return (
        <CreateAccountStack.Navigator screenOptions={{headerShown:false}}>
            <CreateAccountStack.Screen name="team" component={Team} />
            <CreateAccountStack.Screen name="invitation" component={Invitation} />
        </CreateAccountStack.Navigator>
    );
}