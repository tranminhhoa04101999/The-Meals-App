import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import 'react-native-gesture-handler';
import Color from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';

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
    );
};

// filter screen
const Filter = createStackNavigator();
const filterNavigator = (props) => {
    return (
        <Filter.Navigator screenOptions={{
            headerStyle: {
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderBottomWidth: 1,
                backgroundColor: 'grey',

            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
        }} >
            <Filter.Screen name="filterMeal" component={FilterScreen} options={{ title: "filter Meal" }} />
        </Filter.Navigator>
    );
};

//drawer navigator


const Drawer = createDrawerNavigator();
const drawerNavigator = (props) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerType='back' overlayColor="transparent" drawerStyle={{ backgroundColor: 'white', width: 200 }} drawerContentOptions={{
                activeTintColor: 'white',
                activeBackgroundColor: 'grey',
                labelStyle: {fontFamily:'OpenSans-Bold'}
            }} >
                <Drawer.Screen name="mealDrawer" component={MealTabNavigation}
                    options={{
                        title: "Meals",
                    }} />
                <Drawer.Screen name="filterDrawer" component={filterNavigator}
                    options={{
                        title: "Filters",
                    }} >
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>

    );
};

export default drawerNavigator;

