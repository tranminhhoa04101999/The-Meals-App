import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import 'react-native-gesture-handler';
import Color from '../constants/Colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const Stack = createStackNavigator();

const MealsNavigator = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator mode='modal'>
                <Stack.Screen name='Category' component={CategoriesScreen}
                    options={{
                        title: 'Categories',
                        headerStyle:{
                            backgroundColor: Color.pink,
                            borderBottomRightRadius:10,
                            borderBottomLeftRadius:10,
                        },
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        
                    }} />
                <Stack.Screen name='Category Meal' component={CategoryMealsScreen} />
                <Stack.Screen name='Meal Details' component={MealDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MealsNavigator;

