import React from 'react';
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';
import {useFocusEffect} from '@react-navigation/native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
    const renderGridItem = (data) => {
        return (
            <CategoryGrid title={data.item.title} color={data.item.color} onSelected={() => props.navigation.navigate('Category Meal',
                {
                    catId: data.item.id
                })} />
        );
    };
    useFocusEffect(()=>{
        props.navigation.setOptions({
            headerLeft:() =><HeaderButtons HeaderButtonComponent={HeaderButton} > 
                <Item iconName="menu" title="Menu" onPress={()=>{props.navigation.toggleDrawer()}}></Item>
            </HeaderButtons>
        });
    });

    return (
        <FlatList keyExtractor={
            (item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} >

        </FlatList>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default CategoriesScreen;