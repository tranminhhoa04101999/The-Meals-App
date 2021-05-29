import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const Stack = createStackNavigator();

const MealsNavigator = (props)=> {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name= 'Category' component={CategoriesScreen}/>
                <Stack.Screen name= 'Category Meal' component={CategoryMealsScreen}/>
                <Stack.Screen name= 'Meal Details' component={MealDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MealsNavigator;

