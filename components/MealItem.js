import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.screen}>
            <TouchableOpacity style={styles.container} onPress={props.onSelected} style={{flex:1}}>
                <View>
                    <View style={{ ...styles.rowItem, ...styles.header }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                            <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.rowItem, ...styles.bottom }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complex.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: 200,
        width: '100%',
        backgroundColor: '#F0EBEB',
        marginBottom:5,
        borderRadius:15,
        overflow:'hidden',
    },
    rowItem: {
        flexDirection: 'row'
    },
    header: {
        height: '85%'
    },
    bottom: {
        paddingHorizontal:10,
        justifyContent: 'space-between',
        alignItems:'center',
        height:'15%',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent:'flex-end',
    },
    title:{
        fontFamily:'OpenSans-Bold',
        fontSize:20,
        color:'white',
        backgroundColor: 'rgba(0,0,0,0.3)',
        textAlign:'center',
        paddingHorizontal: 15,
        paddingVertical:5,
    }
});

export default MealItem;