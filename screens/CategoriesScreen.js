import React from 'react';
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Color from '../constants/Colors';
import { CATEGORIES } from '../data/Dummy-data';


const CategoriesScreen = props => {
    const renderGridItem = (data) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => props.navigation.navigate('Category Meal')}>
                <View>
                    <Text>{data.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    props.navigation.setOptions({
        title: 'sss',
        headerStyle: {
            backgroundColor : Color.pink,
        },
        headerTintColor: 'white'
    });
    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2}>

        </FlatList>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;