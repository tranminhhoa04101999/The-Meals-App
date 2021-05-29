import React from 'react';
import {View,StyleSheet,Text} from 'react-native';


const MealDetailsScreen = props =>{
    return(
        <View style = {styles.screen}>
            <Text> danh mục món ăn chi tiết</Text>
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