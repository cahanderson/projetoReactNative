import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Login} from '../screens/account/Login'
import {NewAccount} from '../screens/account/NewAccount'
import { Products } from '../screens/products/Products';
import { SignIn } from '../screens/SignIn'
import { NewProducts } from '../screens/products/NewProducts'
import { Plans } from '../screens/plans/Plans';
import { PaymentPlan } from '../screens/plans/PaymentPlan';
import { ReadQrcode } from '../screens/login/ReadQrcode';
import { CodingAuthentication } from '../screens/login/CodingAuthentication';

const ProductsStack = createNativeStackNavigator();
const CreateAccountStack = createNativeStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();
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
                    height:70,
                    borderTopWidth: 0,
                    backgroundColor: 'black'
                  },
                  tabBarItemStyle: {
                    position: 'relative',
                    top: 0,
                  }
            }}
        >
            <Screen 
            name='Home'
            component={SignIn}
            options={{}}
            
            />
            <Screen 
            name='login'
            component={LoginTabStack}
            options={{ tabBarButton: () => null }}
            />
            <Screen 
            name='newAccount'
            component={CreateAccountTabStack}
            options={{ tabBarButton: () => null }}
            />
            <Screen 
            name='products'
            component={ProductsTabStack}
            // options={{ tabBarButton: () => null }}
            />
        </Navigator>
    )
}
function ProductsTabStack() {
    return (
        <ProductsStack.Navigator screenOptions={{headerShown:false}}>
            <ProductsStack.Screen name="products" component={Products} />
            <ProductsStack.Screen name="newProducts" component={NewProducts} />
        </ProductsStack.Navigator>
    );
}
function CreateAccountTabStack() {
    return (
        <CreateAccountStack.Navigator screenOptions={{headerShown:false}}>
            <CreateAccountStack.Screen name="new" component={NewAccount} />
            <CreateAccountStack.Screen name="plans" component={Plans} />
            <CreateAccountStack.Screen name="paymentPlan" component={PaymentPlan} />
        </CreateAccountStack.Navigator>
    );
}
function LoginTabStack() {
    return (
        <CreateAccountStack.Navigator screenOptions={{headerShown:false}}>
            <CreateAccountStack.Screen name="login" component={Login} />
            <CreateAccountStack.Screen name="qrcode" component={ReadQrcode} />
            <CreateAccountStack.Screen name="codingAuthenticate" component={CodingAuthentication} />
        </CreateAccountStack.Navigator>
    );
}

//Exemplo para construção da tela
{/* <Navigator screenOptions={{
      headerShown: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarActiveTintColor: colors.yellow[500],
      tabBarInactiveTintColor: colors.gray[300],
      tabBarStyle: {
        position: 'absolute',
        height: sizes[22],
        borderTopWidth: 0,
        backgroundColor: colors.gray[800]
      },
      tabBarItemStyle: {
        position: 'relative',
        top: Platform.OS === 'android' ? -10 : 0
      }
    }}>
      <Screen 
        name="new"

        component={New}
        options={{
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={size} />,
          tabBarLabel: 'Novo bolão'
        }}
      /> */}