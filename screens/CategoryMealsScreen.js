import React from 'react';
import { View, StyleSheet, Text, Button, FlatList, SafeAreaView } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import 'react-native-gesture-handler';
import Color from '../constants/Colors';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = ({ navigation, props, route }) => {
    const { catId } = route.params;
    const selectedCat = CATEGORIES.find(cat => cat.id === catId);

    const listMeal_CateID = MEALS.filter(meal => meal.categoryID.indexOf(catId) >= 0);

    const renderMealItem = (data) => {
        return (
            <MealItem title={data.item.title}
                onSelected={() => {
                    navigation.navigate('Meal Details', {
                        mealId: data.item.id,
                    })
                }}
                duration={data.item.duration}
                complex={data.item.complex}
                affordability={data.item.affordability}
                image={data.item.imageUrl}
            />
        );
    };

    navigation.setOptions({
        title: selectedCat.title,
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: Color.pink,
        }
    });
    return (
        <View style={styles.screen}>
            <FlatList data={listMeal_CateID} keyExtractor={listMeal_CateID.id} renderItem={renderMealItem} style={{ width: '100%' }}></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    }
});

export default CategoryMealsScreen;