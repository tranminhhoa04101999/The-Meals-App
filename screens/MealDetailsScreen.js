import React from 'react';
import { View, StyleSheet, Text, Alert, Button, ScrollView, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';
import 'react-native-gesture-handler';
import Color from '../constants/Colors';
import { useEffect } from 'react';
import IconMater from 'react-native-vector-icons/MaterialIcons';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useFocusEffect } from '@react-navigation/native';

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    );
};


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
        <ScrollView>
            <Image source={{ uri: mealSelected.imageUrl }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.bottomText} >{mealSelected.duration}m</Text>
                <Text style={styles.bottomText} >{mealSelected.complex.toUpperCase()}</Text>
                <Text style={styles.bottomText} >{mealSelected.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title} >Ingredients</Text>
            {mealSelected.ingredients.map(ingredients => <ListItem key={ingredients}>{ingredients}</ListItem>)}
            <Text style={styles.title} >Steps</Text>
            {mealSelected.steps.map(steps => <ListItem key={steps} >{steps}</ListItem>)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding:5,
        borderBottomColor: 'grey',
        borderWidth: 1,
    },
    image:{
        width:'100%',
        height: 200,
    },
    bottomText:{
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
    },
    title:{
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        textAlign: 'center',
    },
    listItem:{
        marginTop: 5,
        marginBottom:5,
        marginHorizontal: 15,
        padding: 5,
        borderWidth:1,
        borderColor: 'grey'
    }
});

export default MealDetailsScreen;