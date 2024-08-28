import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import ProfileScreen from './Profile';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;