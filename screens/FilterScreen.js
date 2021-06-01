import React from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useFocusEffect } from '@react-navigation/native';
import { useState, useEffect, useCallback } from 'react';
import Color from '../constants/Colors';


const ViewSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.title}</Text>
            <Switch value={props.isThuocTinh} onValueChange={props.onValueChange}  // hàm này cần chuyển vào isGluten và onValueChange
                trackColor={{ true: Color.pink, false: 'grey' }}
                thumbColor={Color.pink}
            />
        </View>
    );
};

const FilterScreen = ({ props, navigation, route }) => {
    const [isGluten, setGluten] = useState(false);
    const [isVegetarian, setVegetarian] = useState(false);
    const [isLactoseFree, setLactoseFree] = useState(false);
    const [isVegan, setVegan] = useState(false);

    const saveThuocTinh = useCallback(() => {
        const mangThuoctinh = {
            GlutenFree: isGluten,
            VegetarianFree: isVegetarian,
            LactoseFree: isLactoseFree,
            VeganFree: isVegan,
        };
        console.log(mangThuoctinh);
    }, [isGluten, isVegan, isLactoseFree, isVegetarian]);

    useEffect(() => {
        navigation.setParams({save: saveThuocTinh});
    },[saveThuocTinh]);

    useFocusEffect(() => {
        navigation.setOptions({
            headerLeft: (() =>
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item iconName="menu" title="Menu" onPress={() => { navigation.toggleDrawer() }}></Item>
                </HeaderButtons>),
            headerRight: (() =>
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item iconName="save" title="Save" onPress={()=>{}}></Item>
                </HeaderButtons>)
        });
    });

    return (
        <View style={styles.screen}>
            <Text style={styles.title}> Available Filter / Restrictions</Text>
            <ViewSwitch title="Gluten-free" isThuocTinh={isGluten} onValueChange={value => setGluten(value)} />
            <ViewSwitch title="Vegetarian-free" isThuocTinh={isVegetarian} onValueChange={value => setVegetarian(value)} />
            <ViewSwitch title="LactoseFree-free" isThuocTinh={isLactoseFree} onValueChange={value => setLactoseFree(value)} />
            <ViewSwitch title="Vegan-free" isThuocTinh={isVegan} onValueChange={value => setVegan(value)} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        textAlign: 'center',
    },
    filterContainer: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    }
});

export default FilterScreen;