import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {MEALS} from '../data/dummy-data';
import 'react-native-gesture-handler';
import Color from '../constants/Colors';


const MealDetailsScreen = ({props,navigation,route}) =>{
    const {mealId} = route.params;
    const mealSelected = MEALS.find(meal => meal.id === mealId);

    navigation.setOptions({
        title: mealSelected.title,
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: Color.pink,
            
        }
    });

    return(
        <View style = {styles.screen}>
            <Text>{mealSelected.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default MealDetailsScreen;