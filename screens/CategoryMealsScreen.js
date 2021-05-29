import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';


const CategoryMealsScreen = props =>{
    console.log(props);
    return(
        <View style = {styles.screen}>
            <Text> danh mục món ăn loại nào</Text>
            <Button title="Qua trang Meals Details" onPress={() => {props.navigation.navigate('Meal Details')}} />
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

export default CategoryMealsScreen;