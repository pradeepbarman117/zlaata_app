import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home/HomeScreen';
import CustomNavigation from '../../components/common/CustomNavigation';
import AccountScreen from '../../screens/account/AccountScreen';
import CartScreen from '../../screens/cart/CartScreen';
import WishlistScreen from '../../screens/wishlist/WishlistScreen';



const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        tabBar={(props) => <CustomNavigation {...props} />}
        screenOptions={{
            headerShown: false,
        }}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
);

export default TabNavigator