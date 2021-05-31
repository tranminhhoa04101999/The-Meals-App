import React from 'react';
import {View,StyleSheet,Text,FlatList} from 'react-native';
import MealItem from '../components/MealItem';

const MealList = (props) => {
    const renderMealItem = (data) => {
        return (
            <MealItem title={data.item.title}
                onSelected={() => {
                    props.navigation.navigate('Meal Details', {
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
    return (
        <View style={styles.screen}>
            <FlatList data={props.listData} keyExtractor={props.listData.id} renderItem={renderMealItem} style={{ width: '100%' }}></FlatList>
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

export default MealList;