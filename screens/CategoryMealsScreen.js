import React from 'react';
import { View, Text } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import 'react-native-gesture-handler';
import Color from '../constants/Colors';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';
import {useEffect} from 'react'; 

const CategoryMealsScreen = ({ navigation, props, route }) => {
    const availableMeals = useSelector(state => state.meals.FilterMeal);

    const { catId } = route.params;
    const selectedCat = CATEGORIES.find(cat => cat.id === catId);

    const listMeal_CateID = availableMeals.filter(meal => meal.categoryID.indexOf(catId) >= 0);

    useEffect(() => {
        navigation.setOptions({
            title: selectedCat.title,
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: Color.pink,
            }
        });
    },[]);

    if(listMeal_CateID.length === 0){
        return <View>
            <Text>Kiểm tra bộ lọc</Text>
        </View>
    }

    return <MealList listData={listMeal_CateID} navigation={navigation}/>
};

export default CategoryMealsScreen;