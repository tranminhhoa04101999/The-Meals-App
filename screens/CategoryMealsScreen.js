import React, { useEffect,use } from 'react';
import { View, StyleSheet, Text, Button, FlatList, SafeAreaView } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import 'react-native-gesture-handler';
import Color from '../constants/Colors';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';
import {useFocusEffect} from '@react-navigation/native';

const CategoryMealsScreen = ({ navigation, props, route }) => {
    const availableMeals = useSelector(state => state.meals.meals);

    const { catId } = route.params;
    const selectedCat = CATEGORIES.find(cat => cat.id === catId);

    const listMeal_CateID = availableMeals.filter(meal => meal.categoryID.indexOf(catId) >= 0);

    useFocusEffect(() => {
        navigation.setOptions({
            title: selectedCat.title,
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: Color.pink,
            }
        });
    });

    return <MealList listData={listMeal_CateID} navigation={navigation}/>
};

const styles = StyleSheet.create({
    
});

export default CategoryMealsScreen;