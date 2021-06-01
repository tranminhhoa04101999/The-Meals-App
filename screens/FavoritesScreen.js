import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {useFocusEffect} from '@react-navigation/native';

const FavoritesScreen = ({props,navigation,route}) =>{

    const listFar = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

    useFocusEffect(()=>{
        navigation.setOptions({
            headerLeft:() =><HeaderButtons HeaderButtonComponent={HeaderButton} > 
                <Item iconName="menu" title="Menu" onPress={()=>{navigation.toggleDrawer()}}></Item>
            </HeaderButtons>
        });
    });

    return(
        <MealList listData={listFar} navigation={navigation}/>
    );


};

const styles = StyleSheet.create({

});

export default FavoritesScreen;