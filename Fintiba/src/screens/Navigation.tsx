import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login';
import HomeScreen from './Home';
import ProfileScreen from './Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const NavigationStack = () => {

    return (

        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
                name="HomeScreen"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>

    );
}

export default NavigationStack;