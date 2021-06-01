import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {useFocusEffect} from '@react-navigation/native';


const FilterScreen = ({props,navigation,route}) =>{

    useFocusEffect(()=>{
        navigation.setOptions({
            headerLeft:() =><HeaderButtons HeaderButtonComponent={HeaderButton} > 
                <Item iconName="menu" title="Menu" onPress={()=>{navigation.toggleDrawer()}}></Item>
            </HeaderButtons>
        });
    });
    return(
        <View style = {styles.screen}>
            <Text> danh mục món ăn lọc</Text>
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

export default FilterScreen;