import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import {useFocusEffect} from '@react-navigation/native';

const FavoritesScreen = ({props,navigation,route}) =>{
    const availableMeals = useSelector(state => state.meals.FavoriteMeal);

    useFocusEffect(()=>{
        navigation.setOptions({
            headerLeft:() =><HeaderButtons HeaderButtonComponent={HeaderButton} > 
                <Item iconName="menu" title="Menu" onPress={()=>{navigation.toggleDrawer()}}></Item>
            </HeaderButtons>
        });
    });

    return(
        <MealList listData={availableMeals} navigation={navigation}/>
    );


};

const styles = StyleSheet.create({

});

export default FavoritesScreen;