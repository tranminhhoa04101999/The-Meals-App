import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import 'react-native-gesture-handler';
import Color from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoriteScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();

const MealsNavigator = (props) => {
    return (
        <Stack.Navigator mode='modal'>
            <Stack.Screen name='Category' component={CategoriesScreen}
                options={{
                    title: 'Categories',
                    headerStyle: {
                        backgroundColor: Color.pink,
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10,
                    },
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                }} />
            <Stack.Screen name='Category Meal' component={CategoryMealsScreen} />
            <Stack.Screen name='Meal Details' component={MealDetailsScreen} />
        </Stack.Navigator>
    );
};

const Stack2 = createStackNavigator();
const FavoriteNavigator = (props) => {
    return (
        <Stack2.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Color.pink,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
        }}>
            <Stack2.Screen name='favorite' component={FavoriteScreen}
                options={{
                    title: 'Meals Favorite'
                }} />
            <Stack2.Screen name='Meal Details' component={MealDetailsScreen}
                options={{
                    title: 'Meal Favorite DetailsF'
                }} />
        </Stack2.Navigator>
    );
};

const Tab = createBottomTabNavigator();

const MealTabNavigation = props => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{ activeTintColor: Color.pink }}>
                <Tab.Screen name='tabHome' component={MealsNavigator}
                    options={{
                        tabBarIcon: ({ color }) => { return (<Icon name='restaurant' color={color} size={25}></Icon>); },
                        tabBarLabel: "Meals",
                    }}
                />
                <Tab.Screen name='tabFavorite' component={FavoriteNavigator}
                    options={{
                        tabBarIcon: ({ color }) => { return (<Icon name='favorite' color={color} size={25}></Icon>); },
                        tabBarLabel: "Favorite",
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MealTabNavigation;

