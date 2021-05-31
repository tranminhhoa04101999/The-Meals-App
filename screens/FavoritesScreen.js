import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';

const FavoritesScreen = ({props,navigation,route}) =>{

    const listFar = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return(
        <MealList listData={listFar} navigation={navigation}/>
    );
};

const styles = StyleSheet.create({

});

export default FavoritesScreen;