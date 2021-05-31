import React from 'react';
import { View, StyleSheet, Text, Alert, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import 'react-native-gesture-handler';
import Color from '../constants/Colors';
import { useEffect } from 'react';
import IconMater from 'react-native-vector-icons/MaterialIcons';
import { Item ,HeaderButtons} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {useFocusEffect} from '@react-navigation/native';


const MealDetailsScreen = ({ props, navigation, route }) => {
    const { mealId } = route.params;
    const mealSelected = MEALS.find(meal => meal.id === mealId);

    useFocusEffect(() => {
        navigation.setOptions({
            title: mealSelected.title,
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: Color.pink,

            },
            headerRight: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='favorite' iconName='favorite' />
                    </HeaderButtons>
                );
            }

        });
    });
    

    return (
        <View style={styles.screen}>
            <Text>{mealSelected.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MealDetailsScreen;